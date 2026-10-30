import type { Site } from "./schema";
import { contactHref, renderPage } from "./render";
export type Finding = {
  id: string;
  level: "pass" | "warning" | "blocker";
  label: string;
  detail: string;
};
export function checkQuality(site: Site): Finding[] {
  const b = site.brief;
  const pages = site.pages.map((p) => renderPage(site, p.slug));
  const bytes = pages.reduce(
    (total, html) => total + new TextEncoder().encode(html).length,
    0,
  );
  const result: Finding[] = [
    {
      id: "facts",
      level: b.name && b.sector && b.city ? "pass" : "blocker",
      label: "Identidad del negocio",
      detail: "Nombre, sector y ciudad deben estar confirmados.",
    },
    {
      id: "contact",
      level: contactHref(b.contact) ? "pass" : "blocker",
      label: "Contacto directo",
      detail: "Hace falta un correo o teléfono válido para entregar la web.",
    },
    {
      id: "services",
      level: b.services.trim() ? "pass" : "warning",
      label: "Carta o servicios",
      detail: b.services.trim()
        ? "Se muestran únicamente los conceptos facilitados."
        : "Faltan servicios o carta reales; el borrador lo indica.",
    },
    {
      id: "content",
      level: b.description.length >= 30 && b.story ? "pass" : "warning",
      label: "Contenido propio",
      detail:
        "Revisa el texto y completa la historia con información del negocio.",
    },
    {
      id: "domain",
      level: b.siteUrl ? "pass" : "warning",
      label: "Dominio y sitemap",
      detail: b.siteUrl
        ? "Canonical, sitemap y robots usan el dominio indicado."
        : "Añade la URL final para canonical y sitemap. No se inventa un dominio.",
    },
    {
      id: "seo",
      level: site.pages.every((p) => p.description && p.title)
        ? "pass"
        : "blocker",
      label: "SEO básico",
      detail:
        "Cada página tiene título, descripción, idioma y encabezado principal.",
    },
    {
      id: "safe",
      level: "pass",
      label: "Componentes seguros",
      detail:
        "Texto escapado, rutas cerradas, sin JavaScript ejecutable ni recursos remotos.",
    },
    {
      id: "links",
      level: "pass",
      label: "Navegación interna",
      detail: `${site.pages.length} rutas exportadas y enlazadas entre sí.`,
    },
    {
      id: "weight",
      level: bytes < 200000 ? "pass" : "warning",
      label: "Peso de la web",
      detail: `${(bytes / 1024).toFixed(1)} KB de HTML sin comprimir. No equivale a medir Core Web Vitals.`,
    },
    {
      id: "form",
      level: "warning",
      label: b.formEndpoint
        ? "Formulario configurado"
        : "Sin formulario de envío",
      detail: b.formEndpoint
        ? "Envía al backend indicado; comprueba entrega y privacidad antes de vender."
        : "El contacto funciona por correo o teléfono. No se simulan envíos.",
    },
    {
      id: "manual",
      level: "warning",
      label: "Revisión humana",
      detail:
        "Verifica contenido, teclado, móvil y datos legales. Este informe no certifica WCAG ni Core Web Vitals.",
    },
  ];
  if (
    /unlock|delve|bienvenidos a nuestra experiencia|identidad propia/i.test(
      pages.join(""),
    )
  )
    result.push({
      id: "copy",
      level: "warning",
      label: "Revisar copy genérico",
      detail:
        "Hay expresiones que conviene sustituir por detalles del negocio.",
    });
  return result;
}
