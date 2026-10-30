import { z } from "zod";
import { pageSchema, siteSchema, type Site } from "./schema";

export const pagePatchSchema = pageSchema
  .omit({ slug: true })
  .partial()
  .strict();
export type PagePatch = z.infer<typeof pagePatchSchema>;

export function updatePage(
  input: Site,
  slug: string,
  inputPatch: unknown,
): Site {
  const site = siteSchema.parse(input);
  const patch = pagePatchSchema.parse(inputPatch);
  const index = site.pages.findIndex((page) => page.slug === slug);
  if (index < 0) throw new Error("La página seleccionada no existe.");
  site.pages[index] = pageSchema.parse({ ...site.pages[index], ...patch });
  if (slug === "index") {
    if (patch.heading !== undefined) site.headline = patch.heading;
    if (patch.body !== undefined) site.introduction = patch.body;
  }
  return siteSchema.parse(site);
}

// Nullable fields are required by the strict structured-output contract.
// Null means "leave this field unchanged"; business facts and routes are absent.
export const aiPageEditSchema = z
  .object({
    style: z.enum(["editorial", "minimal", "bold"]).nullable(),
    changes: z
      .object({
        label: pageSchema.shape.label.nullable(),
        title: pageSchema.shape.title.nullable(),
        description: pageSchema.shape.description.nullable(),
        heading: pageSchema.shape.heading.nullable(),
        body: pageSchema.shape.body.nullable(),
      })
      .strict(),
  })
  .strict();

export function mergeAiPageEdit(
  site: Site,
  slug: string,
  input: unknown,
): Site {
  const result = aiPageEditSchema.parse(input);
  const patch = Object.fromEntries(
    Object.entries(result.changes).filter(([, value]) => value !== null),
  );
  const next = updatePage(site, slug, patch);
  if (result.style !== null) next.brief.style = result.style;
  return siteSchema.parse(next);
}

export function buildPageContext(
  input: Site,
  instruction: string,
  slug: string,
) {
  const site = siteSchema.parse(input);
  const page = site.pages.find((page) => page.slug === slug);
  if (!page) throw new Error("La página seleccionada no existe.");
  const b = site.brief;
  return {
    instruction,
    business: {
      name: b.name,
      sector: b.sector,
      city: b.city,
      description: b.description,
      ...(slug === "nosotros" ? { story: b.story } : {}),
      ...(slug === "servicios" || slug === "carta"
        ? { services: b.services }
        : {}),
      ...(slug === "visita"
        ? { address: b.address, hours: b.hours, contact: b.contact }
        : {}),
    },
    style: b.style,
    page: {
      ...page,
      ...(slug === "index"
        ? { heading: site.headline, body: site.introduction }
        : {}),
    },
  };
}
