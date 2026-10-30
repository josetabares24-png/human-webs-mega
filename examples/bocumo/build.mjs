import { mkdir, writeFile, cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { pages, renderPage } from "./site.mjs";

export const root = fileURLToPath(new URL("./", import.meta.url));
export const output = join(root, "dist");
export async function buildSite() {
  await mkdir(output, { recursive: true });
  await cp(join(root, "public"), output, { recursive: true });
  for (const page of pages) {
    const directory = join(output, page.path);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), renderPage(page));
  }
  console.log(`Bocumo: ${pages.length} páginas listas en ${output}`);
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1])
  await buildSite();
