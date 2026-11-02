import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("./arrows.mjs", import.meta.url));
const invoke = (...args) => spawnSync(process.execPath, [script, ...args], { encoding: "utf8" });
async function withSite(files, callback) {
  const root = await mkdtemp(join(tmpdir(), "human-web-arrows-"));
  try {
    for (const [path, content] of Object.entries(files)) {
      const parts = path.split("/");
      if (parts.length > 1) await mkdir(join(root, ...parts.slice(0, -1)), { recursive: true });
      await writeFile(join(root, ...parts), content);
    }
    return await callback(root);
  } finally { await rm(root, { recursive: true, force: true }); }
}

test("text-only CTAs pass", () => withSite({
  "src/Button.tsx": '<a href="/blog" className="button">Leer la guía</a>\n<button type="submit">Enviar solicitud</button>'
}, root => {
  const run = invoke(root, "--strict", "--json");
  assert.equal(run.status, 0, run.stderr);
  assert.equal(JSON.parse(run.stdout).warnings.length, 0);
}));

test("flags arrow icons, Unicode and entities without confusing JS arrow functions", () => withSite({
  "src/Card.tsx": 'const f=()=>42;\n<a href="/x">Ver guía ↗</a>\n<ArrowUpRight size={16} />\n<p>Ver más &rarr;</p>'
}, root => {
  const run = invoke(root, "--strict", "--json");
  assert.equal(run.status, 1, run.stderr);
  const items = JSON.parse(run.stdout).warnings;
  assert.equal(items.length, 3);
  assert.ok(items.every(x => x.line > 1 && ["arrow-icon", "arrow-glyph", "arrow-entity"].includes(x.kind)));
}));

test("functional arrows can be explicitly annotated, build output is excluded", () => withSite({
  "src/Carousel.tsx": '// human-web-arrow-functional: controls de carrusel anterior/siguiente\n<button aria-label="Siguiente"><ChevronRight /></button>',
  "node_modules/Demo.tsx": '<ArrowRight />',
  ".next/Chunk.tsx": '<ArrowRight />',
}, root => {
  const run = invoke(root, "--strict", "--json");
  assert.equal(run.status, 0, run.stderr);
  assert.equal(JSON.parse(run.stdout).scannedFiles, 1);
}));

test("unknown flag and empty directory fail without claiming success", () => withSite({
  "README.txt": "Not a UI file."
}, root => {
  assert.equal(invoke(root, "--unknown").status, 2);
  assert.equal(invoke(root, "--strict").status, 2);
}));
