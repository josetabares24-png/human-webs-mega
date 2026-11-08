# Learning Log — Restaurantes

Observaciones de sitios reales para extraer patrones útiles en webs anti-IA (estética humana, menos genérica).

## 2026-11-08 — Canlis (premium, independiente, Seattle)
**URL**: https://canlis.com/
**Tipo**: Fine dining familiar desde 1950, tasting menu de 6 platos.

### Estructura y CTAs
- Nav superior muy minimal: RESERVE (enlace a Tock) a la izquierda, logo/nombre centrado o en explore, PRIVATE EVENTS a la derecha. Todo en uppercase pequeño.
- No hay CTA gigante de "Book now" en hero. El reserve es texto de nav.
- Hero es la foto del edificio con el nombre CANLIS superpuesto en tipografía grande translúcida (glass-like).
- Secciones con fotos grandes + textos cortos narrativos. Scroll vertical simple.
- Menú en página separada con estructura de cursos numerados (One, Two…).

### Tipografía
- Cuerpo: GTSectraBook (serif, parece book/regular), ~13px, color oscuro cálido rgb(39,35,32), line-height normal.
- Títulos de sección: misma familia, 20px, weight 400 (nada bold). Muy ligera.
- En página de menú: título "Menu" enorme (112px) con GTSectraDisplayLight (display serif ligera).
- Nav y CTAs: uppercase, ~11.7px, letter-spacing normal.
- Sensación: tipografía serif editorial, nada de sans geométrica moderna o weights pesados. Títulos no gritan; fluyen con el cuerpo.

### Botones
- Prácticamente no hay botones filled. Todo son links de texto.
- Reserve: texto uppercase, bg transparente, color texto, border-radius 5px (sutil), padding 0.
- Estilo: outline/text puro. Contraste alto pero discreto. Tamaño pequeño.
- No hover exagerado visible en captura estática; muy understated.

### Colores
- Fondo principal: rgb(239, 240, 235) — off-white/cream suave, casi beige claro.
- Texto: rgb(39, 35, 32) — marrón casi negro, cálido.
- Acentos: blancos puros en algunos textos de nav sobre fotos, grises medios (82,82,82).
- Paleta restringida, natural, nada de neón o azul corporativo. Contraste bueno pero no estridente.
- Fotos aportan el color (comida, madera, luces nocturnas).

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, mucho aire. Padding en contenedores ~18-24px.
- Fotos a full o casi full width, sin border-radius (0px), sin sombras propias. Algunas secciones tienen box-shadow suave rgba(0,0,0,0.08) 0 5px 10px + 0 15px 35px.
- Fotografía: real, de alta calidad — salad tableside, exterior nocturno con cedro, pork belly, dining room con servers. No stock genérico. Alts descriptivos.
- Bordes casi inexistentes; todo fluye.

### Menú, móvil y copy
- Menú: tasting experience. "We offer a 6-course dining experience. We'll ask that you begin your evening by choosing 3 of those courses, and we'll take care of the rest." Luego platos en mayúsculas (SABLEFISH) + descripción corta en minúsculas.
- Copy: narrativo, personal, casi literario. "The opportunity to meet and serve you is one we don’t take lightly, not for the past 75 years at least. Come spend the evening with us. Our favorite thing in the world is taking care of others..." Nada de "Discover our exquisite culinary journey" genérico.
- Móvil: no pude forzar viewport fácilmente, pero tipografía base pequeña y nav simple sugieren que se adapta (probablemente hamburger o stack). CTA reserve permanece accesible.

### Patrones concretos útiles para webs anti-IA
1. **Tipografía serif light editorial**: Usar una serif book/display ligera para títulos y cuerpo. Evitar sans bold o display geométricas. Títulos del mismo peso que cuerpo o solo un poco más grandes; la jerarquía viene del tamaño y del espacio, no del bold.
2. **CTA de texto puro en nav, no botón filled**: "RESERVE" como link uppercase discreto. Genera exclusividad; no parece un e-commerce agresivo.
3. **Paleta cream + marrón cálido**: Fondo rgb(~240,240,235) + texto casi negro cálido. Evita blanco puro #fff + negro #000 o grises fríos. Sensación de papel, de interior de restaurante.
4. **Fotos reales con alts humanos y sin ornamento**: Imágenes de servicio tableside, edificio real, comida concreta. Sin overlays pesados, sin border-radius redondeado "moderno", sin sombras dramáticas en las fotos.
5. **Copy específico y personal, no marketing**: Frases que suenan a carta o a voz del chef/dueño ("our favorite thing in the world is taking care of others", detalles de 75 años, building de 1950). Evitar plantillas de "experience" y "passion".
6. **Menú como narrativa de cursos, no grid de tarjetas**: Platos en mayúsculas + descripción en prosa corta. Estructura de degustación explícita en vez de categorías genéricas con precios grandes.

**Honestidad**: Sitio muy premium y minimal. Funciona porque el producto es exclusivo y la marca tiene historia real. En un restaurante casual podría sentirse frío o lento si no hay fotos fuertes y copy concreto. La tipografía custom (GTSectra) aporta mucho; sin ella se perdería carácter.

## 2026-11-08 — Huber's Cafe (histórico, independiente, Portland)
**URL**: https://www.hubers.com/
**Tipo**: Restaurante histórico desde 1879, famoso por turkey dinner y Spanish coffee. Independiente, familiar, mezcla casual-premium de ambiente.

### Estructura y CTAs
- Nav superior horizontal con links uppercase pequeños: Home, Menu, Drinks, Turkey Packages, Catering, Parties, Jobs, Order, Reservations, Souvenirs. Fondo cream rgb(246,238,225).
- CTA principal "ORDER ONLINE" / "Click or tap to ORDER" como botón filled negro con texto blanco, padding generoso (10px 50px), border-radius 4px, font-weight 300.
- Hay una barra fija inferior (navbar-fixed-bottom) con Order y Reserve, aunque a veces offset.
- Hero/slideshow con fotos del interior histórico (bar con arcos, espejos, terrazzo).
- Secciones: About, Catering, Reservations, Reviews (carousel de Yelp), foto gallery.
- Popup promocional al cargar.

### Tipografía
- Títulos principales (h1/h2 grandes): Montserrat, ~49.6px, weight 300 (light), color negro o blanco sobre fotos.
- Subtítulos y nombres de platos: Trochut (serif display/script-like), ~28px o 19-25px, weight 400-700, letter-spacing 1.3px, color gris cálido rgb(136,131,127) o negro.
- Cuerpo: sans-serif genérica (probablemente system o similar a Montserrat), 16px, color rgb(51,51,51).
- Nav: uppercase, ~11.2px, weight 400, color negro o gris.
- Sensación: mezcla de sans light moderna (Montserrat) con serif display antigua (Trochut) que evoca historial y menú clásico. No es todo bold ni geométrico puro.

### Botones
- Principal de orden: filled negro rgb(0,0,0), texto blanco, border-radius 4px, padding amplio, font-size ~19px, weight 300. Contraste alto, estilo clásico no "pill" ultra redondeado.
- Nav links: texto puro, sin bg, uppercase pequeño.
- Algunos botones de slideshow o reviews son controles simples.
- Estilo general: filled discreto para acciones primarias, texto para navegación. Nada de outline neón o gradients.

### Colores
- Fondo principal: blanco rgb(255,255,255).
- Nav/banner: cream cálido rgb(246,238,225).
- Texto: negro, gris medio rgb(51,51,51), acentos gris cálido rgb(136,131,127).
- Botones: negro sólido.
- Fotos aportan tonos cálidos de madera, bar, comida.
- Paleta muy restringida, clásica, nada de colores brillantes de cadena. Contraste bueno, sensación de papel e interior antiguo.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso en secciones. Fotos a ancho considerable sin border-radius (0px) ni box-shadow.
- Algunas decoraciones de título (imágenes de ornament).
- Fotografía: real del lugar — bar histórico con arcos y espejos, platos (turkey, ham, salmon), interior. Alts descriptivos como "Historic bar and restaurant with arched mirrors and terrazzo tile." No stock genérico.
- Bordes mínimos; sombras casi inexistentes en elementos principales.

### Menú, móvil y copy
- Menú: página separada con categorías (Appetizers) en Trochut, platos listados como "Beer Battered Onion Rings", "Calamari Frita", etc. Estructura clásica de lista, no cards grid.
- Copy: específico e histórico. "Established in 1879, Huber’s is Portland’s oldest restaurant. If you visited us in the 1890s, you’d have seen patrons conversing with a drink in one hand and a turkey sandwich in the other." Enfoque en turkey, Spanish coffee, historia real. Reviews reales de Yelp integrados.
- Móvil: nav se adapta (hay versión más grande en algún breakpoint), CTA de orden prominente. Barra inferior ayuda a acciones clave.

### Patrones concretos útiles para webs anti-IA
1. **Mezcla tipográfica sans light + serif display histórica**: Montserrat 300 para títulos grandes + Trochut para subtítulos y platos. Evita la uniformidad de una sola sans geométrica bold. La serif da carácter de menú antiguo sin parecer template.
2. **Botón filled negro clásico con padding generoso y radius bajo**: No pill ultra-redondeado ni outline trendy. Contraste máximo, peso light en el texto. Se siente directo y local, no startup.
3. **Fondo cream en nav + blanco general + gris cálido**: rgb(246,238,225) en header evita el blanco puro total. Paleta cálida restringida que combina con fotos de madera e interior histórico.
4. **Fotos del lugar real sin ornamento digital**: Imágenes del bar real, platos concretos, sin border-radius, sin sombras, alts humanos. La fotografía carga el carácter; el diseño no compite.
5. **Copy anclado en historia concreta y producto signature**: Frases sobre 1879, turkey sandwich de los 1890s, Spanish coffee. Nada de "elevate your dining experience" genérico. Integra reviews reales en vez de testimonials inventados.
6. **Barra de acciones fija inferior + nav de texto uppercase pequeño**: Order/Reserve siempre accesibles sin hero CTA gigante. Nav discreta permite que las fotos y el texto histórico lideren.

**Honestidad**: Sitio funcional y con carácter por la historia real y las fotos del interior. La tipografía Trochut aporta personalidad (parece de menú de época), pero el resto es bastante template de restaurant website (slideshow, sections, reviews carousel). Hay popup al entrar que rompe un poco. Funciona bien para un lugar histórico independiente porque el contenido (historia, turkey) es específico; en un sitio genérico se notaría más la estructura repetida.

## 2026-11-08 — Cutler (premium-casual, independiente, Fitzroy Melbourne)
**URL**: https://www.cutlerandco.com.au/
**Tipo**: Restaurante de Andrew McConnell, ex Cutler & Co., en antigua fábrica de metalworks. Fine dining flexible con a la carte, clásicos y bar. Independiente, parte de Trader House.

### Estructura y CTAs
- Nav superior horizontal con links de texto: Reservations, Menu, Drinks, Private Dining, Gift Vouchers, Journal, Sundays at Cutler. Uppercase pequeño, sin botones filled.
- Logo "CUTLER" grande a la izquierda en tipografía display.
- Sidebar izquierdo fijo o prominente con MAKE A RESERVATION (texto), LOCATION (dirección exacta), OPENING HOURS, CONTACT (teléfono y email).
- Hero/foto grande del interior (mesas blancas, plantas, ladrillo) a la derecha.
- Secciones de texto narrativo + galería de fotos de comida y ambiente en grid.
- Footer con links Instagram, Careers, Privacy, Contact, Trader House + acknowledgement of country.
- CTA principal es texto "MAKE A RESERVATION" repetido, no botón grande.

### Tipografía
- Headings y nav: Persona + Archivo Narrow (sans narrow), 16px weight 700, letter-spacing ~1.12px, color rgb(34,34,34). Uppercase en secciones.
- Cuerpo: sans-serif genérica (system), ~17px, rgb(34,34,34).
- Logo: probablemente display custom o serif/narrow grande.
- Menú: categorías en Persona 700 ~20px, platos en mayúsculas con precios alineados.
- Sensación: sans narrow moderna pero no geométrica bold exagerada. Jerarquía por uppercase y letter-spacing, no por weights extremos. Editorial y limpia.

### Botones
- Casi no hay botones filled. Todo links de texto o a tags.
- "MAKE A RESERVATION": texto puro, weight 700, sin bg, sin border, padding 0.
- Nav links: texto, weight 700, ~15px, transparent bg, radius 0.
- Estilo: text/outline puro. Contraste alto (negro sobre blanco), discreto, sin pill ni sombras.
- Mobile: hay botón "Open Menu" para hamburger.

### Colores
- Fondo principal: blanco puro rgb(255,255,255).
- Texto: rgb(34,34,34) casi negro.
- Acentos: ninguno fuerte; las fotos aportan colores (comida, plantas verdes, vinos).
- Paleta ultra restringida: blanco + negro. Contraste máximo, sensación limpia y de papel.
- Nada de creams o acentos de color en UI; el color viene 100% de la fotografía.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, layout de dos columnas en hero (info izquierda + foto derecha).
- Fotos sin border-radius (0), sin sombras visibles. Grid de imágenes de comida y espacio real.
- Fotografía: de alta calidad del lugar real — interior con plantas y mesas, platos (octopus, rib eye, desserts), bar. Alts descriptivos o nombres de archivo humanos.
- Bordes y sombras casi nulos. Todo fluye con aire.

### Menú, móvil y copy
- Menú en /menu: texto introductorio narrativo ("Our menu reflects how we like to cook, dine and eat right now. It is spontaneous, thoughtful and modern cooking..."). Categorías en uppercase (APPETISERS, SEASONAL SEAFOOD, ENTRÉES, CUTLER CLASSICS). Platos en mayúsculas + precio, descripciones cortas. Incluye clásicos como dry-aged rib eye desde el día uno y hasta burger.
- Copy: específico y personal. Historia de 2009 en fábrica, ethos "refined, simple, hospitable dining", evolución con el barrio. Acknowledgement of Wurundjeri. Nada de marketing genérico.
- Móvil: nav colapsa a "Open Menu", sidebar de info se adapta. Fotos y textos se stackean bien. CTA de reserva accesible.

### Patrones concretos útiles para webs anti-IA
1. **Sans narrow uppercase con letter-spacing para jerarquía**: Persona/Archivo Narrow weight 700 + tracking. Evita serif display o bold geométrico. Da sensación de menú de restaurante moderno sin parecer AI template.
2. **Sidebar de info práctica fija + foto grande**: Dirección, horas, contacto y reserva como texto a la izquierda, foto del espacio a la derecha. Prioriza utilidad sin hero CTA agresivo.
3. **Paleta blanco puro + negro, color solo en fotos**: Nada de off-whites o acentos UI. La fotografía real carga todo el carácter visual. Contraste máximo y limpieza.
4. **Menú como lista tipográfica uppercase con precios**: Categorías bold narrow, platos en caps + precio alineado. No cards ni grids de productos. Narrativa corta al inicio.
5. **Copy anclado en historia concreta del lugar y chef**: Apertura en 2009, fábrica, ethos específico, evolución del barrio. Evita frases de "culinary journey" o "passion for food".
6. **CTAs de texto puro repetidos, no botones filled**: "MAKE A RESERVATION" como link en varios sitios. Genera exclusividad y confianza en el contenido visual.

**Honestidad**: Sitio muy limpio y profesional, típico de Squarespace bien usado por un restaurante premium independiente. La fuerza está en las fotos reales del espacio y la comida, y en el copy específico (historia de la fábrica, acknowledgement). La tipografía narrow uppercase le da carácter de menú sin ser ornamental. En un restaurante más casual o sin buenas fotos podría sentirse demasiado frío y blanco. No hay mucho "diseño" más allá de la tipografía y el layout simple; funciona porque el contenido es fuerte.

## 2026-11-08 — Eleven Madison Park (premium, independiente, Nueva York)
**URL**: https://www.elevenmadisonpark.com/
**Tipo**: Fine dining de 3 estrellas Michelin (Daniel Humm), tasting menu. Independiente de alto nivel, en edificio histórico de Madison Square.

### Estructura y CTAs
- Nav superior con links de texto: Reservations, About Us, Team, Magic Farms, Events, Stories, Gift Cards, Eleven Madison Home. Uppercase pequeño en algunos, logo centrado o prominente.
- CTA "Book on Resy" como botón filled en color coral/rojo rgb(252, 72, 55), texto blanco, border-radius ~6px, padding horizontal.
- Otro CTA "Reserve" filled negro, texto blanco, padding generoso (~18px 32px), radius 0.
- Hero con fotografía del interior o detalles, secciones de Stories, farm (Magic Farms), equipo y platos.
- Información de dirección y teléfono visible. Newsletter y links secundarios en footer.
- Estructura vertical simple, enfocada en reservas y narrativa del chef/farm.

### Tipografía
- Cuerpo y algunos textos: EB Garamond (serif clásica/humanista), ~16-19px, weight 400, letter-spacing leve.
- Nav y botones de menú: Nobel (sans light), ~17px, weight 300, uppercase, letter-spacing ~0.34px.
- Títulos de sección en Garamond, sin weights extremos.
- Sensación: serif editorial clásica para lectura + sans light discreta para UI. Jerarquía suave, no gritada. Evita sans geométricas bold o display modernas.

### Botones
- Principal reserva: filled coral/rojo vivo rgb(252,72,55), blanco, radius moderado 6px. Contraste alto, acento de color único.
- Secundario: filled negro puro, radius 0, padding amplio. Estilo clásico rectangular.
- Nav: texto puro o uppercase light. Sin outline exagerado.
- Estilo: filled selectivo para acción clave (Resy), texto para el resto. Nada de pills ultra-redondeados ni gradients.

### Colores
- Fondo principal: blanco puro rgb(255,255,255).
- Texto: negro rgb(0,0,0).
- Acento fuerte: coral/rojo Resy rgb(252,72,55) solo en el CTA principal.
- Paleta ultra restringida (blanco/negro) + un acento funcional. Contraste máximo.
- Fotos aportan el resto del color (comida, farm, interior).

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso. Fotos grandes de platos (con alts descriptivos como "Scallop Marinated with Kohlrabi and Hazelnut"), equipo, Magic Farms (túneles, remolachas), interior.
- Fotografía real y de alta calidad, alts humanos y específicos. Sin border-radius evidente ni sombras fuertes en imágenes.
- Bordes y sombras mínimos en UI. Layout limpio.

### Menú, móvil y copy
- Menú no listado online (hyper-seasonal, tasting). Copy enfocado en la experiencia, farm propio (Magic Farms), chef y evolución (plant-based y ahora con opciones).
- Copy específico: menciones a Daniel Humm, Magic Farms, omakase en The Studio, detalles de ingredientes. Narrativo y factual, no genérico de "culinary excellence".
- Móvil: hamburger "Open Menu", CTAs de reserva visibles y adaptados. Squarespace responsive.

### Patrones concretos útiles para webs anti-IA
1. **Serif clásica (EB Garamond) para cuerpo + sans light (Nobel) para nav**: Jerarquía editorial suave. La serif da lectura humana y histórica sin ser display ornamental; la sans light mantiene UI limpia. Evita la uniformidad geométrica bold de templates AI.
2. **CTA filled con acento de color único y funcional**: Rojo/coral solo en "Book on Resy", el resto monocromo. El color tiene propósito (acción), no decoración. Contraste alto y radius bajo-moderado.
3. **Fotografía con alts narrativos específicos**: Descripciones de platos concretos, farm, equipo. Las imágenes cuentan la historia del lugar real (Magic Farms, interior). Sin stock genérico ni overlays.
4. **Paleta blanco/negro estricta + un acento**: Máxima limpieza. El color vive en las fotos y en el único botón de acción.
5. **Copy anclado en farm propio y chef**: Magic Farms, Daniel Humm, evolución plant-based. Evita genéricos.
6. **Menú no online + storytelling de experiencia**: Confía en la reputación; el sitio no lista platos sino la filosofía.

**Honestidad**: Sitio premium limpio de Squarespace. La serif Garamond aporta elegancia humana. El acento coral solo en Resy es inteligente. Funciona por las fotos de farm y equipo reales.

## 2026-11-08 — Girl & the Goat (premium-casual, independiente, Chicago)
**URL**: https://www.girlandthegoat.com/
**Tipo**: Restaurante de Stephanie Izard, bold global flavors, West Loop. Independiente (Boka Group).

### Estructura y CTAs
- Info práctica (address, hours, contact) en bloque oscuro arriba.
- CTAs filled rectangulares brown.
- Nav de texto.
- Secciones de storytelling y promos.

### Tipografía
- Serif wide display (Fairplex) para títulos y cuerpo.
- Weights moderados.

### Botones
- Filled brown rgb(124,75,39), radius 0.

### Colores
- Blanco + gris oscuro + brown tierra.

### Espaciado, bordes, sombras, fotografía
- Fotos de interior real con alts descriptivos. Radius 0.

### Menú, móvil y copy
- Copy específico: Stephanie Izard, 2010, Green Beans, West Loop.
- Promos concretas como Goat Shoulder Kit.

### Patrones concretos útiles para webs anti-IA
1. **Serif wide display (Fairplex)**: Personalidad de carta.
2. **Botones filled rectangulares de color tierra**: No pill.
3. **Info práctica en bloque oscuro**: Utilidad primero.
4. **Copy anclado en chef y producto signature**: Green Beans, etc.
5. **Promos de temporada específicas**.
6. **Paleta blanco + brown, fotos reales**.

**Honestidad**: Personalidad por tipografía y copy. Estructura estándar pero contenido real la salva.

## 2026-11-08 — Le Bernardin (premium, independiente, Nueva York)
**URL**: https://www.le-bernardin.com/
**Tipo**: Fine dining de 3 estrellas Michelin (Eric Ripert), seafood francés, prix fixe. Independiente de alto nivel desde 1986 (origen París 1972).

### Estructura y CTAs
- Homepage extremadamente minimal: logo, dirección "155 W 51ST ST, NEW YORK, NY 10019", teléfono (212) 554-1515 y link "RESERVATIONS" en texto. Footer con Accessibility, Privacy, Partners, Acknowledgements, Sign Up.
- Nav/links superiores discretos. CTA principal es texto "RESERVATIONS" (no botón filled).
- Contenido principal parece slideshow de fotos (interior, Eric, etc.) con poco texto overlay.
- Menú en /menus/dinner con estructura jerárquica clara: Prix Fixe $225 - 4 Courses, luego FIRST COURSE / almost raw, SECOND COURSE / barely touched, MAIN COURSE / lightly cooked, etc.
- About con historia narrativa larga y factual.
- Dirección y teléfono muy visibles desde el inicio.

### Tipografía
- Cuerpo: HelveticaNeueW01-45Ligh (light), ~11-12px, color rgb(102,102,102) gris medio.
- Títulos/cursos y nav: HelveticaNeueW01-Thin, ~14px, weight 400, mismo gris.
- Todo en sans-serif ligera/thin, tamaños pequeños, sin bold pesados ni display.
- Sensación: ultra discreta, casi institucional o de menú impreso clásico. Nada de serif editorial ni sans geométrica bold moderna. Jerarquía muy sutil por mayúsculas y tamaño mínimo.

### Botones
- Prácticamente ninguno filled. "RESERVATIONS" es link de texto puro: bg transparente, color gris, border-radius 0, padding 0, font thin.
- Otros links de nav/footer texto puro.
- Estilo: text only, understated. Contraste moderado (gris sobre blanco). Tamaño pequeño.

### Colores
- Fondo principal: blanco puro rgb(255,255,255).
- Texto: gris medio rgb(102,102,102) predominante; algunos negros rgb(0,0,0) en menú.
- Sin acentos de color en UI. Paleta casi monocroma blanco/gris.
- Fotos (slides de interior, chef) aportan el color y el carácter. Contraste funcional pero suave.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, mucho aire blanco. Layout simple vertical.
- Fotos grandes en slides (ej. lb-gallery-eric.jpg), sin border-radius (0), sin sombras evidentes.
- Fotografía real: interior del restaurante, Eric Ripert. Alts no siempre descriptivos en captura, pero contenido fotográfico de alta calidad del lugar.
- Bordes y sombras nulos en UI. Sensación limpia, casi austera.

### Menú, móvil y copy
- Menú: lista tipográfica pura. Categorías como "FIRST COURSE" / "almost raw", platos en mayúsculas (CAVIAR, OYSTERS, TUNA) + descripción corta en minúsculas (ej. "Layers of Thinly Pounded Yellowfin Tuna; Foie Gras, Toasted Baguette, Chives"). Precios/supplements explícitos. No cards, no grids, no fotos de platos en menú.
- Copy: factual e histórico. "Born in Paris in 1972 by sibling duo Maguy and Gilbert Le Coze... the fish is the star of the plate." Detalles de estrellas Michelin, 4 estrellas NYT desde 1986, redesign Bentel & Bentel 2011. Nada de marketing genérico "exquisite experience".
- Móvil: el sitio es responsive básico; textos pequeños y nav simple se adaptan. CTA de reservas y datos de contacto permanecen visibles. Homepage muy vacía visualmente en desktop también.

### Patrones concretos útiles para webs anti-IA
1. **Sans thin/light ultra discreta en tamaños pequeños**: Helvetica Neue Thin/Light a 12-14px. Evita cualquier bold o display. La jerarquía es casi invisible; el contenido (nombres de platos en caps) hace el trabajo. Sensación de menú de papel o sitio institucional antiguo.
2. **CTA de texto puro gris, sin ningún botón filled**: "RESERVATIONS" como link normal. Genera exclusividad extrema; no hay llamada de atención visual. Confía en que el visitante sabe qué hacer.
3. **Paleta blanco + gris medio, color solo en fotografía**: Nada de creams, negros puros o acentos. El diseño desaparece; las fotos del lugar y la historia cargan la identidad.
4. **Menú como jerarquía tipográfica de cursos poéticos**: "almost raw", "barely touched", "lightly cooked" + platos en caps + prosa corta. No grids de productos ni precios grandes. Estructura de degustación clara y literaria.
5. **Copy anclado en historia factual y filosofía concreta**: Origen París 1972, hermanos Le Coze, "the fish is the star of the plate", records de estrellas. Evita plantillas de "passion" o "journey".
6. **Datos prácticos (dirección + teléfono) prominentes desde el primer scroll**: Prioriza utilidad real sobre hero storytelling o CTAs agresivos.

**Honestidad**: Sitio extremadamente austero y minimal, casi anticuado en su simplicidad. Funciona porque Le Bernardin tiene una reputación monumental y no necesita "venderse" visualmente; el nombre y la historia bastan. En un restaurante sin ese nivel de fama se sentiría vacío o frío. La tipografía thin y los textos pequeños pueden ser difíciles de leer en móvil. La ausencia total de botones filled y de color en UI es un patrón fuerte anti-IA (evita el look "modern website template"), pero requiere contenido fotográfico y narrativo excelente para no parecer incompleto.
