#!/usr/bin/env node
// Human Webs: verifica capturas reales y genera comparación navegable.
// No calcula belleza, conversión, WCAG ni un "AI score".
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const VIEWS = { mobile: [390, 844], desktop: [1280, 800] };
const PAGES = ["home", "interior"];
const SHOTS = PAGES.flatMap(page => Object.keys(VIEWS).map(viewport => page + ":" + viewport));
const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
function need(condition, message) { if (!condition) throw new Error(message); }
function imageDimensions(buffer) {
  const png = Buffer.from("89504e470d0a1a0a", "hex");
  need(buffer.length >= 57 && buffer.subarray(0,8).equals(png) &&
    buffer.toString("ascii",12,16) === "IHDR" &&
    buffer.includes(Buffer.from("IDAT")) && buffer.includes(Buffer.from("IEND")),
    "Archivo no parece PNG válido");
  return [buffer.readUInt32BE(16), buffer.readUInt32BE(20)];
}
export async function validateStage(directory, expected) {
  const dir=resolve(directory),data=JSON.parse(await readFile(join(dir,"manifest.json"),"utf8"));
  need(data.schemaVersion===1 && data.stage===expected, "Manifest: schemaVersion/stage incorrecto ("+expected+")");
  need(typeof data.project==="string" && data.project.trim().length>0, "Falta proyecto");
  need(typeof data.browser==="string" && data.browser.startsWith("Chromium"),"Falta versión navegador real");
  need(data.viewportMode==="viewport_only" && !isNaN(Date.parse(data.capturedAt)), "Falta fecha/modo de captura");
  need(Array.isArray(data.screenshots) && data.screenshots.length===4, "Se exigen cuatro capturas por versión");
  const shots=new Map();
  for (const item of data.screenshots) {
    const key=item.page+":"+item.viewport, size=VIEWS[item.viewport];
    need(SHOTS.includes(key) && !shots.has(key), "Página/viewport duplicado o inesperado: "+key);
    need(size[0]===item.width && size[1]===item.height, "Viewport declarado no coincide: "+key);
    need(typeof item.url==="string" && /^https:\/\/|^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?\//.test(item.url), "URL de captura inválida: "+key);
    need(typeof item.file==="string" && /^[a-z0-9_-]+\.png$/i.test(item.file), "Nombre de captura inseguro: "+key);
    need(typeof item.sha256==="string" && /^[a-f0-9]{64}$/.test(item.sha256),"Hash SHA256 faltante: "+key);
    need(item.checks && typeof item.checks==="object" && Array.isArray(item.issues),"Faltan comprobaciones: "+key);
    const bytes=await readFile(join(dir,item.file));
    const hash=createHash("sha256").update(bytes).digest("hex");
    need(hash===item.sha256,"Captura alterada / SHA256 no coincide: "+key);
    const real=imageDimensions(bytes);
    need(real[0]===size[0] && real[1]===size[1],"PNG tiene dimensiones diferentes: "+key);
    shots.set(key,item);
  }
  return {...data,shots};
}
function shotCard(base, stage, item) {
  const flags=item.issues.length?item.issues.map(esc).join(", "):"Sin alertas del capturador (no garantiza calidad)";
  const src=encodeURI(stage+"/"+item.file);
  return `<figure><img src="${esc(src)}" width="${item.width}" height="${item.height}" alt="Captura ${esc(stage)} ${esc(item.page)} ${esc(item.viewport)}" loading="lazy"><figcaption><strong>${esc(stage)}</strong> · ${esc(item.width)}×${esc(item.height)} · HTTP ${esc(item.httpStatus)}<p>${esc(item.checks.documentTitle)}</p><small>${esc(item.url)}</small><p class="flags">${flags}</p></figcaption></figure>`;
}
export async function makeReport(root) {
  const dir=resolve(root);
  const baseline=await validateStage(join(dir,"baseline"),"baseline");
  const candidate=await validateStage(join(dir,"candidate"),"candidate");
  need(baseline.project===candidate.project,"Proyectos diferentes; no comparables");
  const html=`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Evidencias visuales · ${esc(baseline.project)}</title><style>
*{box-sizing:border-box}body{margin:0;background:#f7f7f6;color:#202020;font:16px/1.55 system-ui,-apple-system,sans-serif}main{max-width:1440px;margin:auto;padding:clamp(16px,3vw,44px)}h1{font-size:clamp(26px,4vw,52px);line-height:1.1;letter-spacing:-.035em}h2{margin-top:50px}p{max-width:78ch}.status{border-top:2px solid #333;border-bottom:1px solid #ccc;padding:15px 0}.pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;align-items:start}figure{margin:0;min-width:0;background:white;border:1px solid #dedede;padding:12px}img{display:block;max-width:100%;height:auto;margin:0 auto;border:1px solid #ddd}figcaption{padding:12px 2px;font-size:13px;overflow-wrap:anywhere}.flags{color:#9a3412}.warning{border-left:3px solid #9a3412;padding-left:14px}a{color:#00436e}small{color:#666}@media(max-width:800px){.pair{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
</style></head><body><main><h1>Evidencia visual: ${esc(baseline.project)}</h1><div class="status"><strong>No es un certificado de calidad.</strong><p>Comparación documental de capturas tomadas con Chromium. Revisar manualmente identidad, fotografía, legibilidad, navegación, SEO, accesibilidad y clics. Ninguna puntuación estética automática.</p><p>Baseline ${esc(baseline.capturedAt)} (${esc(baseline.browser)}). Candidato ${esc(candidate.capturedAt)} (${esc(candidate.browser)}).</p></div>
${SHOTS.map(key=>{const [page,viewport]=key.split(":");return `<section><h2>${esc(page)} · ${esc(viewport)}</h2><div class="pair">${shotCard(baseline,"baseline",baseline.shots.get(key))}${shotCard(candidate,"candidate",candidate.shots.get(key))}</div></section>`;}).join("\n")}
<section class="warning"><h2>Revisión obligatoria</h2><p>Escribe 3 mejoras específicas y 2 riesgos o regresiones con pruebas. Si faltan fotos, fuentes, acciones operativas o aprobación, no publiques. La igualdad de tamaño no prueba superioridad ni garantiza que el contenido completo esté visible.</p></section></main></body></html>`;
  const output=join(dir,"evidence-report.html");
  await writeFile(output,html,"utf8");
  return {file:output,pairs:SHOTS.length,captureWarnings:[...baseline.screenshots,...candidate.screenshots].filter(x=>x.issues.length>0).length,sameBrowser:baseline.browser===candidate.browser};
}
async function run() {
  const args=process.argv.slice(2);
  if(args.length!==2 || args[0]!=="--dir")throw new Error("Uso: node tools/visual-evidence/report.mjs --dir <carpeta-con-baseline-y-candidate>");
  const report=await makeReport(args[1]);console.log(JSON.stringify({status:"evidence_ready_for_human_review",...report},null,2));
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) run().catch(err=>{console.error("Evidencia no válida: "+err.message);process.exitCode=1});
