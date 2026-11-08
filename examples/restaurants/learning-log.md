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
4. **Paleta blanco/negro estricta + un acento**: Máxima limpieza. El color vive en las fotos y en el único botón de reserva. Sensación premium y editorial, no "brand colors" de cadena.
5. **Copy anclado en hechos concretos del chef y el lugar**: Farm propio, evolución del menú, nombres reales. Evita plantillas de "passion" o "journey". Prioriza la historia real sobre el marketing.
6. **Botones filled selectivos y rectangulares**: Negro o acento solo para reserva; el resto texto. No todo es pill o outline trendy. Genera exclusividad sin agresividad de e-commerce.

**Honestidad**: Sitio premium y controlado, típico de Squarespace de alto nivel. La fuerza está en la fotografía real (platos, farm, equipo) y en la tipografía serif clásica que da peso editorial. El acento coral en el CTA de Resy es práctico pero un poco "plataforma". Sin las fotos fuertes y el prestigio real de EMP, el diseño blanco/negro se sentiría frío o vacío. Funciona porque el contenido (historia, farm, chef) es específico y verificable; la estética no inventa carácter, lo refleja.

## 2026-11-08 — Padella (casual, independiente, Londres)
**URL**: https://www.padella.co/
**Tipo**: Pasta bar casual, pasta fresca hecha a mano. Tres locales (Borough Market, Shoreditch, Soho). Independiente de Tim y Jordan.

### Estructura y CTAs
- Homepage es esencialmente el menú del día (fecha actual) + locales.
- Nav superior con logo, Vouchers, Careers, toggle navigation.
- Hero con video y "Scroll down".
- Tres locales como cards/links: Borough Market, Shoreditch, Soho.
- Menú del día listado en categorías: FOOD, DRINK, ANTIPASTI, PASTA, PUDDING, ICE CREAM con precios.
- About corto al final. Group bookings.
- CTAs: texto puro, no botones filled grandes. Locales son los links principales.

### Tipografía
- Títulos y muchos links: Oswald (sans condensed), 18-40px, weight 400-700, letter-spacing negativo en algunos (-0.25px).
- Cuerpo y textos: Roboto Condensed, 16-22px, weight 300-400, color blanco sobre negro o negro.
- Nav: Oswald 18px weight 400.
- Sensación: sans condensed uppercase-ish para jerarquía, ligera y de carta. No bold geométrica ni serif ornamental.

### Botones
- Prácticamente no hay filled. Toggle navigation button con padding, transparent bg, radius 0.
- Links de texto. Contraste alto (blanco sobre negro).
- Estilo: text puro. Tamaño moderado.

### Colores
- Fondo: negro puro rgb(0,0,0).
- Texto: blanco rgb(255,255,255) o negro en secciones claras.
- Paleta estricta negro/blanco. Fotos aportan color.
- Contraste máximo. Nada de acentos en UI.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso en menú.
- Fotos de locales reales (Borough, Shoreditch, Soho) sin radius.
- Video hero.
- Sin sombras fuertes ni bordes.

### Menú, móvil y copy
- Menú es el homepage: fecha "SUNDAY 8TH NOVEMBER", platos con precios exactos (Nocellara olives £4, Pici cacio & pepe £13.5, etc.). Categorías uppercase.
- Copy: "Padella is the culmination of Tim and Jordan’s long held dream to open a pasta bar serving fresh, hand rolled pasta with delicious sauces and fillings inspired by their trips to Italy." Menciona Trullo.
- Móvil: nav colapsa, menú stackea.

### Patrones concretos útiles para webs anti-IA
1. **Homepage como menú del día tipográfico**: La fecha + lista de platos con precios es el hero. Prioriza el producto real sobre storytelling o fotos de comida genéricas. Sensación de pizarra actualizada, no de landing page de marketing.
2. **Sans condensed (Oswald + Roboto Condensed) uppercase para jerarquía**: Da carácter de carta/menú clásico sin ser serif ornamental ni sans bold geométrica de template. Ligero tracking negativo en títulos.
3. **Paleta negro puro + blanco puro, color solo en fotos**: Máximo contraste y limpieza. Evita off-whites o acentos decorativos. El diseño no compite con la comida o el espacio.
4. **CTAs de texto puro y locales como navegación principal**: No botones filled agresivos. Los tres locales son links destacados. Genera confianza en el contenido (el menú) en vez de forzar reserva.
5. **Copy anclado en fundadores concretos y producto**: Tim y Jordan, pasta hecha a mano, viajes a Italia, Trullo. Frases cortas y factuales. Evita plantillas de "culinary journey" o "passion for pasta".
6. **Fotos de espacio real sin ornamento + video sutil**: Interiores concretos, alts simples, sin radius ni sombras. La fotografía muestra el lugar real, no stock de comida perfecta.

**Honestidad**: Sitio muy funcional y directo, casi brutalista tipográfico. Funciona porque el producto es pasta fresca asequible y el menú cambia (o se actualiza). La fuerza está en poner el menú primero y en la tipografía condensed que se siente de carta de restaurante. En un sitio premium o con más storytelling podría sentirse demasiado seco o "solo texto". No hay mucho diseño ornamental; es honesto y útil. Perfecto para casual independiente donde la gente quiere ver precios y platos rápido.

## 2026-11-08 — Girl & the Goat (casual-premium, independiente/grupo, Chicago)
**URL**: https://www.girlandthegoat.com/chicago
**Tipo**: Restaurante de Stephanie Izard (Top Chef), bold global flavors, desde 2010 en West Loop. Parte de Boka Restaurant Group. Casual-premium con personalidad.

### Estructura y CTAs
- Landing principal es chooser de local (LA / Chicago), luego página de Chicago con info práctica primero: address, hours, contact en bloque oscuro.
- Hero/promo superior: Goat Shoulder Kit para Thanksgiving, con botón ORDER.
- Nav con menu, reserve como texto.
- Secciones: about narrativo, happenings (promo goat, Tiniest Goat chef’s counter, pork shank), Sunday Brunch.
- CTAs principales: filled brown “find a table”, “PRE-ORDER”, “RESERVE”, “ORDER”. Texto blanco sobre rgb(124,75,39).
- No CTA gigante en hero; la promo es específica de temporada.

### Tipografía
- Cuerpo y muchos headings: fairplex-wide / Fairplexwideot med (serif wide/display), 16-38px.
- H1 grandes: 38px weight 700, color rgb(51,51,51).
- Headings de sección: 20-32px weight 400-700, a veces blanco sobre fondos oscuros.
- Sensación: serif wide con carácter, no sans geométrica. Weights moderados, no todo bold extremo. Da sensación de menú de restaurante con personalidad.

### Botones
- Primarios: filled solid brown rgb(124,75,39), texto blanco, border-radius 0px (rectangulares), padding 5-10px 20-32px, font-weight 400, size 14-15px.
- Nav links: texto puro blanco o negro, radius 0, padding amplio en algunos.
- Estilo: filled clásico rectangular con color tierra, no pill, no outline, no gradient. Contraste alto.
- Varios CTAs repetidos para reserva/order según sección.

### Colores
- Fondo principal: blanco rgb(255,255,255).
- Texto: rgb(51,51,51) / negro.
- Nav/secciones oscuras: rgb(51,51,51).
- Acento/botones: brown tierra rgb(124,75,39).
- Paleta restringida: blanco, gris oscuro, brown. Fotos aportan el resto (interior madera, comida). Contraste bueno, cálido sin ser cream.

### Espaciado, bordes, sombras, fotografía
- Espaciado normal, bloques de info claros.
- Fotos de interior real: “A cozy restaurant interior featuring wooden tables, chairs, and a textured dark wood wall with a window showcasing a bar area.” Alts descriptivos.
- Sin border-radius evidente en fotos o botones (0px). Sombras mínimas.
- Logo y spinners decorativos simples.

### Menú, móvil y copy
- Menú en página separada con tabs o links: dinner, sunday brunch, drinks. Copy de explore our menu. No lista completa visible en home (probablemente PDF o detallado aparte).
- Copy: específico y personal. “Stephanie Izard’s Girl & the Goat began in 2010 with a goal of serving bold, global flavors to our local community... our desire to treat guests like family has remained the same (as have our Green Beans) – but our seasonal flavors... ever-changing.” Menciona Green Beans (firma), West Loop, Boka group, sister restaurants (Cabra, Duck Duck Goat).
- Promos concretas: Goat Shoulder Kit, Tiniest Goat chef’s counter, Sticky Glazed Pork Shank.
- Móvil: responsive Webflow-like, nav se adapta, CTAs visibles.

### Patrones concretos útiles para webs anti-IA
1. **Serif wide display (Fairplex) para títulos y cuerpo**: Carácter de carta de restaurante con personalidad. Evita sans geométrica bold de templates. Weights moderados y tamaños claros dan jerarquía sin gritar.
2. **Botones filled rectangulares de color tierra**: Brown rgb(124,75,39), radius 0, padding moderado. No pill ultra-redondeado ni outline trendy. Se siente local y cálido, no startup.
3. **Info práctica (address, hours, contact) en bloque oscuro arriba**: Prioriza utilidad antes de storytelling. Fondo gris oscuro con texto blanco. Accesible y directo.
4. **Copy anclado en chef real, año, producto signature y grupo**: Stephanie Izard, 2010, Green Beans, West Loop, Boka. Frases concretas sobre “treat guests like family”. Evita “culinary journey” o “passion for bold flavors” genérico.
5. **Promos de temporada específicas como CTA**: Goat Shoulder Kit para Thanksgiving, no “order now” genérico. Hace el sitio vivo y humano.
6. **Paleta blanco + gris oscuro + brown, fotos de espacio real**: Color solo en botones y fotos. Alts narrativos del interior. Sin stock genérico ni ornamento digital.

**Honestidad**: Sitio con personalidad por la tipografía wide y el copy específico de Izard y los platos. Funciona bien para un restaurante con chef conocido y productos signature. La estructura es bastante estándar de Webflow (secciones, CTAs repetidos), pero el contenido real (Green Beans, goat kits, chef’s counter) y el color tierra lo salvan de lo genérico. En un lugar sin historia o fotos del espacio real se notaría más el template. Los botones rectangulares brown son un plus anti-pill moderno.
