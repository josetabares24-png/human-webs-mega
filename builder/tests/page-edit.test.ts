import assert from "node:assert/strict";
import test from "node:test";
import { createSite, editLocally, updateSiteBrief } from "../lib/engine";
import {
  buildPageContext,
  mergeAiPageEdit,
  updatePage,
} from "../lib/page-edit";
import {
  buildGenerationRequest,
  buildPageEditRequest,
  editPageWithAi,
} from "../lib/server/ai";
import { exportFiles } from "../lib/export";
import { initialBrief } from "../lib/schema";

const site = createSite({
  ...initialBrief,
  name: "Oficio",
  sector: "Barbería",
  city: "Lisboa",
  description: "Corte a tijera y barba con cita.",
  contact: "ola@example.com",
  services: "Corte | 25 €",
  story: "Historia confirmada del negocio.",
  formEndpoint: "https://forms.example.com/receive",
});
const nullChanges = {
  label: null,
  title: null,
  description: null,
  heading: null,
  body: null,
};

test("page edits preserve unrelated routes, business facts and source objects", () => {
  const before = structuredClone(site);
  const edited = updatePage(site, "servicios", {
    heading: "Corte y barba.",
    title: "Servicios · Oficio Lisboa",
    description: "Detalles de nuestros servicios de corte y barba.",
    body: "Consulta los servicios antes de reservar.",
  });
  assert.deepEqual(site, before);
  assert.deepEqual(edited.brief, site.brief);
  assert.deepEqual(
    edited.pages.filter((p) => p.slug !== "servicios"),
    site.pages.filter((p) => p.slug !== "servicios"),
  );
  assert.equal(edited.pages[1].heading, "Corte y barba.");
});
test("home edits synchronize the rendered headline and introduction", () => {
  const edited = updatePage(site, "index", {
    heading: "Corte con oficio.",
    body: "Atención con cita en Lisboa.",
  });
  assert.equal(edited.headline, "Corte con oficio.");
  assert.equal(edited.introduction, "Atención con cita en Lisboa.");
  assert.match(exportFiles(edited)["index.html"], /Corte con oficio/);
  assert.throws(() => updatePage(site, "index", { body: "a".repeat(801) }));
});
test("visit copy and SEO are exported, while arbitrary paths and fields are rejected", () => {
  const edited = updatePage(site, "visita", {
    body: "Escríbenos para consultar una cita.",
    title: "Visita Oficio",
    description: "Contacto confirmado en Lisboa.",
  });
  assert.match(exportFiles(edited)["visita.html"], /Escríbenos para consultar/);
  assert.match(
    exportFiles(edited)["visita.html"],
    /<title>Visita Oficio<\/title>/,
  );
  assert.throws(() => updatePage(site, "../index", { heading: "No" }));
  assert.throws(() => updatePage(site, "visita", { slug: "index" }));
  assert.throws(() =>
    updatePage(site, "visita", { brief: { contact: "attacker@example.com" } }),
  );
  assert.throws(() => updatePage(site, "visita", { title: "   " }));
});
test("local commands apply text and SEO to the selected page", () => {
  const title = editLocally(site, "Titular: Corte elegante.", "servicios").site;
  assert.equal(title.pages[1].heading, "Corte elegante.");
  assert.equal(title.headline, site.headline);
  const text = editLocally(title, "Texto: Solo con cita.", "servicios").site;
  const seo = editLocally(
    text,
    "SEO: Servicios de barbería en Lisboa.",
    "servicios",
  ).site;
  assert.equal(seo.pages[1].body, "Solo con cita.");
  assert.equal(seo.pages[1].description, "Servicios de barbería en Lisboa.");
  assert.equal(
    editLocally(seo, "Título SEO: Corte y barba · Oficio", "servicios").site
      .pages[1].title,
    "Corte y barba · Oficio",
  );
  assert.throws(() => editLocally(site, "Texto: No", "unknown"));
});
test("updating business contact does not overwrite manually edited page copy", () => {
  const edited = updatePage(site, "nosotros", {
    body: "Texto editorial revisado por el negocio.",
  });
  const updated = updateSiteBrief(edited, {
    ...edited.brief,
    contact: "+351912345678",
  });
  assert.equal(updated.pages[2].body, edited.pages[2].body);
});
test("AI patch cannot modify another page or private integration settings", () => {
  const result = mergeAiPageEdit(site, "servicios", {
    style: null,
    changes: { ...nullChanges, heading: "Corte con cita." },
  });
  assert.deepEqual(result.pages[0], site.pages[0]);
  assert.deepEqual(result.brief, site.brief);
  assert.equal(result.pages[1].heading, "Corte con cita.");
  assert.throws(() =>
    mergeAiPageEdit(site, "servicios", {
      style: null,
      changes: { ...nullChanges, slug: "visita" },
    }),
  );
  assert.throws(() =>
    mergeAiPageEdit(site, "servicios", {
      style: null,
      changes: nullChanges,
      pages: [],
    }),
  );
  assert.deepEqual(
    mergeAiPageEdit(site, "servicios", { style: null, changes: nullChanges }),
    site,
  );
});
test("edit context excludes unrelated page text and integration endpoints", () => {
  const changed = updatePage(site, "nosotros", {
    body: "UNRELATED_PRIVATE_COPY",
  });
  const context = buildPageContext(changed, "Hazlo más breve", "servicios");
  const payload = JSON.stringify(
    buildPageEditRequest(changed, "Hazlo más breve", "servicios"),
  );
  assert.equal(context.page.slug, "servicios");
  assert.ok(!payload.includes("UNRELATED_PRIVATE_COPY"));
  assert.ok(!payload.includes("forms.example.com"));
  assert.ok(!payload.includes("ola@example.com"));
  assert.ok(
    payload.length <
      JSON.stringify(buildGenerationRequest(changed, "Hazlo más breve")).length,
  );
});
test("AI HTTP edit uses the partial schema and applies only its validated patch", async () => {
  const oldKey = process.env.AI_GATEWAY_API_KEY;
  const oldModel = process.env.AI_GATEWAY_MODEL;
  process.env.AI_GATEWAY_API_KEY = "test-only";
  process.env.AI_GATEWAY_MODEL = "test/model";
  try {
    const mock: typeof fetch = async (_url, options) => {
      const body = JSON.parse(String(options?.body));
      assert.equal(
        body.response_format.json_schema.name,
        "human_webs_page_edit",
      );
      assert.equal(body.max_tokens, 2400);
      assert.equal(JSON.parse(body.messages[1].content).page.slug, "servicios");
      return Response.json({
        choices: [
          {
            message: {
              content: JSON.stringify({
                style: null,
                changes: { ...nullChanges, heading: "Servicios de Oficio." },
              }),
            },
          },
        ],
      });
    };
    const result = await editPageWithAi(
      site,
      "Cambia el titular",
      "servicios",
      mock,
    );
    assert.equal(result.pages[1].heading, "Servicios de Oficio.");
    assert.deepEqual(result.pages[0], site.pages[0]);
  } finally {
    if (oldKey === undefined) delete process.env.AI_GATEWAY_API_KEY;
    else process.env.AI_GATEWAY_API_KEY = oldKey;
    if (oldModel === undefined) delete process.env.AI_GATEWAY_MODEL;
    else process.env.AI_GATEWAY_MODEL = oldModel;
  }
});
