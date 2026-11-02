import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("./bridge.mjs", import.meta.url));
const run = (...args) => spawnSync(process.execPath, [script, ...args], { encoding: "utf8" });

test("validate curated links across catalogs", () => {
  const result = run("--check");
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Puentes válidos:/);
});
test("tourism conversion draws one different sector with evidence limits", () => {
  const result = run("turismo", "conversion");
  assert.equal(result.status, 0, result.stderr);
  const out = JSON.parse(result.stdout);
  assert.equal(out.targetSector, "turismo");
  assert.equal(out.status, "ideas_to_test_not_approved");
  assert.ok(out.sectorReferences.every(x => x.sector === "turismo"));
  assert.ok(out.crossSectorIdeas.every(x => x.sector !== "turismo" && x.doNotCopy));
  assert.ok(out.limits.length >= 2);
});
test("no invented matching ideas", () => {
  const result = run("turismo", "vender-ropa");
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Sin puente documentado/);
});
test("unknown options fail explicitly", () => {
  const result = run("--all");
  assert.equal(result.status, 1);
});
