#!/usr/bin/env node
// Cruza catálogos locales de investigación sin importar código ni decidir estética.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));
const load = async (relative) => JSON.parse(await readFile(new URL(relative, `file://${root}`), "utf8"));
const args = process.argv.slice(2);

try {
  const [catalog, measured, transfers] = await Promise.all([
    load("memory/SECTORS/catalog.json"),
    load("design-library/index.json"),
    load("tools/inspiration/transfers.json")
  ]);
  const sources = new Map();
  for (const sector of catalog.sectors) {
    for (const group of sector.subcategories || []) {
      for (const ref of group.references || []) {
        if (sources.has(ref.id)) throw new Error(`ID duplicado: ${ref.id}`);
        sources.set(ref.id, {
          id: ref.id, name: ref.name, sector: sector.id,
          url: ref.url, evidence: ref.reviewLevel,
          status: ref.status, location: `memory/SECTORS/${ref.ref}`
        });
      }
    }
  }
  for (const ref of measured.references) {
    if (sources.has(ref.id)) throw new Error(`ID duplicado: ${ref.id}`);
    sources.set(ref.id, {
      id: ref.id, name: ref.name, sector: "restaurantes",
      url: ref.source, evidence: "measured_research",
      status: "research_not_user_approved",
      location: `design-library/${ref.record}`
    });
  }
  if (catalog.schemaVersion !== 1 || measured.schemaVersion !== 1 ||
      transfers.schemaVersion !== 1 || !Array.isArray(transfers.bridges)) {
    throw new Error("Versión de catálogo o esquema no soportado.");
  }
  const sectors = new Set(catalog.sectors.map(s => s.id));
  const seen = new Set();
  for (const bridge of transfers.bridges) {
    const key = `${bridge.to}:${bridge.need}`;
    if (!sectors.has(bridge.to) || !/^[a-z-]+$/.test(bridge.need) || seen.has(key) ||
        !Array.isArray(bridge.within) || !bridge.within.length ||
        !Array.isArray(bridge.cross) || !bridge.cross.length) {
      throw new Error(`Puente incompleto o duplicado: ${key}`);
    }
    seen.add(key);
    const ids = [...bridge.within, ...bridge.cross.map(x => x.id)];
    if (new Set(ids).size !== ids.length) throw new Error(`Referencias repetidas: ${key}`);
    for (const id of bridge.within) {
      const found = sources.get(id);
      if (!found || found.sector !== bridge.to) {
        throw new Error(`Referencia principal incorrecta: ${key} / ${id}`);
      }
    }
    for (const idea of bridge.cross) {
      const found = sources.get(idea.id);
      if (!found || found.sector === bridge.to || !idea.principle || !idea.avoid) {
        throw new Error(`Transferencia no válida: ${key} / ${idea.id}`);
      }
    }
  }
  if (args.length === 1 && args[0] === "--check") {
    console.log(`Puentes válidos: ${transfers.bridges.length} casos, ${sources.size} referencias localizables; ninguna aprobación asumida.`);
  } else if (args.length === 2 && !args.some(arg => arg.startsWith("--"))) {
    const [to, need] = args.map(x => x.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase());
    const bridge = transfers.bridges.find(x => x.to === to && x.need === need);
    if (!bridge) {
      throw new Error(`Sin puente documentado para ${to}/${need}. Investigar el problema real en lugar de inventar una referencia.`);
    }
    console.log(JSON.stringify({
      targetSector: to, need, status: "ideas_to_test_not_approved",
      sectorReferences: bridge.within.map(id => sources.get(id)),
      crossSectorIdeas: bridge.cross.map(x => ({ ...sources.get(x.id), principle: x.principle, doNotCopy: x.avoid })),
      limits: [
        "No copiar branding, imágenes, textos, código o apariencia completa.",
        "No confundir estudios exploratorios con capturas actuales ni con preferencia aprobada.",
        "Verificar fuente y responsive actuales; conservar el baseline y eliminar flechas decorativas."
      ]
    }, null, 2));
  } else {
    throw new Error("Uso: node tools/inspiration/bridge.mjs <turismo|restaurantes|servicios> <necesidad> | --check");
  }
} catch (error) {
  console.error(`Puente: ${error.message}`);
  process.exitCode = 1;
}
