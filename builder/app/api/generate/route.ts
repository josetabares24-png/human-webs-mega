import { z } from "zod";
import { siteSchema } from "../../../lib/schema";
import { generateWithAi } from "../../../lib/server/ai";
import {
  ApiError,
  errorResponse,
  rateLimit,
  readJson,
  requireOperator,
} from "../../../lib/server/security";
export const runtime = "nodejs";
export const maxDuration = 60;
const requestSchema = z
  .object({ site: siteSchema, instruction: z.string().trim().min(1).max(3000) })
  .strict();
export async function POST(request: Request): Promise<Response> {
  try {
    requireOperator(request);
    rateLimit("generate");
    const parsed = requestSchema.safeParse(await readJson(request));
    if (!parsed.success)
      throw new ApiError(400, "Briefing o instrucción inválidos.");
    const started = performance.now();
    const site = await generateWithAi(
      parsed.data.site,
      parsed.data.instruction,
    );
    return Response.json(
      { site, source: "ai", durationMs: performance.now() - started },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return errorResponse(error);
  }
}
