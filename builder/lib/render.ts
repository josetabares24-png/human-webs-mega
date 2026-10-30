import { designs } from "./design";
import { previewScript } from "./preview-script";
import { siteSchema, type Site, type SitePage } from "./schema";
export const escapeHtml = (value: string): string =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const e = escapeHtml;
export function contactHref(contact: string): string | null {
  if (/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(contact))
    return `mailto:${encodeURIComponent(contact)}`;
  if (
    /^\+?[\d\s()-]{7,22}$/.test(contact) &&
    contact.replace(/\D/g, "").length >= 7
  )
    return `tel:${contact.replace(/[^+\d]/g, "")}`;
  return null;
}
export function renderCss(style: Site["brief"]["style"]): string {
  const t = designs[style];
  return `:root{--bg:${t.bg};--fg:${t.fg};--muted:${t.muted};--accent:${t.accent};--display:${t.heading};--body:${t.body};--ui:${t.ui};--radius:${t.radius};--border:${t.border};--shadow:${t.shadow};--space:clamp(24px,5vw,72px)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--fg);font:18px/1.65 var(--body);overflow-wrap:anywhere}a{color:inherit;text-underline-offset:5px}a:focus-visible,input:focus-visible,textarea:focus-visible,button:focus-visible{outline:3px solid var(--accent);outline-offset:5px}a,button{min-height:44px;display:inline-flex;align-items:center}button,input,textarea{font:inherit}header,main,footer{max-width:1280px;margin:auto;padding-inline:var(--space)}header{padding-block:26px;display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:1px solid var(--fg)}.brand{font:24px/1.2 var(--display);text-decoration:none}nav{display:flex;flex-wrap:wrap;gap:8px 24px;font:14px var(--ui)}nav a{padding:4px 0}nav a[aria-current=page]{text-decoration-thickness:2px}.skip{position:absolute;top:-100px;left:20px;background:var(--bg);padding:12px;z-index:2}.skip:focus{top:8px}main{min-height:65vh}.hero{padding-block:var(--space);border-bottom:1px solid var(--fg)}.eyebrow{font:12px/1.5 var(--ui);letter-spacing:.13em;text-transform:uppercase;margin:0 0 30px}.hero h1{font:400 clamp(42px,7vw,88px)/1.08 var(--display);letter-spacing:-.045em;margin:0 0 32px;max-width:900px}.hero h2{font:400 clamp(36px,5vw,64px)/1.15 var(--display);margin-top:0}.lede{font-size:clamp(19px,2.3vw,25px);max-width:720px}.cta{font:15px var(--ui);padding:14px 24px;border:var(--border);border-radius:var(--radius);box-shadow:var(--shadow);text-decoration:none;margin-block:18px;color:var(--fg);background:transparent}.details{padding-block:var(--space);max-width:900px}.details h2{font:400 clamp(28px,4vw,42px)/1.2 var(--display);margin-top:0}.details p{white-space:pre-line;max-width:720px}dl{margin:0}dt{font:13px var(--ui);text-transform:uppercase;letter-spacing:.1em;margin-top:28px}dd{margin:8px 0 0;white-space:pre-line}table{width:100%;border-collapse:collapse}caption{text-align:left;font:13px var(--ui);padding-bottom:16px}th,td{text-align:left;border-bottom:1px solid var(--fg);padding:20px 10px 20px 0}th{font:13px var(--ui)}td:last-child{white-space:nowrap;text-align:right}small{display:block;font-size:15px;color:var(--muted)}footer{border-top:1px solid var(--fg);padding-block:28px 48px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font:14px var(--ui)}form{max-width:600px;margin-top:30px}label{display:block;margin:16px 0}input,textarea{display:block;width:100%;padding:12px;background:var(--bg);color:var(--fg);border:1px solid var(--fg);border-radius:0}button{cursor:pointer}.consent{display:flex;gap:12px;align-items:flex-start}.consent input{width:20px;min-height:24px;flex-shrink:0}.notice{color:var(--muted);font:14px/1.6 var(--ui)}
body.editorial .hero{display:grid;grid-template-columns:1fr 2.5fr;gap:36px}body.editorial .eyebrow{padding-top:12px}body.editorial .hero h1{max-width:680px}body.minimal header{align-items:flex-start}body.minimal nav{flex-direction:column;min-width:140px}body.minimal main{padding-left:clamp(24px,23vw,300px)}body.minimal .hero{padding-top:90px;border-bottom:0}body.minimal .hero h1{font-size:clamp(38px,5vw,62px);max-width:630px}body.minimal .cta{padding:10px 0;text-transform:uppercase;letter-spacing:.08em;text-decoration:underline}body.bold .hero{padding-block:30px 64px}body.bold .hero h1{font-weight:700;font-size:clamp(44px,9vw,120px);text-transform:uppercase;letter-spacing:-.02em}body.bold .eyebrow{padding-block:16px;border-bottom:1px solid var(--accent);color:var(--accent)}body.bold .cta{background:var(--fg);color:var(--bg)}body.bold .details{max-width:none}body.bold td{font-size:22px}
@media(max-width:640px){body{font-size:17px}header{flex-direction:column;align-items:flex-start;gap:16px}nav{gap:4px 18px}body.editorial .hero{display:block}body.minimal nav{flex-direction:row}body.minimal main{padding-left:var(--space)}body.minimal .hero{padding-top:40px}table{font-size:16px}.hero h1{font-size:clamp(38px,10vw,62px)}td:last-child{white-space:normal}.details{padding-block:36px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}`;
}
function services(site: Site): string {
  const rows = site.brief.services
    .split("\n")
    .filter((row) => row.trim())
    .map((row) => {
      const [name, price = "", detail = ""] = row.split("|");
      return `<tr><td>${e(name.trim())}${detail ? `<small>${e(detail.trim())}</small>` : ""}</td><td>${e(price.trim())}</td></tr>`;
    })
    .join("");
  return rows
    ? `<table><caption>${e(site.pages.find((p) => p.slug === "carta" || p.slug === "servicios")?.label || "Servicios")} · ${e(site.brief.name)}</caption><thead><tr><th scope="col">Concepto</th><th scope="col">Precio</th></tr></thead><tbody>${rows}</tbody></table>`
    : "";
}
function contact(site: Site, preview: boolean): string {
  const b = site.brief;
  const href = contactHref(b.contact);
  return `<dl>${b.city ? `<dt>Ciudad</dt><dd>${e(b.city)}</dd>` : ""}${b.address ? `<dt>Dirección</dt><dd>${e(b.address)}<br><a href="https://www.google.com/maps/search/?api=1&amp;query=${e(encodeURIComponent(`${b.address}, ${b.city}`))}" rel="noopener noreferrer">Cómo llegar</a></dd>` : ""}${b.hours ? `<dt>Horario</dt><dd>${e(b.hours)}</dd>` : ""}${href ? `<dt>Contacto</dt><dd><a href="${e(href)}">${e(b.contact)}</a></dd>` : "<dt>Contacto</dt><dd>El negocio todavía no ha indicado un contacto directo.</dd>"}</dl>
${b.formEndpoint ? `<form action="${e(b.formEndpoint)}" method="post"><h2>Escríbenos</h2>${preview ? '<p class="notice">El envío está desactivado en la vista previa. El HTML exportado envía al servicio configurado.</p><fieldset disabled>' : ""}<label>Nombre<input name="name" autocomplete="name" required maxlength="100"></label><label>Correo<input type="email" name="email" autocomplete="email" required maxlength="200"></label><label>Mensaje<textarea name="message" rows="4" required maxlength="3000"></textarea></label><label class="consent"><input type="checkbox" name="consent" value="yes" required>Autorizo a este negocio a responder a mi consulta usando estos datos.</label><p class="notice">El mensaje se envía a ${e(new URL(b.formEndpoint).hostname)}. No se guarda en esta web.</p><button class="cta" type="submit">Enviar consulta</button>${preview ? "</fieldset>" : ""}</form>` : ""}`;
}
export function renderPage(
  input: Site,
  slug = "index",
  mode: "export" | "preview" | "single" = "export",
): string {
  const site = siteSchema.parse(input);
  const page = site.pages.find((p) => p.slug === slug) || site.pages[0];
  const inline = mode !== "export";
  const link = (p: SitePage) =>
    mode === "preview"
      ? `#page-${p.slug}`
      : inline
        ? `#${p.slug === "visita" ? "contacto" : p.slug}`
        : `${p.slug}.html`;
  const visit = site.pages.find((p) => p.slug === "visita")!;
  const nav = site.pages
    .map(
      (p) =>
        `<a href="${link(p)}"${p.slug === page.slug && mode !== "preview" ? ' aria-current="page"' : ""}>${e(p.label)}</a>`,
    )
    .join("");
  const body = (p: SitePage) => {
    const isHome = p.slug === "index";
    return `<section id="${p.slug === "visita" ? "contacto" : p.slug}" class="hero"><p class="eyebrow">${e(site.brief.sector)}${site.brief.city ? ` / ${e(site.brief.city)}` : ""}</p><div><h${mode === "single" && !isHome ? "2" : "1"}>${e(isHome ? site.headline : p.heading)}</h${mode === "single" && !isHome ? "2" : "1"}>${isHome ? `<p class="lede">${e(site.introduction)}</p><a class="cta" href="${link(visit)}">Visita y contacto</a>` : ""}</div></section><section class="details" aria-label="${e(p.label)}">${p.slug === "visita" ? (p.body ? `<p>${e(p.body)}</p>` : "") + contact(site, mode === "preview") : p.slug === "carta" || p.slug === "servicios" ? services(site) + (p.body ? `<p>${e(p.body)}</p>` : "") : !isHome ? `<p>${e(p.body)}</p>` : `<h2>${e(site.brief.name || "Nombre pendiente")}</h2><p>${e(site.brief.city)}</p>`}</section>`;
  };
  const canonical = site.brief.siteUrl
    ? `${site.brief.siteUrl.replace(/\/$/, "")}/${page.slug === "index" ? "" : `${page.slug}.html`}`
    : "";
  const structured = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brief.name,
    description: site.brief.description,
    ...(canonical ? { url: canonical } : {}),
    ...(site.brief.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.brief.address,
            addressLocality: site.brief.city,
          },
        }
      : {}),
  }).replace(/</g, "\\u003c");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; ${mode === "preview" ? "script-src 'sha256-X+1Y5hy9ZKZCOpTwgrPltQFYyRL+WGS25bwp7VY2Yck=';" : ""} style-src 'unsafe-inline' 'self'; img-src 'self' data:; base-uri 'none'; form-action ${site.brief.formEndpoint ? e(new URL(site.brief.formEndpoint).origin) : "'none'"}"><title>${e(page.title)}</title><meta name="description" content="${e(page.description.slice(0, 155))}"><meta name="color-scheme" content="${site.brief.style === "bold" ? "dark" : "light"}"><meta property="og:title" content="${e(page.title)}"><meta property="og:description" content="${e(page.description.slice(0, 155))}">${canonical ? `<link rel="canonical" href="${e(canonical)}">` : ""}<style>${renderCss(site.brief.style)}${mode === "preview" ? ".preview-page{display:none}.preview-page.default-page{display:block}main:has(.preview-page:target) .preview-page{display:none}main .preview-page:target{display:block}" : ""}</style>${mode === "preview" ? "" : `<script type="application/ld+json">${structured}</script>`}</head><body class="${site.brief.style}"><a class="skip" href="#contenido">Saltar al contenido</a><header><a class="brand" href="${mode === "preview" ? "#page-index" : inline ? "#index" : "index.html"}">${e(site.brief.name || "Nombre pendiente")}</a><nav aria-label="Principal">${nav}</nav></header><main id="contenido">${mode === "preview" ? site.pages.map((p) => `<article id="page-${p.slug}" class="preview-page${p.slug === page.slug ? " default-page" : ""}">${body(p)}</article>`).join("") : inline ? site.pages.map(body).join("") : body(page)}</main><footer><span>${e(site.brief.name)}</span><span>${e(site.brief.city)}</span><a href="${link(visit)}">Contacto</a></footer>${mode === "preview" ? `<script>${previewScript}</script>` : ""}</body></html>`;
}
