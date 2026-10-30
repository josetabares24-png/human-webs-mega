import assert from "node:assert/strict";
import test from "node:test";
import { unzipSync, strFromU8 } from "fflate";
import {
  createSite,
  editLocally,
  interpretBrief,
  updateSiteBrief,
} from "../lib/engine";
import { createHash } from "node:crypto";
import { previewScript } from "../lib/preview-script";
import { generateWithAi } from "../lib/server/ai";
import { saveToGithub } from "../lib/server/github";
import { briefSchema, initialBrief, siteSchema } from "../lib/schema";
import { checkQuality } from "../lib/quality";
import { exportFiles, exportZip, publicFiles, siteDigest } from "../lib/export";
import {
  addVersion,
  newProject,
  readProjects,
  saveProjects,
  STORAGE_KEY,
} from "../lib/projects";
import { contactHref, renderPage } from "../lib/render";
import { mergeAiCopy } from "../lib/server/ai";
import {
  validateApproval,
  createDeployment,
  deploymentStatus,
} from "../lib/server/publish";
import { readJson, requireOperator } from "../lib/server/security";

export const confirmed = briefSchema.parse({
  name: "Oficio",
  sector: "Barbería",
  city: "Lisboa",
  description:
    "Corte a tijera y arreglo de barba. Atención por cita en Lisboa.",
  contact: "ola@example.com",
  style: "minimal",
  services: "Corte | 25 € | Tijera\nBarba | 15 €",
  story: "Cortes a tijera y barba con cita.",
  address: "Rua de exemplo 12",
  hours: "Martes a sábado, 10–19 h",
});
const site = createSite(confirmed);
test("interprets the example without inventing identity or contact", () => {
  const b = interpretBrief(
    "Necesito una web para una barbería premium en Lisboa",
    initialBrief,
  );
  assert.equal(b.sector, "Barbería");
  assert.equal(b.city, "Lisboa");
  assert.equal(b.style, "minimal");
  assert.equal(b.name, "");
  assert.equal(b.contact, "");
});
test("rejects unknown fields, executable styles, traversal, duplicate routes and unsafe endpoints", () => {
  for (const invalid of [
    { ...site, code: "<script>" },
    { ...site, brief: { ...confirmed, style: "x; color:red" } },
    { ...site, pages: [{ ...site.pages[0], slug: "../index" }, site.pages[1]] },
    { ...site, pages: [site.pages[0], site.pages[0], site.pages[3]] },
  ])
    assert.equal(siteSchema.safeParse(invalid).success, false);
  for (const formEndpoint of [
    "javascript:alert(1)",
    "http://example.com",
    "https://localhost/x",
    "https://user:password@example.com",
  ])
    assert.equal(
      briefSchema.safeParse({ ...confirmed, formEndpoint }).success,
      false,
    );
});
test("all bounded text inputs can reach their maximum without breaking generation", () => {
  const maxSite = createSite({
    ...confirmed,
    name: "n".repeat(100),
    city: "c".repeat(100),
    sector: "s".repeat(100),
    description: "d".repeat(600),
  });
  assert.equal(maxSite.pages.length, 4);
});
test("local changes are explicit, reversible and do not pretend to understand unsupported requests", () => {
  assert.equal(
    editLocally(site, "Hazlo más elegante").site.brief.style,
    "minimal",
  );
  assert.equal(editLocally(site, "Hazlo oscuro").site.brief.style, "bold");
  assert.equal(
    editLocally(site, "Titular: Corte con oficio.").site.headline,
    "Corte con oficio.",
  );
  assert.equal(
    editLocally(site, "Titular: Un corte elegante.").site.headline,
    "Un corte elegante.",
  );
  assert.equal(
    editLocally(site, "Contacto: editorial@example.com").site.brief.contact,
    "editorial@example.com",
  );
  assert.equal(editLocally(site, "Añade una tienda con pagos").changed, false);
  assert.equal(site.headline, "Barbería en Lisboa.");
});
test("confirmed data changes update default copy and SEO while preserving edited headlines", () => {
  const changed = updateSiteBrief(site, {
    ...confirmed,
    name: "Nuevo",
    city: "Porto",
    sector: "Restaurante",
  });
  assert.equal(changed.headline, "Restaurante en Porto.");
  assert.match(changed.pages[0].title, /Nuevo en Porto/);
  assert.equal(changed.pages[1].slug, "carta");
  assert.equal(
    updateSiteBrief(editLocally(site, "Titular: Mi frase propia.").site, {
      ...confirmed,
      name: "Nuevo",
    }).headline,
    "Mi frase propia.",
  );
});
test("only the trusted preview navigation script has a CSP permission; exports have no executable script", () => {
  const hash = createHash("sha256").update(previewScript).digest("base64");
  assert.ok(renderPage(site, "index", "preview").includes(`sha256-${hash}`));
  assert.ok(
    renderPage(site, "index", "preview").includes(
      `<script>${previewScript}</script>`,
    ),
  );
  assert.ok(!renderPage(site).includes("<script>"));
});
test("AI HTTP adapter validates the response and rejects malformed output", async () => {
  const oldKey = process.env.AI_GATEWAY_API_KEY;
  const oldModel = process.env.AI_GATEWAY_MODEL;
  process.env.AI_GATEWAY_API_KEY = "test-only";
  process.env.AI_GATEWAY_MODEL = "test/model";
  const mock: typeof fetch = async (url, options) => {
    assert.equal(url, "https://ai-gateway.vercel.sh/v1/chat/completions");
    const request = JSON.parse(String(options?.body));
    assert.equal(request.response_format.type, "json_schema");
    return Response.json({
      choices: [
        {
          message: {
            content: JSON.stringify({
              headline: "Oficio en Lisboa.",
              introduction: site.introduction,
              style: "minimal",
              pages: site.pages,
            }),
          },
        },
      ],
    });
  };
  assert.equal(
    (await generateWithAi(site, "Más breve", mock)).headline,
    "Oficio en Lisboa.",
  );
  await assert.rejects(
    generateWithAi(site, "Más breve", async () =>
      Response.json({ choices: [{ message: { content: "{bad json" } }] }),
    ),
    /esquema/,
  );
  if (oldKey === undefined) delete process.env.AI_GATEWAY_API_KEY;
  else process.env.AI_GATEWAY_API_KEY = oldKey;
  if (oldModel === undefined) delete process.env.AI_GATEWAY_MODEL;
  else process.env.AI_GATEWAY_MODEL = oldModel;
});
test("ZIP exports every route with valid local links and no private files in deployment payload", () => {
  const files = exportFiles(site);
  const zip = unzipSync(exportZip(site));
  assert.deepEqual(Object.keys(zip).sort(), Object.keys(files).sort());
  for (const page of site.pages) {
    const html = strFromU8(zip[`${page.slug}.html`]);
    for (const [, href] of html.matchAll(/href="([^"#]+\.html)"/g))
      assert.ok(files[href], href);
    assert.equal((html.match(/<h1>/g) || []).length, 1);
    assert.match(html, /name="description"/);
    assert.ok(!html.includes("<script>"));
  }
  assert.ok(!publicFiles(site)["human-webs.json"]);
  assert.ok(!publicFiles(site)["quality.json"]);
});
test("domain produces canonical and sitemap with escaped XML", () => {
  const withDomain = createSite({
    ...confirmed,
    siteUrl: "https://example.com",
  });
  const files = exportFiles(withDomain);
  assert.match(files["sitemap.xml"], /https:\/\/example.com\/servicios.html/);
  assert.match(files["index.html"], /rel="canonical"/);
  assert.ok(files["robots.txt"]);
});
test("configured form posts to real endpoint and preview disables submission", () => {
  const form = createSite({
    ...confirmed,
    formEndpoint: "https://forms.example.com/receive",
  });
  assert.match(renderPage(form, "visita"), /method="post"/);
  assert.match(renderPage(form, "visita"), /name="consent"/);
  assert.match(renderPage(form, "visita", "preview"), /fieldset disabled/);
  assert.ok(!renderPage(site, "visita").includes("<form"));
});
test("projects survive serialization and restoring creates a new version", () => {
  const values = new Map<string, string>();
  const storage = {
    getItem: (key: string) => values.get(key) || null,
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
  };
  const project = newProject(site, "local", 1);
  const changed = addVersion(
    project,
    editLocally(site, "Hazlo oscuro").site,
    "Oscuro",
    "local",
  );
  const restored = addVersion(
    changed,
    project.versions[0].site,
    "Restaurar",
    "restore",
  );
  saveProjects(storage, [restored]);
  assert.deepEqual(readProjects(storage), [restored]);
  assert.equal(restored.versions.length, 3);
  values.set(STORAGE_KEY, "corrupt");
  assert.throws(() => readProjects(storage));
});
test("history is bounded to 50 and projects remain independent", () => {
  let first = newProject(site, "local", 1);
  const second = newProject(
    createSite({ ...confirmed, name: "Segundo" }),
    "local",
    1,
  );
  for (let i = 0; i < 55; i++)
    first = addVersion(first, site, `Edit ${i}`, "manual");
  assert.equal(first.versions.length, 50);
  assert.equal(second.versions[0].site.brief.name, "Segundo");
});
test("quality blocks missing business facts and invalid contact", () => {
  assert.ok(
    checkQuality(createSite(initialBrief)).some((f) => f.level === "blocker"),
  );
  assert.ok(!checkQuality(site).some((f) => f.level === "blocker"));
  assert.equal(contactHref("javascript:alert(1)"), null);
  assert.equal(contactHref("123-()"), null);
});
test("AI copy cannot modify contact, endpoints or route inventory", () => {
  const copy = {
    headline: "Corte con oficio.",
    introduction: "Atención con cita.",
    style: "editorial",
    pages: site.pages,
  };
  assert.equal(mergeAiCopy(site, copy).brief.contact, confirmed.contact);
  assert.throws(() =>
    mergeAiCopy(site, { ...copy, brief: { contact: "attacker@example.com" } }),
  );
  assert.throws(() =>
    mergeAiCopy(site, { ...copy, pages: site.pages.slice(0, 2) }),
  );
});
test("publication binds approval to exact content and checks blockers", async () => {
  const project = newProject(site, "local", 1);
  const input = {
    projectId: project.id,
    versionId: project.versions[0].id,
    site,
    digest: await siteDigest(site),
    approved: true,
    reviewedContent: true,
  };
  assert.equal((await validateApproval(input)).projectId, project.id);
  await assert.rejects(validateApproval({ ...input, approved: false }));
  await assert.rejects(
    validateApproval({ ...input, site: { ...site, headline: "Cambiado" } }),
    /versión cambió/,
  );
  const empty = createSite(initialBrief);
  await assert.rejects(
    validateApproval({
      ...input,
      site: empty,
      digest: await siteDigest(empty),
    }),
    /identidad/,
  );
});
test("operator endpoints require configured secret and exact same origin", () => {
  const old = process.env.HUMAN_WEBS_OPERATOR_TOKEN;
  process.env.HUMAN_WEBS_OPERATOR_TOKEN = "a".repeat(40);
  const request = (origin: string, authorization: string) =>
    new Request("http://localhost:3000/api/generate", {
      headers: { origin, authorization },
    });
  assert.throws(() =>
    requireOperator(request("http://localhost:3000", "Bearer wrong")),
  );
  assert.throws(() =>
    requireOperator(
      request("https://evil.example.com", `Bearer ${"a".repeat(40)}`),
    ),
  );
  requireOperator(request("http://localhost:3000", `Bearer ${"a".repeat(40)}`));
  if (old === undefined) delete process.env.HUMAN_WEBS_OPERATOR_TOKEN;
  else process.env.HUMAN_WEBS_OPERATOR_TOKEN = old;
});
test("streaming JSON body limit is enforced without trusting content-length", async () => {
  await assert.rejects(
    readJson(
      new Request("http://localhost", {
        method: "POST",
        body: "a".repeat(200),
      }),
      100,
    ),
    /grande/,
  );
});
test("Vercel integration sends only reviewed public files and reports READY only from status API", async () => {
  const old = process.env.HUMAN_WEBS_VERCEL_TOKEN;
  process.env.HUMAN_WEBS_VERCEL_TOKEN = "test-only";
  const project = newProject(site, "local", 1);
  const digest = await siteDigest(site);
  const approval = await validateApproval({
    projectId: project.id,
    versionId: project.versions[0].id,
    site,
    digest,
    approved: true,
    reviewedContent: true,
  });
  const createFetch: typeof fetch = async (url, options) => {
    assert.match(String(url), /api.vercel.com\/v13\/deployments/);
    const body = JSON.parse(String(options?.body));
    assert.ok(
      body.files.some((f: { file: string }) => f.file === "index.html"),
    );
    assert.ok(
      !body.files.some((f: { file: string }) => f.file === "human-webs.json"),
    );
    return Response.json({ id: "dpl_test123", readyState: "BUILDING" });
  };
  assert.equal(
    (await createDeployment(approval, createFetch)).state,
    "BUILDING",
  );
  for (const readyState of ["BUILDING", "READY", "ERROR"]) {
    const mock: typeof fetch = async () =>
      Response.json({
        name: `human-webs-${project.id}`,
        meta: { humanWebsDigest: digest },
        readyState,
        url: "test.vercel.app",
      });
    const result = await deploymentStatus(
      "dpl_test123",
      project.id,
      digest,
      mock,
    );
    assert.equal(
      result.url,
      readyState === "READY" ? "https://test.vercel.app" : null,
    );
  }
  if (old === undefined) delete process.env.HUMAN_WEBS_VERCEL_TOKEN;
  else process.env.HUMAN_WEBS_VERCEL_TOKEN = old;
});
test("GitHub saves reviewed public code into a private independent branch and never updates main", async () => {
  const old = process.env.HUMAN_WEBS_GITHUB_TOKEN;
  process.env.HUMAN_WEBS_GITHUB_TOKEN = "test-only";
  const project = newProject(site, "local", 1);
  const approval = await validateApproval({
    projectId: project.id,
    versionId: project.versions[0].id,
    site,
    digest: await siteDigest(site),
    approved: true,
    reviewedContent: true,
  });
  const calls: string[] = [];
  const mock: typeof fetch = async (url, options) => {
    const path = new URL(String(url)).pathname;
    const method = options?.method || "GET";
    calls.push(`${method} ${path}`);
    if (path === "/user") return Response.json({ login: "test-owner" });
    if (path.endsWith(`/human-webs-${project.id}`))
      return new Response("", { status: 404 });
    if (path === "/user/repos") {
      const body = JSON.parse(String(options?.body));
      assert.equal(body.private, true);
      return Response.json({
        private: true,
        description: `Managed by Human Webs project ${project.id}`,
        owner: { login: "test-owner" },
        default_branch: "main",
      });
    }
    if (path.includes("/git/ref/heads/human-webs/"))
      return new Response("", { status: 404 });
    if (path.endsWith("/git/ref/heads/main"))
      return Response.json({ object: { sha: "parent" } });
    if (path.endsWith("/git/trees")) {
      const body = JSON.parse(String(options?.body));
      assert.ok(
        body.tree.every((f: { path: string }) => f.path !== "human-webs.json"),
      );
      return Response.json({ sha: "tree" });
    }
    if (path.endsWith("/git/commits")) return Response.json({ sha: "commit" });
    if (path.endsWith("/git/refs")) {
      const body = JSON.parse(String(options?.body));
      assert.equal(body.ref, `refs/heads/human-webs/${approval.versionId}`);
      return Response.json({ ref: body.ref });
    }
    throw new Error(`Unexpected request: ${method} ${path}`);
  };
  const saved = await saveToGithub(approval, mock);
  assert.ok(saved.url.startsWith("https://github.com/test-owner/"));
  assert.ok(
    !calls.some((call) => call.startsWith("PATCH") || call.includes("/merges")),
  );
  if (old === undefined) delete process.env.HUMAN_WEBS_GITHUB_TOKEN;
  else process.env.HUMAN_WEBS_GITHUB_TOKEN = old;
});
