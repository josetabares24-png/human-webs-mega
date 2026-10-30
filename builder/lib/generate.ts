// Compatibility entry point for the original single-HTML MVP.
import { createSite } from "./engine";
import { renderPage } from "./render";
export type { BriefInput as Brief } from "./schema";
export function generateSite(brief: import("./schema").BriefInput): string {
  return renderPage(createSite(brief), "index", "single");
}
