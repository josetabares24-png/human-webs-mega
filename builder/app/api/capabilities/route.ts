export const dynamic = "force-dynamic";
export function GET(): Response {
  const operator = Boolean(
    process.env.HUMAN_WEBS_OPERATOR_TOKEN &&
    process.env.HUMAN_WEBS_OPERATOR_TOKEN.length >= 32,
  );
  return Response.json(
    {
      ai:
        operator &&
        Boolean(
          (process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN) &&
          process.env.AI_GATEWAY_MODEL,
        ),
      publish: operator && Boolean(process.env.HUMAN_WEBS_VERCEL_TOKEN),
      github: operator && Boolean(process.env.HUMAN_WEBS_GITHUB_TOKEN),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
