# Estaba en Lisboa — primera prueba visual con navegador real
**Fecha:** 2026-10-31 · **Estado:** 8/8 capturas reales + comparación reproducible COMPLETADAS; prototipo NO APROBADO para sustitución de la home. **Alcance:** viewport inicial, no experiencia completa ni medición de conversiones.

## Fuentes y trazabilidad real
- Proyecto cliente: `josetabares24-png/portugal-autentico-v2`.
- **Producción (solo lectura):** https://estabaenlisboa.com/ y https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial .
- **Candidato:** rama `preview/human-web-design-system-2026-10-31`, ruta `/human-web-system` en un servidor Next local de GitHub Actions. No se desactivó protección SSO de Vercel; no se publicó ni cambió producción.
- **Prueba de código del laboratorio:** [GitHub run 41228613178](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41228613178), **success**: existencia de imágenes y slugs, accesos internos, noindex, estado de controles, foco/reduced-motion y ausencia de flechas ornamentales en ese componente.
- **Navegador real y evidencia:** [GitHub Actions run 41229533193](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229533193) **success**; [descargar artefacto de capturas y reporte HTML](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229533193/artifacts/13053495449). Usó **Chromium 140.0.7339.16** vía Playwright con el mismo navegador en ambas versiones. Se registraron 8 PNG con hash SHA256 verificado: `baseline/candidate` × `home/interior` × `390×844 móvil / 1280×800 escritorio`.
- **Código de portadas:** `src/app/[locale]/page.tsx` es **idéntico** en main y rama lab (blob `9bedd0be21fcf6a566d350bbcbee1f94cbf8e795`). La versión alternativa vive en otra ruta. `src/app/[locale]/itinerarios/lisboa-1-dia-lo-esencial/page.tsx` también coincide (blob `8986667b034a6ed7772750b9572e447570e87e5f`).
- **Tipo de comparación:** **portada editorial pública vs una portada DEMO de estilos**; artículo interior existente vs el mismo artículo interior en rama local. **No es A/B validado de páginas equivalentes**, ni presentación de un rediseño completo, aunque permite observar diferencias de jerarquía de portada.

## Resultado del ensayo real
| Punto | Original | Laboratorio | Veredicto |
|---|---|---|---|
| Home móvil (390×844) | Mensaje personal `La Lisboa que le enseño a quien viene a verme`, dos CTA y comienzo de sección útil aparecen en el primer viewport | Barra de selección de fuentes y movimiento antes del hero; CTA en parte inferior de foto; contenido siguiente queda fuera del primer viewport | **Original superior en claridad de identidad y acceso temprano a contenido.** La barra es de laboratorio, no de usuario final; debe excluirse de cualquier propuesta real. |
| Home escritorio (1280×800) | Imagen luminosa y mensaje personal visible; siguiente sección `¿Qué necesitas resolver en Lisboa?` comienza sin otro bloque intermedio | Overlay oscuro, titular genérico `La Lisboa de verdad`, CTA de tours por delante de la lógica de guía; sección posterior apenas visible | **Mantener la home existente**. La nueva tipografía puede estudiarse aisladamente, no hay prueba de que el hero completo sea mejor. |
| Interior móvil/escritorio | Itinerario de un día con título, descripción, datos de duración/paradas/horario/modo y fotografía | **Casi idéntico**, ya que comparte el archivo original | **Sin mejora atribuible al prototipo**; no sirve como prueba de continuidad de una futura nueva plantilla de artículos. |
| Documentos/capturas | Todas las páginas HTTP 200; H1 único en cada captura; sin imágenes visibles rotas ni overflow detectado | Lo mismo | Paso de integridad de primer viewport, **no certificado WCAG/Lighthouse/SEO**. |
| Font/cookies | **Una advertencia `fonts_not_ready`** en home desktop; aviso de cookies visible en diversas capturas | Sin alertas de captura; estado visual del aviso de cookies diferente | **Comparación parcialmente desigual**; normalizar preferencias de cookies y esperar tipografías/hidratación antes de presentar un nuevo rediseño. |

### Controles de resultado que no deben confundirse
- **Capturas:** 4 baseline + 4 candidate y **4 parejas** en un informe HTML. `sameBrowser: true`; `captureWarnings: 1` (solo producción/home/desktop, `fonts_not_ready`). Todos los ocho endpoints respondieron HTTP 200, H1=1, sin `brokenVisibleImages` o `horizontalOverflow` detectados.
- **Fuentes:** una alerta de `fontStatus` no prueba que la fuente finalmente fallase; el capturador puede coincidir con cargas posteriores. Revisar fonts computadas y estabilizar el screenshot en el siguiente ensayo.
- **Cookie banner:** las capturas muestran estados diferentes del consentimiento; **no comparar el espacio ocupado por el aviso como si fuera una elección del diseño**.
- **Alcance:** primera pantalla solamente; faltan viewport completo, menú abierto, filtros tocados, keyboard, pantalla inferior, conversiones, Core Web Vitals y revisión SEO semántica. No afirmar que se completó esa QA.
- **Aprobación:** el usuario había rechazado visualizaciones de estética genérica en turnos previos, pero **no ha emitido aprobación sobre este ensayo**. No declarar preferencia explícita nueva sin consulta.

## Tres aciertos de la metodología demostrados
1. La revisión del código detectó que la home en main y preview no cambió, evitando una falsa comparación de dos portadas iguales.
2. Los enlaces de actividad, imágenes y marcadores accesibles se validaron por CI; Chromium capturó ocho pantallas con fuente y metadatos verificables.
3. Se documentó y resolvió un fallo de las pruebas **sin cambiar producción**: `127.0.0.1` frente a `localhost` provocaba un bucle en Next-intl (`307`, `x-middleware-rewrite` y `ERR_TOO_MANY_REDIRECTS`). Se corrigió el hostname en el workflow (commit `b943173...`) y la ejecución final pasó.

## Riesgos detectados (demostrados por las capturas o código)
1. **Uniformidad de plantilla:** gran fotografía oscurecida, un único bloque enorme, CTA y tarjetas repetitivas, bandas de accesos e iconos sin mayor personalidad; especialmente arriesgado en móvil.
2. **Marca desplazada:** titular y CTA del laboratorio priorizan estética y tours sobre voz local/guías; no conserva el mensaje real de la marca.
3. **Legibilidad:** CSS del laboratorio utiliza descripciones y chips alrededor de 10–11px en móvil; verificar tamaño/contraste reales con un test de accesibilidad antes de trasplantar componentes.
4. **Evidencia incompleta:** una advertencia de fuentes y estados de cookies diferentes; artículo interior idéntico, no un rediseño propio.

## Decisión editorial
**NO publicar ni fusionar el diseño del laboratorio en producción. Mantener la portada actual.** El laboratorio puede seguir como banco de prueba independiente de familias tipográficas y controles si se desea, pero no pasa la puerta de `home + interior + móvil` como propuesta coherente y superior.

**Siguiente experimento necesario:** partir del baseline de la web pública, conservar explícitamente logo, voz, fotografía, itinerarios y canonicals; presentar **tres direcciones realmente distintas** en la lámina coherente Brisa, desarrollar solo la elegida en una rama aislada y repetir capturas en estados de cookies/font equivalentes. Añadir pruebas de navegación y accesibilidad con resultado. La decisión estética posterior requiere feedback del usuario y evidencia comparativa, no puntuaciones ficticias.

## Resultado de la madurez
Se conserva el valor **67/100 (estimación editorial)**. El proceso alcanzó por primera vez 8 capturas reproducibles sobre un caso real, pero **no** ha generado aún una propuesta aprobada ni una medición de resultados de negocio. No elevar a 90 por una CI que pasó.

**Verificaciones:** [source QA](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41228613178) · [captura visual final](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229533193) · [evidencia y HTML](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229533193/artifacts/13053495449).
