import { strToU8, zipSync } from "fflate";
import { renderPage, escapeHtml } from "./render";
import { siteSchema, type Site } from "./schema";
import { checkQuality } from "./quality";
export function exportFiles(input: Site): Record<string, string> {
  const site = siteSchema.parse(input);
  const files: Record<string, string> = Object.fromEntries(
    site.pages.map((p) => [`${p.slug}.html`, renderPage(site, p.slug)]),
  );
  files["human-webs.json"] = JSON.stringify(site, null, 2);
  files["quality.json"] = JSON.stringify(checkQuality(site), null, 2);
  files["vercel.json"] = JSON.stringify(
    {
      cleanUrls: false,
      trailingSlash: false,
      headers: [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
            { key: "X-Frame-Options", value: "DENY" },
          ],
        },
      ],
    },
    null,
    2,
  );
  files["README.txt"] =
    "Web estática de Human Webs. Abre index.html. Revisa quality.json y los datos antes de publicar. Vercel: proyecto Other, sin build. Los JSON de edición e informe son privados: retíralos al publicar manualmente. El panel los excluye automáticamente.";
  const base = site.brief.siteUrl.replace(/\/$/, "");
  if (base) {
    files["sitemap.xml"] =
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${site.pages.map((p) => `<url><loc>${escapeHtml(`${base}/${p.slug === "index" ? "" : `${p.slug}.html`}`)}</loc></url>`).join("")}</urlset>`;
    files["robots.txt"] =
      `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`;
  }
  return files;
}
export function publicFiles(site: Site): Record<string, string> {
  return Object.fromEntries(
    Object.entries(exportFiles(site)).filter(([name]) =>
      /\.html$|^vercel\.json$|^sitemap\.xml$|^robots\.txt$/.test(name),
    ),
  );
}
export function exportZip(site: Site): Uint8Array {
  return zipSync(
    Object.fromEntries(
      Object.entries(exportFiles(site)).map(([name, content]) => [
        name,
        strToU8(content),
      ]),
    ),
    { level: 6 },
  );
}
export async function siteDigest(site: Site): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(
      JSON.stringify(publicFiles(siteSchema.parse(site))),
    ),
  );
  return Array.from(new Uint8Array(digest), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
}
