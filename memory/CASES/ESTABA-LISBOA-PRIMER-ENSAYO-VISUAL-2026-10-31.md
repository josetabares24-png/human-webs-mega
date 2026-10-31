# Estaba en Lisboa — primera prueba real de Human Webs (2026-10-31)

**Estado:** prueba de código SUPERADA; **cuatro capturas reales del sitio original completadas** en Chromium; render del laboratorio local BLOQUEADO con HTTP 307. Comparación completa NO realizada; inspección visual humana y del candidato PENDIENTES. **No reemplazar la home pública ni promover a aprobado.** Una prueba renderizada y una propuesta mejor son hitos distintos.

## Repositorios, versiones y evidencia
- **Origen real:** `https://estabaenlisboa.com/`, y artículo interior `/itinerarios/lisboa-1-dia-lo-esencial`.
- **Candidato:** rama `preview/human-web-design-system-2026-10-31` de `josetabares24-png/portugal-autentico-v2`, componente `src/components/human-web/HumanWebLab.tsx`, CSS módulo homónimo, y ruta `src/app/[locale]/human-web-system/page.tsx` (robots noindex, nofollow). Su código no reemplaza la home principal: es una página de laboratorio con biblioteca de controles y pruebas.
- **Estado Vercel:** último despliegue del laboratorio `e9bb642c...` marcado READY, pero acceso de previews SSO habilitado. READY no equivale a prueba de pantalla/UX. No eliminar protección para facilitar captura.
- **Integridad del baseline código:** `src/app/[locale]/page.tsx` tiene blob SHA `9bedd0be21fcf6a566d350bbcbee1f94cbf8e795` en main y rama de preview. El artículo `src/app/[locale]/itinerarios/lisboa-1-dia-lo-esencial/page.tsx` coincide (`8986667b...`). Por eso «comparar / vs / entre ramas» **no** sería una prueba válida de rediseño: solo la ruta lab presenta diseño diferente.
- **Prueba automática de código:** GitHub Actions [Human Web preview source audit](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41228613178) terminó con éxito. Verifica 6 rutas de imágenes presentes, fichas de actividades con slugs, CTA internos, noindex, ausencia de iconos de flecha del laboratorio, botones con estado, foco visible y soporte reduced-motion. No revisa la pantalla.
- **Captura reproducible:** [GitHub Actions — segundo ensayo con base capturada](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229088620) y [tercer ensayo con diagnóstico HTTP](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229186155). La captura baseline tuvo éxito para 4 combinaciones (home/interior × móvil 390px/escritorio 1280px), descargables como [artefacto del tercer ensayo](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229186155/artifacts/13052643884). **No existe comparación de 8 capturas**, ni HTML de before/after completo, porque el servidor local del candidato devolvió HTTP 307 en el control de acceso inicial; Next.js reportó Ready, y la solicitud a `/human-web-system` no produjo HTTP 200. La [prueba de diagnóstico 41229426647](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41229426647) determinó la causa: `x-middleware-rewrite: http://localhost:3000/es/human-web-system` pero la petición entraba por `http://127.0.0.1:3000/human-web-system`; `Location: /human-web-system` causaba `ERR_TOO_MANY_REDIRECTS`. Es un **bucle por inconsistencia de host en el entorno de captura**, no evidencia de que el diseño sea malo. Se cambió el flujo de prueba para usar `localhost` en servidor y URLs de candidato (commit `b943173...`). La captura del candidato queda pendiente del nuevo resultado. El proyecto se mantuvo aislado. La home candidata será **/human-web-system** en servidor local, no la home de preview, por lo que esta comparación es **concepto editorial vs sitio real**, NO prueba de migración de idénticas rutas.
- **Aislamiento:** el workflow instala Next y Playwright en GitHub Actions, accede a producción **solo lectura** y al candidato mediante localhost. No cambia producción ni desactiva SSO, no sube capturas a rama pública; artefacto privado temporal del run.

## Inspección inicial de código: pruebas y riesgos
| Dimensión | Evidencia | Resultado / siguiente revisión |
|---|---|---|
| Assets | `/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg`, `/images/alfama-panoramica.jpg`, y cuatro imágenes de actividades existen en el repo | Cumple presencia estática; comprobar realmente carga/crop y contraste de texto en viewport |
| Enlaces | Tres slugs de actividades están en `src/data/activities.ts`; `/free-tours-lisboa`, `/itinerarios`, `/actividades` y páginas de información existen | Cumple catálogo; falta probar navegación real, destino final del proveedor |
| SEO | ruta lab con noindex/nofollow; main homepage sin cambios | Riesgo productivo bajo; no concluye sobre SEO del rediseño |
| Interacción | filtros de experiencias y botones font/motion enlazados a estado; CSS focus-visible + reduced-motion | Fuente correcta; falta prueba de teclado/tacto y estados en navegador |
| **Acentos** | `--hw-clay:#af4f35` usado de forma amplia; fondo papel cálido y chips | Riesgo: regresar a la estética arcilla repetida explícitamente rechazada, incluso sin flechas |
| **Retícula** | 4 cards escritorio, 2 cards a 990px/680px; cuatro accesos en móvil; tarjeta con chip y sombra | Riesgo de «plantilla IA» y densidad al mostrar actividades en 390px |
| **Móvil legibilidad** | CSS usa 10px en categorías/etiquetas y 11px en descripciones de cards | Riesgo de legibilidad/target; no afirmar WCAG incumplido sin inspección real |
| **Voz** | H1 «La Lisboa de verdad» + párrafo de tours vs baseline H1 «La Lisboa que le enseño a quien viene a verme» | Riesgo de perder el posicionamiento de guía personal y poner reservas por delante de contenido útil |
| **Tipografía** | selector carga Newsreader/DM Sans, Fraunces/Instrument Sans y fallback de continuidad | Variantes exploratorias, ninguna aprobada ni demostrada mejor por la marca |
| **Formato Brisa** | home del laboratorio + módulo de muestras; NO una solución con home real/interior/móvil coherente | Falla la puerta de entrega del diseño completo; falta mantener continuidad interior |

## Resultado operacional comprobado y diagnóstico pendiente
- Ejecución del smoke en rama de prueba: `success`, [run 41228613178](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/41228613178).
- Ensayo 1: fallo por no alcanzar HTTP 200 en 75 intentos; no llegó a capturar la home original.
- Ensayos 2 y 3: **captura baseline exitosa, 4 PNG reales**; el candidato no fue capturado. Artefactos comprimidos contienen baseline y log, pero **no** comparación completa.
- Ensayo 3: HTTP 000 inicial y 307 después; luego un ensayo diagnóstico mostró `x-middleware-rewrite` a localhost desde 127.0.0.1 y error de Playwright `ERR_TOO_MANY_REDIRECTS`. Lección: al capturar apps con middleware de idioma, conservar idéntico `hostname` en servidor, URL y redirecciones internas. Reintento configurado con `localhost`, resultado aún pendiente.
- No hay evidencia de mejora de SEO, WCAG, rendimiento ni conversión; no aumentar puntuación de madurez.

## Decisión provisional (hasta inspección de screenshots)
No recomendar el reemplazo de producción. El laboratorio es válido como **muestrario aislado de tipografía/CTA**, no como nueva home apta. Mantener prioridad de contenido local, logo original, navegación útil, SEO y fotos propias.

## Pruebas pendientes
1. Captura baseline (4 PNG) **ya completada**, revisar capturas. Completar 4 PNG del candidato tras resolver el 307 y validar los 8 hashes/manifiestos antes de generar reporte HTML; abrir menús/estados como prueba adicional.
2. Verificar si el servidor local reproduce fuentes/activos y no hay redirecciones de locale, errores o imágenes rotas.
3. Revisar si la propuesta mejora realmente jerarquía, legibilidad y clics cualificados, y si el artículo interior queda coherente. Conservar al menos tres mejoras y dos riesgos con evidencia.
4. Cualquier segunda iteración requiere una dirección editorial elegida por el usuario, implementada en rama aislada y verificada; no tocar `main` ni publicar.

**Nivel de madurez:** se conserva 67/100 hasta resultados aplicados y aprobados. Añadir scripts o contar capturas no sube una nota.
