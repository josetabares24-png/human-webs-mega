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
