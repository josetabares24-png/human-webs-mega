import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const s=fileURLToPath(new URL("./editorial.mjs",import.meta.url));
const run=(...args)=>spawnSync(process.execPath,[s,...args],{encoding:"utf8"});
test("validates metadata and detail file",()=>{const r=run("--check");assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/16 fuentes/);});
test("searches cross reference opportunities without aesthetic approval",()=>{
 const r=run("monetizacion");assert.equal(r.status,0,r.stderr);
 const data=JSON.parse(r.stdout);assert.ok(data.total>=2);
 assert.ok(data.matches.every(item=>item.tags.includes("monetizacion") && item.reviewStatus==="researched_not_approved"));
 assert.match(data.caveat,/sin capturas gráficas/);
});
test("does not invent results",()=>{const r=run("neurohiperwebficticio");assert.equal(r.status,1);});
test("rejects unsupported switches",()=>{const r=run("--strict");assert.equal(r.status,2);});
