#!/usr/bin/env node
// Human Webs — offline briefing preflight; checks documentation, not visual merit.
// No network, dependencies, image inspection, provenance verification or "AI score".
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dimensions = ["composition","typography","imagery","navigation","interaction","contentStructure"];
const norm = v => String(v ?? "").normalize("NFKD").replace(/\p{M}/gu,"")
  .toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const has = (v,n=1) => typeof v === "string" && v.trim().length >= n;

export function reviewBrief(brief) {
  const issues=[];
  const warn=(code,path,message)=>issues.push({code,path,message});
  if (!brief || typeof brief !== "object" || Array.isArray(brief)) {
    warn("invalid","$","Se requiere un objeto JSON de briefing.");
    return issues;
  }
  const p=brief.project ?? {};
  for(const key of ["name","sector","primaryTask","brandEvidence"]) {
    if(!has(p[key],key === "primaryTask" ? 12 : 4))
      warn("missing-project","project."+key,"Falta el contexto comprobable del negocio.");
  }
  if(!["new","redesign"].includes(p.mode))
    warn("project-mode","project.mode","Usa new o redesign.");
  if(!Array.isArray(brief.sources) || brief.sources.length < 2)
    warn("sources-missing","sources","Añade dos fuentes estudiadas y fechadas.");
  else brief.sources.forEach((s,i)=>{
    const path="sources["+i+"]";
    if(!s || !has(s.url) || !/^https:\/\//i.test(s.url))
      warn("source-url",path+".url","La fuente debe tener URL HTTPS.");
    if(!has(s?.observed,20) || !has(s?.limitation,15))
      warn("source-evidence",path,"Faltan hecho observado y limitación.");
    if(!/^\d{4}-\d{2}-\d{2}$/.test(String(s?.reviewedAt ?? "")))
      warn("source-date",path+".reviewedAt","Se necesita fecha YYYY-MM-DD.");
    if(!["official","historical-capture","third-party"].includes(s?.evidenceType))
      warn("source-type",path+".evidenceType","Indica fuente oficial, captura de archivo o tercero.");
  });
  if(p.mode === "redesign") {
    const b=brief.baseline ?? {};
    for(const key of ["desktopHome","mobileHome","desktopInnerPage","mobileInnerPage"])
      if(!has(b[key],6))
        warn("baseline-missing","baseline."+key,"Captura original requerida; verifica el archivo manualmente.");
    const c=brief.continuity ?? {};
    for(const key of ["logo","colorType","photography","copy","navigation","contentSeo","commercialFlows"])
      if(!has(c[key],8))
        warn("continuity-missing","continuity."+key,"Documenta lo que conservarás y por qué.");
  }
  const dirs=brief.directions;
  if(!Array.isArray(dirs) || dirs.length < 3)
    warn("three-directions","directions","Necesitas tres direcciones antes de codificar.");
  else {
    const ids=new Set();
    dirs.forEach((d,i)=>{
      const path="directions["+i+"]";
      if(!has(d?.id))warn("direction-id",path+".id","Falta id.");
      else if(ids.has(d.id))warn("direction-duplicate-id",path+".id","Id repetido.");
      else ids.add(d.id);
      if(!has(d?.idea,18) || !has(d?.reason,18) || !has(d?.risk,12))
        warn("direction-rationale",path,"Idea, motivo concreto y riesgo obligatorios.");
      for(const dim of dimensions)
        if(!has(d?.signature?.[dim],3))
          warn("missing-signature",path+".signature."+dim,"La dimensión no está descrita.");
      if(!has(d?.signature?.color,3))
        warn("missing-color-context",path+".signature.color","Describe color; no cuenta como diferenciación.");
    });
    for(let i=0;i<dirs.length;i++)for(let j=i+1;j<dirs.length;j++) {
      const a=dirs[i]?.signature ?? {},b=dirs[j]?.signature ?? {};
      if(!dimensions.every(k=>has(a[k],3) && has(b[k],3)))continue;
      const distinct=dimensions.filter(k=>norm(a[k])!==norm(b[k])).length;
      if(distinct<3)
        warn("recolored-clones","directions["+i+"],directions["+j+"]",
          "Solo "+distinct+"/6 dimensiones no cromáticas distintas. Cambiar paleta no crea otra idea.");
    }
  }
  if(brief.approvedByUser === true) {
    const e=brief.approvalEvidence ?? {};
    if(!has(e.exactFeedback,8) || !has(e.scope,8))
      warn("invented-approval","approvedByUser","No se puede asumir aprobación sin palabras exactas y alcance.");
  }
  const choice=brief.selection ?? {};
  if(!has(choice.id))warn("selection-missing","selection.id","Elige una dirección antes de implementar.");
  else {
    if(!Array.isArray(dirs) || !dirs.some(d=>d?.id===choice.id))
      warn("unknown-choice","selection.id","La opción seleccionada no existe.");
    if(!has(choice.why,20))
      warn("choice-rationale","selection.why","Justifica su ventaja con relación a la marca.");
  }
  return issues;
}
export function runCli(args) {
  let json=false,file=null;
  for(const arg of args) {
    if(arg==="--json")json=true;
    else if(arg==="-h" || arg==="--help") {
      console.log("Uso: node tools/design-preflight/check.mjs [--json] archivo.json");
      return 0;
    } else if(arg.startsWith("-"))throw Error("Opción desconocida: "+arg);
    else if(file)throw Error("Solo se admite un briefing");
    else file=arg;
  }
  if(!file || !file.endsWith(".json"))throw Error("Se necesita un archivo JSON.");
  const issues=reviewBrief(JSON.parse(readFileSync(resolve(file),"utf8")));
  if(json)console.log(JSON.stringify({file,count:issues.length,issues},null,2));
  else {
    for(const issue of issues)
      console.log(issue.path+" ["+issue.code+"] "+issue.message);
    console.log(issues.length?"Briefing incompleto: "+issues.length+" avisos.":
      "Estructura completa; NO demuestra calidad, originalidad ni capturas reales.");
  }
  return issues.length ? 1 : 0;
}
if(process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try{process.exitCode=runCli(process.argv.slice(2));}
  catch(e){console.error("Preflight: "+e.message);process.exitCode=2;}
}
