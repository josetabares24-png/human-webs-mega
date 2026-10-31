import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { reviewBrief } from "./check.mjs";
const fixture=n=>JSON.parse(readFileSync(new URL("./fixtures/"+n+".json",import.meta.url),"utf8"));
const codes=d=>reviewBrief(d).map(x=>x.code);
test("three distinct dimensions beyond color",()=>assert.deepEqual(reviewBrief(fixture("good-new")),[]));
test("three recolored clones are flagged",()=>{
 const a=codes(fixture("bad-recolored-clones"));
 assert.ok(a.filter(x=>x==="recolored-clones").length>=2);
});
test("redesign requires original and continuity",()=>{
 const c=codes(fixture("bad-redesign-no-baseline"));
 assert.ok(c.includes("baseline-missing")&&c.includes("continuity-missing"));
});
test("self-reported complete brief is only structure",()=>assert.deepEqual(reviewBrief(fixture("good-redesign-structure-only")),[]));
test("source evidence/limitations must be documented",()=>{
 const a=fixture("good-new");a.sources[0].observed="nice";a.sources[1].evidenceType="unknown";
 assert.ok(codes(a).includes("source-evidence")&&codes(a).includes("source-type"));
});
test("no approval invented",()=>{
 const a=fixture("good-new");a.approvedByUser=true;
 assert.ok(codes(a).includes("invented-approval"));
 a.approvalEvidence={exactFeedback:"Me gusta la cabecera y su tipografía",scope:"Solo cabecera de la opción A"};
 assert.ok(!codes(a).includes("invented-approval"));
});
test("unknown selection is rejected",()=>{
 const a=fixture("good-new");a.selection.id="other";
 assert.ok(codes(a).includes("unknown-choice"));
});
test("invalid data returns error",()=>assert.ok(codes(null).includes("invalid")));
test("CLI good and bad exit codes",()=>{
 const cmd=resolve("tools/design-preflight/check.mjs");
 const a=spawnSync(process.execPath,[cmd,"tools/design-preflight/fixtures/good-new.json"],{encoding:"utf8"});
 const b=spawnSync(process.execPath,[cmd,"--json","tools/design-preflight/fixtures/bad-recolored-clones.json"],{encoding:"utf8"});
 assert.equal(a.status,0,a.stderr);assert.equal(b.status,1,b.stderr);
 assert.match(b.stdout,/recolored-clones/);
});
