import { z } from "zod";
import { siteSchema } from "../schema";
import { publicFiles, siteDigest } from "../export";
import { checkQuality } from "../quality";
import { ApiError } from "./security";

export const approvalSchema = z
  .object({
    projectId: z.string().uuid(),
    versionId: z.string().uuid(),
    site: siteSchema,
    digest: z.string().regex(/^[a-f0-9]{64}$/),
    approved: z.literal(true),
    reviewedContent: z.literal(true),
  })
  .strict();
export type Approval = z.infer<typeof approvalSchema>;
export async function validateApproval(input: unknown): Promise<Approval> {
  const parsed = approvalSchema.safeParse(input);
  if (!parsed.success)
    throw new ApiError(
      400,
      "Hace falta aprobar explícitamente esta versión y revisar el contenido.",
    );
  const approval = parsed.data;
  if ((await siteDigest(approval.site)) !== approval.digest)
    throw new ApiError(
      409,
      "La versión cambió después de la revisión. Revisa de nuevo antes de publicar.",
    );
  if (checkQuality(approval.site).some((f) => f.level === "blocker"))
    throw new ApiError(
      422,
      "Completa la identidad y el contacto antes de publicar.",
    );
  return approval;
}
export function deploymentName(projectId: string): string {
  return `human-webs-${projectId}`;
}
export async function createDeployment(
  approval: Approval,
  fetcher: typeof fetch = fetch,
): Promise<{ id: string; state: string }> {
  const token = process.env.HUMAN_WEBS_VERCEL_TOKEN;
  if (!token)
    throw new ApiError(
      503,
      "Vercel no está configurado. Descarga el ZIP y conserva el proyecto.",
    );
  const team = process.env.HUMAN_WEBS_VERCEL_TEAM_ID;
  const response = await fetcher(
    `https://api.vercel.com/v13/deployments${team ? `?teamId=${encodeURIComponent(team)}` : ""}`,
    {
      method: "POST",
      signal: AbortSignal.timeout(20000),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: deploymentName(approval.projectId),
        target: "production",
        projectSettings: {
          framework: null,
          buildCommand: null,
          outputDirectory: null,
        },
        files: Object.entries(publicFiles(approval.site)).map(
          ([file, data]) => ({ file, data, encoding: "utf-8" }),
        ),
        meta: {
          humanWebsProject: approval.projectId,
          humanWebsVersion: approval.versionId,
          humanWebsDigest: approval.digest,
        },
      }),
    },
  );
  if (!response.ok)
    throw new ApiError(
      502,
      `Vercel respondió ${response.status}. No se ha verificado ninguna publicación; revisa Vercel antes de reintentar.`,
    );
  const data = await response.json();
  if (typeof data.id !== "string" || !/^dpl_[a-zA-Z0-9]+$/.test(data.id))
    throw new ApiError(502, "Respuesta de Vercel inválida.");
  return { id: data.id, state: data.readyState || "QUEUED" };
}
export async function deploymentStatus(
  id: string,
  projectId: string,
  digest: string,
  fetcher: typeof fetch = fetch,
) {
  if (
    !/^dpl_[a-zA-Z0-9]+$/.test(id) ||
    !z.string().uuid().safeParse(projectId).success ||
    !/^[a-f0-9]{64}$/.test(digest)
  )
    throw new ApiError(400, "Identificador inválido.");
  const token = process.env.HUMAN_WEBS_VERCEL_TOKEN;
  if (!token) throw new ApiError(503, "Vercel no configurado.");
  const team = process.env.HUMAN_WEBS_VERCEL_TEAM_ID;
  const response = await fetcher(
    `https://api.vercel.com/v13/deployments/${encodeURIComponent(id)}${team ? `?teamId=${encodeURIComponent(team)}` : ""}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    },
  );
  if (!response.ok)
    throw new ApiError(
      502,
      `No se pudo verificar el despliegue (${response.status}).`,
    );
  const data = await response.json();
  if (
    data.name !== deploymentName(projectId) ||
    data.meta?.humanWebsDigest !== digest
  )
    throw new ApiError(
      403,
      "El despliegue no corresponde a este proyecto y versión.",
    );
  const state = String(data.readyState || data.status || "UNKNOWN");
  const url =
    typeof data.url === "string" &&
    /^[a-zA-Z0-9.-]+\.vercel\.app$/.test(data.url)
      ? `https://${data.url}`
      : null;
  return { id, state, url: state === "READY" ? url : null };
}
