#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const required = ["AGENTS.md","README.md","memory/INDEX.md","memory/DECISIONS.md","memory/ERRORS.md","memory/QUALITY-GATES.md","memory/WORKFLOW.md","memory/DESIGN.md","memory/ART-DIRECTION.md","memory/INSPIRATION-SOURCES.md","memory/DESIGN-DIRECTION-TEMPLATE.md","design-library/README.md","memory/COPY-SEO.md","memory/VOICE-AND-COPY.md","memory/COPY-TOOLS.md","tools/copy/README.md","tools/copy/phrases.json","memory/TECHNICAL.md","memory/RECORD-TEMPLATE.md",".github/copilot-instructions.md","prompts/bot.md"];
const files=[...required,"archive/README-legacy-2026-10-30.md","archive/bot-contract-legacy-2026-10-30.md"];
let errors=[];
for(const name of files) {
 const path=resolve(root,name);
 if(!existsSync(path)){errors.push("Falta archivo obligatorio: "+name);continue;}
 const content=readFileSync(path,"utf8");
 if(!content.trim())errors.push("Archivo vacío: "+name);
 const links=[...content.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)];
 for(const [,link] of links){
  const target=link.split("#")[0].split("?")[0];
  if(!target || /^(https?:|mailto:|tel:)/i.test(target))continue;
  const resolved=resolve(dirname(path),decodeURIComponent(target));
  if(!resolved.startsWith(root+"/")&&!resolved.startsWith(root+"\\")){errors.push(name+": enlace fuera del repositorio "+target);continue;}
  if(!existsSync(resolved))errors.push(name+": enlace roto "+target);
 }
}
const index=existsSync(resolve(root,"memory/INDEX.md"))?readFileSync(resolve(root,"memory/INDEX.md"),"utf8"):"";
for(const module of ["DECISIONS","ERRORS","QUALITY-GATES","WORKFLOW","DESIGN","ART-DIRECTION","INSPIRATION-SOURCES","DESIGN-DIRECTION-TEMPLATE","COPY-SEO","VOICE-AND-COPY","COPY-TOOLS","TECHNICAL","RECORD-TEMPLATE"])if(!index.includes(module+".md"))errors.push("Índice no enruta "+module);
const errorsText=existsSync(resolve(root,"memory/ERRORS.md"))?readFileSync(resolve(root,"memory/ERRORS.md"),"utf8"):"";
const sections=errorsText.split(/^### (ERR-\d+)\b[^\n]*$/m);
for(let i=1;i<sections.length;i+=2){
 const id=sections[i], section=sections[i+1]||"";
 for(const req of ["**Prevención:**","**Prueba:**","**Estado:**"])if(!section.includes(req))errors.push("Entrada "+id+" sin "+req);
}
if(existsSync(resolve(root,"builder")))errors.push("No debe existir builder/: Human Webs es solo memoria.");
if(errors.length){console.error("Memoria NO válida:\n"+errors.map(x=>"- "+x).join("\n"));process.exitCode=1;}
else console.log("Memoria válida: "+files.length+" archivos obligatorios, rutas e índice revisados.");
