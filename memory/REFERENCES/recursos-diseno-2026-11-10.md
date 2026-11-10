# Recursos de diseño revisados (2026-11-10)

**Origen:** imagen que mandó José (10 nov 2026) con cinco enlaces de diseño web.
**Revisado:** 10 de noviembre de 2026 (zona Europe/Lisbon), en las páginas oficiales de cada sitio. Los precios y textos pueden cambiar.
**Para qué:** KATA WEBs (webs HTML estáticas, rápidas y con SEO para negocios locales en EE.UU.: restaurantes, oficios, dentistas, barberías) y, en menor medida, el blog de turismo estabaenlisboa.com.
**Criterio:** no inventar precios ni licencias; no copiar marcas ajenas; el 3D/WebGL pesado no encaja por defecto en estas webs (carga, móvil y GPU).

El post citaba «600+ design prompts» y «200+ components» en Scrolltide, y «117 animated shaders, 11 styles» en Scroll Shaders. Abajo se anotan las cifras que mostraban las propias webs el día de la revisión, cuando diferían.

## Resumen

| Sitio | Veredicto | Motivo breve |
|---|---|---|
| [scrolltide.co](https://scrolltide.co) | **no** | Biblioteca de pago de plantillas y prompts cinematográficos (scroll, 3D, shaders). No encaja en webs locales rápidas. |
| [scrollshaders.com](https://scrollshaders.com) | **no** | Shaders WebGL de pago. La licencia sí cubre trabajo para clientes, pero el coste en GPU/móvil no compensa. |
| [footer.design](https://footer.design) | **solo inspiración** | Galería gratuita de pies de página ajenos. No hay licencia para copiarlos. |
| [cta.gallery](https://cta.gallery) | **solo inspiración** | Galería gratuita de CTAs ajenos, más consejos de redacción. No hay licencia para copiarlos. |
| [styles.refero.design](https://styles.refero.design) | **solo inspiración** | Estilos extraídos de productos reales (DESIGN.md). Adaptar reglas, no clonar la marca. |

Nada de esto se compra ni se aplica a una web de cliente sin decisión expresa de José.

---

## 1. Scrolltide — [scrolltide.co](https://scrolltide.co)

**Qué es:** biblioteca de prompts y plantillas para «websites that move like the tide»: sitios con scroll, motion y 3D. Se pegan en una IA (Claude, Cursor, v0, etc.) o se usa el código fuente. El sitio habla de React, Vite, Next.js, Tailwind, Framer Motion, GSAP, Three.js, WebGL, shaders y Lenis. El 10 nov 2026 la home y la página de plantillas gratuitas decían **145 templates** en la biblioteca y **55 shaders**. Hay secciones sueltas (botones, navegación, tablas de precios, testimonios, pies, formularios) y pantallas tipo dashboard.

**Precio (USD, página [Pricing](https://www.scrolltide.co/pricing), 10 nov 2026):**
- Monthly: **39 USD/mes** (precio tachado 59 USD; «34% off»). Límite de 10 plantillas premium nuevas por semana. La colección 3D, pantallas de UI, shaders animados y MCP **no** entran en Monthly; solo en Yearly y Lifetime.
- Yearly: **144 USD/año** (mostrado también como 12 USD/mes).
- Lifetime: **299 USD** un solo pago (precio tachado 449 USD; «33% off»). Acceso permanente, sin renovación.
- Hay un plan Free: **7 de las 145** plantillas son «Free forever» ([página Free](https://www.scrolltide.co/free)). Copiar más de una plantilla gratuita, o cualquier cosa que no sea gratuita, requiere cuenta (lo dicen los [Términos](https://www.scrolltide.co/terms), actualizados el 4 de octubre de 2026).
- Suscripciones Monthly y Yearly se renuevan solas hasta cancelar. Ventas digitales, sin reembolsos (salvo lo que exija la ley).

**Licencia:** con un plan de pago, uso personal y para clientes. Cita de los Términos, apartado 3:

> A paid plan grants you a limited, non-exclusive, non-transferable license to use the templates and prompts to build websites for your own personal projects or for your clients as part of paid client work. There is no limit on the number of personal or client sites you may build while your plan is active.

No se pueden revender ni redistribuir las plantillas o prompts, ni usar sus vídeos/capturas de marketing, ni presentar una plantilla sin modificar como diseño original propio. Las webs construidas con una plantilla sí se pueden publicar y monetizar.

**Veredicto: no.** No sirve como base de KATA WEBs ni de estabaenlisboa.com. El producto está pensado para sitios cinematográficos con scroll y 3D; eso choca con sitios estáticos, rápidos y pensados para el móvil de un negocio local, y con la pedida de no parecer «hechos con IA» (aquí el flujo oficial es pegar el prompt en una IA). Tampoco merece el gasto (39–299 USD) para este negocio. Como mucho, mirar de reojo la estructura de un bloque sencillo (contacto, precios, pie), nunca montar un hero 3D o un scroll pesado en un cliente.

---

## 2. Scroll Shaders — [scrollshaders.com](https://scrollshaders.com)

**Qué es:** fondos y componentes WebGL de bucle infinito, más MP4 y stills. El código se pega en React o en HTML+JS (un shader WebGL2 por archivo; dicen que no hace falta three.js). En la home, las 11 categorías sumaban **117 shaders** el 10 nov 2026 (Mesh, Grain, Dither, Liquid Metal, Light & Rays, Fluted Glass, Halftone, Waves & Lines, 3D & Depth, Retro & ASCII, Patterns & Grids). La página de precios hablaba de «All **164** shaders and components», más stills 6K. Eso encaja con la cifra del post (117 shaders, 11 estilos) si se cuentan solo los shaders, no el total de ítems.

**Precio (USD, página [Pricing](https://scrollshaders.com/pricing), 10 nov 2026):**
- Monthly: **29 USD/mes**. Hasta 10 ítems nuevos por semana. No incluye las colecciones Logo & Image Effects ni el personalizador.
- Yearly: **129 USD/año** (mostrado como 10,75 USD/mes). Biblioteca ilimitada, colecciones extra y personalizador.
- Lifetime: **239 USD** un solo pago, con drops futuros.
- Navegar y ver demos es gratis. El código, los MP4 y los stills 6K van con un plan. Ventas finales, salvo error suyo (cobro duplicado, importe incorrecto o falta de acceso por un fallo suyo).

**Licencia:** comercial, incluye trabajo para clientes. La [License](https://scrollshaders.com/license) (17 de octubre de 2026) dice:

> When you open an item from Scroll Shaders on a paid plan […] you get a non-exclusive, worldwide, royalty-free license to use it in your own work […]. You can: Use items in unlimited personal and commercial projects […]. Use them in work you make for clients, and hand that finished work over to the client.

No se pueden revender ni redistribuir los shaders como librería, pack, plantilla o plugin. El titular de la cuenta es quien tiene la licencia; en un equipo, cada persona que descargue necesita su propio plan. Lo ya usado en un proyecto sigue licenciado si el plan acaba; no se pueden empezar proyectos nuevos sin plan. La FAQ lo resume: «The license covers personal and commercial projects, including websites and apps you build for clients.»

Sobre rendimiento, la propia FAQ compara un fondo a pantalla completa con «a looping video, without the download». Los componentes se pausan fuera de pantalla, limitan el DPR y muestran un fotograma fijo si el visitante pide `prefers-reduced-motion`. Aun así, WebGL depende del hardware del visitante (lo advierten en sus [Términos](https://scrollshaders.com/terms), §10).

**Veredicto: no.** La licencia permitiría usarlo en webs de clientes si se pagara, pero no es lo que necesitan KATA WEBs ni el blog: un shader de fondo penaliza carga, batería y móviles modestos, que es justo donde tienen que ir bien estas webs. Un MP4 o un still no resuelven del todo el problema (el MP4 sigue siendo un vídeo en bucle). No vale la pena pagar 29 USD/mes, 129 USD/año o 239 USD lifetime para este uso.

---

## 3. Footer Design — [footer.design](https://footer.design)

**Qué es:** galería curada de pies de página de webs reales, con filtros por tipo y estilo. Proyecto personal de Benten Woodring, Devin Fountain y Matt Cram ([Info](https://www.footer.design/info)): «a site to collect and curate inspiration for our fellow designers». Se puede enviar un sitio; no aceptan entornos de staging. Enlazan al sitio original de cada pie.

**Precio:** no hay planes de pago ni precios en la web revisada. La consulta y el envío son públicos.

**Licencia:** **no encontrada.** `/terms` y `/privacy` responden 404 (comprobado el 10 nov 2026). La página Info solo describe el proyecto y no otorga derechos sobre los pies mostrados. Esos diseños siguen siendo de sus autores o clientes.

**Veredicto: solo inspiración.** Útil para mejorar el pie de KATA WEBs (servicios, contacto, zona, aviso legal) y el de estabaenlisboa.com, mirando jerarquía, tipo y qué se enlaza. No copiar un pie ajeno ni su código. Abrir siempre la web original, no quedarse en la miniatura de la galería.

---

## 4. CTA Gallery — [cta.gallery](https://cta.gallery)

**Qué es:** galería curada de llamadas a la acción de webs reales, por industria y por tipo (botón, compra, descarga, formulario, modal, navegación, newsletter, precios). La fundó Salim Lunat ([About](https://www.cta.gallery/about)) al ver [footer.design](https://footer.design) y echar en falta una galería solo de CTAs. Hay una página de [consejos de redacción](https://www.cta.gallery/cta-tips) y un [boletín](https://www.cta.gallery/subscribe) («No spam, just inspiration!»), no un plan de pago. En el listado aparecen también plantillas de terceros (p. ej. Webflow/Framer de Webestica) marcadas «Use for free»; eso es de esos productos, no una licencia sobre los CTAs de la galería.

**Precio:** no hay precio de la galería en las páginas revisadas. Publicidad y envío de CTAs, sí; suscripción = boletín.

**Licencia:** **no encontrada.** `/terms` y `/privacy` responden 404 (10 nov 2026). About y el resto de páginas públicas no conceden derecho a copiar los CTAs ajenos. Siguen siendo de sus sitios originales.

**Veredicto: solo inspiración.** Encaja bien con KATA WEBs: reserva, pedir presupuesto, llamar, ver menú, pedir cita. Los consejos de redacción (claro, verbo de acción, beneficio, poco texto) sirven si el copy es específico del negocio y **no se inventan** cifras ni pruebas sociales («Join 10,000+ happy subscribers» y similares, que el propio sitio usa como ejemplo, no se pueden trasladar sin un dato real). No copiar el diseño ni el texto de un CTA ajeno.

---

## 5. Refero Styles — [styles.refero.design](https://styles.refero.design)

**Qué es:** biblioteca en **beta** («Styles Beta») con «2,000+ AI-readable design systems» sacados de webs de productos reales. Cada estilo trae color, tipografía, espaciado, componentes y un DESIGN.md para pegar en Cursor, Claude Code, Codex, v0 o Lovable. Hay filtro «Food & restaurant» y ejemplos editoriales. En una ficha pública revisada el 10 nov 2026 ([estilo ElevenLabs](https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26)) se podían leer paleta, tipos, tokens y DESIGN.md sin iniciar sesión ni ver un muro de pago. El propio Refero aclara que estos documentos «are not official brand guides» ([DESIGN.md examples](https://styles.refero.design/ai-agents/design-md-examples)). En [Brand matching prompts](https://styles.refero.design/ai-agents/brand-matching-prompts) dicen:

> Brand matching is not screenshot copying. The goal is to reuse the logic of the system, not to recreate a source page pixel for pixel.

Es un producto distinto de la librería principal [refero.design](https://refero.design) (capturas, flujos, plugin de Figma, MCP), que sí tiene planes de pago.

**Precio:** en styles.refero.design no hay página de precios (`/pricing` = 404) ni importes. No encontré una frase oficial que diga «es gratis»; sí se podía consultar una ficha completa sin pago el día de la revisión.

El producto principal Refero, según [Planes](https://doc.refero.design/help/plans), tiene Free (búsqueda limitada, sin MCP ni plugin de Figma), Pro, Team, Lifetime y Enterprise; «See refero.design/pricing for current prices.» Precios comprobados el 10 nov 2026:
- En la FAQ de [refero.design/pricing](https://refero.design/pricing) el Team aparece así: «Per-seat pricing is $20 monthly or $140 annually for 1–5 seats, $18 or $130 for 6–10, and $16 or $120 for 11+.»
- La API pública que usa esa página (`https://api.refero.design/v1/subscription_plans`) devolvió estos importes con `"currency": "eur"`: **Refero PRO** 17/mes, 120/año o 250 lifetime (pago único); **Refero Team** 20/mes o 140/año por plaza (1–5 asientos; hay tramos más bajos a más plazas). La FAQ escribe los de Team con signo de dólar; la API los marca como EUR. No afirmar otra divisa ni otro importe de Pro/Lifetime que no esté en esas fuentes.

No hace falta contratar Refero Pro para usar Styles como referencia visual. El MCP, el plugin de Figma y la librería completa de capturas sí van con plan de pago.

**Licencia:** no hay términos propios en styles.refero.design (`/terms` = 404). Rigen los [Términos de uso de Refero](https://doc.refero.design/legal/terms-of-use) (3 de agosto de 2026). Apartado 10:

> Refero Content is provided for design research, inspiration, comparison, education, and reference. Screenshots, logos, trademarks, product names, and other third-party materials remain the property of their respective owners. […] You may use Refero Content through the Service for lawful design research, inspiration, internal reference, and ordinary product design work permitted by your plan or agreement.

Se pueden usar ideas y referencias en trabajo comercial o para un cliente (presentaciones, moodboards, investigación). No se puede revender, republicar ni extraer la librería como dataset, ni usar el contenido para entrenar modelos, ni emplear logos o marcas de terceros de forma que infrinja o induzca a error. Las fuentes citadas en un DESIGN.md tienen su propia licencia: no se pueden meter en un sitio de cliente solo porque salgan en Refero.

**Veredicto: solo inspiración.** Es el más útil de los cinco como referencia de sistema (color por función, jerarquía tipográfica, ritmo de espaciado), sobre todo el filtro de restaurantes para KATA WEBs y los ejemplos editoriales para estabaenlisboa.com. No clonar Apple, Stripe, ElevenLabs ni ninguna otra marca, ni pegar su DESIGN.md tal cual en la web de un fontanero o un restaurante. Adaptar reglas a la identidad del cliente, con tipografías que sí se puedan licenciar.

---

## Cómo usarlo a partir de aquí

1. Para pulir KATA WEBs o estabaenlisboa.com: **footer.design**, **cta.gallery** y **styles.refero.design** como referencia, nunca como plantilla.
2. No comprar Scrolltide ni Scroll Shaders mientras el encargo sea una web local simple, rápida y con SEO.
3. Cualquier compra, o cualquier cambio en una web ya publicada, espera decisión expresa de José.
4. Volver a comprobar precios y términos antes de pagar: la fecha de esta nota es el 10 de noviembre de 2026 (Europe/Lisbon).
