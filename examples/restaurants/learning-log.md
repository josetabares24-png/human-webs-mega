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

## 2026-11-01 — Dishoom (casual-premium, grupo independiente, Londres y otras ciudades)
Sitio: https://www.dishoom.com/
Tipo: Cadena de cafés indios inspirados en los Irani cafés de Bombay, con fuerte storytelling y branding. Casual accesible pero con alma premium.

### Lo que vi (honesto)
- Fondo crema cálido `rgb(240, 236, 224)` / ~#F0ECE0, texto oscuro gris `rgb(53, 56, 57)`. No blanco puro.
- Tipografía: Cheltenham BT (serif editorial, ~16px body, 18-21px headings, peso 400-700) para casi todo el texto principal y títulos. Gill Sans Nova (sans, 14px bold) para algunos microtextos y UI. Sensación de periódico/revista antigua, no moderna genérica.
- CTAs: "Book a table" aparece en varias formas: filled oscuro `rgb(53, 56, 57)` con texto crema, outline, y alguna variante pill (border-radius 9999px en nav). También texto puro o links. Contraste alto. No botones brillantes o neon.
- Fotografía: reales de Bombay histórica (B. Merwan 1914), comida (chai, buns, spreads), interiores de cafés. Con captions tipo "ABOVE: ..." o "RIGHT: ...". No stock perfecto; atmósfera y contexto.
- Espaciado generoso, secciones separadas por líneas o espacio. Nav con "Book a table" destacado, menú toggle en móvil. En mobile se adapta con hamburger.
- Menú y comida: páginas narrativas de food & drink, con descripciones evocadoras ("true Bombay comfort food"). Listados de localizaciones con direcciones, horarios, teléfono y links a Book/View.
- Copy: profundamente humano y narrativo. "Each Dishoom is a love letter to Bombay", "All Welcome", "By the end, we hope you will feel as if you’ve been to Bombay with us". Habla de historias, cultura, comida de la calle y hogares. No lenguaje de marketing genérico.
- Reserva integrada, store de merch/kits. Cookie banner con copy juguetón ("The best cookies are for dipping... into our House Chai").

### 5 patrones concretos para webs anti-IA
1. **Serif editorial dominante con carácter**: Cheltenham (o similar Georgia-like) para body y headings crea sensación de revista o carta impresa. Evita sans geométricas genéricas. El peso variable (400 para flujo, 700 para énfasis) humaniza.
2. **Paleta crema cálida + gris oscuro**: #F0ECE0 de fondo y #353839 de texto. Sensación de papel envejecido o café, no digital frío. Alto contraste pero cálido.
3. **CTAs filled simples y oscuros, no brillantes**: Botones rectangulares (radius 0 o mínimo) filled en el color del texto, texto claro. Algunas outline. Priorizan "Book a table" sin exagerar. Menos "botón SaaS".
4. **Storytelling con captions y contexto histórico**: Fotos acompañadas de "ABOVE: The legendary B. Merwan...". Copy que cuenta mitos fundacionales de cada local. Humaniza y evita el look de prompt genérico.
5. **Copy personal y cultural, no promocional**: Frases como "love letter", "All Welcome", descripciones de comida que evocan recuerdos (chai con buns, biryani compartido). Suena a persona que ama el lugar, no a LLM.
6. **Estructura clara con acciones primarias visibles**: "Book a table" repetido pero no invasivo, localizaciones con info práctica (horarios, dirección) + links. En móvil hamburger + CTA destacado. Menos ruido, más utilidad.

Estos patrones combinan restricción tipográfica, paleta cálida de papel, fotografía contextual y copy que suena a voz humana con historia.

## 2026-11-01 — Padella (casual, independiente, Londres)
Sitio: https://www.padella.co/
Tipo: Pasta bar casual e independiente en Borough Market, Shoreditch y Soho. Menú diario como homepage, enfoque en pasta fresca hecha a mano.

### Lo que vi (honesto)
- Fondo negro puro `rgb(0, 0, 0)`, texto blanco puro `rgb(255, 255, 255)`. Alto contraste, casi editorial nocturno o de pizarra.
- Tipografía: Body "Roboto Condensed", sans-serif a 16px. Headings Oswald (sans condensada, 26-40px, pesos 400-700). Todo sans, compacto, industrial-cálido. No serif, no Inter genérico.
- CTAs: Casi inexistentes como botones. Links de texto puro (Vouchers, Careers, locations) sin fondo, sin border, radius 0. "Scroll down" como link. No filled, no outline, no pills. Nav con toggle (hamburger presente).
- Fotografía: Imágenes de localizaciones (Borough Market, Shoreditch, Soho) en cards de artículo. Video inline en hero. No platos flotantes; ambiente de barra y cocina. Alts descriptivos de lugares.
- Espaciado: Generoso vertical, secciones de menú con headings claros. Cards de locations sin sombras ni bordes visibles. Menú como lista de texto simple con precios al lado.
- Menú: Homepage es el menú del día ("SUNDAY 1ST NOVEMBER"), secciones Antipasti, Pasta, Pudding, Ice Cream con items + precios en £. Texto plano, sin cards de producto. Nota: "Please let us know if you want Parmesan".
- Móvil: Hamburger toggle visible. Estructura adaptable (no forzado viewport, pero nav compacta).
- Copy: Directo y personal. "Padella is the culmination of Tim and Jordan’s long held dream to open a pasta bar serving fresh, hand rolled pasta... inspired by their trips to Italy." Menciona Trullo. No marketing inflado. Fecha del menú visible.

### 5 patrones concretos para webs anti-IA
1. **Menú como homepage con fecha y precios en texto**: Lista simple de platos + precio, encabezada por el día. Evita grids de cards o imágenes por dish. Sensación de carta real colgada, no catálogo e-commerce. Anti-IA porque no es "product showcase" genérico.
2. **Paleta negro/blanco puro con sans condensadas**: Fondo #000, texto #FFF, fuentes Roboto Condensed + Oswald. Contraste máximo, look de menú de pizarra o poster industrial. Evita cremas suaves o pasteles AI-typical. Da carácter de pasta bar nocturno.
3. **CTAs de texto puro, cero botones decorativos**: Links sin fill, outline o radius. La acción principal es el menú mismo + locations. Menos "Reserve Now" gritón, más navegación humana. Reduce template look.
4. **Fotografía de lugares y ambiente, no comida perfecta**: Imágenes de los locales + video de contexto. Humaniza los espacios (barra, gente trabajando) en lugar de platos aislados con luz de estudio. Evita el look generado de "delicious dish floating".
5. **Copy fundacional corto y personal**: Historia de Tim y Jordan + pasta hecha a mano. Una frase, sin adjetivos excesivos. Suena a dueños reales, no a prompt de "exceptional culinary journey".
6. **Estructura menu-first con locations como cards simples**: Prioriza el menú diario sobre hero narrativo. Locations como artículos limpios. En móvil hamburger. Útil y directo, menos scroll de storytelling genérico.

Estos patrones destacan restricción extrema (negro/blanco, texto puro), menú como protagonista y fotografía de contexto real para evitar la estética pulida genérica de IA.

## 2026-11-01 — El Celler de Can Roca (premium, independiente, Girona)
Sitio: https://cellercanroca.com/en/ (portal del universo Roca) y https://cellercanroca.com/en/el-celler-de-can-roca/ (página del restaurante)
Tipo: Fine dining de los hermanos Roca (Joan, Josep, Jordi), Michelin, en Girona. Parte de un universo más amplio (hoteles, heladería, tiendas, otros restaurantes).

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto casi negro `rgb(1, 1, 1)`. Limpio y frío, no crema. Acento naranja puntual `rgb(243, 141, 15)` / ~#F38D0F en algunos headings o links (muy poco uso).
- Tipografía: Source Sans Pro (headings, pesos 300-700, 12-32px) + Montserrat (body y nav, 14-16px). Todo sans, profesional y legible. No serif editorial. Body 16px Montserrat. Letter-spacing mínimo o nulo.
- CTAs: Casi exclusivamente texto puro o links. "Reserve", "BOOK", "Start" sin fondo, radius 0, padding moderado. En nav son links grises/oscuros. Solo botones filled en el cookie banner (negro y naranja). No pills ni outlines fuertes.
- Fotografía: Imágenes reales del restaurante, interiores, proyectos del universo (Esperit Roca, Casa Cacao, etc.). Slides de comida/lugar en la página del Celler. No stock idealizado; contexto de local y ambiente. Algunos alts vacíos.
- Espaciado: Generoso en hero (h1 con margin 40px). Estructura de portal: grid de cards/imágenes de proyectos con labels pequeños (RESTAURANT, HOTEL) y links BOOK. Pocas sombras; alguna presente pero no dominante. Bordes mínimos.
- Menú: No hay carta pública con precios visible fácilmente en el home o página principal. Enfoque en reserva controlada. Copy de reserva: "Reservations are accepted up to 11 months in advance", requiere tarjeta, mesas 2-12.
- Móvil: Viewport meta estándar (width=device-width). Nav con links textuales; no detecté hamburger explícito en desktop view, pero estructura adaptable.
- Copy: Muy humano y filosófico. Hero en la página del restaurante: cita de Joan Roca "Creating a restaurant takes time; it is a long-term project. A way of life... You need to be able to be happy throughout this journey of making others happy." Intro sobre evolución de 35 años, autenticidad, generosidad. No "exceptional experience" genérico.

### 6 patrones concretos para webs anti-IA
1. **Cita personal del chef/dueño como hero principal**: Frase larga y reflexiva de Joan Roca sobre el tiempo, la felicidad diaria y el oficio. Sustituye el hero de "Welcome to exceptional dining" por voz real. Anti-IA porque suena a persona, no a prompt optimizado.
2. **Portal de universo multi-proyecto con grid simple**: Home como directorio de entidades relacionadas (restaurante, hotel, tienda) con foto + label pequeño + link BOOK. Útil para grupos o marcas con varios brazos. Menos storytelling genérico, más mapa claro.
3. **CTAs de texto puro en mayúsculas pequeñas**: "BOOK", "RESERVE" como links sin fill, outline ni radius. Color gris/oscuro sobre blanco. El peso tipográfico hace el trabajo. Evita botones brillantes de template.
4. **Paleta blanco + casi-negro + acento naranja mínimo**: #FFF fondo, texto #010101, naranja #F38D0F solo en puntos. Limpio y profesional, no cálido-crema ni oscuro dramático. Sensación de catálogo serio, no de landing AI.
5. **Fotografía de lugares y proyectos reales, no platos flotantes**: Imágenes de interiores, edificios, ambientes del universo Roca. Humaniza el ecosistema completo. Evita el look de generación IA de comida perfecta aislada.
6. **Copy controlado y práctico en reservas**: Texto claro sobre límites (11 meses, tarjeta, tamaño de mesa) sin florituras. Combina con la cita filosófica. Menos marketing, más información útil y voz de autoridad real.

Estos patrones enfatizan voz personal del fundador, estructura de directorio claro, restricción en botones y paleta limpia para crear una web que se siente institucional y humana, no generativa.

## 2026-11-01 — The French Laundry (premium, independiente, Yountville / Napa)
Sitio: https://thomaskeller.com/tfl/ (página del restaurante dentro del grupo Thomas Keller)
Tipo: Fine dining de Thomas Keller, 3 Michelin stars, en edificio histórico de piedra (antigua lavandería francesa / saloon de 1900).

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto gris oscuro `rgb(51, 51, 51)`. Acento navy profundo `rgb(0, 47, 101)` en headings y links. Limpio, institucional, no cálido ni oscuro.
- Tipografía: Headings en Filosofía (serif elegante, ~17.4px, peso 400, color navy). Body y nav en Ideal Sans SSm (sans, muy pequeña: body ~11.6px, párrafos ~10.15px, peso 300, line-height ~15px). Contraste alto pero tamaño de cuerpo notablemente reducido. Sensación de catálogo impreso fino, no de web moderna grande.
- CTAs: Prácticamente todos texto puro / links. "Reservations", "Daily Menus" etc. en navy, sin background, border 0, radius 0 o 1px, padding 0. No filled, no outline, no pills visibles en la navegación principal. Reserva externa a Tock.
- Fotografía: Exterior real del edificio de river rock y madera (estilo cottage histórico), una foto de chocolate tart con ice cream en la página de menús. Logos de Michelin, Relais etc. No platos flotantes hiper-perfectos ni stock genérico; contexto del lugar y un dish simple.
- Espaciado y estructura: Nav compleja con dropdowns (about, menus & stories, wine & spirits, private dining). Poco ruido visual en contenido. Menú de daily menus es extremadamente mínimo: solo "Two tasting menus are offered daily: Chef's Tasting Menu / Tasting of Vegetables".
- Menú: No carta pública detallada con precios ni descripciones largas. Enfoque en los dos menús degustación diarios. Reserva controlada vía Tock.
- Móvil: No forzado viewport; la nav parece adaptable con botones de menú. Estructura de grupo (Thomas Keller Restaurant Group) con links a otros locales.
- Copy: Narrativo histórico y factual. En la página Restaurant: "Chef Thomas Keller visited Yountville, California, in the early 1990s to find a space to fulfill a longtime culinary dream... As he walked into the restaurant’s quaint courtyard, he knew it was where he had been headed throughout his career." Describe el edificio (saloon 1900, French steam laundry, compra en 1994). Menciona Michelin 3 stars desde 2007, James Beard, Wine Spectator. Sin adjetivos de marketing inflados tipo "exceptional journey" o "unforgettable experience".

### 6 patrones concretos para webs anti-IA
1. **Tipografía dual con serif de carácter + sans micro**: Filosofía para headings navy + Ideal Sans light y muy pequeña para body. Da sensación de libro de cocina o catálogo de Relais & Châteaux, no de landing page genérica. El tamaño reducido del body fuerza una lectura más pausada e intencional.
2. **CTAs de texto puro en navy, cero botones**: Links sin fill, outline ni radius significativo. El color navy profundo hace el trabajo de jerarquía. Menos "Reserve Now" de template, más navegación de directorio institucional.
3. **Paleta blanco + gris oscuro + navy institucional**: #FFFFFF fondo, #333333 texto, #002F65 acentos. Sensación de marca seria y establecida (tipo grupo hotelero o Relais), no de crema cálida ni negro dramático. Evita la paleta "AI premium" suave.
4. **Copy histórico del edificio y del descubrimiento, no promocional**: Narrativa concreta sobre cómo Keller encontró el cottage, el origen del nombre (French laundry), fechas y premios reales. Suena a archivo o biografía, no a prompt de "welcome to our iconic restaurant".
5. **Menú ultra-mínimo: solo los dos tasting menus**: Sin grid de dishes, sin precios, sin descripciones largas. "Chef's Tasting Menu / Tasting of Vegetables". Anti-IA porque rechaza el product catalog y mantiene el misterio de la degustación diaria.
6. **Fotografía del lugar real (edificio histórico) + un dish contextual**: Exterior del river rock cottage y una tart simple. Humaniza el espacio físico en lugar de aislar platos perfectos. Evita el look de generación IA de comida flotante con luz de estudio.

Estos patrones combinan restricción tipográfica extrema, paleta institucional limpia, copy de archivo histórico y presentación de menú casi ausente para crear una web que se siente como el sitio de una institución culinaria establecida, no como un landing generado.

## 2026-11-01 — Cutler (premium, independiente, Melbourne / Fitzroy)
Sitio: https://www.cutlerandco.com.au/
Tipo: Fine dining de Andrew McConnell (Trader House), en antigua fábrica de metalurgia en Gertrude Street, Fitzroy. Modern Australian, seasonal, con bar y dining room.

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto `rgb(34, 34, 34)` / casi negro. Limpio y frío, sin crema ni acentos fuertes visibles.
- Tipografía: Headings en Persona / "Archivo Narrow" (sans condensada, 16px, peso 700). Body parece sans-serif ~17px; algunos elementos en Caslon / garamond-premier-pro (serif). Densidad editorial, no grande y aireada genérica. Nav y links en la misma sans condensada bold.
- CTAs: Casi todo texto puro. Nav links (Reservations, Menu, Drinks, Private Dining, etc.) sin fondo, radius 0, border 0, padding mínimo. "MAKE A RESERVATION" como heading/link de texto. No filled, no outline, no pills. Solo algún skip-to-content con fondo oscuro.
- Fotografía: Imágenes reales del comedor (mesas con manteles, gente comiendo, camareros, paredes de ladrillo, arcos de fábrica, luz cálida de servicio). No platos flotantes aislados; ambiente industrial-elegante con diners y staff. Alts a veces vacíos o genéricos.
- Espaciado: Generoso pero práctico. Home empieza con bloques de info útil (MAKE A RESERVATION, LOCATION, OPENING HOURS, CONTACT) en texto, luego welcome narrativo y galería de fotos. Pocas sombras o bordes; look de Squarespace limpio.
- Menú: Página de texto puro con secciones (APPETISERS, SEASONAL SEAFOOD, ENTRÉES, CUTLER CLASSICS, MAIN COURSES...) y items + precios al lado (ej. Homemade FOCACCIA 12). Intro narrativa: "Our menu reflects how we like to cook, dine and eat right now. It is spontaneous, thoughtful and modern cooking...". Incluye classics y seasonal. No cards ni grids de producto.
- Móvil: Botón "Open Menu" presente (hamburger). Estructura adaptable; info práctica y nav accesible.
- Copy: Personal y histórico. "Andrew McConnell opened Cutler & Co. in 2009 in a former metal works factory in Fitzroy, Melbourne’s first suburb. Behind a glass façade that has reflected the changes around it for over sixteen years... Our ethos – refined, simple, hospitable dining – has not changed...". Menciona evolución, barrio, walk-ins en bar. Acknowledgment to Traditional Custodians al final. No marketing inflado.

### 6 patrones concretos para webs anti-IA
1. **Info práctica (horarios, dirección, contacto, reserva) como primer bloque de home**: No enterrado en footer o menú. Texto claro y directo arriba. Anti-IA porque prioriza utilidad real sobre hero narrativo genérico o foto grande sin contexto.
2. **Sans condensada (Archivo Narrow / Persona) bold a tamaño similar al body**: Headings 16px 700 sobre body ~17px. Da densidad de carta impresa o periódico, no el look grande-serif o Inter aireado típico de IA. Carácter industrial-editorial.
3. **CTAs y nav de texto puro, radius 0, sin fill**: Links uppercase o title-case sin decoración. El peso y color hacen la jerarquía. Menos "botón de template" o pill moderna, más directorio o menú de restaurante físico.
4. **Paleta blanco puro + gris casi negro**: #FFFFFF fondo, #222222 texto. Limpio, institucional, sin cremas cálidas ni pasteles. Sensación de catálogo o web de grupo serio, no de landing AI premium suave.
5. **Menú como lista de texto con precios y secciones claras**: Items + precio en línea, intro corta sobre el estilo de cocina. Evita product cards o grids visuales. Sensación de carta real, no e-commerce de platos.
6. **Fotografía del comedor real con gente y arquitectura industrial**: Mesas ocupadas, servicio, ladrillos y arcos de la antigua fábrica. Humaniza el espacio físico y el ambiente (no solo comida perfecta). Evita el look generado de dishes aislados con luz de estudio.

Estos patrones combinan utilidad práctica visible, tipografía condensada con carácter, restricción extrema en botones y fotografía de ambiente real para una web que se siente como el sitio de un restaurante establecido con historia de barrio, no como un landing generado.
