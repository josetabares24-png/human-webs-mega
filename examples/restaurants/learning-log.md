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

(Anteriores: Eleven Madison Park, Cutler, Ma‘ono, Sweetgreen, Dishoom, El Celler de Can Roca — ver historial de commits.)
