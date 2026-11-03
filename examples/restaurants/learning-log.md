# Learning Log — Restaurantes

Observaciones específicas de sitios reales para patrones anti-IA.

## 2026-11-03 — The French Laundry (premium independent, Yountville / Napa)

Sitio: https://thomaskeller.com/yountville-california/french-laundry/restaurant/
Tipo: Independiente premium / fine dining 3 estrellas Michelin (Thomas Keller). Foco en historia, jardín y reservas.

### Estructura y CTAs
- Homepage del grupo (thomaskeller.com) es una galería visual de fotos de alta calidad (jardín, platos, interiores, pastelería) con texto mínimo y nav superior simple (restaurants & bakeries, events, publications, shop).
- Página del restaurante: nav con "thomas keller", about (dropdown), reservations (link prominente), menus & stories, wine & spirits, private dining & events, culinary garden.
- Contenido principal: texto narrativo de la historia del edificio (saloon 1900 → laundry → restaurante) + foto exterior real + logos de premios (Michelin, Relais, etc.).
- CTA principal es "Reservations" como link de texto en nav (navy), no botón filled gigante. Menús diarios en PDFs.

### Tipografía
- Headings (H1/H2): Filosofia (serif elegante), ~17.4px, weight 400, color navy rgb(0,47,101).
- Cuerpo: Ideal Sans SSm (~10-11.6px), regular, color rgb(51,51,51). Muy pequeño, densidad alta.
- Algunos links secundarios en mrs-eaves (serif clásico).
- Contraste bueno pero tamaños reducidos (estilo editorial/print, no web moderno grande).

### Botones
- Prácticamente no hay botones filled u outline. Todo son links de texto.
- Reservations y nav: color navy, sin fondo, sin radio pronunciado (casi 0), padding 0, fuente Filosofia o Ideal Sans.
- Estilo: texto puro, minimalista, sin sombras ni pills.

### Colores
- Fondo blanco puro.
- Acento principal: navy blue profundo (rgb(0,47,101)) para headings y links importantes.
- Texto cuerpo gris oscuro. Premios y fotos aportan el color.
- Paleta restringida, clásica, no vibrante.

### Espaciado, bordes, sombras, fotografía
- Espaciado moderado, contenedores con padding lateral (~21px). Sin sombras (box-shadow: none), bordes nulos.
- Fotografía: en home, galería de imágenes reales de alta calidad (jardín French Laundry, platos como oysters & pearls, interiores Bouchon, croissants). En página restaurante: exterior del edificio de piedra. No stock genérico.
- Look limpio, casi de libro o revista de lujo.

### Menú, móvil y copy
- Menús diarios como PDFs descargables (tasting menu con precios de supplements, cambios diarios). No HTML interactivo.
- Móvil: existe wrapper de menú móvil / toggle (clase mobile_menu_wrapper).
- Copy: narrativo y factual. Historia del lugar, compromiso con ingredientes, lista de premios. Sin frases de marketing genéricas tipo "experience the magic". Ejemplo: "Chef Thomas Keller visited Yountville... he knew it was where he had been headed throughout his career."

### Patrones concretos (4-6) para webs anti-IA
1. **Galería visual en home + texto mínimo**: Fotos reales de jardín, platos y espacios hacen el trabajo. Anti-IA porque AI tiende a hero con texto grande + botón + stock photo perfecto.
2. **Serif elegante (Filosofia) en navy para headings + sans pequeño (Ideal Sans ~11px) para cuerpo**: Sensación de menú o libro de lujo, no UI SaaS. Evita los bold sans grandes y redondeados típicos de generadores AI.
3. **CTAs como links de texto navy, sin botones filled o pills**: Reservations es simplemente un link. Más refinado y menos "conviértete ya".
4. **Narrativa histórica del edificio y del chef en lugar de copy de marketing**: Cuenta la historia real (saloon 1900, laundry, Keller 1994). Humaniza y da autenticidad que AI suele inventar o suavizar.
5. **Paleta blanca + navy + fotos reales, cero sombras/bordes/radios modernos**: Estilo editorial clásico, no el look "clean modern with subtle shadows" que AI reproduce constantemente.
6. **Menús como PDFs diarios en vez de páginas HTML genéricas**: Señala exclusividad y cambio real. AI prefiere menús estáticos con descripciones floridas.

Honesto: sitio muy limpio, casi austero y "de institución". Tipografía pequeña (puede ser difícil en móvil), pero transmite lujo discreto y seriedad. Ideal referencia para premium que no caiga en el cliché AI de serif + gold + food porn.

## 2026-11-03 — Padella (casual independent, London)

Sitio: https://www.padella.co/
Tipo: Independiente casual / pasta italiana (múltiples locations: Borough Market, Shoreditch, Soho). Menú-first.

### Estructura y CTAs
- Hero con vídeo de fondo (cocina/platos en movimiento), logo centrado, "Scroll down" discreto.
- Nav minimal: logo + Vouchers + Careers + toggle (móvil).
- Inmediatamente debajo: tres tarjetas de locations (Borough Market, Shoreditch, Soho) con fotos reales de los locales y links.
- El cuerpo principal es el menú del día (fecha visible: TUESDAY 3RD NOVEMBER), con secciones ANTIPASTI, PASTA, PUDDING, etc., precios en £, sin fotos de platos individuales.
- No hay CTA de reserva dominante en la home; el foco es el menú actual y las locations. Reservas probablemente por location o externo.

### Tipografía
- Títulos/secciones: Oswald (sans condensed, bold 700 o 500), tamaños 24-40px, uppercase en locations y fecha.
- Cuerpo/menú: Roboto Condensed 16px regular, blanco sobre negro.
- Contraste alto. Sin serif. Pesos fuertes en headings para jerarquía clara de categorías de menú.

### Botones
- Pocos botones filled. Links de navegación y locations son texto o áreas clickeables.
- Botón sample (nav toggle o similar): outline/transparente, padding 16px 6px, radio 0, fuente Oswald.
- Estilo minimal: texto o relleno sutil, no pills ni sombras pesadas.

### Colores
- Paleta: negro puro de fondo (rgb(0,0,0)), texto blanco. Acentos mínimos (quizá en hover o fotos).
- Alto contraste, casi monocromo. Fotos aportan el color.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso entre secciones de menú.
- Bordes casi inexistentes, sombras nulas. Estilo limpio, tipográfico.
- Fotografía: vídeo hero + fotos de los tres locales (interiores/exteriores reales, no staged food porn). Menú es texto puro, no imágenes de platos.

### Menú, móvil y copy
- Menú HTML completo del día con precios, secciones claras (Antipasti, Pasta...). Cambia diariamente.
- Móvil: nav colapsable, menú scrolleable.
- Copy: directo, factual, fecha del menú en grande. Sin fluff marketing. "Italian Restaurant in Shoreditch, Borough Market & Soho".

### Patrones concretos (4-6) para webs anti-IA
1. **Menú del día como hero/contenido principal**: Fecha visible + lista tipográfica con precios. Anti-IA porque AI suele hacer menús genéricos estáticos o con fotos stock.
2. **Fondo negro + sans condensed (Oswald + Roboto Condensed)**: Alto contraste, tipografía condensa da sensación de menú de pizarra real. Evita el look "clean SaaS" beige/serif de muchos AI.
3. **Locations como tarjetas con foto real del local + nombre en Oswald bold**: Prioriza el lugar físico sobre el plato abstracto.
4. **Ausencia de CTA de reserva gigante**: El menú es la estrella; la acción es secundaria. Humaniza (gente quiere ver qué hay hoy).
5. **Vídeo hero de proceso/cocina + fotos de locales, no food photography editorial**: Más auténtico, menos "AI-generated perfect dish".
6. **Estilo sin sombras, radios 0, bordes mínimos**: Look de menú impreso o pizarra digital, no UI moderna genérica.

Honesto: sitio muy limpio y funcional, casi austero. El menú carga rápido y es legible. Ideal referencia para casual menu-first que no parezca generado por plantilla AI.

## 2026-11-03 — Carbone New York (premium independent / Major Food Group, NYC)

Sitio: https://carbonenewyork.com/
Tipo: Independiente premium / Italian-American glamorous (original location on Thompson Street, Major Food Group). Foco en historia, atmósfera y reservas vía Resy.

### Estructura y CTAs
- Hero con headings grandes uppercase ("CARBONE NYC", "NEW YORK CITY", "THE ORIGINAL") sobre fondos que alternan cream y secciones oscuras.
- Nav superior: logo + "Open Main Menu" (móvil) / links a Locations, About, Menu, Hours & Info, News.
- Secciones narrativas: THE ORIGINAL (descripción del local), CHEF MARIO CARBONE (biografía), THE MENU (tabs: Dinner, Lunch, Wine, Drinks, etc.), THE STORY (historia de Rocco → Carbone), THE DESIGN, NEWS, HOURS & INFORMATION.
- CTAs principales: "RESERVE A TABLE" (outline button que linkea a Resy), "CONTACT CONCIERGE", "PRIVATE EVENTS". No hay botón filled dominante tipo "Order Now".

### Tipografía
- Headings (H1/H2): custom heading font (bold 700, uppercase), tamaños ~32-38px, color cream o dark navy según sección. Letter-spacing normal.
- Cuerpo: Hoefler-like / sans (~15-18px regular), color dark navy rgb(10, 26, 41) sobre cream. Line-height generoso (~24px).
- Alto contraste, estilo editorial con jerarquía fuerte por uppercase bold en secciones.

### Botones
- "RESERVE A TABLE": outline (bg cream rgb(255,249,240), color navy, border 1px solid navy, border-radius 2px, padding ~10px 16px, font ~20px weight 400). No filled, no pill grande, radio mínimo.
- Otros links de nav son texto puro.
- Estilo refinado, no "SaaS conversion" con sombras o pills saturados.

### Colores
- Fondo principal: cream / ivory rgb(255, 249, 240).
- Texto y acentos: dark navy / near-black rgb(10, 26, 41).
- Secciones alternan (algunas con texto cream sobre fondo oscuro).
- Paleta restringida, cálida pero elegante (no gold cliché ni beige genérico).

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso entre secciones narrativas. Bordes mínimos, sombras casi nulas.
- Fotografía real y específica: dining room, Chef Mario Carbone, vintage tile floor, Carbone x Assouline book. Atmosférica y de espacio/chef, no solo food porn staged. ~22 imágenes en página.
- Look de revista de lujo contemporánea con raíces mid-century.

### Menú, móvil y copy
- Menú on-page con tabs (Dinner, Lunch, Wine, Drinks, Dessert, Thanksgiving, Christmas). "Select a Menu".
- Móvil: toggle "Open Main Menu", contenido scrolleable, headings se mantienen grandes.
- Copy: narrativo, específico y factual. Menciona detalles reales (captains in Zac Posen tuxedos, artworks by Julian Schnabel, neon over original Rocco sign, Queens roots + CIA + year in Italy, "anything-can-happen" experience). Sin fluff genérico tipo "discover the magic of Italian cuisine".

### Patrones concretos (4-6) para webs anti-IA
1. **Fondo cream/ivory + dark navy + secciones con headings uppercase bold grandes**: Evita el white/black limpio o beige AI genérico. Da sensación de menú impreso o editorial de lujo.
2. **Estructura narrativa por secciones nombradas (THE ORIGINAL, CHEF..., THE STORY, THE DESIGN)**: Cuenta historia real con detalles nombrados (diseñadores, artistas, restaurante anterior). AI suele inventar copy genérico o suavizar hechos.
3. **CTA de reserva como outline button con radio 2px y borde fino**: No filled pill de alto contraste. Más discreto y premium; la historia y el espacio son el foco.
4. **Fotografía de espacio, chef y detalles arquitectónicos (tile floor, banquettes) mezclada con texto**: No solo platos perfectos. Humaniza y muestra el lugar real.
5. **Integración de Resy como link externo claro, sin forzar orden online**: Señala que es dining-room first, no QSR. AI a menudo asume checkout o menú HTML completo con fotos.
6. **Paleta restringida cream + navy, cero sombras modernas pesadas**: Estilo clásico-contemporáneo, no el "clean with subtle drop shadows and rounded cards" que AI reproduce.

Honesto: sitio elegante y cohesionado, con fuerte identidad. El cookie banner (Cookiebot) es intrusivo en la visita. Tipografía y fotos transmiten glamour mid-century sin caer en clichés. Buena referencia para premium narrative que prioriza atmósfera sobre conversión agresiva.

## 2026-11-03 — Momofuku (grupo independiente / multi-location, NYC origin)

Sitio: https://www.momofuku.com/ (home) y https://www.momofuku.com/restaurants/noodle-bar-east-village
Tipo: Grupo de restaurantes independientes premium-casual (David Chang, Asian-American innovador). Multi-location (NY, LA, LV), foco en reservas, menús on-page y merch/shop.

### Estructura y CTAs
- Home: banner promo superior (ej. "Super Peach x Bar Etoile (Nov 3): Book Now"), nav con logo + Make a Reservation / Order Online / Shop (pills), luego carouseles de eventos/promos por ciudad (LA, LV, NY) con "Reserve Now".
- Sección "Our Restaurants" con cards de locations (nombre, dirección, Make a Reservation / Explore More).
- Páginas de restaurante individual: H1 grande, "Make a Reservation" prominente, Opening Times detallados, Find Us + Google Maps, Order Online (DoorDash/Catering), View Menu, About, Large Formats, FAQs.
- CTAs: pills filled dark para Reservation/Order, outline cream para otros. Múltiples puntos de entrada a reserva (OpenTable externo).

### Tipografía
- Fuente principal: Graphik (sans-serif moderna, system-ui fallback), weights 400-600.
- H1 en página restaurante: Graphik 32px weight 600, color cream rgb(250,247,238).
- H3 de locations: Graphik 16px weight 400, cream sobre fondos oscuros o cards.
- Cuerpo: Graphik ~14-16px regular, negro o cream según sección. Alto contraste, limpio, contemporáneo sin serif.

### Botones
- Estilo pill (border-radius 50px), padding 8px o 8px 32px.
- Filled: bg rgb(35,35,35) dark, color cream, font Graphik 14-16px weight 400.
- Outline/light: bg cream, color dark, mismo radio 50px.
- Nav y algunos links son texto puro. Contraste alto, no sombras pesadas.

### Colores
- Fondo principal: cream / off-white rgb(250, 247, 238).
- Texto/acentos dark: rgb(35, 35, 35).
- Otros: light peach/cream variants, dark overlays en heroes/cards.
- Paleta cálida neutra, restrained, con fotos aportando color vibrante de comida.

### Espaciado, bordes, sombras, fotografía
- Espaciado limpio, cards y secciones con padding generoso. Bordes mínimos, radios altos solo en botones (pills).
- Fotografía real y específica: platos (fried chicken, kimbap, pasta truffle, bowls), interiores de locales (Noodle Bar Uptown wood + leather, East Village evening), chefs. No stock genérico; alta calidad editorial de comida y espacio.
- Look moderno, apetecible, group-brand consistente.

### Menú, móvil y copy
- Menús on-page con secciones (Starters, Kimbap, Ramen, Mains, Large Format, etc.) y precios. Tabs o listas. Cambian y se promocionan (ej. Kimbap new, Fried Chicken Mondays).
- Móvil: toggle "Open mobile menu", contenido scrolleable, CTAs pills se mantienen.
- Copy: directo y específico. Historia real (fundado 2004 Noodle Bar East Village, David Chang), detalles de platos (spicy cucumbers, kimchi...), eventos nombrados, FAQs prácticas (reservas 30 días, dietary, private events email). Sin fluff excesivo tipo "elevate your dining experience".

### Patrones concretos (4-6) para webs anti-IA
1. **Sans moderna Graphik + cream bg + dark text, H1 32px medium weight**: Evita el serif-gold AI cliché o el Inter/Roboto genérico. Sensación contemporánea de grupo real, no plantilla.
2. **Botones pill (radius 50px) filled dark cream-text y outline cream**: Alto contraste, acción clara sin ser el "rounded 8px filled primary" típico de AI SaaS. Múltiples CTAs de reserva/orden sin dominar.
3. **Carouseles de promos/eventos reales por location + cards de restaurantes con dirección exacta**: Prioriza lo actual y físico (Super Peach x Bar Etoile Nov 3, F1 Las Vegas). AI suele hacer heroes estáticos genéricos.
4. **Fotografía mixta real de platos + interiores + proceso, no solo food porn perfecto**: Muestra el lugar (wood booths, evening street view) y la comida específica. Humaniza el grupo.
5. **Menú HTML con precios + large formats + FAQs prácticas**: Detalles nombrados (bo ssäm, fried chicken meal $225, dietary case-by-case). Más útil y menos florido que copy AI inventado.
6. **Paleta cream + charcoal restrained con fotos de alta calidad**: Cálida pero no beige genérico. Consistente across multi-location, señal de marca real vs. AI one-off.

Honesto: sitio bien ejecutado, moderno y funcional. El popup/privacy puede interrumpir. Tipografía y botones pills son limpios pero no radicalmente anti-AI (muchos sites usan Graphik-like y pills). Destaca por la especificidad de eventos, menús reales y fotos de locales. Buena referencia para grupo multi-location que balancea reserva + orden online sin perder identidad.

## 2026-11-03 — Canlis (premium independent, Seattle)

Sitio: https://canlis.com/
Tipo: Independiente premium / fine dining familiar (desde 1950, James Beard awards, ranked #2 Food & Wine 2025). Foco en invitación, espacio arquitectónico y reservas.

### Estructura y CTAs
- Banner superior discreto de evento (“MAD MANOR: Tickets on sale now! 🦇”).
- Nav simple: RESERVE (texto uppercase), EXPLORE (disclosure), PRIVATE EVENTS, teléfono y dirección siempre visibles.
- Contenido principal en secciones cortas: AN INVITATION (texto de hospitalidad), THE SPACE (historia del edificio y vistas), IN THE PRESS (ranking + links externos), luego chef, cocktails, etc.
- CTA principal “RESERVE” / “Book a table” es link de texto en nav y al final; no hay botón filled dominante. Menú en página propia.

### Tipografía
- Cuerpo y headings principales: GTSectraBook (serif, weight 400), ~13px cuerpo / ~20px headings, color rgb(39, 35, 32). Misma familia para casi todo (también GTSectraDisplayLight e Italic).
- Captions / labels (AN INVITATION, THE SPACE, IN THE PRESS): HelveticaNeue-Medium ~11.7px, uppercase, letter-spacing 0.65px, color gris más claro rgb(82, 82, 82).
- Sensación editorial de libro o menú impreso, no UI grande y bold.

### Botones
- Prácticamente no hay botones filled u outline.
- “RESERVE”: texto uppercase, HelveticaNeue-Medium, bg transparente, border 0, border-radius 5px (casi invisible), padding 0, sin sombra.
- Estilo: links de texto puro, minimalistas.

### Colores
- Fondo: rgb(239, 240, 235) — off-white / gris-verde muy suave (no blanco puro ni cream típico).
- Texto: marrón oscuro rgb(39, 35, 32).
- Acentos mínimos (grises para captions). Fotos aportan el color y la vida.
- Paleta muy restringida, cálida pero austera.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso entre secciones, look limpio.
- Bordes y sombras prácticamente nulos.
- Fotografía real y específica: server preparando Canlis Salad tableside, exterior nocturno con el cedro libanés, dining room con servers y guests, charred pork belly. Atmosférica y de servicio/espacio, no food porn staged genérico.

### Menú, móvil y copy
- Menú HTML de tasting experience (6 courses, eliges 3, resto a cargo de la casa). Nombres de platos en uppercase + descripción corta (SABLEFISH: matsutake, chili, dulse, and XO). Canlis Salad tableside como extra histórico.
- Móvil: nav con disclosure EXPLORE, contenido scrolleable, CTAs de texto se mantienen.
- Copy: personal, hospitalario y factual. “The opportunity to meet and serve you is one we don’t take lightly, not for the past 75 years at least.” Historia real del edificio y premios concretos. Sin fluff genérico.

### Patrones concretos (4-6) para webs anti-IA
1. **Misma serif (GTSectraBook) para cuerpo y headings a tamaños pequeños (13-20px) + captions uppercase sans pequeño**: Sensación de menú o libro de lujo real. Evita el contraste AI de serif grande bold + sans body o Inter/Roboto grande.
2. **Fondo off-white gris-verde suave rgb(239,240,235) + texto marrón oscuro**: No white puro, no beige cream cliché, no dark mode. Más humano y menos “plantilla limpia”.
3. **CTAs de reserva como texto uppercase puro sin fondo ni borde visible**: RESERVE es simplemente un link. Menos “convert now”, más invitación discreta.
4. **Secciones cortas con labels uppercase (AN INVITATION / THE SPACE / IN THE PRESS) + narrativa específica**: Cuenta hechos reales (Roland Terry 1950, James Beard Design Icon, ranking #2) en vez de copy marketing genérico.
5. **Fotografía de servicio y espacio (tableside salad, dining room con gente, exterior con árbol) mezclada con texto**: Muestra cómo se vive el lugar, no solo platos perfectos.
6. **Menú tasting con elección parcial + extra histórico (Canlis Salad tableside)**: Más auténtico y menos “lista de platos con descripciones floridas” que AI suele generar.

Honesto: sitio muy elegante, austero y coherente. Tipografía pequeña y el mismo serif para todo puede sentirse “de print” (difícil en móvil si no se escala bien). Transmite hospitalidad familiar y seriedad sin forzar conversión. Excelente referencia para premium que prioriza invitación y espacio sobre food porn o CTAs agresivos. No cae en el cliché AI de serif-gold + shadows sutiles + hero con stock.

(Anteriores: Eleven Madison Park, Cutler, Ma‘ono, Sweetgreen, Dishoom, El Celler de Can Roca — ver historial de commits.)

## 2026-11-03 — The Ledbury (premium independent, Notting Hill / London)

Sitio: https://www.theledbury.com/
Tipo: Independiente premium / fine dining (establecido 2005, Notting Hill). Foco en produce propio, equipo, menú de temporada y reservas. Fotos por Jonathan Glynn-Smith.

### Estructura y CTAs
- Nav superior simple de texto: Home, Food & Wine, Reservations, Gift Cards, Our People, Our Produce.
- Dirección, teléfono y email siempre visibles en footer y laterales.
- Contenido principal en secciones cortas: Established 2005, Food & Wine (tasting menu + wine matchings), Reservations (“We look forward to welcoming you in Notting Hill soon!”), Our People, Our Produce (“Much of the produce used in the restaurant is reared on our farms”).
- CTA principal “Reservations” es link de texto; también “click here” para online reservation. No botones filled dominantes. Aviso de almuerzos extra en noviembre/diciembre.

### Tipografía
- Fuente principal: “Saltburn Light” (weight 300-400), headings ~18-26px, color gris claro rgb(219, 219, 219).
- Cuerpo: misma familia o fallback, ~16px, color gris medio rgb(145, 145, 145).
- Light weight dominante, sensación etérea y editorial. Algún fallback Noto Sans SC.
- Contraste moderado sobre fondo oscuro; no bold agresivo.

### Botones
- Prácticamente no hay botones filled u outline.
- Reservations y nav: texto puro, bg transparente, border 0, radius 0, padding 0, fuente Saltburn Light.
- Estilo: links de texto, minimalistas, sin sombras ni pills.

### Colores
- Fondo: dark charcoal rgb(33, 33, 33).
- Texto: grises claros (rgb(219,219,219) headings, rgb(145,145,145) cuerpo).
- Paleta muy restringida, casi monocromo oscuro. Fotos y logos Michelin aportan el único color.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, look limpio y respirado.
- Bordes y sombras nulos (box-shadow: none).
- Fotografía: 16 imágenes, credits a Jonathan Glynn-Smith. Incluye logos Michelin, pin de location, imágenes de espacio/produce (no food porn genérico staged). Estilo real y atmosférico.

### Menú, móvil y copy
- Menú referido como seasonal tasting menu + discovery/classic wine matchings (probablemente en página Food & Wine).
- Móvil: nav de texto se mantiene; contenido scrolleable.
- Copy: factual, hospitalario y específico. “Established 2005”, produce de granjas propias, “What makes our restaurant special is not only the guests… but also the great people that work here”. Horarios exactos, FAQs prácticas (no dress code, children over 12). Sin fluff genérico.

### Patrones concretos (4-6) para webs anti-IA
1. **Fondo dark charcoal + tipografía light-weight “Saltburn Light” en grises claros**: Evita el white/cream + bold serif o sans de AI. Sensación nocturna, etérea y de institución real, no plantilla brillante.
2. **CTAs y nav como texto puro sin botones filled o pills**: Reservations es simplemente un link. Menos conversión agresiva, más invitación discreta.
3. **Secciones nombradas con hechos concretos (Established 2005, Our Produce from our farms, Our People)**: Prioriza origen y equipo sobre descripción de platos floridos. AI suele inventar “farm-to-table magic”.
4. **Paleta casi monocromo oscura + fotos con crédito específico (Jonathan Glynn-Smith)**: No beige genérico ni gold. Fotos reales de espacio/produce, no stock perfecto.
5. **Horarios, FAQs prácticas y avisos temporales (almuerzos extra, cierre Navidad) integrados**: Copy útil y actual, no marketing eterno. Humaniza la operación real.
6. **Cero sombras, radios, bordes modernos**: Look limpio editorial oscuro, no el “clean with subtle shadows and rounded cards” que AI reproduce.

Honesto: sitio austero, oscuro y coherente. Tipografía light puede perder legibilidad en algunos dispositivos, pero transmite seriedad y enfoque en el lugar/produce/equipo. Buena referencia para premium dark que no cae en el cliché AI de hero brillante + CTA pill + food porn.
