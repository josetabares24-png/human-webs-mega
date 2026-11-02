# Human Webs — capturas antes/después con evidencia real

Herramienta de **validación visual basada en capturas de navegador**, no «medidor de belleza». Separa adquisición real de imágenes, integridad de evidencia y decisión editorial. Inspirada en las prácticas documentadas oficialmente por Playwright sobre screenshots deterministas y comparación en el mismo entorno: https://playwright.dev/docs/test-snapshots y https://playwright.dev/docs/screenshots .

## Qué hace de verdad
- Con Python + Playwright captura **home e interior, a 390×844 y 1280×800**, para dos versiones: `baseline` y `candidate` (8 capturas). Usa `scale="css"`, `reduced_motion="reduce"`, `animations="disabled"`, espera fuentes e intenta decodificar imágenes visibles.
- Guarda URL final, estado HTTP, título, canonical, estado de fuentes, imágenes visibles rotas, H1, overflow horizontal y errores de página detectados. Advertencias no equivalen a un certificado de accesibilidad.
- Cada PNG se vincula mediante SHA256 a su `manifest.json`. El validador verifica presencia, integridad, tamaño de viewport, páginas y tipo de archivo. **No acepta una ruta inventada como evidencia.**
- Genera un `evidence-report.html` local con **4 comparaciones** antes/después y problemas anotados. No publica resultados ni modifica las webs.

## Preparación en un equipo con navegador y acceso a las URLs
Requiere Python 3, Playwright Python y Chromium. Instala de forma aislada (idealmente entorno virtual):

```sh
python -m pip install playwright
python -m playwright install chromium
cp tools/visual-evidence/example.config.json /tmp/my-site-visual.json
# Edita ambas URLs de home e interior en /tmp/my-site-visual.json.
```

```sh
python tools/visual-evidence/capture.py --config /tmp/my-site-visual.json --stage baseline --out /tmp/humanweb-captures/baseline
python tools/visual-evidence/capture.py --config /tmp/my-site-visual.json --stage candidate --out /tmp/humanweb-captures/candidate
node tools/visual-evidence/report.mjs --dir /tmp/humanweb-captures
# Abrir /tmp/humanweb-captures/evidence-report.html localmente.
```

Para comprobar el JSON **sin lanzar un navegador**, añade `--check-config` a un comando de captura. El ejemplo contiene dominios deliberadamente inexistentes, NO URLs de Estaba en Lisboa ni sus previews. Sustituir con enlaces realmente verificados.

## Pruebas de la infraestructura
```sh
node --check tools/visual-evidence/report.mjs
node --test tools/visual-evidence/report.test.mjs
python -m py_compile tools/visual-evidence/capture.py
python -m unittest discover -s tools/visual-evidence -p "test_*.py"
```

Los tests generan **PNGs sintéticos exclusivamente para probar el validador**. No los uses como evidencia de un cliente. La CI ejecuta el verificador y las pruebas pero **no abre ni inspecciona ninguna web externa**.

## Reglas de aprobación manual
1. Comparar el mismo contenido/rutas con misma fecha aproximada y versión de navegador. Si los sitios cambian día a día, reflejarlo en el informe. Playwright avisa que snapshots varían entre SO/versiones.
2. Leer cada `issues` del manifest. Si hay HTTP error, imagen rota, fuentes no cargadas, H1 anómalo u overflow, **no declarar lista la propuesta**.
3. Comprobar también el contenido bajo el pliegue, encabezado sticky, menú abierto, filtro, enlace a reservas, CTA, foco de teclado y flujo móvil: las capturas **son solo del primer viewport** y no certifican eso.
4. Registrar **3 mejoras específicas y 2 riesgos** manualmente; contrastar SEO (canonical, rutas, hreflang, schema), conversiones y performance por herramientas especializadas. Un PNG válido no demuestra superioridad.
5. Presentar la lámina editorial **Brisa** (home escritorio, interior escritorio y vista móvil coherentes) **aparte** de estas capturas de prueba. No sustituir imágenes reales por mockups.
6. Salida local por defecto: **no guardar capturas de sesiones privadas, datos personales ni fotos sin licencia en un repo público**. Verificar banners de cookies, pantallas de autenticación, geografía/idioma y consentimientos.

## Limitaciones expresas
- No es comparación de píxeles ni reemplaza `expect(page).toHaveScreenshot()` de Playwright Test. Ese API puede añadirse en el repo cliente cuando haya snapshots estables.
- No incluye automáticamente Lighthouse, axe-core ni medidas LCP/CLS/INP; eso requiere pruebas aparte.
- Las comprobaciones de imágenes solo cubren imágenes visibles del viewport; las `lazy` fuera de pantalla no están garantizadas.
- No se considera «aprobación del usuario» ni permite cambiar el número de madurez 67/100 por sí solo.
- **Nunca** entregar `evidence-report.html` si no se ha ejecutado la captura y validado los ocho PNGs reales.

## Estado
Herramienta incluida en el PR experimental #14 de Human Webs. Aún debe ejecutarse desde un equipo con acceso real a Estaba en Lisboa o al repo cliente elegido.
