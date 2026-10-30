#!/usr/bin/env node
// Local Human Webs review: heuristic warnings, not authorship detection.
// No network calls, no rewriting, no external packages.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dictionary = JSON.parse(readFileSync(new URL("./phrases.json", import.meta.url), "utf8"));
const supported = ["es", "pt", "en"];
const filler = new Set(("de da do das dos la el lo los las e o a an the y en em una um un que com con por para " +
  "nossa nosso to and for in na no of se si es is us your tu seus seu nos").split(/\s+/));
const normalize = (value) => value.toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
const tokenize = (value) =>
  [...value.matchAll(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)].map(
    (match) => ({ original: match[0], value: normalize(match[0]), index: match.index })
  );
const escapeRegexp = (value) => [...value].map((ch) =>
  "\\.^$*+?()[]{}|".includes(ch) ? "\\" + ch : ch).join("");
const scrubMarkup = (value) =>
  value.replace(/\x60{3}[\s\S]*?\x60{3}/g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/\x60[^\x60\n]+\x60/g, (m) => " ".repeat(m.length))
    .replace(/https?:\/\/[^\s)]+/g, (m) => " ".repeat(m.length))
    .replace(/<[^>]+>/g, (m) => " ".repeat(m.length))
    .replace(/\]\([^)]+\)/g, "]");

export function reviewCopy(input, options = {}) {
  const lang = String(options.lang || "es").split("-")[0].toLowerCase();
  if (!supported.includes(lang)) throw new Error("Idioma no soportado: " + lang + ". Usa es, pt o en.");
  const allowed = (options.allowPhrases || []).map(normalize);
  const permitted = (value) => allowed.some((phrase) => phrase && (
    normalize(value).includes(phrase) || phrase.includes(normalize(value))
  ));
  const lines = scrubMarkup(String(input)).split(/\r?\n/);
  const issues = [];
  const warn = (rule, line, column, match, message) => {
    if (!permitted(match)) issues.push({ rule, severity: "warning", line: line + 1,
      column: column + 1, match, message });
  };
  const allWords = [], ngrams = new Map(), headings = new Map();
  for (let li = 0; li < lines.length; li++) {
    const raw = lines[li], words = tokenize(raw);
    allWords.push(...words.map((word) => ({ ...word, line: li })));
    for (const pattern of dictionary.languages[lang]) {
      const phrase = normalize(pattern.phrase);
      const re = new RegExp("(?<![\\p{L}])" +
        escapeRegexp(phrase).replace(/\s+/g, "\\s+") + "(?![\\p{L}])", "gu");
      const normalized = normalize(raw);
      for (const hit of normalized.matchAll(re))
        warn("generic-phrase", li, hit.index, raw.slice(hit.index, hit.index + hit[0].length), pattern.why);
    }
    for (let i = 1; i < words.length; i++) {
      const a = words[i - 1], b = words[i];
      const middle = raw.slice(a.index + a.original.length, b.index);
      const properName = /^\p{Lu}/u.test(a.original) && /^\p{Lu}/u.test(b.original);
      if (a.value === b.value && /^\s+$/u.test(middle) && !properName) {
        warn("adjacent-repeat", li, b.index, b.original, "Palabra consecutiva repetida. Comprueba si es intencional.");
      }
    }
    for (let i = 0; i + 4 <= words.length; i++) {
      const part = words.slice(i, i + 4);
      const keys = part.map((word) => word.value);
      if (keys.filter((key) => !filler.has(key)).length < 2) continue;
      const key = keys.join(" ");
      if (!ngrams.has(key)) ngrams.set(key, []);
      ngrams.get(key).push({ line: li, column: part[0].index });
    }
    const heading = raw.match(/^\s*#{1,6}\s+([\p{L}\p{N}].*)/u);
    if (heading) {
      const tokens = tokenize(heading[1]);
      if (tokens.length >= 3 && tokens[0].value.length >= 4) {
        const first = tokens[0].value;
        if (!headings.has(first)) headings.set(first, []);
        headings.get(first).push({ line: li, column: raw.indexOf(tokens[0].original) });
      }
    }
  }
  const reportedPairs = new Set();
  let reports = 0;
  for (const [phrase, places] of ngrams) {
    if (reports >= 6) break;
    const distinct = [...new Set(places.map((p) => p.line))];
    if (distinct.length < 2) continue;
    const pair = distinct[0] + ":" + distinct[1];
    if (reportedPairs.has(pair)) continue;
    reportedPairs.add(pair);
    const p = places.find((item) => item.line === distinct[1]);
    if (!permitted(phrase)) {
      warn("repeated-phrase", p.line, p.column, phrase,
        "Esta secuencia de cuatro palabras se repite en otra línea. ¿Es redundante o importante para la marca/SEO?");
      reports++;
    }
  }
  for (const [word, places] of headings) {
    if (places.length > 1) {
      const p = places[1];
      warn("repeated-heading-opening", p.line, p.column, word,
        "Dos o más títulos comienzan igual. Prueba una jerarquía más específica.");
    }
  }
  const emphasis = {
    es: ["experiencia", "unico", "inolvidable", "especial", "delicioso", "sabores"],
    pt: ["experiencia", "unico", "inesquecivel", "especial", "delicioso", "sabores"],
    en: ["experience", "unique", "unforgettable", "special", "delicious", "flavors"]
  };
  for (const word of emphasis[lang]) {
    const matches = allWords.filter((part) => part.value === word);
    if (matches.length >= 3 && allWords.length >= 25 &&
        matches.length / allWords.length > 0.035) {
      const last = matches.at(-1);
      warn("word-overuse", last.line, last.index, word,
        "Palabra frecuente en este texto. No cambiar palabras clave o nombres legítimos por sinónimos artificiales.");
    }
  }
  return issues.sort((a, b) => a.line - b.line || a.column - b.column || a.rule.localeCompare(b.rule));
}

export function runCli(args) {
  let lang = "es", file, strict = false, asJson = false;
  const allowPhrases = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-h" || arg === "--help") {
      console.log("Uso: node tools/copy/lint.mjs --lang es|pt|en [--strict] [--json] [--allow frase] archivo.md");
      return 0;
    }
    if (arg === "--lang") {
      if (!args[i + 1]) throw new Error("--lang requiere un idioma");
      lang = args[++i];
    } else if (arg === "--allow") {
      if (!args[i + 1]) throw new Error("--allow requiere una frase");
      allowPhrases.push(args[++i]);
    } else if (arg === "--strict") strict = true;
    else if (arg === "--json") asJson = true;
    else if (arg.startsWith("-")) throw new Error("Opción desconocida: " + arg);
    else if (file) throw new Error("Solo se admite un archivo por ejecución");
    else file = arg;
  }
  if (!file) throw new Error("Falta el archivo a revisar");
  if (!/\.(md|txt)$/i.test(file)) throw new Error("Revisar únicamente borradores .md o .txt, no código");
  const issues = reviewCopy(readFileSync(resolve(file), "utf8"), { lang, allowPhrases });
  if (asJson) console.log(JSON.stringify({ file, lang, count: issues.length, issues }, null, 2));
  else {
    for (const item of issues) console.log(
      file + ":" + item.line + ":" + item.column + " [" + item.rule + "] " +
      JSON.stringify(item.match) + " — " + item.message
    );
    console.log("Revisión: " + issues.length + " observaciones. " +
      (issues.length ? "Revisar manualmente, sin sustituir automáticamente." :
        "Sin patrones señalados; todavía requiere lectura editorial."));
  }
  return strict && issues.length ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { process.exitCode = runCli(process.argv.slice(2)); }
  catch (error) { console.error("Copy: " + error.message); process.exitCode = 2; }
}
