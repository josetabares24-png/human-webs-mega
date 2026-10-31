# The Pudding — investigación editorial cruzada para Human Webs

- **Referencia:** https://pudding.cool/
- **Modelo real:** Medio digital independiente de ensayos visuales interactivos
- **Fecha:** 2026-10-31
- **Estado de preferencia:** **PENDIENTE — no aprobado estéticamente por el usuario**.
- **Nivel de investigación:** Alta para contenido actual y estructura de navegación; media-alta para captura de portada agosto 2026; experiencias individuales no probadas de punta a punta en navegador.
- **No es plantilla:** la ficha sirve para aprender principios aplicables a un medio de turismo con contenido propio, no para copiar estructura/color/fuentes.

## Fuentes originales consultadas

- https://pudding.cool/
- https://pudding.cool/2026/02/happy-map/
- https://pudding.cool/2026/06/menu-collection/
- https://cogimator.net/en/sites/pudding-cool/
- https://shouldseethis.com/website/the-pudding/

## Evidencia visual y límites

**Evidencia visual principal:** https://cogimator.net/en/sites/pudding-cool/

**Fecha y alcance visual:** Captura editorial de 2026 en Cogimator muestra portada blanca con logotipo pegatina y tarjetas/editoriales con temas y colores diferentes. Captura de otro directorio muestra apariencia oscura de 2025. Por tanto, no imponer una sola paleta actual.

## Auditoría visual ampliada

| Dimensión | Observado, documentado y límites |
|---|---|
| Fondo y color | La **identidad de portada** convive con fondos de proyecto amarillos, rosas, azules, naranjas y negros. No intenta que todos los ensayos parezcan un bloque homogéneo; la coherencia está en índice, organización, firmas/fecha y navegación. |
| Tipografía | El logotipo tiene gesto de lettering; titulares de artículos se componen como textos informativos, a menudo con aire editorial. No se ha medido font-family. Las tipografías pueden variar entre proyectos especializados. |
| Fotografía y recursos | Ilustración, composiciones, mapas, gráficos y datos reales. La web oficial lista 2026 #215 «Mapping 100,000 moments of human happiness» y #220 «5,000 restaurant menus», con interfaz interactiva por menú/año. |
| Primer viewport y composición | Home de revista con masthead distintivo en negro/contorno de pegatina, etiquetas de navegación dibujadas (iconos), fecha + número de historia encima de los recuadros, contenidos de color deliberadamente dispares. En algunas capturas, fondo claro; en otras, oscuro. Cada artículo diseña su propio artefacto visual. |
| Fondo por sección | El fondo de la publicación actúa como soporte, mientras los experimentos individuales construyen sus propios mundos de color. Ejemplo de fondo blanco observado en captura de agosto 2026. |
| Interacción y navegación | Búsqueda de historias y filtros Faves/Popular/Updating/Your Input/Video/Audio; páginas con ensayos interactivos. Ejemplo de archivo de menús: controles de año, definiciones, avanzar al siguiente; son acciones presentes en HTML, no afirmación de QA end-to-end. |

**Qué la diferencia realmente:** Cada interacción comunica una pregunta de investigación. La página no es una plantilla con parallax: el lector puede descubrir y manipular información real.

## Principio reutilizable

En Estaba en Lisboa, una herramienta **con información real** podría ayudar a elegir barrio según tiempo/traslados, comparar transporte para una ruta, explorar fotografías de lugares en un mapa o ver una cronología del tranvía. No convertir todo artículo en juego.

### Boceto original para un negocio pequeño

Un reportaje «Lisboa en un mapa de tiempos reales» basado en datos públicos contrastados: seleccionar barrio → ver distancias/tiempos con fuente, itinerario actualizado, enlaces a la guía. Versión alternativa sin JS para accesibilidad/SEO.

**Ejemplo de copy humano (hipótesis, sujeto a contenido publicado):** «Desde Alfama hasta Belém: qué trayecto conviene para cada hora — solo con rutas y fuentes comprobadas.»

## Qué no copiar

No copiar logotipo de pegatina, gráficos, personajes, dataset, animaciones específicas ni interacción exacta. No inventar estadísticas o métricas ni insinuar que está avalado por The Pudding.

## QA, móvil y aceptación

Verificar procedencia/frescura de dataset, errores y vacíos, accesibilidad teclado/táctil, reducción de movimiento, CSS con contrastes suficientes, HTML indexable, mobile 320/390 y peso JS.

- **Nivel de verificación:** sin medición de CSS y sin capturas propias actuales; no registrar como caso medido.
- **Inspección propia en navegador:** NO efectuada para las seis. La consulta de HTML oficial y capturas publicadas por terceros **no** autoriza afirmar que conocemos valores CSS exactos, detalles de scroll actuales o la captura móvil 390/1280 px.
- **Preferencia expresa del usuario:** NO recibida sobre esta referencia. El encargo fue investigarla, no aprobarla.
- **Antes de usar en un rediseño:** ver [caso Atlántico rechazado](../../../CASES/ESTABA-EN-LISBOA-ATLANTICO-REJECTED-2026-10-31.md): captura verificable del sitio actual, contrato de continuidad y comparación antes/después.

[Índice de las seis](README.md) · [Guías turísticas](../README.md) · [Comparativa](COMPARATIVA-VISUAL.md).
