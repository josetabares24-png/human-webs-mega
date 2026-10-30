import assert from "node:assert/strict";
import test from "node:test";
import { generateSite, type Brief } from "../lib/generate";

const brief: Brief = {
  name: "Casa Oliva",
  sector: "Restaurante",
  city: "Lisboa",
  description: "Carta propia.",
  contact: "",
  style: "editorial",
};

test("escapes untrusted text and attributes", () => {
  const html = generateSite({
    ...brief,
    name: "<script>alert(1)</script>",
    description: '"/><img src=x onerror=alert(1)>',
    contact: "javascript:alert(1)",
  });
  assert.ok(!html.includes("<script>"));
  assert.ok(!html.includes("<img"));
  assert.ok(!html.includes('href="javascript:'));
  assert.ok(html.includes("&lt;script&gt;"));
});

test("metadata truncation cannot leave an unescaped attribute", () => {
  const html = generateSite({
    ...brief,
    description: "a".repeat(153) + '"/><script>alert(1)</script>',
  });
  assert.ok(!html.includes("<script>"));
  assert.match(html, /<meta name="description" content="a+&quot;\//);
});

test("contact is actionable only when supplied", () => {
  assert.match(
    generateSite({ ...brief, contact: "ola@example.com" }),
    /href="mailto:/,
  );
  assert.match(
    generateSite({ ...brief, contact: "+351 912 345 678" }),
    /href="tel:\+351912345678"/,
  );
  assert.ok(!generateSite(brief).includes("Solicitar información</a>"));
});
