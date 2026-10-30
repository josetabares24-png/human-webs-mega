import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { reviewCopy } from "./lint.mjs";

test("es: cliches and adjacent repeated words are identified", () => {
  const result = reviewCopy("Descubre una experiencia única en Lisboa.\nSabores sabores para compartir.", { lang: "es" });
  assert.ok(result.some((item) => item.rule === "generic-phrase"));
  assert.ok(result.some((item) => item.rule === "adjacent-repeat"));
});
test("pt-PT: cliches are identified", () => {
  const result = reviewCopy("Uma experiência inesquecível no coração de Lisboa.", { lang: "pt-PT" });
  assert.ok(result.filter((item) => item.rule === "generic-phrase").length >= 2);
});
test("en: cliches are identified", () => {
  assert.ok(reviewCopy("A unique experience for you.", { lang: "en" }).some(
    (item) => item.rule === "generic-phrase"));
});
test("repeated phrases across lines are identified", () => {
  const result = reviewCopy("# Brunch e café na Baixa\n\nBrunch e café na Baixa todos os dias.", { lang: "pt" });
  assert.ok(result.some((item) => item.rule === "repeated-phrase"));
});
test("headings with same opening are identified", () => {
  const result = reviewCopy("# Descubre nuestra carta nueva\n# Descubre nuestra ubicación exacta", { lang: "es" });
  assert.ok(result.some((item) => item.rule === "repeated-heading-opening"));
});
test("clear practical content is not punished", () => {
  const result = reviewCopy("Mil Sabores fica na Rua da Prata 152. Consulte a carta antes de visitar o restaurante.\nOs contactos estão no site.", { lang: "pt" });
  assert.equal(result.length, 0);
});
test("code fences and external links are ignored", () => {
  const triple = "\x60\x60\x60";
  const result = reviewCopy("Veja a carta.\n" + triple + "txt\nexperiência única\n" +
    triple + "\nhttps://exemplo.pt/experiencia-unica", { lang: "pt" });
  assert.equal(result.length, 0);
});
test("allow-listed expressions are exempt", () => {
  const result = reviewCopy("É uma experiência única.", { lang: "pt", allowPhrases: ["experiência única"] });
  assert.equal(result.length, 0);
});
test("CLI strict mode enforces warnings, default does not", () => {
  const command = resolve("tools/copy/lint.mjs");
  const file = resolve("tools/copy/fixtures/bad-es.md");
  const advisory = spawnSync(process.execPath, [command, "--lang", "es", file], { encoding: "utf8" });
  assert.equal(advisory.status, 0, advisory.stderr);
  assert.match(advisory.stdout, /generic-phrase/);
  const strict = spawnSync(process.execPath, [command, "--lang", "es", "--strict", file], { encoding: "utf8" });
  assert.equal(strict.status, 1, strict.stderr);
});
test("repeated street names are not a copy error", () => {
  const result = reviewCopy("# Brunch na Rua da Prata\n\nVeja a carta na Rua da Prata antes de sair.", { lang: "pt" });
  assert.ok(!result.some((item) => item.rule === "repeated-phrase"));
});
test("CLI a good pt-PT example in strict mode passes", () => {
  const command = resolve("tools/copy/lint.mjs");
  const file = resolve("tools/copy/fixtures/good-pt.md");
  const result = spawnSync(process.execPath, [command, "--lang", "pt-PT", "--strict", file], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr + result.stdout);
});
