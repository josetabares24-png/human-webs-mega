import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createSite } from "../../lib/engine";
import { briefSchema } from "../../lib/schema";
import { exportFiles, siteDigest } from "../../lib/export";
import { updatePage } from "../../lib/page-edit";
import { readFile } from "node:fs/promises";
import { unzipSync, strFromU8 } from "fflate";

const brief = briefSchema.parse({
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
test("create, edit, restore, reload, export and guard publication", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page
    .getByLabel("¿Qué web tienes en mente?")
    .fill("Necesito una web para una barbería premium en Lisboa");
  await page.getByLabel("Nombre del negocio", { exact: true }).fill("Oficio");
  await page
    .getByLabel("Qué ofrece y qué lo hace diferente")
    .fill(brief.description);
  await page
    .getByLabel("Correo o teléfono", { exact: true })
    .fill(brief.contact);
  const started = Date.now();
  await page.getByRole("button", { name: "Crear primera versión" }).click();
  const frame = page.frameLocator("iframe");
  await expect(
    frame.getByRole("heading", { name: "Barbería en Lisboa.", exact: true }),
  ).toBeVisible();
  const durationMs = Date.now() - started;
  expect(durationMs).toBeLessThan(60000);
  await testInfo.attach("preview-timing.json", {
    body: JSON.stringify({ actionToPreviewMs: durationMs }),
    contentType: "application/json",
  });
  // Check the stable initial document before navigation can replace its context.
  const isolatedFrame = page
    .frames()
    .find((item) => item.url().startsWith("blob:"));
  expect(isolatedFrame).toBeTruthy();
  expect(
    await isolatedFrame!.evaluate(() => {
      try {
        void parent.document.body;
        return false;
      } catch {
        return true;
      }
    }),
  ).toBe(true);
  await frame.getByRole("link", { name: "Servicios", exact: true }).click();
  await expect(
    frame.getByRole("heading", { name: "Lo que hacemos." }),
  ).toBeVisible();
  await page
    .getByRole("combobox", { name: "Página", exact: true })
    .selectOption("index");
  await page.getByLabel("Pide un cambio").fill("Titular: Corte con oficio.");
  await page.getByRole("button", { name: "Aplicar cambio" }).click();
  await expect(
    frame.getByRole("heading", { name: "Corte con oficio.", exact: true }),
  ).toBeVisible();
  await page.getByRole("tab", { name: "Versiones" }).click();
  await expect(
    page.getByText("V2 · [Inicio] Titular: Corte con oficio."),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Restaurar", exact: true })
    .last()
    .click();
  await expect(
    frame.getByRole("heading", { name: "Barbería en Lisboa.", exact: true }),
  ).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: /Mis proyectos/ }).click();
  await page.getByRole("button", { name: /Oficio.*Barbería/ }).click();
  await expect(
    frame.getByRole("heading", { name: "Barbería en Lisboa.", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Móvil", exact: true }).click();
  await expect(page.locator("iframe")).toHaveCSS("width", "390px");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Descargar código" }).click();
  expect((await download).suggestedFilename()).toBe("human-webs-sitio.zip");
  await page.getByRole("tab", { name: "Publicar", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Publicar versión aprobada" }),
  ).toBeDisabled();
  await page.screenshot({
    path: "test-results/studio-desktop.png",
    fullPage: true,
  });
  expect(errors).toEqual([]);
});
test("page editor follows preview navigation and preserves edits through export and reload", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByLabel("Importar proyectos JSON").setInputFiles({
    name: "site.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(createSite(brief))),
  });
  await page.getByRole("button", { name: /Oficio.*Barbería/ }).click();
  const frame = page.frameLocator("iframe");
  await frame.getByRole("link", { name: "Servicios", exact: true }).click();
  await expect(
    page.getByRole("combobox", { name: "Página", exact: true }),
  ).toHaveValue("servicios");
  await page.getByRole("tab", { name: "Página", exact: true }).click();
  await page
    .getByLabel("Titular de la página", { exact: true })
    .fill("Corte y barba, con cita.");
  await page
    .getByLabel("Texto de la página", { exact: true })
    .fill("Consulta los servicios antes de reservar.");
  await page
    .getByLabel("Título SEO", { exact: true })
    .fill("Servicios de Oficio en Lisboa");
  await page
    .getByLabel("Descripción SEO", { exact: true })
    .fill("Servicios de corte y barba con cita en Lisboa.");
  await page.getByRole("button", { name: "Guardar página y versión" }).click();
  await expect(
    frame.getByRole("heading", {
      name: "Corte y barba, con cita.",
      exact: true,
    }),
  ).toBeVisible();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Descargar código" }).click();
  const path = await (await downloadPromise).path();
  expect(path).not.toBeNull();
  const files = unzipSync(await readFile(path!));
  expect(strFromU8(files["servicios.html"])).toContain(
    "<title>Servicios de Oficio en Lisboa</title>",
  );
  expect(strFromU8(files["index.html"])).toContain(
    "<h1>Barbería en Lisboa.</h1>",
  );
  await page
    .getByRole("combobox", { name: "Página", exact: true })
    .selectOption("nosotros");
  await page
    .getByLabel("Texto de la página", { exact: true })
    .fill("Historia revisada por el negocio.");
  await page.getByRole("button", { name: "Guardar página y versión" }).click();
  await page.getByRole("tab", { name: "Datos", exact: true }).click();
  await page
    .getByLabel("Correo o teléfono", { exact: true })
    .fill("nuevo@example.com");
  await page.getByRole("button", { name: "Guardar datos y versión" }).click();
  await expect(
    frame.getByText("Historia revisada por el negocio.", { exact: true }),
  ).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: /Mis proyectos/ }).click();
  await page.getByRole("button", { name: /Oficio.*Barbería/ }).click();
  await page.evaluate(() =>
    window.postMessage({ type: "human-webs:page", slug: "visita" }, "*"),
  );
  await expect(
    page.getByRole("combobox", { name: "Página", exact: true }),
  ).toHaveValue("index");
  await page
    .getByRole("combobox", { name: "Página", exact: true })
    .selectOption("servicios");
  await expect(
    frame.getByRole("heading", {
      name: "Corte y barba, con cita.",
      exact: true,
    }),
  ).toBeVisible();
  await page.getByRole("tab", { name: "Página", exact: true }).click();
  const a11y = await new AxeBuilder({ page })
    .disableRules(["frame-tested"])
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(a11y.violations).toEqual([]);
  await page.screenshot({
    path: "test-results/page-editor.png",
    fullPage: true,
  });
});

test("conversational AI editing sends the selected page as an edit operation", async ({
  page,
}) => {
  await page.route("**/api/capabilities", (route) =>
    route.fulfill({ json: { ai: true, publish: false, github: false } }),
  );
  let edits = 0;
  await page.route("**/api/generate", async (route) => {
    const request = route.request().postDataJSON();
    expect(request.mode).toBe("edit");
    expect(request.pageSlug).toBe("servicios");
    edits++;
    await route.fulfill({
      json: {
        site: updatePage(request.site, request.pageSlug, {
          heading: "Servicios revisados con IA.",
        }),
      },
    });
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Conexiones y copias" }).click();
  await page
    .getByLabel("Clave de operador del taller")
    .fill("test-only-mocked-ai-editing");
  await page.getByLabel(/Usar IA para generar y editar/).check();
  await page.getByLabel("Importar proyectos JSON").setInputFiles({
    name: "site.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(createSite(brief))),
  });
  await page.getByRole("button", { name: /Oficio.*Barbería/ }).click();
  await page
    .getByRole("combobox", { name: "Página", exact: true })
    .selectOption("servicios");
  await page.getByLabel("Pide un cambio").fill("Haz el titular más directo.");
  await page.getByRole("button", { name: "Aplicar cambio" }).click();
  const frame = page.frameLocator("iframe");
  await expect(
    frame.getByRole("heading", {
      name: "Servicios revisados con IA.",
      exact: true,
    }),
  ).toBeVisible();
  expect(edits).toBe(1);
  await page
    .getByRole("combobox", { name: "Página", exact: true })
    .selectOption("index");
  await expect(
    frame.getByRole("heading", { name: "Barbería en Lisboa.", exact: true }),
  ).toBeVisible();
});

test("JSON backups import as independent projects and corrupt storage is preserved", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByLabel("Importar proyectos JSON").setInputFiles({
    name: "site.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(createSite(brief))),
  });
  await expect(
    page.getByRole("button", { name: /Oficio.*Barbería/ }),
  ).toHaveCount(1);
  await page.getByLabel("Importar proyectos JSON").setInputFiles({
    name: "site.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(createSite(brief))),
  });
  await expect(
    page.getByRole("button", { name: /Oficio.*Barbería/ }),
  ).toHaveCount(2);
  await page.evaluate(() =>
    localStorage.setItem("human-webs.workspace.v1", "corrupt-original"),
  );
  await page.reload();
  await expect(
    page.getByRole("alert").filter({ hasText: "No se pudieron leer" }),
  ).toBeVisible();
  expect(
    await page.evaluate(() => localStorage.getItem("human-webs.workspace.v1")),
  ).toBe("corrupt-original");
});
test("optional integrations require explicit approvals and expose a URL only after verification", async ({
  page,
}) => {
  let aiCalls = 0;
  let publishCalls = 0;
  let githubCalls = 0;
  await page.route("**/api/capabilities", (route) =>
    route.fulfill({ json: { ai: true, publish: true, github: true } }),
  );
  await page.route("**/api/generate", async (route) => {
    aiCalls++;
    const data = route.request().postDataJSON();
    const site = { ...data.site, headline: "Un corte con oficio." };
    await route.fulfill({ json: { site, source: "ai" } });
  });
  await page.route("**/api/publish*", async (route) => {
    if (route.request().method() === "POST") {
      publishCalls++;
      const data = route.request().postDataJSON();
      expect(data.approved).toBe(true);
      expect(data.reviewedContent).toBe(true);
      expect(data.digest).toBe(await siteDigest(data.site));
      await route.fulfill({ json: { id: "dpl_test123", state: "BUILDING" } });
    } else
      await route.fulfill({
        json: {
          id: "dpl_test123",
          state: "READY",
          url: "https://verified-example.vercel.app",
        },
      });
  });
  await page.route("**/api/github", async (route) => {
    githubCalls++;
    expect(route.request().postDataJSON().approved).toBe(true);
    await route.fulfill({
      json: {
        url: "https://github.com/test-owner/test-repo/tree/version",
        branch: "version",
      },
    });
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Conexiones y copias" }).click();
  await page
    .getByLabel("Clave de operador del taller")
    .fill("test-operator-for-mocked-ui-only");
  await page.getByLabel(/Usar IA para generar y editar/).check();
  await page.getByRole("button", { name: "Crear nueva web" }).click();
  await page.getByLabel("Nombre del negocio", { exact: true }).fill("Oficio");
  await page.getByLabel("Sector", { exact: true }).fill("Barbería");
  await page.getByLabel("Ciudad", { exact: true }).fill("Lisboa");
  await page
    .getByLabel("Correo o teléfono", { exact: true })
    .fill("ola@example.com");
  await page.getByRole("button", { name: "Crear primera versión" }).click();
  await expect(
    page
      .frameLocator("iframe")
      .getByRole("heading", { name: "Un corte con oficio.", exact: true }),
  ).toBeVisible();
  expect(aiCalls).toBe(1);
  await page.getByRole("tab", { name: "Publicar", exact: true }).click();
  const publish = page.getByRole("button", {
    name: "Publicar versión aprobada",
  });
  await expect(publish).toBeDisabled();
  expect(publishCalls).toBe(0);
  expect(githubCalls).toBe(0);
  await page.getByLabel(/He revisado todas las páginas/).check();
  await expect(publish).toBeDisabled();
  await page.getByLabel("Apruebo publicar esta versión en Vercel.").check();
  await publish.click();
  await expect(
    page.getByText("La publicación aún no está verificada."),
  ).toBeVisible();
  expect(publishCalls).toBe(1);
  await expect(
    page.getByRole("link", { name: /Abrir web publicada/ }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Comprobar estado en Vercel" })
    .click();
  await expect(
    page.getByRole("link", { name: /Abrir web publicada y verificada/ }),
  ).toHaveAttribute("href", "https://verified-example.vercel.app");
  const github = page.getByRole("button", {
    name: "Guardar versión en GitHub",
  });
  await expect(github).toBeDisabled();
  await page.getByLabel(/Apruebo guardar esta versión/).check();
  await github.click();
  await expect(
    page.getByRole("link", { name: /Revisar código guardado/ }),
  ).toBeVisible();
  expect(githubCalls).toBe(1);
  const a11y = await new AxeBuilder({ page })
    .disableRules(["frame-tested"])
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(a11y.violations).toEqual([]);
});
test("configured exported form validates consent and posts the submitted fields", async ({
  page,
}) => {
  const site = createSite({
    ...brief,
    formEndpoint: "https://forms.example.com/receive",
  });
  const files = exportFiles(site);
  let submitted = "";
  await page.route("http://generated.test/**", (route) =>
    route.fulfill({ contentType: "text/html", body: files["visita.html"] }),
  );
  await page.route("https://forms.example.com/receive", (route) => {
    submitted = route.request().postData() || "";
    return route.fulfill({
      contentType: "text/html",
      body: "<h1>Consulta recibida por el backend de prueba</h1>",
    });
  });
  await page.goto("http://generated.test/visita.html");
  await page.getByLabel("Nombre", { exact: true }).fill("Prueba");
  await page.getByLabel("Correo", { exact: true }).fill("qa@example.com");
  await page.getByLabel("Mensaje", { exact: true }).fill("Consulta de prueba.");
  await page.getByRole("button", { name: "Enviar consulta" }).click();
  expect(submitted).toBe("");
  await page.getByLabel(/Autorizo a este negocio/).check();
  await page.getByRole("button", { name: "Enviar consulta" }).click();
  await expect(
    page.getByRole("heading", { name: /Consulta recibida/ }),
  ).toBeVisible();
  const fields = new URLSearchParams(submitted);
  expect(fields.get("email")).toBe("qa@example.com");
  expect(fields.get("consent")).toBe("yes");
});
test("dashboard works at 390px and passes automated WCAG A/AA checks", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.screenshot({
    path: "test-results/studio-mobile.png",
    fullPage: true,
  });
});
for (const style of ["editorial", "minimal", "bold"] as const) {
  test(`exported ${style} pages navigate, fit mobile and pass automated accessibility`, async ({
    page,
  }) => {
    const site = createSite({ ...brief, style });
    const files = exportFiles(site);
    await page.route("http://generated.test/**", (route) => {
      const name =
        new URL(route.request().url()).pathname.slice(1) || "index.html";
      return route.fulfill({
        status: files[name] ? 200 : 404,
        contentType: "text/html",
        body: files[name] || "Not found",
      });
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://generated.test/index.html");
    for (const p of site.pages) {
      await page
        .getByRole("navigation", { name: "Principal" })
        .getByRole("link", { name: p.label, exact: true })
        .click();
      await expect(page).toHaveURL(new RegExp(`${p.slug}.html$`));
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    }
    await page.goto("http://generated.test/index.html");
    await page.screenshot({
      path: `test-results/generated-${style}-mobile.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 1360, height: 1000 });
    await page.screenshot({
      path: `test-results/generated-${style}-desktop.png`,
      fullPage: true,
    });
  });
}
test("API blocks unauthenticated, cross-origin and unapproved publication requests", async ({
  request,
}) => {
  const origin = "http://localhost:3100";
  const Authorization = "Bearer test-operator-token-for-ci-only-12345678";
  expect((await request.post("/api/generate", { data: {} })).status()).toBe(
    401,
  );
  expect(
    (
      await request.post("/api/publish", {
        headers: { Authorization, origin: "https://evil.example.com" },
        data: {},
      })
    ).status(),
  ).toBe(403);
  expect(
    (
      await request.post("/api/publish", {
        headers: { Authorization, origin },
        data: { approved: false },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/generate", {
        headers: { Authorization, origin },
        data: { site: createSite(brief), instruction: "Hazlo más elegante" },
      })
    ).status(),
  ).toBe(503);
  expect(
    (
      await request.post("/api/generate", {
        headers: { Authorization, origin },
        data: {
          site: createSite(brief),
          instruction: "Cambia el titular",
          mode: "edit",
          pageSlug: "carta",
        },
      })
    ).status(),
  ).toBe(400);
});
