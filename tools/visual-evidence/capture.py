#!/usr/bin/env python3
"""Human Webs: capturas reales con Playwright. No puntúa estética ni publica resultados."""
import argparse
import hashlib
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

VIEWS = {"mobile": (390, 844), "desktop": (1280, 800)}
PAGES = ("home", "interior")

def valid_url(url):
    if not isinstance(url, str):
        return False
    p = urlparse(url)
    if p.username or p.password or p.fragment or not p.hostname:
        return False
    if p.scheme == "https":
        return True
    return p.scheme == "http" and p.hostname in ("localhost", "127.0.0.1", "::1")

def validate_config(config, stage):
    if not isinstance(config, dict) or not isinstance(config.get("project"), str) or not config["project"].strip():
        raise ValueError("Config debe declarar project")
    pages = config.get("pages")
    if not isinstance(pages, dict) or set(pages) != set(PAGES):
        raise ValueError("Config debe declarar pages.home y pages.interior (sin rutas extra)")
    for page in PAGES:
        urls = pages[page]
        if not isinstance(urls, dict) or not valid_url(urls.get(stage)):
            raise ValueError(f"URL {stage} inválida para {page}; solo HTTPS o localhost HTTP sin credenciales")
    return config

def snapshot(page):
    return page.evaluate("""() => {
      const visible = [...document.images].filter(img => {
        const r = img.getBoundingClientRect();
        return r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
      });
      return {
        fontStatus: document.fonts.status,
        visibleImages: visible.length,
        brokenVisibleImages: visible.filter(img => !img.complete || img.naturalWidth === 0).length,
        h1Count: document.querySelectorAll('h1').length,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth + 2,
        documentTitle: document.title,
        canonical: document.querySelector('link[rel="canonical"]')?.href || null
      };
    }""")

def capture(config, stage, output):
    try:
        from playwright.sync_api import sync_playwright
    except ImportError as exc:
        raise RuntimeError("Falta Playwright Python. Instala playwright y su navegador Chromium localmente.") from exc

    output.mkdir(parents=True, exist_ok=True)
    shots = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        version = browser.version
        try:
            for label in PAGES:
                for viewport, (width, height) in VIEWS.items():
                    url = config["pages"][label][stage]
                    context = browser.new_context(
                        viewport={"width": width, "height": height},
                        device_scale_factor=1,
                        reduced_motion="reduce",
                        locale="es-ES",
                        color_scheme="light",
                    )
                    tab = context.new_page()
                    console_errors = []
                    tab.on("pageerror", lambda err, arr=console_errors: arr.append(str(err)[:300]))
                    try:
                        response = tab.goto(url, wait_until="domcontentloaded", timeout=30000)
                        tab.evaluate("() => document.fonts.ready")
                        tab.evaluate("""async () => {
                          const imgs = [...document.images].filter(img => {
                            const r=img.getBoundingClientRect();
                            return r.bottom>0 && r.top<innerHeight && r.left<innerWidth && r.right>0;
                          });
                          await Promise.race([
                            Promise.all(imgs.map(img=>img.decode().catch(()=>null))),
                            new Promise(resolve=>setTimeout(resolve,6000))
                          ]);
                        }""")
                        info = snapshot(tab)
                        filename = f"{stage}-{label}-{viewport}.png"
                        data = tab.screenshot(
                            path=str(output / filename),
                            type="png",
                            animations="disabled",
                            caret="hide",
                            full_page=False,
                            scale="css",
                        )
                        status = response.status if response else None
                        issues = []
                        if status is None or status >= 400:
                            issues.append("http_status")
                        if info["brokenVisibleImages"]:
                            issues.append("broken_visible_images")
                        if info["fontStatus"] != "loaded":
                            issues.append("fonts_not_ready")
                        if info["horizontalOverflow"]:
                            issues.append("horizontal_overflow")
                        if info["h1Count"] != 1:
                            issues.append("h1_count")
                        if console_errors:
                            issues.append("page_errors")
                        shots.append({
                            "page": label, "viewport": viewport, "width": width,
                            "height": height, "url": tab.url, "httpStatus": status,
                            "file": filename, "sha256": hashlib.sha256(data).hexdigest(),
                            "checks": info, "issues": issues, "pageErrors": console_errors[:6]
                        })
                    finally:
                        context.close()
        finally:
            browser.close()
    manifest = {
        "schemaVersion": 1, "project": config["project"], "stage": stage,
        "capturedAt": datetime.now(timezone.utc).isoformat(),
        "browser": "Chromium " + version,
        "viewportMode": "viewport_only",
        "screenshots": shots,
        "certification": "Capture evidence only. Design quality, SEO and accessibility NOT certified."
    }
    (output / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf8")
    print(f"{stage}: {len(shots)} capturas en {output}; incidencias: {sum(bool(x['issues']) for x in shots)}")

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--config", required=True, type=Path)
    p.add_argument("--stage", choices=("baseline", "candidate"), required=True)
    p.add_argument("--out", required=True, type=Path)
    p.add_argument("--check-config", action="store_true")
    args = p.parse_args()
    config = validate_config(json.loads(args.config.read_text(encoding="utf8")), args.stage)
    if args.check_config:
        print(f"Configuración {args.stage} válida (no se tomaron capturas).")
        return
    capture(config, args.stage, args.out)

if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, RuntimeError) as exc:
        raise SystemExit(f"Visual evidence: {exc}") from exc
