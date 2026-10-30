import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, relative, extname, sep } from "node:path";
import { buildSite, output } from "./build.mjs";

await buildSite();
const index = process.argv.indexOf("--port");
const port = Number(
  index > -1 ? process.argv[index + 1] : process.env.PORT || 3435,
);
if (!Number.isInteger(port) || port < 1024 || port > 65535)
  throw new Error("Puerto inválido.");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};
createServer(async (request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Referrer-Policy", "no-referrer");
  response.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; form-action 'none'; base-uri 'none'; frame-ancestors 'none'",
  );
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end("Método no permitido");
    return;
  }
  try {
    const url = new URL(request.url, "http://127.0.0.1");
    const pathname = decodeURIComponent(url.pathname);
    let path = resolve(output, "." + pathname);
    const rel = relative(output, path);
    if (
      rel === ".." ||
      rel.startsWith(".." + sep) ||
      pathname.includes("\\") ||
      pathname.includes("\0")
    ) {
      response.writeHead(403);
      response.end();
      return;
    }
    const info = await stat(path);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(308, { Location: pathname + "/" });
        response.end();
        return;
      }
      path = resolve(path, "index.html");
    }
    const content = await readFile(path);
    response.writeHead(200, {
      "Content-Type": mime[extname(path)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    response.writeHead(error instanceof URIError ? 400 : 404, {
      "Content-Type": "text/html; charset=utf-8",
    });
    response.end(
      '<!doctype html><html lang="es"><meta charset="utf-8"><title>Página no encontrada · Bocumo</title><h1>Por aquí no hay mesa.</h1><a href="/">Volver a Bocumo</a></html>',
    );
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Bocumo abierto en http://127.0.0.1:${port}/`),
);
