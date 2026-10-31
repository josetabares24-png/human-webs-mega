#!/usr/bin/env node
// Human Webs sector registry validation: protects routing and status.
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const catalogPath = resolve(root, "memory/SECTORS/catalog.json");
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
const sectorsRoot = resolve(root, "memory/SECTORS");
let count = 0, errors = [];
const fileAt = (relative, legacy = false) => {
  const absolute = resolve(sectorsRoot, relative);
  // Prior research may live outside SECTORS; only allow that for explicitly
  // recorded legacy paths, still confined to the repository.
  const boundary = legacy ? root : sectorsRoot;
  if (!absolute.startsWith(boundary + "/") || !existsSync(absolute)) {
    errors.push("Referencia inexistente/fuera del área autorizada: " + relative);
    return null;
  }
  return readFileSync(absolute, "utf8");
};
if (catalog.schemaVersion !== 1) errors.push("schemaVersion no compatible");
if (!Array.isArray(catalog.sectors) || catalog.sectors.length < 2) errors.push("No hay dos sectores");
const sectorIds = new Set(), refIds = new Set();
for (const sector of catalog.sectors || []) {
  if (sectorIds.has(sector.id)) errors.push("Sector duplicado: " + sector.id);
  sectorIds.add(sector.id);
  fileAt(sector.index);
  if (sector.legacy) for (const path of sector.legacy) fileAt(path, true);
  for (const sub of sector.subcategories || []) {
    fileAt(sub.index);
    for (const record of sub.references || []) {
      count++;
      if (refIds.has(record.id)) errors.push("Referencia duplicada: " + record.id);
      refIds.add(record.id);
      const doc = fileAt(record.ref);
      if (record.status !== "researched_not_approved") {
        errors.push("Nunca autopromover sin evidencia de usuario: " + record.id);
      }
      if (typeof record.url !== "string" || !record.url.startsWith("https://"))
        errors.push("URL HTTPS ausente: " + record.id);
      const common = doc && doc.includes(record.url) && doc.includes("PENDIENTE") &&
        doc.includes("## Fuentes originales consultadas") &&
        doc.includes("## Principio reutilizable") &&
        doc.includes("## Qué no copiar") &&
        doc.includes("## Auditoría visual ampliada") &&
        doc.includes("| Fondo y color |") &&
        doc.includes("| Tipografía |") &&
        doc.includes("| Fotografía y recursos |");
      const serviceFields = doc && doc.includes("### Evidencia visual y límites") &&
        doc.includes("### Boceto original para una pyme") &&
        doc.includes("### Preguntas de QA y móvil");
      const tourismFields = doc && doc.includes("## Evidencia visual y límites") &&
        doc.includes("### Boceto original para un negocio pequeño") &&
        doc.includes("## QA, móvil y aceptación") && doc.includes("sin medición de CSS");
      if (!common || (sector.id === "servicios" && !serviceFields) ||
          (sector.id === "turismo" && !tourismFields)) {
        errors.push("Ficha sin evidencia, estado o límites: " + record.ref);
      }
      const requiredDir = sector.id + "/" + sub.id + "/";
      if (!record.ref.startsWith(requiredDir))
        errors.push("Ficha fuera de su subcategoría: " + record.ref);
    }
  }
}
if (!["restaurantes","servicios","turismo"].every((id) => sectorIds.has(id))) errors.push("Falta un sector básico");
if (count < 12) errors.push("Faltan fichas sectoriales; hay solo " + count);
const checkLocalLinks = (base, doc) => {
  for (const match of doc.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)) {
    const link = match[1].split("#")[0].split("?")[0];
    if (!link || /^(https?:|mailto:|tel:)/i.test(link)) continue;
    const dest = resolve(dirname(base), decodeURIComponent(link));
    if (!dest.startsWith(root + "/") || !existsSync(dest))
      errors.push("Enlace relativo roto: " + base.slice(root.length + 1) + " → " + link);
  }
};
import { readdirSync } from "node:fs";
const visit = (dir) => {
  for (const file of readdirSync(dir, { withFileTypes: true })) {
    const abs = resolve(dir, file.name);
    if (file.isDirectory()) visit(abs);
    else if (abs.endsWith(".md")) checkLocalLinks(abs, readFileSync(abs, "utf8"));
  }
};
visit(sectorsRoot);
if (errors.length) {
  console.error("Sector library no válida:\n" + errors.map(x => "- " + x).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Sectores válidos: " + sectorIds.size +
    " tipos y " + count + " fichas sectoriales; rutas y estados comprobados.");
}
