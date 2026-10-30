import { timingSafeEqual } from "node:crypto";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function requireOperator(request: Request): void {
  const secret = process.env.HUMAN_WEBS_OPERATOR_TOKEN;
  if (!secret || secret.length < 32)
    throw new ApiError(
      503,
      "Configura una clave de operador de al menos 32 caracteres en el servidor.",
    );
  const actual =
    request.headers.get("authorization")?.replace(/^Bearer /, "") || "";
  const a = Buffer.from(actual);
  const b = Buffer.from(secret);
  if (a.length !== b.length || !timingSafeEqual(a, b))
    throw new ApiError(401, "La clave de operador no es válida.");
  const origin = request.headers.get("origin");
  const allowed =
    process.env.HUMAN_WEBS_APP_ORIGIN || new URL(request.url).origin;
  const sameOriginGet =
    request.method === "GET" &&
    request.headers.get("sec-fetch-site") === "same-origin";
  if (origin ? origin !== allowed : !sameOriginGet)
    throw new ApiError(403, "Origen de solicitud no permitido.");
}
const recent = new Map<string, { start: number; count: number }>();
export function rateLimit(action: string, limit = 6): void {
  const now = Date.now();
  const bucket = recent.get(action);
  if (!bucket || now - bucket.start > 60000) {
    recent.set(action, { start: now, count: 1 });
    return;
  }
  if (bucket.count >= limit)
    throw new ApiError(429, "Espera un minuto antes de volver a intentarlo.");
  bucket.count++;
}
export async function readJson(
  request: Request,
  maxBytes = 100000,
): Promise<unknown> {
  const length = Number(request.headers.get("content-length"));
  if (length > maxBytes) throw new ApiError(413, "Solicitud demasiado grande.");
  const reader = request.body?.getReader();
  if (!reader) throw new ApiError(400, "Faltan los datos de la solicitud.");
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel();
      throw new ApiError(413, "Solicitud demasiado grande.");
    }
    chunks.push(value);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new ApiError(400, "JSON inválido.");
  }
}
export function errorResponse(error: unknown): Response {
  return Response.json(
    {
      error:
        error instanceof ApiError
          ? error.message
          : "No se pudo completar la operación. Revisa la configuración o inténtalo más tarde.",
    },
    {
      status: error instanceof ApiError ? error.status : 502,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
