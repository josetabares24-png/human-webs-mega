# Caja de herramientas comprobadas en GitHub — diseño y QA para 2027

**Consulta:** 2026-10-31. Se verificó la existencia pública de repositorios originales, su uso previsto y documentación oficial. **No se han instalado estas dependencias** en Human Webs ni en una web de cliente. Una biblioteca de conocimientos no necesita convertirse en monorepo de editores, navegadores, tests y servicios de terceros.

## Prioridad 1 — cambios que sí atienden errores observados

| Repositorio | Qué hace realmente | Cómo usarlo con Codex | Precaución |
|---|---|---|---|
| [anthropics/skills — frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Skill para justificar dirección visual y evitar patrones de frontend genéricos | Leer sus principios y pedir al agente que explique decisiones con contenido y marca reales | Opiniones estilísticas, no ley universal; revisar licencia antes de copiar archivos; no instalar automáticamente |
| [microsoft/skills — frontend-design-review](https://github.com/microsoft/skills/tree/main/.github/skills/frontend-design-review) | Revisiones de diseño, sistema de componentes, flujo, accesibilidad y estética | Marco de auditoría con hallazgos, impacto y pruebas; exigir comparación con original | No imponer la preferencia de fuente/color del skill a todas las marcas |
| [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) + [agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | Reglas de UI, accesibilidad, formularios, animaciones, navegación | Revisar ficheros **con líneas** y actualizar desde fuente oficial antes de una auditoría | La skill obtiene reglas remotas; inspeccionar cambios y consentimiento antes de usar servicios externos |
| [microsoft/playwright](https://github.com/microsoft/playwright) | Navegador automatizado: screenshots, assertions, móviles y comparación visual | Capturar baseline 390/1280, home e interiores con imágenes/fuentes cargadas, testear CTA | Mismo navegador/OS/fuentes para diffs estables; requiere instalar browsers en el **proyecto cliente** |
| [dequelabs/axe-core](https://github.com/dequelabs/axe-core) | Auditoría automatizada de parte de la accesibilidad WCAG | En un proyecto con Playwright, añadir escáner para controles, contraste y semántica | No cubre toda accesibilidad: teclado, lectores, tareas y movimiento requieren evaluación manual |
| [GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) | Alertas de rendimiento, SEO/accesibilidad automáticos y budgets | Medir diferencias del código nuevo y comparar con el baseline | Puntuaciones fluctúan; no prueban identidad visual ni garantizan conversiones |

## Prioridad 2 — adoptar solo con escala o necesidad real

| Repositorio | Uso potencial | Cuándo descartarlo |
|---|---|---|
| [reg-viz/reg-suit](https://github.com/reg-viz/reg-suit) | Comparación pixel a pixel y reportes para muchas rutas/capturas | Sobrecarga para una sola página; incluye plugins de almacenamiento externo |
| [storybookjs/storybook](https://github.com/storybookjs/storybook) | Estudiar/testear variantes de componentes y estados; addon visual Chromatic requiere servicio aparte | Un pequeño sitio editorial sin librería de componentes no necesita Storybook por defecto |
| [amzn/style-dictionary](https://github.com/amzn/style-dictionary) | Tokens coherentes de color, tipografía y espaciado en **una marca** | No convertir tokens universales en misma paleta para todos; analizar mantenimiento/versión |
| [GoogleChrome/web-vitals](https://github.com/GoogleChrome/web-vitals) | LCP, CLS e INP de visitas **reales** | No recoger datos de visitantes ni enviar a terceros sin base y privacidad adecuadas |
| [penpot/penpot](https://github.com/penpot/penpot) | Diseño visual colaborativo y componentes; alternativa open source | No instalar un editor completo para resolver un problema de copy y dirección |

## Implementado ahora en Human Webs

**[tools/design-preflight](../tools/design-preflight/README.md)**: validador offline propio, pequeño y probado que detecta **documentación faltante** y propuestas que solo cambian color. No incorpora ni clona código de terceros. El revisor **no inspecciona imágenes** y no puede atribuir «estilo IA» con una puntuación.

## Integración posterior recomendada (en proyecto cliente, no en memoria maestra)

1. Playwright captura página original desktop y móvil (misma versión y fuentes), además de interior.
2. Baseline documentado + «qué conservar» y propuestas realmente diferentes. El preflight detecta duplicidad evidente en las **descripciones**, no en píxeles.
3. Playwright captura propuesta con mismas condiciones; diff del original y además screenshot de decisión humana.
4. axe-core + revisión manual de teclado y reduced-motion, luego Lighthouse CI para presupuestos de imágenes/JS.
5. Solo tras QA y preferencia del usuario se consideran aprobados cambios de arte, pero **no se publica producción sin autorización**.

## No instalar a ciegas

Las licencias son por proyecto y versiones; verificar licencia, compatibilidad de Node/browser, política de datos, coste, mantenimiento y si una herramienta lee/sube archivos antes de adoptarla. No ejecutar comandos de skills externas sin revisión. No prometer que un paquete hace «webs con alma»: su función es detectar fallos concretos o ayudar a estructurar decisiones.

[Preflight](../tools/design-preflight/README.md) · [Tendencias 2027](TRENDS-2027.md).
