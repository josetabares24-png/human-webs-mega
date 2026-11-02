import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { deflateSync } from "node:zlib";
import { makeReport, validateStage } from "./report.mjs";

// PNGs sintéticos válidos SOLO para tests. No confundirlos con screenshots reales.
function crc32(data) {
  let c=0xffffffff;
  for(const b of data) {c^=b;for(let j=0;j<8;j++) c=(c>>>1)^((c&1)?0xedb88320:0);}
  return (c^0xffffffff)>>>0;
}
function chunk(name,content) {
  const label=Buffer.from(name),head=Buffer.alloc(4),crc=Buffer.alloc(4);
  head.writeUInt32BE(content.length);crc.writeUInt32BE(crc32(Buffer.concat([label,content])));
  return Buffer.concat([head,label,content,crc]);
}
function png(width,height) {
  const ihdr=Buffer.alloc(13);
  ihdr.writeUInt32BE(width,0);ihdr.writeUInt32BE(height,4);ihdr[8]=8;ihdr[9]=6;
  const pixels=Buffer.alloc((width*4+1)*height);
  return Buffer.concat([Buffer.from("89504e470d0a1a0a","hex"),chunk("IHDR",ihdr),chunk("IDAT",deflateSync(pixels)),chunk("IEND",Buffer.alloc(0))]);
}
async function fixture() {
  const root=await mkdtemp(join(tmpdir(),"human-web-evidence-"));
  for(const stage of ["baseline","candidate"]) {
    const folder=join(root,stage);await mkdir(folder);
    const shots=[];
    for(const page of ["home","interior"])for(const [viewport,width,height] of [["mobile",390,844],["desktop",1280,800]]) {
      const file=stage+"-"+page+"-"+viewport+".png",data=png(width,height);
      await writeFile(join(folder,file),data);
      shots.push({page,viewport,width,height,url:"https://example.com/"+page,httpStatus:200,
        file,sha256:createHash("sha256").update(data).digest("hex"),issues:[],
        checks:{documentTitle:"Sitio de prueba sintético",fontStatus:"loaded",visibleImages:0,brokenVisibleImages:0,h1Count:1,horizontalOverflow:false}});
    }
    await writeFile(join(folder,"manifest.json"),JSON.stringify({
      schemaVersion:1,project:"prueba sintética",stage,capturedAt:"2026-10-31T15:00:00Z",
      browser:"Chromium 144",viewportMode:"viewport_only",screenshots:shots
    }));
  }
  return root;
}
test("four real-format PNG pairs produce a readable comparison without self-approval",async()=>{
 const root=await fixture();
 try{const r=await makeReport(root);assert.equal(r.pairs,4);assert.equal(r.captureWarnings,0);
   const html=await readFile(r.file,"utf8");
   assert.match(html,/No es un certificado de calidad/);
   assert.match(html,/baseline-home-mobile.png/);
   assert.match(html,/candidate-interior-desktop.png/);
   assert.doesNotMatch(html,/100\/100/);
 } finally{await rm(root,{recursive:true,force:true});}
});
test("rejects tampered PNG and does not generate evidence report",async()=>{
 const root=await fixture();
 try {
   const file=join(root,"baseline","baseline-home-mobile.png");
   await writeFile(file,Buffer.from("not-a-png"));
   await assert.rejects(()=>makeReport(root),/SHA256 no coincide/);
 }finally {await rm(root,{recursive:true,force:true});}
});
test("rejects dishonest dimensions and screenshot path traversal",async()=>{
 const root=await fixture();
 try {
   const manifestPath=join(root,"baseline","manifest.json");
   const m=JSON.parse(await readFile(manifestPath,"utf8"));
   m.screenshots[0].width=500;
   await writeFile(manifestPath,JSON.stringify(m));
   await assert.rejects(()=>validateStage(join(root,"baseline"),"baseline"),/Viewport declarado/);
   m.screenshots[0].width=390;m.screenshots[0].file="../candidate.png";
   await writeFile(manifestPath,JSON.stringify(m));
   await assert.rejects(()=>validateStage(join(root,"baseline"),"baseline"),/inseguro/);
 } finally{await rm(root,{recursive:true,force:true});}
});
test("rejects missing page capture even when three have hashes",async()=>{
 const root=await fixture();
 try {
  const path=join(root,"candidate","manifest.json"),m=JSON.parse(await readFile(path,"utf8"));
  m.screenshots.pop();await writeFile(path,JSON.stringify(m));
  await assert.rejects(()=>makeReport(root),/cuatro capturas/);
 } finally{await rm(root,{recursive:true,force:true});}
});
