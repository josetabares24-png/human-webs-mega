#!/usr/bin/env node
/**
 * Human Webs: revisión estática orientativa de flechas decorativas.
 * No decide si un icono es funcional ni certifica el diseño.
 */
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, extname, basename, join } from "node:path";

const EXT = new Set([".html", ".jsx", ".tsx", ".vue", ".svelte", ".astro", ".mdx", ".css"]);
const IGNORE = new Set([".git", ".next", "node_modules", "dist", "build", "coverage", ".vercel"]);
const PATTERNS = [
  { kind: "arrow-icon", regex: /<(?:ArrowRight|ArrowUpRight|ArrowDownRight|ArrowLeft|ArrowUpLeft|ArrowDownLeft|ChevronRight|ChevronLeft|MoveRight|MoveLeft)\b/g },
  { kind: "named-arrow-icon", regex: /\b(?:name|icon)\s*=\s*["'](?:arrow-(?:up-|down-)?(?:right|left)|chevron-(?:right|left)|move-(?:right|left))["']/g },
  { kind: "arrow-glyph", regex: /[→↗↘←↖↙➔➜➝⇢⇒]/g },
  { kind: "arrow-entity", regex: /&(?:rarr|larr|nearr|searr|rArr|lArr|raquo|laquo);|&#(?:8594|8592|8599|8600|x2192|x2190|x2197|x2198);/gi },
];
const EXCEPTION = /human-web-arrow-functional|data-arrow-purpose\s*=\s*["'](?:navigation|carousel|breadcrumb|direction)["']/i;

async function listFiles(input) {
  const p = resolve(input);
  const found = [];
  async function visit(path) {
    const info = await stat(path);
    if (info.isDirectory()) {
      const children = (await readdir(path, { withFileTypes: true }))
        .filter(entry => !IGNORE.has(entry.name))
        .sort((a, b) => a.name.localeCompare(b.name));
      for (const child of children) {
        if (child.isSymbolicLink()) continue;
        await visit(join(path, child.name));
      }
    } else if (info.isFile() && EXT.has(extname(path)) && info.size <= 500_000) {
      found.push(path);
    }
  }
  await visit(p);
  return found;
}

async function scan(path) {
  const lines = (await readFile(path, "utf8")).split(/\r?\n/);
  const warnings = [];
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    // Una excepción debe tener una razón visible en código; la revisión humana sigue obligada.
    if (EXCEPTION.test(line) || (index > 0 && /human-web-arrow-functional/.test(lines[index - 1]))) continue;
    for (const { kind, regex } of PATTERNS) {
      regex.lastIndex = 0;
      let match;
      while ((match = regex.exec(line))) {
        warnings.push({ file: path, line: index + 1, column: match.index + 1, kind, token: match[0] });
      }
    }
  }
  return warnings;
}

async function main() {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter(a => a.startsWith("--")));
  const paths = args.filter(a => !a.startsWith("--"));
  if (paths.length !== 1 || [...flags].some(f => !["--json", "--strict"].includes(f))) {
    throw new Error("Uso: node tools/design-audit/arrows.mjs <ruta-sitio> [--json] [--strict]");
  }
  const files = await listFiles(paths[0]);
  if (!files.length) throw new Error("No se encontraron archivos de interfaz compatibles.");
  const warnings = (await Promise.all(files.map(scan))).flat();
  const result = {
    status: warnings.length ? "review_required" : "no_known_patterns_found",
    scannedFiles: files.length,
    warnings,
    note: "Los hallazgos son candidatos a revisión, no flechas decorativas confirmadas. No detecta todos los estilos ni acredita calidad visual."
  };
  if (flags.has("--json")) console.log(JSON.stringify(result, null, 2));
  else {
    console.log(`Auditoría de flechas: ${files.length} archivo(s), ${warnings.length} candidato(s) a revisar.`);
    for (const w of warnings) console.log(`  ${w.file}:${w.line}:${w.column} [${w.kind}] ${w.token}`);
    console.log(result.note);
  }
  if (flags.has("--strict") && warnings.length) process.exitCode = 1;
}
main().catch(err => { console.error(`Auditoría de flechas: ${err.message}`); process.exitCode = 2; });
