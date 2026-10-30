import {
  createDeployment,
  deploymentStatus,
  validateApproval,
} from "../../../lib/server/publish";
import {
  errorResponse,
  rateLimit,
  readJson,
  requireOperator,
} from "../../../lib/server/security";
export const runtime = "nodejs";
export async function POST(request: Request): Promise<Response> {
  try {
    requireOperator(request);
    rateLimit("publish", 3);
    const approval = await validateApproval(await readJson(request));
    return Response.json(await createDeployment(approval), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return errorResponse(error);
  }
}
export async function GET(request: Request): Promise<Response> {
  try {
    requireOperator(request);
    const url = new URL(request.url);
    return Response.json(
      await deploymentStatus(
        url.searchParams.get("id") || "",
        url.searchParams.get("projectId") || "",
        url.searchParams.get("digest") || "",
      ),
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return errorResponse(error);
  }
}
