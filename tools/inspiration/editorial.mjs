#!/usr/bin/env node
// Búsqueda local de referencias de turismo; no certifica estética ni resultados comerciales.
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const db = JSON.parse(await readFile(new URL("./editorial-index.json", import.meta.url), "utf8"));
const normalize = value => String(value).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();
const args = process.argv.slice(2);
const byId = new Set();
let problems = [];
if (db.schemaVersion !== 1 || !Array.isArray(db.references) || !db.references.length) problems.push("Catálogo incompatible o vacío");
for (const item of db.references ?? []) {
  if (!item.id || byId.has(item.id) || !item.name || !item.tags?.length || !item.insight ||
      !/^https:\/\//.test(item.url ?? "") || item.reviewStatus !== "researched_not_approved" ||
      !item.evidence || !item.detailFile?.startsWith("memory/SECTORS/")) {
    problems.push("Ficha incompleta o duplicada: "+item.id);
  }
  byId.add(item.id);
  try { if (!(await stat(fileURLToPath(new URL("../../"+item.detailFile, import.meta.url)))).isFile()) problems.push("Documento ausente "+item.id); }
  catch { problems.push("Documento ausente "+item.id); }
}
if (problems.length) {console.error("Referencias inválidas: "+problems.join("; "));process.exitCode=2}
else if (args.length===1 && args[0]==="--check") {
  console.log("Referencias editoriales válidas: "+byId.size+" fuentes con trazabilidad; ninguna aprobada");
} else if (args.length>0 && args.every(x=>!x.startsWith("--"))) {
  const terms = normalize(args.join(" ")).split(/\s+/).filter(Boolean);
  const candidates = db.references.map(x=>{
    const searchable=normalize([x.id,x.name,...x.tags,x.insight].join(" "));
    return {reference:x,score:terms.filter(t=>searchable.includes(t)).length};
  }).filter(x=>x.score===terms.length).sort((a,b)=>a.reference.id.localeCompare(b.reference.id));
  if (!candidates.length) {
    console.error("Sin referencia verificada para esa búsqueda. Investigar antes de recomendar.");
    process.exitCode=1;
  } else console.log(JSON.stringify({status:db.status,total:candidates.length,matches:candidates.slice(0,6).map(x=>x.reference),caveat:db.note},null,2));
} else {console.error("Uso: node tools/inspiration/editorial.mjs <tema> | --check");process.exitCode=2}
