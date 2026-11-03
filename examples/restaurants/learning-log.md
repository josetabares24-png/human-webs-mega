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

(Anteriores: Eleven Madison Park, Cutler, Ma‘ono, Sweetgreen, Dishoom, El Celler de Can Roca — ver historial de commits.)
