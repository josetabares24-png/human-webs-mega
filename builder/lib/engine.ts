import {
  briefSchema,
  siteSchema,
  type Brief,
  type BriefInput,
  type Site,
} from "./schema";
import { chooseStyle } from "./design";
const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export function interpretBrief(prompt: string, current: BriefInput): Brief {
  const next = briefSchema.parse(current);
  const input = normalize(prompt);
  const sectors: [RegExp, string][] = [
    [/barber|peluquer/, "Barbería"],
    [/restaur|taberna|bistro/, "Restaurante"],
    [/cafeter|cafe\b/, "Cafetería"],
    [/arquitect/, "Arquitectura"],
    [/fotograf/, "Fotografía"],
    [/florist/, "Floristería"],
    [/dentist|dental/, "Clínica dental"],
  ];
  next.sector =
    sectors.find(([pattern]) => pattern.test(input))?.[1] ?? next.sector;
  const city = prompt.match(
    /\ben\s+([\p{L}][\p{L}\s'-]{1,65}?)(?=[.,;\n]|\s+(?:con|para|que|llamad[oa]|de\s+estilo)\b|$)/iu,
  )?.[1];
  const name = prompt.match(
    /(?:llamad[oa]|nombre[:\s]+)\s*[«"“]?([^»"”\n,.;]{1,100})/iu,
  )?.[1];
  const email = prompt.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i)?.[0];
  if (city) next.city = city.trim();
  if (name) next.name = name.trim();
  if (email) next.contact = email;
  if (
    /oscuro|cartel|expresiv|bold|industrial|premium|elegan|minimal|lujo|sobri|editorial|calid/i.test(
      input,
    )
  )
    next.style = chooseStyle(prompt);
  return briefSchema.parse(next);
}
export function createSite(input: BriefInput): Site {
  const brief = briefSchema.parse(input);
  const name = brief.name || "Nombre pendiente";
  const category = brief.sector || "Negocio";
  const place = brief.city ? ` en ${brief.city}` : "";
  const restaurant = /restaur|cafeter|taberna/i.test(category);
  const description =
    brief.description ||
    `${category}${place}. Consulta los detalles y el contacto de ${name}.`;
  return siteSchema.parse({
    schemaVersion: 1,
    brief,
    headline: `${category}${place}.`.slice(0, 150),
    introduction: description,
    pages: [
      {
        slug: "index",
        label: "Inicio",
        title: `${name}${place}`.slice(0, 150),
        description: description.slice(0, 300),
        heading: `${category}${place}`.slice(0, 150),
        body: description,
      },
      {
        slug: restaurant ? "carta" : "servicios",
        label: restaurant ? "La carta" : "Servicios",
        title: `${restaurant ? "Carta" : "Servicios"} · ${name}`,
        description:
          `${restaurant ? "Carta" : "Servicios"} de ${name}${place}.`.slice(
            0,
            300,
          ),
        heading: restaurant ? "La carta, en detalle." : "Lo que hacemos.",
        body: brief.services
          ? ""
          : "Los detalles se añadirán cuando el negocio los confirme.",
      },
      {
        slug: "nosotros",
        label: restaurant ? "La casa" : "El estudio",
        title: `Nosotros · ${name}`,
        description: `${name}${place}. Conoce el negocio.`.slice(0, 300),
        heading: name,
        body: brief.story || description,
      },
      {
        slug: "visita",
        label: "Visita y contacto",
        title: `Contacto · ${name}`,
        description: `Ubicación y contacto de ${name}${place}.`.slice(0, 300),
        heading: "Hablemos.",
        body: "",
      },
    ],
  });
}
export type EditResult = { site: Site; message: string; changed: boolean };
export function updateSiteBrief(site: Site, input: BriefInput): Site {
  const brief = briefSchema.parse(input);
  const old = createSite(site.brief);
  const fresh = createSite(brief);
  const headline =
    site.headline === old.headline ? fresh.headline : site.headline;
  return siteSchema.parse({
    ...site,
    brief,
    headline,
    introduction:
      site.introduction === old.introduction
        ? fresh.introduction
        : site.introduction,
    pages: site.pages.map((p) => {
      const index = old.pages.findIndex((previous) => previous.slug === p.slug);
      if (index < 0) return p;
      const original = old.pages[index];
      const replacement = fresh.pages[index];
      return {
        ...p,
        slug: replacement.slug,
        label: p.label === original.label ? replacement.label : p.label,
        title:
          p.title === original.title
            ? replacement.title
            : p.title.replaceAll(site.brief.name || "\u0000", brief.name),
        description:
          p.description === original.description
            ? replacement.description
            : p.description,
        heading:
          p.heading === original.heading ? replacement.heading : p.heading,
        body:
          ["nosotros", "servicios", "carta"].includes(p.slug) ||
          p.body === original.body
            ? replacement.body
            : p.body,
      };
    }),
  });
}
export function editLocally(site: Site, instruction: string): EditResult {
  const next = siteSchema.parse(site);
  const input = normalize(instruction);
  let changed = true;
  if (/^(?:cambia (?:la cabecera|el titular)|titular)\s*:/i.test(instruction)) {
    const headline = instruction
      .slice(instruction.indexOf(":") + 1)
      .trim()
      .slice(0, 150);
    if (headline) {
      next.headline = headline;
      next.pages[0].heading = headline;
    } else changed = false;
  } else if (/^descripcion\s*:/.test(input)) {
    const description = instruction
      .slice(instruction.indexOf(":") + 1)
      .trim()
      .slice(0, 600);
    next.brief.description = description;
    next.introduction = description;
    next.pages[0].description =
      description.slice(0, 300) || next.pages[0].description;
    next.pages[0].body = description;
  } else if (/^contacto\s*:/.test(input))
    next.brief.contact = instruction
      .slice(instruction.indexOf(":") + 1)
      .trim()
      .slice(0, 200);
  else if (/elegan|minimal|sobri|invitacion/.test(input))
    next.brief.style = "minimal";
  else if (/oscuro|cartel|expresiv/.test(input)) next.brief.style = "bold";
  else if (/editorial|calid|cuaderno/.test(input))
    next.brief.style = "editorial";
  else changed = false;
  return {
    site: siteSchema.parse(next),
    changed,
    message: changed
      ? "Cambio aplicado. He creado una versión que puedes restaurar."
      : "En modo local puedo cambiar el estilo o aplicar «Titular: …», «Descripción: …» y «Contacto: …». Para instrucciones abiertas, configura IA en Conexiones.",
  };
}
