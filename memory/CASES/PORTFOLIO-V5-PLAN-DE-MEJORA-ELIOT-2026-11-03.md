# Portafolio creativo V5 de José Tabares — auditoría y dirección V6
**Fecha:** 2026-11-03
**Estado:** AUDITORÍA Y PROPUESTA, **no aprobada, no implementada**.
**Repositorio destino:** [Portfolio](https://github.com/josetabares24-png/Portfolio), rama V5 \`preview/portfolio-creativo-eliot-v5-2026-11-03\`, PR #4.
**Fuente inspiradora expresamente aprobada por el usuario:** [Eliot Besson](https://www.eliotbesson.com/), [works](https://www.eliotbesson.com/works), [about](https://www.eliotbesson.com/about).
**Límite:** inspección documental de fuente HTML/CSS/JS del repositorio + fuentes web originales; no inspección nueva con navegador externo de Vercel en esta auditoría.

## Objetivo y separación
Portafolio personal **internacional** de servicios de diseño y desarrollo web. **No es Estaba en Lisboa**, aunque esta guía pueda aparecer como un proyecto propio. Mil Sabores es otro trabajo, no estilo de marca del portafolio. Prioridad del usuario: diseño visual, interacción, presentación del oficio; copy/precios/despliegue productivo después de aprobación.

## Estado V5: comprobaciones en código (no afirmaciones de QA visual remota)
- \`index.html\`: portada editorial oscura y display XXL «CREO WEBS QUE DEJAN HUELLA», dos tarjetas gráficas originales para Estaba en Lisboa y Mil Sabores, índice con hover, aproximación personal y mailto.
- \`src/showcase.css\`: \`--display: 'Roboto Condensed','Arial Narrow','Liberation Sans Narrow',Impact\`, \`--text:'Lato',Arial,Helvetica\`, \`--mono:'DejaVu Sans Mono'\`. No aparecen \`@font-face\` en esta hoja y \`index.html\` no enlaza una carga de fuentes externa. Según sistema operativo, **puede** estar mostrando fuentes fallback en lugar de las familias designadas. Confirmar en navegador y luego autoalojar fuentes elegidas con licencia.
- \`src/showcase.js\`: índice usa \`data-preview\` para cambiar título/texto sobre una tarjeta; **no muestra capturas ni vídeos de las webs**. Bucle \`requestAnimationFrame(tick)\` se inicia en desktop con hover compatible y permanece activo aunque no haya hover; revisar ciclo para activar solo con necesidad y detener en salida/inactividad.
- La vista inicial incluye una cortina de animación, las secciones usan reveals y hay marquesina continua. Exceso potencial de movimiento comparado con el valor aportado. \`prefers-reduced-motion\` está contemplado en código; verificar comportamiento real.
- Las dos rutas \`/proyectos/estaba-en-lisboa/\` y \`/proyectos/mil-sabores/\` repiten estructura y encabezado «EL DISEÑO TIENE UN PORQUÉ»; casos pobres en evidencia visual real, aunque sus enlaces externos son reales. Comprobar funciones con navegador antes de publicar.
- \`noindex,nofollow\` aparece en los HTML de preview. Es correcto en revisión, pero requiere estrategia de indexación posterior para dominio definitivo.
- \`package.json\` dispone de React, Framer Motion y dependencias de diseño aunque V5 se ha hecho con HTML/CSS/JS simples; evitar añadir más dependencias antes de evaluar qué se necesita y si se puede eliminar lo sobrante.
- El mismo contenido se duplica como tarjetas grandes y como índice. Con solo dos casos, ambas secciones no aportan funciones claramente distintas.

## Qué conservar
1. Base oscura y contraste como **dirección actualmente aceptable para explorar**, no paleta final aprobada.
2. Tipografía de gran escala y gesto editorial; rediseñar el sistema tipográfico real y no confiar en fallbacks.
3. Identidad personal José Tabares y arquitectura \`Inicio / Trabajos / Caso / Sobre mí / Contacto\`.
4. Enfoque de proyectos verificables, sin testimonios, clientes ni métricas inventadas.
5. Hover del índice como **principio de interacción** con alternativa móvil/teclado, no su tarjeta textual actual.
6. Ramas de preview y separación clara de producción.

## Qué corregir primero (máxima prioridad visual)
**P0 / Material audiovisual auténtico:** Capturar desde las webs reales (con autorizaciones aplicables) sus pantallas desktop y móvil, scroll y microinteracciones. Crear fotogramas estáticos + loops breves optimizados, con poster. Si falla el acceso, no inventar capturas. La foto/captura demuestra el oficio; las composiciones abstractas solas no.

**P1 / Tipografía propia:** Comparar tres parejas de fuentes abiertas/licenciadas, una display expresiva/condensada y una sans de lectura. Auditar kerning, saltos de línea, localización y opciones 390/768/1280/1440. Autohospedar \`woff2\` tras comprobar licencia. No copiar la familia comercial Arges de Eliot.

**P1 / Estructura de portafolio:** Reorganizar Inicio para que un trabajo real o un reel pequeño aparezca desde la primera pantalla sin tapar la propuesta de valor. Usar los dos casos de manera diferenciada. Evitar el doble bloque repetido de tarjetas + índice si no aporta nueva información.

**P1 / Índice interactivo:** Al hover/focus la vista previa debe mostrar una captura/poster real del proyecto, no un recuadro con el nombre. Posicionar sin tapar cursores/CTA y limitar costo de movimiento. En móvil, cada proyecto debe mostrar su miniatura directamente y abrirse al tocar, sin exigir hover.

**P1 / Caso editorial:** Cada caso con su propio objetivo, alcance real, rol, identidad del sitio, pantallas desktop y móvil, imágenes del trabajo y enlace externo. El proyecto editorial propio se identifica como tal. Nada de datos de rendimiento inventados ni «caso de éxito» sin métrica demostrable.

**P2 / Animación dirigida:** Priorizar solo tres momentos: transición inicial breve/opcional, introducción tipográfica y preview de proyectos. Reducir/eliminar marquesina y loader si distraen; ningún scroll-jacking. \`prefers-reduced-motion\` funcional, no ocultar contenido si no ejecuta JS.

**P2 / Identidad de firma:** Refinar nombre personal, pequeña marca tipográfica y sistema de grid/espaciado; no inventar un estudio ni logo genérico. No hace falta otra paleta, gradiente ni interfaz SaaS.

**P2 / Contacto internacional:** Un contacto visible y operativo (mailto con destinatario aprobado, alternativa de formulario real solo con backend probado); después de aprobar arte, considerar ES/EN con rutas indexables, \`hreflang\` y textos nativos. No convertir la portada en folleto comercial.

## Cómo usar Human Web
Consulta \`AGENTS.md\`, \`memory/INDEX.md\`, \`memory/DECISIONS.md\`, \`memory/ART-DIRECTION.md\`, \`memory/DESIGN.md\`, \`memory/ERRORS.md\`, \`memory/QUALITY-GATES.md\`, \`memory/TYPOGRAPHY-CTA-MOTION.md\`, \`memory/TRENDS-2027.md\`, \`memory/TOOLS-2027.md\`, \`memory/REFERENCES/PORTAFOLIO-WEB-INDEPENDIENTE-2026-11-03.md\` y \`memory/CASES/PORTFOLIO-PERSONAL-VISUAL-2026-11-03.md\`. Las bibliotecas de turismo/restaurantes son **casos de uso**, no identidad del portafolio. \`design-library\` conserva evidencias de otros sectores; no copiar su estética por accidente.

Marco de referencias externas (no clones): Eliot (tipografía, media de proyectos, hover y fichas), Gil Huybrecht (webs sin marcos), Otherkind (identidad tipográfica), Jonas Emmertsen (retícula con atribución). Consultar fuentes originales y licencias actualizadas. No atribuir nunca premios ni clientes ajenos.

Herramientas posibles: \`microsoft/playwright\` para capturas y flujos, \`dequelabs/axe-core\` para indicios de accesibilidad, \`GoogleChrome/lighthouse-ci\` para rendimiento y presupuestos, \`vercel-labs/web-interface-guidelines\` como reglas, \`motion-primitives\` y \`GSAP\` solo si una interacción concreta requiere su valor. Preferir CSS/JS ya presentes. La automatización no certifica calidad estética.

## Fases y bloqueo
0. Baseline: capturas verdaderas V5 (home y caso) a 390/1280px. Registrar commit, fuentes efectivas y defectos, más contrato de continuidad.
1. Investigar y documentar tres rutas visuales con diferencias no solo cromáticas. Preferir una **evolución V5** con el enfoque Eliot aprobado, pero comparar contra dos opciones breves para cumplir Human Web. Ejecutar \`tools/design-preflight/check.mjs\` sobre brief.
2. Construir prototipo completo en rama nueva **solo tras dirección aprobada** (home + índice + dos casos + móvil). No modificar \`main\`.
3. Capturar lo realmente renderizado en 390/768/1280/1440, full-page y primer viewport, con fuentes y medios cargados. Comparar lado a lado con V5 y registrar regresiones.
4. Comprobar teclado, Escape, foco, hover, touch, reduced motion, enlaces, correo, consola, \`npm run build\` y \`npm run lint\` en el repo de destino. Ejecutar QA básica de accesibilidad y presupuesto de medios; reportar resultados reales.
5. Previsualización única que corresponda al commit probado. No marcar \`READY\` como aprobación estética. Usuario aprueba diseño primero y producción después.

## Autoprompt operativo (para Codex o ejecutor)
Actúa como director de arte especializado en portafolios digitales de alto nivel y desarrollador frontend senior. Tu objetivo no es emular visualmente a Eliot Besson ni generar una landing genérica, sino evolucionar el portafolio V5 de José Tabares hacia un producto distintivo: tipografía diseñada con intención, webs reales como piezas principales, índice interactivo con previsualizaciones reales, casos completos y móvil tratado como experiencia propia. Antes de escribir código, audita V5 y documenta baseline a 390/1280 con fuentes cargadas. Contrasta 3 direcciones estructurales; selecciona la que mantenga el espíritu creativo aprobado con diseño original. Corrige la carga tipográfica, elimina duplicación de proyectos, registra y optimiza medios reales, detén animaciones costosas cuando no se usan, mejora páginas internas y contacto. Trabaja aislado de \`main\`, implementa pruebas reales y entrega V5 vs. nueva versión en formato tres capturas auténticas escritorio/interior/móvil y link de preview verificado. No inventes activos, clientes, métricas ni pruebas. No publiques sin autorización.

## Estado final de este documento
**Solo análisis documentado y propuesta de ejecución.** No da permiso para cambiar el repositorio Portfolio ni establece estética definitiva.
