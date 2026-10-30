import { z } from "zod";
const text = (max: number) => z.string().trim().max(max);
const httpsUrl = text(500).refine((value) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.hash &&
      !/^(localhost|127\.|0\.|\[|.*\.local$)/i.test(url.hostname) &&
      !/^\d+(\.\d+){3}$/.test(url.hostname) &&
      url.hostname.includes(".")
    );
  } catch {
    return false;
  }
}, "Usa una URL HTTPS pública sin credenciales ni fragmentos.");
export const styles = ["editorial", "minimal", "bold"] as const;
export const briefSchema = z
  .object({
    name: text(100),
    sector: text(100),
    city: text(100),
    description: text(600),
    contact: text(200),
    style: z.enum(styles),
    address: text(250).default(""),
    hours: text(300).default(""),
    services: text(2500).default(""),
    story: text(1500).default(""),
    siteUrl: httpsUrl
      .refine((value) => {
        try {
          return !value || !new URL(value).search;
        } catch {
          return false;
        }
      }, "La URL final no debe incluir parámetros.")
      .default(""),
    formEndpoint: httpsUrl.default(""),
  })
  .strict();
export const pageSchema = z
  .object({
    slug: z.enum(["index", "servicios", "carta", "nosotros", "visita"]),
    label: text(35).min(1),
    title: text(150).min(1),
    description: text(300).min(1),
    heading: text(150).min(1),
    body: text(2000),
  })
  .strict();
export const siteSchema = z
  .object({
    schemaVersion: z.literal(1),
    brief: briefSchema,
    headline: text(150).min(1),
    introduction: text(800),
    pages: z.array(pageSchema).min(2).max(5),
  })
  .strict()
  .superRefine((site, ctx) => {
    const slugs = site.pages.map((page) => page.slug);
    if (
      slugs[0] !== "index" ||
      !slugs.includes("visita") ||
      new Set(slugs).size !== slugs.length
    )
      ctx.addIssue({
        code: "custom",
        message: "La web necesita inicio, visita y rutas únicas.",
      });
  });
export type Brief = z.infer<typeof briefSchema>;
export type BriefInput = z.input<typeof briefSchema>;
export type Site = z.infer<typeof siteSchema>;
export type SitePage = z.infer<typeof pageSchema>;
export const initialBrief: Brief = briefSchema.parse({
  name: "",
  sector: "",
  city: "",
  description: "",
  contact: "",
  style: "editorial",
});
export const versionSchema = z
  .object({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
    label: text(250),
    site: siteSchema,
    source: z.enum(["local", "ai", "manual", "restore"]),
    durationMs: z.number().nonnegative().finite(),
  })
  .strict();
export const projectSchema = z
  .object({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    versions: z.array(versionSchema).min(1).max(50),
  })
  .strict();
export const workspaceSchema = z
  .object({
    schemaVersion: z.literal(1),
    projects: z.array(projectSchema).max(40),
  })
  .strict();
export type Project = z.infer<typeof projectSchema>;
export type Version = z.infer<typeof versionSchema>;
