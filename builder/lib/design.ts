import type { Brief } from "./schema";
// Original compositions using the repo's documented typography and restrained palettes.
// Installed system fallbacks: no third-party fonts or fictitious photography.
export const designs = {
  editorial: {
    name: "01 / Cuaderno",
    description: "Apertura asimétrica, serif y notas al margen.",
    bg: "#f0ece0",
    fg: "#353839",
    muted: "#585b50",
    accent: "#353839",
    heading: 'Georgia, "Times New Roman", serif',
    body: 'Georgia, "Times New Roman", serif',
    ui: '"Trebuchet MS", Arial, sans-serif',
    radius: "0",
    border: "1px solid currentColor",
    shadow: "none",
    button: "outline",
    layout: "margin-notes",
  },
  minimal: {
    name: "02 / Invitación",
    description: "Índice lateral, títulos contenidos y CTA de texto.",
    bg: "#ffffff",
    fg: "#222222",
    muted: "#555555",
    accent: "#222222",
    heading: 'Garamond, "Palatino Linotype", Georgia, serif',
    body: "Georgia, serif",
    ui: '"Arial Narrow", Arial, sans-serif',
    radius: "0",
    border: "0",
    shadow: "none",
    button: "text",
    layout: "side-index",
  },
  bold: {
    name: "03 / Cartel",
    description: "Nombre protagonista, franjas y lista de gran formato.",
    bg: "#161d1b",
    fg: "#f6f0e6",
    muted: "#cec9bd",
    accent: "#e6c38a",
    heading: 'Georgia, "Times New Roman", serif',
    body: '"Trebuchet MS", Arial, sans-serif',
    ui: '"Trebuchet MS", Arial, sans-serif',
    radius: "0",
    border: "1px solid currentColor",
    shadow: "none",
    button: "solid",
    layout: "poster",
  },
} as const;
export function chooseStyle(prompt: string): Brief["style"] {
  if (/oscuro|cartel|expresiv|bold|industrial/i.test(prompt)) return "bold";
  if (/premium|elegan|minimal|lujo|sobri/i.test(prompt)) return "minimal";
  return "editorial";
}
