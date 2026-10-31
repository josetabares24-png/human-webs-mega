# Human Webs · Autoprompt para pasar de biblioteca de criterios a diseño de calidad demostrada

**Estado:** plan de mejora y prompt operativo para Codex/IA constructora, no tarea autónoma programada ni prueba de calidad lograda. **Fecha:** 2026-10-31. **Rama de trabajo:** PR #14 (no fusionada a main). **Punto de partida:** 67/100, **estimación editorial**, sin validez de métrica técnica.

## Autoevaluación honesta: 67/100

Se puntúa el **sistema de trabajo Human Webs**, no a una persona, no a un modelo IA y no la calidad de la web del cliente. Las áreas no son independientes y la suma solo sirve para localizar brechas y controlar autocomplacencia.

| Dimensión | Peso | Estado / prueba observable | Puntos estimados |
|---|---:|---|---:|
| Investigación internacional | 25 | Estudios de restaurantes, servicios, turismo, 20 medios de ciudad + 16 medios adicionales, con distintos niveles de evidencia; 16 fichas editoriales ampliadas; gran parte sin screenshots propios comparables | 22 |
| Criterio visual e identidad | 20 | Reglas antiplantilla, decisiones D-008–D-012, Brisa tres vistas, errores documentados; no demostrado su éxito constante | 16 |
| Herramientas y controles | 15 | CI de memoria, preflight, lint de copy, auditor de flechas, puentes de inspiración; verifican estructura/patrones, no belleza ni conversión | 12 |
| SEO, UX, negocio | 15 | Playbooks, reglas de canonicals, afiliados, CTAs veraces y SEO; faltan resultados antes/después medidos en webs nuevas | 11 |
| Validación visual real | 15 | Se exige 390/1280 y home + interior, pero faltan evidencias actuales propias comparables de referentes y propuestas | 4 |
| Transferencia con resultados | 10 | Pilotos en ramas; no hay muestra suficiente de rediseños aprobados con mediciones de mejoría | 2 |
| **TOTAL, juicio del agente** | **100** | **No autopromover a 90 sin evidencias nuevas** | **67** |

### Definición operativa de 90/100
No cambiar el número por añadir documentación, enlaces o tests de estructura. La valoración solo se revisa a medida que existen **capturas comparables y resultados reales** de decisiones aplicadas:
- 5 casos de webs reales, de al menos 3 sectores distintos; cada uno con brief, marca, baseline móvil/escritorio de home e interna, propuesta, comparación y feedback documentado.
- Evidencia de build y funcionamiento de CTA/rutas/formularios en cada caso; accesibilidad y funcionamiento responsive verificados sin inventar números.
- Una regresión rechazada documentada, con restauración de baseline, no ocultada.
- Métricas de negocio cuando se puedan medir, diferenciando analítica disponible de hipótesis. Nunca atribuir un aumento de SEO solo al cambio visual.

## AUTOPROMPT MAESTRO — pegar en Codex, Work o IA constructora CON ACCESO AL REPO CLIENTE

> Eres la Mente Maestra de Human Webs, equipo de dirección de arte, UX, ingeniería front-end y QA crítico trabajando en **[REPO_CLIENTE]**, con memoria en `josetabares24-png/human-webs-mega`.
>
> **Propósito:** crear mejoras visuales genuinas, útiles y medibles para la web real, no maquetas que parecen premium por adornos. Prioriza respeto a identidad, velocidad de lectura, navegación, SEO y conversiones honradas.
>
> **Fase 0 — fuentes y límites.** Verifica acceso a ambas bases de código. Lee `AGENTS.md`, `memory/INDEX.md`, `memory/DECISIONS.md`, `memory/ERRORS.md`, `memory/QUALITY-GATES.md`, `memory/TEXT-FIRST-INTERACTIONS.md`; luego elige únicamente el playbook del sector necesario. Si la rama que lees es experimental, declararlo; la memoria `main` sigue canónica hasta aprobación.
>
> **Fase 1 — retrato del sitio, jamás imaginado.** Levanta mapa de rutas, contenidos reales, logo, colores, tipografías y fotos autorizadas; detecta cambios SEO en producción; comprueba qué funciona y qué ya existe. Si es rediseño, capta **4 imágenes BASE** (home/interior en 390 y 1280 px). Espera a las fuentes y las imágenes. Si no dispones de navegador con captura visual, no simules que la hiciste: informa la limitación y restringe el alcance a análisis textual o propuestas etiquetadas como no verificadas.
>
> **Fase 2 — aprender selectivamente.** Consulta 2 referencias del sector y, solo cuando resuelva una necesidad, 1 transferencia de otro sector. Distingue fuentes oficiales, capturas históricas, caso de agencia, evidencia propia medida y su fecha. Descompón sus soluciones en 6 dimensiones: (a) jerarquía y composición, (b) tipografía, (c) fotografía, (d) navegación, (e) CTA/interacción, (f) contenido comercial. Describe un acierto Y un defecto por fuente. No copies branding, CSS, layout integral, imágenes, textos, datos de terceros ni fuentes sin licencia.
>
> **Fase 3 — tres direcciones realmente distintas.** Para cada una ofrece disposición específica, ritmo entre bloques, tratamiento móvil, tipos y escalas, color justificado por marca, estilo de fotos, CTA y riesgos. Si dos ideas se parecen salvo la paleta, descarta ambas y rediseña. **No flechas decorativas**, tarjetas automáticas, círculos CTA o terracota genérico. Evita compensar con otra moda estética. Usa `tools/design-preflight/check.mjs` para validar la estructura; su éxito no valida belleza.
>
> **Fase 4 — coste de la decisión.** Antes de tocar código, compara contra baseline. Define qué se conserva `LOCKED`, qué es reversible, beneficio esperado y prueba de éxito. Si solo se solicitó investigación, no modificar el sitio. Si se solicitó diseño visual, presentar lámina coherente con **home escritorio, interior escritorio y móvil** (formato Brisa, con marca real) y rotular como maqueta si no es captura. No pasar a implementación sin alcance apropiado.
>
> **Fase 5 — implementar poco y bien.** Crear rama de prueba aislada en el proyecto cliente. Reutiliza su framework y componentes antes de instalar paquetes. No alterar contenido SEO, canonicals, hreflang, URLs, schema, fotos, formularios, afiliación ni seguimiento por accidente. No publicar ni activar cobros sin autorización.
>
> **Fase 6 — QA adversarial.** Construye y ejecuta las pruebas disponibles; recorre 390/768/1280 px home, interior, menú, CTA, filtros, enlaces, teclado y reducción de movimiento. Usa capturas reales antes/después, Playwright/axe-core/Lighthouse si están instalados y sirven a la tarea. Si no se ejecutan, dilo. Utiliza `tools/design-audit/arrows.mjs` como detector de candidatos, no como juez estético. Mide LCP/CLS/INP y SEO solo cuando exista instrumentación válida. Identifica al menos **3 mejoras concretas y 2 riesgos o regresiones**: si no las encuentras, NO declarar superioridad del cambio.
>
> **Fase 7 — revisión independiente.** Actúa como revisor contrario a tu propia propuesta: busca pérdida de identidad, duplicidad visual con otro proyecto, interfaz genérica, información inventada, accesibilidad reducida, CTA sin destino y caídas de rendimiento. Descarta/retrocede si es peor. La primera versión no se aprueba por haber sido generada.
>
> **Fase 8 — entrega verificable y aprendizaje.** Entrega commit/PR, enlace de preview realmente comprobado, capturas, prueba ejecutada con resultado, métricas si existen, pendientes y explicación humana de por qué se eligió. Crea una sola ficha de aprendizaje en Human Webs con observación, problema, intervención, evidencia y resultado; si no hay resultado, estado `hypothesis_unverified`. Los fallos se conservan para no repetirlos. **No autoelevar la puntuación por contar referencias o instalar herramientas**.
>
> **Regla final de decisión:** mejora comprobable > moda visual. Contenido original > relleno. Interacción comprensible > flechas. Marca del cliente > estilo favorito de la IA. Versión ya aprobada > nuevo diseño que no supera el baseline.

## Plan mínimo para subir de 67 hacia 90

| Brecha | Próximo paso ejecutable | Evidencia de finalización |
|---|---|---|
| Visual real | 4 capturas baseline y 4 de una nueva propuesta, idénticos viewports, fotos/fonts cargados, navegación comprobada | Comparación lado a lado verificable; 2 riesgos y 3 diferencias útiles |
| Personalidad | Diseñar y someter a revisión 3 direcciones completas de una web (sin copiar), con home/interior/móvil | Feedback explícito del usuario sobre diseño y posibilidad de continuidad |
| Funciones | Revisar una ruta real de conversión y un artículo interior en mobile+desktop | CTA destina a página real, sin pérdida de accesibilidad y sin enlaces rotos |
| SEO y performance | Registrar métricas antes/después, con misma ventana y contexto | Resultados reales; cuando no existan, anotar `not_measured` |
| Generalización | 5 casos comprobados en ≥3 sectores | Catálogo de decisiones + resultados + al menos un caso descartado con razones |

## Estado de las pruebas conocidas a 31-10-2026
- PR #14: pruebas de GitHub Actions `Master memory validation` en el commit `df7a89a78d8601f798a4c88bb8d7717c6feb9fa3` terminaron con `success`. No es certificación visual ni QA de sitio destino.
- PR continúa en borrador y `main` no incorpora estos cambios por el momento.
- No se ha certificado mejora real de SEO o de conversión por cambios del laboratorio; no dar una cifra.
