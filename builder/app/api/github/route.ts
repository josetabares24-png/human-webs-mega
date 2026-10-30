import { saveToGithub } from "../../../lib/server/github";
import { validateApproval } from "../../../lib/server/publish";
import {
  errorResponse,
  rateLimit,
  readJson,
  requireOperator,
} from "../../../lib/server/security";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function POST(request: Request): Promise<Response> {
  try {
    requireOperator(request);
    rateLimit("github", 3);
    const approval = await validateApproval(await readJson(request));
    return Response.json(await saveToGithub(approval), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return errorResponse(error);
  }
}
