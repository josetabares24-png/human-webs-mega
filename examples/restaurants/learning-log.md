# Learning Log — Restaurantes

Observaciones de sitios reales para extraer patrones útiles en webs anti-IA (estética humana, no generativa genérica).

## 2026-11-01 — Canlis (premium, independiente, Seattle)
Sitio: https://canlis.com/
Tipo: Fine dining familiar desde 1950, edificio icónico con vistas.

### Lo que vi (honesto)
- Fondo crema suave `rgb(239, 240, 235)` / #EFF0EB, texto oscuro cálido `rgb(39, 35, 32)`.
- Tipografía: GT Sectra Book (serif elegante, 20px en headings, 13px body) para texto principal; Helvetica Neue Medium (11.7px, uppercase, letter-spacing 0.65px) para nav y microcopy. Contraste alto pero no negro puro.
- CTAs: casi todo texto puro, sin botones filled. "RESERVE" es un link uppercase en nav, sin fondo, border-radius mínimo (5px en el de nav). No hay outline agresivo ni pills.
- Fotografía: grandes, reales, de servicio (ensalada tableside), exterior nocturno, platos (pork belly), comedor. No stock, con gente y acción. Alts descriptivos.
- Espaciado generoso, poco ruido. Nav minimalista: RESERVE | EXPLORE | PRIVATE EVENTS + logo.
- Menú: texto simple, cursos numerados con descripciones cortas (sin precios visibles en el listado principal). Copy humano: "We'll ask that you begin your evening by choosing 3 of those courses, and we'll take care of the rest."
- Reserva va a Tock (exploretock.com/canlis). Mobile no pude forzar viewport fácilmente, pero la estructura parece adaptada (nav compacta).
- Copy: narrativo, personal, no "discover our exceptional dining experience". Habla de 75 años, del edificio, del cuidado.

### 5 patrones concretos para webs anti-IA
1. **Tipografía dual con propósito**: Serif editorial (GT Sectra) para cuerpo y títulos narrativos + sans compacta uppercase con tracking para UI/nav. Evita Inter/Roboto genérico. Da peso cultural sin ser "AI elegant".
2. **CTAs de texto puro, no botones**: Links uppercase letter-spaced, sin fill ni outline. El color y el peso hacen el trabajo. Menos "template", más editorial. Contraste suficiente sobre crema.
3. **Paleta crema + oscuro cálido + acento puntual**: Fondo #EFF0EB, texto #272320, acentos dorados/naranjas sutiles. Evita blanco puro #FFF y negro #000. Sensación de papel, no pantalla.
4. **Fotografía de proceso y ambiente, no solo plato perfecto**: Imágenes de servicio tableside, exterior con árbol, comedor con gente. Alts específicos. Humaniza y evita el look de generación IA (comida flotando, luz perfecta).
5. **Menú como texto narrativo, no grid de cards**: Lista simple de cursos con ingredientes cortos. Copy que explica la dinámica ("elige 3, nosotros el resto"). Menos "product cards", más carta de restaurante real. Reduce la sensación de SaaS.
6. **Nav ultra-minimal con CTA principal siempre visible**: RESERVE destacado en texto, resto en dropdown o secundario. Menos links, más foco. En móvil probablemente hamburger o compacto.

Estos patrones priorizan restricción, tipografía con carácter, fotos reales de gente/servicio y copy que suena a persona, no a prompt.

## 2026-11-01 — Eleven Madison Park (premium, independiente, Nueva York)
Sitio: https://www.elevenmadisonpark.com/
Tipo: Fine dining Michelin, chef Daniel Humm, enfoque plant-based con opciones, Magic Farms.

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto negro `rgb(0, 0, 0)`. Alto contraste, limpio.
- Tipografía: Nobel (sans, weight 300, uppercase, letter-spacing ~0.34px, ~17px) para nav y links UI. Helvetica Neue (bold 700, 30px) para algunos headings como el del hero. EB Garamond en elementos secundarios. No Inter genérico.
- CTAs: mayoría texto puro uppercase sin fondo ni borde. Excepción clara: "Book on Resy" filled con fondo `rgb(252, 72, 55)` (~#FC4837), texto blanco, border-radius ~6px, padding horizontal. Otro "Reserve" filled negro sin radius. Contraste alto.
- Fotografía: grandes y reales de origen y proceso — Badger Flame Beets en Magic Farms, lechugas creciendo, chefs visitando al granjero Maciek, vino siendo servido, chef Daniel Humm charlando con guests en el comedor. Alts específicos y descriptivos. No solo platos perfectos aislados.
- Espaciado generoso, estética editorial/lujosa pero funcional. Nav con botón "Open Menu" (hamburger visible incluso en desktop en mi captura).
- Menú: no se publica completo online (por naturaleza hiper-estacional; "unable to share our food menus online"). Se explican opciones (full tasting, bar tasting, plant-based choice). Horarios claros.
- Reserva a Resy. Mobile: hamburger "Open Menu", dirección, teléfono y CTA Resy visibles de inmediato.
- Copy: narrativo y específico — habla de la asociación con Magic Farms, opciones de elección en cursos, edificio Art Deco, historia post-pandemia. No genérico "exceptional dining".

### 6 patrones concretos para webs anti-IA
1. **Tipografía con carácter y propósito**: Nobel light uppercase con tracking ligero para navegación/UI + Helvetica Neue bold para impacto en títulos. Evita la uniformidad de Inter/Roboto. Da sensación de marca diseñada, no template.
2. **CTAs híbridos: texto puro + filled de acento solo para la acción principal**: Nav en texto limpio; reserva principal en filled color de marca (rojo-naranja vibrante) con radio pequeño. Menos botones genéricos iguales, más jerarquía visual humana.
3. **Paleta mínima blanco/negro + acento vibrante puntual**: Fondo blanco, texto negro, un solo color fuerte para el CTA de conversión. Alto contraste, evita pasteles o gradientes "AI luxury". Limpio y decidido.
4. **Fotografía de origen, proceso y personas reales**: Imágenes de la granja (productos creciendo, chefs con el agricultor), servicio de vino, interacción chef-guest. Alts detallados. Humaniza y rompe el look de comida flotante o luz perfecta generada.
5. **Menú no listado completo + copy que explica la filosofía**: No grid de platos con precios (por estacionalidad). En su lugar, texto que cuenta cómo funciona (opciones de elección, plant-based). Invita a reservar para descubrir. Menos catálogo SaaS, más experiencia.
6. **Nav compacta con hamburger y CTA reserva siempre accesible**: Incluso en desktop aparece "Open Menu"; en mobile es claro. Dirección, contacto y reserva visibles rápido. Prioriza la acción sin saturación de links.

Estos patrones enfatizan restricción tipográfica con fuentes específicas, jerarquía de CTAs, fotos de proceso humano y copy que suena a restaurante real (no a prompt de IA).

## 2026-11-01 — Le Bernardin (premium, independiente, Nueva York)
Sitio: https://www.le-bernardin.com/
Tipo: Fine dining de mariscos, Michelin 3 estrellas, de Maguy Le Coze y Eric Ripert. En Midtown Manhattan desde 1986.

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto gris medio `rgb(102, 102, 102)`. Contraste moderado, no negro puro. Sensación limpia y quieta.
- Tipografía: Helvetica Neue variants (W01-45Ligh ~14px body, Thin para UI/nav ~14px). Uppercase con letter-spacing 1.5px en CTAs y microcopy. Weights light/thin. Sans-serif pura, sin serif. No Inter ni Roboto.
- CTAs: texto puro uppercase tracked, sin filled, sin outline, sin border-radius. "RESERVATIONS" como link principal. Dirección y teléfono como links clickeables. Ningún botón visual destacado.
- Fotografía: grandes imágenes de platos reales (tartare de wagyu, lobster, etc.) como hero/slider. Overhead o close-up de comida en plato blanco. Poca o ninguna gente o ambiente en las capturas iniciales. Alts vacíos en varios.
- Espaciado generoso, cero sombras (`box-shadow: none`), bordes mínimos o inexistentes. Estética de galería o editorial fotográfica.
- Menú: HTML estructurado por filosofía (Almost Raw / Barely Touched / Lightly Cooked). Prix fixe claro ($225 dinner 4 courses). Platos específicos con descripciones cortas. También PDFs descargables. Lounge menu separado.
- Reserva: a Resy. Políticas explícitas (abre el 1 del mes a las 7AM ET, cancelación 48h / $150 pp, no lounge). Copy operativo, no aspiracional.
- Mobile (viewport 375px): dirección, teléfono, snippet de About y links a PDFs de menú visibles. Hamburger implícito para nav completa. Estructura se mantiene minimal.
- Copy: factual e histórico breve ("Arriving from Paris in 1986, we quietly opened..."). Habla de la comida (fish only, fresh, simple, respect), no de "experiencia excepcional" genérica. Dress code y reglas claras.

### 5 patrones concretos para webs anti-IA
1. **Tipografía sans light/thin con tracking**: Helvetica Neue Thin/Light + uppercase letter-spaced para UI. Evita serifs "luxury AI" y fuentes genéricas. Da sensación de quietud y precisión, no de template.
2. **Restricción extrema: solo el plato y el nombre**: Fondo blanco, texto gris, una foto grande de comida real. Nada de grids, cards ni elementos decorativos. Menos es más, anti-generativo.
3. **CTAs de texto puro tracked**: Links uppercase con spacing, sin botones filled ni outline. La jerarquía viene del peso tipográfico y posición, no de forma. Evita el look de SaaS o UI kit.
4. **Fotografía de plato específico, no stock ni perfecta**: Imágenes reales de tartare, caviar, lobster sobre plato. No flotando, no luz de estudio genérica. Humaniza por la especificidad del plato.
5. **Menú como carta conceptual, no catálogo**: Categorías como "Almost Raw" en vez de Appetizers/Mains. Texto simple con precios y descripciones. Invita a la experiencia real. Menos product cards, más restaurante.
6. **Copy operativo y histórico, no marketing**: Políticas de reserva exactas, historia breve, dress code. Suena a lugar real con reglas, no a prompt de "luxury dining experience".

Estos patrones priorizan quietud tipográfica, restricción visual extrema, fotos de platos reales específicos y copy factual para evitar cualquier estética generativa o template.

## 2026-11-01 — Katz's Delicatessen (casual clásico, independiente, Nueva York)
Sitio: https://katzsdelicatessen.com/
Tipo: Deli judío histórico desde 1888, Lower East Side. Fuerte foco en shipping nationwide + menú in-store/delivery. Más e-commerce de comida que sitio de restaurante puro.

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto negro `rgb(0, 0, 0)`. Alto contraste funcional.
- Tipografía: Lato (sans-serif) en todo. Body 14px weight 300-400. Headings/categorías H4 20px bold 700, color `rgb(34, 34, 34)`. Sin serif, sin tracking especial. Fuente común pero legible y sin pretensiones.
- CTAs: mayoría links de texto puro. Acciones clave (Search, Create an Account) filled rojo intenso `rgb(209, 16, 16)` / ~#D11010, texto blanco, border-radius pequeño (3-4px), padding compacto. No pills grandes ni outlines. Algunos product links sin estilo de botón.
- Fotografía: producto real y directo — sandwiches de pastrami, carnes rebanadas, packages de shipping, latkes, sopa. Estilo de catálogo de deli, no plating gourmet ni luz perfecta. Alts vacíos en varios. No gente ni ambiente del local en las capturas principales.
- Espaciado: funcional de e-commerce, grids de productos. Sombras casi ninguna (`box-shadow: none` en cards), bordes mínimos. No editorial ni generoso como los fine dining.
- Menú: categorizado (Meats, Jewish Specialties, Grill, Soups…) con precios claros. Fuerte énfasis en shipping packages (Birthday Box $140, Taste of New York $165). Menú in-store separado para delivery Manhattan.
- Mobile (emulado 375px): nav horizontal superior simplificada (SHIPPING | CATERING | IN-STORE MENU | BROOKLYN…). Copy de bienvenida y carousels de productos visibles. Funcional, no oculto.
- Copy: histórico y orgulloso ("A New York institution since 1888", "hand-carved", "legendary house-cured"). Específico del producto y la tradición, no aspiracional genérico. FAQs operativas de shipping.

### 6 patrones concretos para webs anti-IA
1. **Tipografía sans común pero consistente y sin adornos**: Lato bold para categorías, light/regular para cuerpo. Evita fuentes "diseñadas" o serifs de lujo. Da sensación de lugar real de barrio, no de marca AI-generated.
2. **Acento de marca fuerte y puntual en CTAs clave**: Rojo deli `rgb(209, 16, 16)` solo en botones de acción (búsqueda, registro). Resto texto limpio. Jerarquía clara sin saturar de botones filled. Radio pequeño, no pill.
3. **Paleta blanco/negro + rojo clásico**: Alto contraste, un solo acento histórico. Evita pasteles, cremas o gradientes. Sensación de menú de deli impreso, no de web moderna genérica.
4. **Fotografía de producto directo y sin glamour**: Fotos de carnes, sandwiches reales, packages. No overhead perfecto ni luz de estudio. Humaniza por la honestidad del producto (se ve lo que es).
5. **Estructura de catálogo funcional con categorías claras**: Grids simples de productos con precio. Menú separado de shipping vs in-store. Menos storytelling editorial, más "esto es lo que vendemos". Anti-SaaS por ser específico del negocio.
6. **Copy histórico y operativo, no marketing**: Habla de 1888, hand-carved, shipping real. Suena a negocio con historia, no a prompt de "iconic NYC experience".

Estos patrones muestran cómo un sitio comercial real prioriza función, color de marca tradicional, fotos honestas de producto y copy factual. Útil para contrastar con la estética pulida genérica de IA.

## 2026-11-01 — Dishoom (cadena indie, multi-location, Reino Unido)
Sitio: https://www.dishoom.com/
Tipo: Cadena de cafés indios inspirados en los Irani cafés de Bombay. Múltiples sedes en UK, fuerte storytelling cultural, comida comfort de Bombay.

### Lo que vi (honesto)
- Fondo crema cálido de papel `rgb(240, 236, 224)`, texto oscuro `rgb(53, 56, 57)`. Sensación de carta impresa o menú de café antiguo.
- Tipografía: CheltenhamBT (serif, fallback ui-serif/Georgia) en body 16px weight 400 y headings ~21px weight 400. Serif editorial clásica, no sans moderna. Contraste suave pero legible.
- CTAs: "Book a table" filled oscuro `rgb(53, 56, 57)`, texto claro `rgb(255, 253, 249)`, border 2px solid mismo color, border-radius 0px (cuadrado), padding 10px 16px, 13px bold 700. No pills ni outlines redondeados. Nav con "Toggle Menu".
- Fotografía: históricas y de ambiente (B. Merwan Grant Road 1914, spreads de comida, chefs). Captions "ABOVE:" y "RIGHT:". Reales, con contexto cultural, no solo platos aislados perfectos.
- Espaciado generoso, separadores horizontales, estética de revista o menú largo. Sin sombras agresivas.
- Menú: texto narrativo por momentos del día (breakfast, lunch, afternoon chai, dinner). Platos específicos con nombres evocadores (Bacon Naan Roll, House Black Daal, Vada Pau). Enlace a menús detallados.
- Estructura: hero con cita, "From Bombay with Love", lista de cafés por ciudad, secciones de food, gifts, awards. Multi-location claro.
- Mobile (emulado): "Toggle Menu" + "Book" prominentes, texto fluye bien, no se rompe.
- Copy: altamente narrativo y específico — "Each Dishoom is a love letter to Bombay", referencias a cafés históricos, "scoured the streets", "Chef-wallas". No genérico "authentic Indian cuisine".

### 6 patrones concretos para webs anti-IA
1. **Serif editorial clásica como cuerpo principal**: CheltenhamBT / Georgia-like para todo el texto. Evita sans geométricas genéricas. Da peso de carta impresa o libro, anti-template digital.
2. **Fondo crema de papel + texto oscuro suave**: `rgb(240, 236, 224)` + `rgb(53, 56, 57)`. No blanco puro ni negro. Sensación táctil de menú físico.
3. **CTA filled cuadrado oscuro, sin radius**: Botón principal sólido, edges sharp, color de texto. Jerarquía clara sin parecer UI kit moderno o AI-rounded.
4. **Fotografía con captions y contexto histórico**: Imágenes etiquetadas "ABOVE:" de lugares reales o spreads. Humaniza por la narrativa visual, evita look de stock o generación perfecta.
5. **Copy de storytelling cultural específico**: Habla de Bombay, Irani cafés, viajes de chefs, platos con nombres propios. Suena a voz de marca con historia, no a prompt de "welcoming atmosphere".
6. **Estructura multi-location + momentos del día**: Lista clara de sedes + menú organizado por desayuno/almuerzo/chai. Funcional y humano, menos catálogo abstracto.

Estos patrones combinan restricción tipográfica serif, paleta de papel, botones geométricos simples, fotos contextuales y copy narrativo real para romper la estética pulida genérica de IA.

## 2026-11-01 — Carbone (premium/casual glamour, Major Food Group, Nueva York)
Sitio: https://carbonenewyork.com/
Tipo: Restaurante italiano-americano icónico en Thompson Street (ex-Rocco), de Mario Carbone / Major Food Group. Glamour mid-century, servicio de captains en tuxedo, menú de classics Little Italy modernizados. Multi-location pero foco en el original NYC.

### Lo que vi (honesto)
- Fondo crema cálido `rgb(255, 249, 240)`, texto navy profundo `rgb(10, 26, 41)`. Sensación de menú de restaurante vintage o papel de carta, no blanco puro.
- Tipografía: body en fuente custom Hoefler-like (`__hoeflerFont_...`, 18px weight 400, line-height 26.4px). Headings en otra custom (`__headingFont_...`, 32-38px weight 700, uppercase). No Inter/Roboto. Contraste alto pero cálido.
- CTAs: "RESERVE A TABLE" y "ORDER NOW" outline o filled crema sobre navy (border 1px solid navy, bg crema, texto navy, border-radius 2px, padding ~10px 16px). "SUBSCRIBE" filled navy con texto crema, mismo radio mínimo. No pills, no sombras. Algunos links de texto puro.
- Fotografía: comedor real (banquetas burgundy, arte, luz soft), desde Sanity CDN. Alts como "Carbone Dining Room". Mezclada con secciones de texto. No solo platos flotantes.
- Espaciado generoso, secciones narrativas (THE ORIGINAL, CHEF MARIO CARBONE, THE MENU, THE STORY, THE DESIGN). Cookie banner presente pero dismissible. Nav con logo + hamburger "Open Main Menu".
- Menú: tabs interactivos (DINNER, LUNCH, WINE, DRINKS, DESSERT, THANKSGIVING, CHRISTMAS). No PDF único.
- Estructura: hero con nombre y ubicación, bio del chef (Queens, CIA, año en Italia), historia del local (Rocco, neon sobre el viejo sign), design description.
- Mobile: no forcé viewport, pero hay botón de menú y estructura de secciones debería adaptarse. CTAs principales visibles.
- Copy: específico y literario — "captains sporting tuxedos by Zac Posen", "artworks by the likes of Julian Schnabel", "the words Carbone glow in neon over the original Rocco sign", "Sicilian abbondanza". No genérico "exceptional Italian dining".

### 6 patrones concretos para webs anti-IA
1. **Paleta crema + navy profundo**: Fondo `rgb(255,249,240)` + texto `rgb(10,26,41)`. Evita blanco #FFF y negro puro. Sensación de carta impresa o interior de restaurante clásico, no de web AI limpia.
2. **Tipografía custom dual (serif-like body + heading uppercase bold)**: Hoefler-inspired para cuerpo 18px, custom bold uppercase para títulos. Da carácter editorial y peso cultural, anti-Inter genérico.
3. **Botones con radio mínimo (2px) y contraste crema/navy**: Outline o filled con border fino, no rounded-full ni sombras. Jerarquía clara (reserva outline, subscribe filled) sin look de UI kit moderno.
4. **Estructura narrativa por secciones temáticas**: THE ORIGINAL / CHEF / THE STORY / THE DESIGN en vez de solo grid de menú o about genérico. Copy con detalles específicos (diseñadores, historia del local). Humaniza la marca.
5. **Menú como tabs interactivos**: DINNER/LUNCH/WINE etc. en tablist. Más usable y moderno-funcional que PDF o lista infinita, pero sin cards de producto SaaS.
6. **Fotografía de ambiente real del comedor**: Imágenes del dining room con banquetas, arte y luz, no solo food close-ups perfectos. Alts descriptivos. Rompe el look de generación IA de platos flotantes.

Estos patrones priorizan paleta cálida de papel, tipografía con carácter, botones geométricos simples, storytelling específico y fotos de ambiente para evitar la estética genérica y pulida de IA.
