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

## 2026-11-01 — Lilia (casual independiente, Williamsburg, Brooklyn)
Sitio: https://www.lilianewyork.com/
Tipo: Restaurante italiano casual de chef Missy Robbins. Wood-fired seafood, pastas hechas a mano, en un antiguo taller. Foco en ingredientes simples y hospitalidad cálida. Reserva vía Resy o email.

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto oscuro suave `rgb(52, 52, 52)`. Contraste legible, no extremo.
- Tipografía: **Pinyon Script** (cursive/script, weight 400, 36-44px) para todos los headings (About, Menu, Reservations, categorías de menú). **Raleway** (sans, 16px body). Contraste de carácter: script elegante y personal vs sans limpia. No Inter/Roboto.
- CTAs: mayoría texto o outline. "About Us" outline blanco sobre foto (border 2px solid white, radius 0, uppercase, 13.6px). "Email Signup" texto verde-oliva `rgb(114, 123, 78)` uppercase. Nav con "Toggle Navigation Menu". Ningún filled grande o pill.
- Fotografía: hero gallery de imágenes reales del local (Lilia-0192.jpg, etc., probablemente interior/comida/ambiente). Alts vacíos. No stock perfecto ni generativo; se siente de lugar real.
- Espaciado: secciones con padding horizontal ~64px, generoso. Cero sombras (`box-shadow: none`). Bordes mínimos. Estética limpia y aireada.
- Menú: categorías en Pinyon Script (Aperativi Salati / COCKTAIL SNACKS, Antipasti / TO START, Piccoli Pesci...). Platos con nombres específicos (Cacio e Pepe Frittelle, Prosciutto con Balsamic Mustard, Housemade Mozzarella...). No vi precios en el HTML principal (común en sitios de este tipo). Estructura de texto, no cards.
- Estructura: hero full-height gallery, secciones About/Menu/Reservations con split layouts. Dirección visible arriba. Reserva: "Reservations can be made through RESY or by emailing us at reservations@lilianewyork.com".
- Mobile: hay botón "Toggle Navigation Menu" claro. Estructura se mantiene legible (no pude forzar viewport exacto en la herramienta, pero el hamburger está presente).
- Copy: personal y específico. Habla de Missy Robbins (Spiaggia, A Voce, James Beard, libros PASTA y Breakfast Lunch Dinner...Life), "wood-fired seafood, handcrafted pastas", "honoring regional traditions and the many Italian grandmothers who cooked before us". No genérico "exceptional dining experience". Suena a voz de chef real.

### 6 patrones concretos para webs anti-IA
1. **Script/cursive para headings + sans limpia para cuerpo**: Pinyon Script da personalidad y calidez humana (parece escrito a mano o de carta), Raleway mantiene legibilidad. Evita la uniformidad sans geométrica de templates AI. Contraste tipográfico con propósito emocional.
2. **CTAs outline o texto puro, radius 0, uppercase ligero**: Outline blanco sobre imagen o texto de color. Edges sharp, no pills redondeados ni filled saturados. Sensación de diseño editorial o de menú impreso, no de UI kit SaaS.
3. **Paleta blanco + gris oscuro suave + acento oliva puntual**: Fondo blanco, texto #343434, acento verde-oliva en microcopy. Evita negro puro y pasteles "AI luxury". Limpio, cálido por el script.
4. **Hero gallery de fotos reales del lugar, sin alts genéricos**: Imágenes del local real (interior, ambiente). Humaniza por la especificidad del espacio, no por plating perfecto flotante. Alts vacíos son un punto débil (mejorable), pero las fotos no se sienten generadas.
5. **Menú como lista categórica en script + nombres de platos evocadores**: Categorías en cursiva script, platos con nombres propios (Cacio e Pepe Frittelle, etc.). Menos grid de product cards, más carta de restaurante. Invita a la experiencia sin precios visibles.
6. **Copy biográfico y específico del chef/lugar**: Habla de la trayectoria de Missy, los libros, las abuelas italianas, wood-fired. Suena a persona real contando su historia, no a prompt de "warm hospitality and authentic flavors".

Estos patrones priorizan tipografía con carácter emocional (script), restricción en botones, fotos del espacio real y copy biográfico para evitar la estética pulida y genérica de generación IA.
