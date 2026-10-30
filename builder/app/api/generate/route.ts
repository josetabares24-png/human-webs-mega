import { z } from "zod";
import { pageSchema, siteSchema } from "../../../lib/schema";
import { editPageWithAi, generateWithAi } from "../../../lib/server/ai";
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
  .object({
    site: siteSchema,
    instruction: z.string().trim().min(1).max(3000),
    mode: z.enum(["generate", "edit"]).default("generate"),
    pageSlug: pageSchema.shape.slug.optional(),
  })
  .strict();
export async function POST(request: Request): Promise<Response> {
  try {
    requireOperator(request);
    rateLimit("generate");
    const parsed = requestSchema.safeParse(await readJson(request));
    if (!parsed.success)
      throw new ApiError(400, "Briefing o instrucción inválidos.");
    const started = performance.now();
    const { site: current, instruction, mode, pageSlug } = parsed.data;
    if (
      mode === "edit" &&
      (!pageSlug || !current.pages.some((page) => page.slug === pageSlug))
    )
      throw new ApiError(400, "Selecciona una página válida para editar.");
    const site =
      mode === "edit"
        ? await editPageWithAi(current, instruction, pageSlug!)
        : await generateWithAi(current, instruction);
    return Response.json(
      { site, source: "ai", durationMs: performance.now() - started },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return errorResponse(error);
  }
}
