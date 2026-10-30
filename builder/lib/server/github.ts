import type { Approval } from "./publish";
import { publicFiles } from "../export";
import { ApiError } from "./security";

// Dedicated private repositories only. New revisions get independent branches;
// existing main branches are never overwritten or merged by the builder.
export async function saveToGithub(
  approval: Approval,
  fetcher: typeof fetch = fetch,
): Promise<{ url: string; branch: string }> {
  const token = process.env.HUMAN_WEBS_GITHUB_TOKEN;
  if (!token)
    throw new ApiError(
      503,
      "GitHub no está configurado. Descarga el ZIP como alternativa.",
    );
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
    "X-GitHub-Api-Version": "2026-03-10",
  };
  const api = async (
    path: string,
    method = "GET",
    body?: unknown,
    allow404 = false,
  ) => {
    const response = await fetcher(`https://api.github.com${path}`, {
      method,
      headers,
      signal: AbortSignal.timeout(15000),
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    if (allow404 && response.status === 404) return null;
    if (!response.ok)
      throw new ApiError(
        502,
        `GitHub respondió ${response.status}. Revisa el repositorio antes de reintentar.`,
      );
    return response.json();
  };
  const user = await api("/user");
  if (typeof user.login !== "string" || !/^[a-zA-Z0-9-]+$/.test(user.login))
    throw new ApiError(502, "Cuenta GitHub no válida.");
  const name = `human-webs-${approval.projectId}`;
  const description = `Managed by Human Webs project ${approval.projectId}`;
  const path = `/repos/${user.login}/${name}`;
  let repo = await api(path, "GET", undefined, true);
  if (!repo)
    repo = await api("/user/repos", "POST", {
      name,
      description,
      private: true,
      auto_init: true,
    });
  if (
    repo.private !== true ||
    repo.description !== description ||
    repo.owner?.login !== user.login
  )
    throw new ApiError(
      409,
      "El repositorio existente no pertenece a este proyecto privado.",
    );
  const branch = `human-webs/${approval.versionId}`;
  const existing = await api(
    `${path}/git/ref/heads/${branch}`,
    "GET",
    undefined,
    true,
  );
  const message = `Human Webs: reviewed version ${approval.versionId} sha256:${approval.digest}`;
  if (existing) {
    const saved = await api(`${path}/git/commits/${existing.object.sha}`);
    if (saved.message !== message)
      throw new ApiError(
        409,
        "La rama existente corresponde a otro contenido. Crea una nueva versión antes de guardar.",
      );
    return {
      url: `https://github.com/${user.login}/${name}/tree/${branch}`,
      branch,
    };
  }
  const head = await api(
    `${path}/git/ref/heads/${encodeURIComponent(repo.default_branch || "main")}`,
  );
  const parent = head.object?.sha;
  if (typeof parent !== "string")
    throw new ApiError(
      502,
      "GitHub todavía no ha inicializado el repositorio. Reintenta cuando esté listo.",
    );
  const tree = await api(`${path}/git/trees`, "POST", {
    tree: Object.entries(publicFiles(approval.site)).map(([file, content]) => ({
      path: file,
      mode: "100644",
      type: "blob",
      content,
    })),
  });
  const commit = await api(`${path}/git/commits`, "POST", {
    message,
    tree: tree.sha,
    parents: [parent],
  });
  await api(`${path}/git/refs`, "POST", {
    ref: `refs/heads/${branch}`,
    sha: commit.sha,
  });
  return {
    url: `https://github.com/${user.login}/${name}/tree/${branch}`,
    branch,
  };
}
