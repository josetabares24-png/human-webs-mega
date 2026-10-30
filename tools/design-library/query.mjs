import { readFile, stat, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, relative, dirname, isAbsolute, sep } from "node:path";

const library = fileURLToPath(
  new URL("../../design-library/", import.meta.url),
);
const args = process.argv.slice(2);
const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
const json = async (path) => JSON.parse(await readFile(path, "utf8"));
const within = (base, path) => {
  const target = resolve(base, path);
  const rel = relative(base, target);
  if (
    isAbsolute(path) ||
    rel === ".." ||
    rel.startsWith(`..${sep}`) ||
    isAbsolute(rel)
  ) {
    throw new Error(`Ruta fuera de la biblioteca: ${path}`);
  }
  return target;
};

async function check(index) {
  const ids = new Set();
  for (const entry of index.references) {
    if (
      !entry.id ||
      ids.has(entry.id) ||
      !entry.tags?.length ||
      !entry.summary
    ) {
      throw new Error("Registro incompleto o identificador duplicado.");
    }
    ids.add(entry.id);
    const recordPath = within(library, entry.record);
    const record = await json(recordPath);
    const recipe = await json(within(library, entry.recipe));
    if (
      record.id !== entry.id ||
      record.source !== entry.source ||
      record.date !== entry.date ||
      recipe.inspiredBy !== entry.id ||
      !record.observed?.fonts ||
      !record.limits?.length ||
      !record.evidence?.length ||
      !recipe.tokens ||
      !recipe.verification?.length
    ) {
      throw new Error(`Ficha o receta incoherente: ${entry.id}`);
    }
    for (const evidence of record.evidence) {
      const path = within(dirname(recordPath), evidence.path);
      if (!(await stat(path)).isFile())
        throw new Error(`Evidencia ausente: ${evidence.path}`);
      if (path.endsWith(".json")) await json(path);
      if (path.endsWith(".png")) {
        const bytes = await readFile(path);
        if (
          !bytes
            .subarray(0, 8)
            .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        ) {
          throw new Error(`PNG inválido: ${evidence.path}`);
        }
      }
      if (/\.jpe?g$/i.test(path)) {
        const bytes = await readFile(path);
        if (
          bytes[0] !== 255 ||
          bytes[1] !== 216 ||
          bytes[2] !== 255 ||
          bytes[bytes.length - 2] !== 255 ||
          bytes[bytes.length - 1] !== 217
        ) {
          throw new Error(`JPEG inválido: ${evidence.path}`);
        }
      }
    }
  }
  async function noFontBinaries(dir) {
    for (const item of await readdir(dir, { withFileTypes: true })) {
      const path = resolve(dir, item.name);
      if (item.isDirectory()) await noFontBinaries(path);
      else if (/\.(otf|ttf|woff2?|eot)$/i.test(item.name)) {
        throw new Error(
          `No distribuir fuentes observadas: ${relative(library, path)}`,
        );
      }
    }
  }
  await noFontBinaries(library);
  console.log(
    `Biblioteca válida: ${ids.size} referencia(s), fichas, recetas y evidencias enlazadas; sin binarios tipográficos.`,
  );
}

try {
  const index = await json(resolve(library, "index.json"));
  if (
    index.schemaVersion !== 1 ||
    !Array.isArray(index.references) ||
    !index.references.length
  ) {
    throw new Error("Catálogo vacío o versión no soportada.");
  }
  if (args.includes("--check")) {
    await check(index);
  } else {
    const unknown = args.find(
      (arg) => arg.startsWith("--") && arg !== "--recipe",
    );
    if (unknown) throw new Error(`Opción desconocida: ${unknown}`);
    const terms = normalize(
      args.filter((arg) => !arg.startsWith("--")).join(" "),
    )
      .split(/\s+/)
      .filter(Boolean);
    const matches = index.references
      .map((entry) => {
        const haystack = normalize(
          [entry.id, entry.name, entry.case, ...entry.tags, entry.summary].join(
            " ",
          ),
        );
        return {
          entry,
          score: terms.filter((term) => haystack.includes(term)).length,
        };
      })
      .filter(({ score }) => !terms.length || score === terms.length)
      .sort(
        (a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id),
      );
    if (!matches.length) {
      console.error(
        "Sin referencia coincidente. Consulta sin palabras para listar el catálogo; no inventes un caso medido.",
      );
      process.exitCode = 1;
    } else if (args.includes("--recipe")) {
      if (matches.length !== 1)
        throw new Error(
          "Para recuperar una receta, concreta el identificador de una sola referencia.",
        );
      const { entry } = matches[0];
      console.log(
        JSON.stringify(
          {
            reference: entry,
            recipe: await json(within(library, entry.recipe)),
          },
          null,
          2,
        ),
      );
    } else {
      console.log(
        JSON.stringify(
          {
            total: matches.length,
            matches: matches.slice(0, 3).map(({ entry }) => entry),
          },
          null,
          2,
        ),
      );
    }
  }
} catch (error) {
  console.error(`Biblioteca: ${error.message}`);
  process.exitCode = 1;
}
