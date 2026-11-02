# Learning Log — Restaurantes

Observaciones específicas de sitios reales para patrones anti-IA.

## 2026-11-02 — Eleven Madison Park (premium fine dining, NYC)

Sitio: https://www.elevenmadisonpark.com
Tipo: Premium independiente / fine dining de alto perfil.

### Estructura y CTAs
- Hero mínimo con logo wordmark (hojas) y navegación superior simple.
- Dirección, teléfono y Instagram visibles de inmediato.
- CTA principal de reservas redirige a Resy (externo). Hay "Book on Resy" filled naranja y varios "Reservations" como texto.
- Menú hamburger en móvil. Secciones: About, Team, Magic Farms, Events, Stories, Shop.
- Footer con lista de enlaces (Wine List, FAQs, Gift Cards, Clemente Bar, etc.) y signup de email.

### Tipografía
- Navegación y links de UI: familia "nobel", ~17px, peso 300, uppercase, letter-spacing ~0.34px. Muy ligera y espaciada.
- H1: "Helvetica Neue", 30px, peso 700 (en móvil baja a ~21px).
- Cuerpo: sans-serif genérico 16px / 400.
- Algunos elementos usan "EB Garamond" (serif) ~19px con tracking ligero.
- Contraste claro entre UI sans ligera en mayúsculas y display más bold.

### Botones
- Mayoría de CTAs son texto puro: sin fondo, sin borde, radio 0, uppercase, peso ligero.
- "Book on Resy": filled, fondo rgb(252, 72, 55) naranja brillante, texto blanco, peso 700, border-radius ~6.4px, padding horizontal.
- "Reserve" (para el counter): filled negro, texto blanco, radio 0, padding generoso (~18px vertical).
- Skip link: filled azul oscuro con padding grande.
- Ningún pill, ningún outline clásico en el primer viewport.

### Colores
- Fondo principal: blanco rgb(255,255,255).
- Texto: negro / rgb(0,0,0) o rgb(26,26,26).
- Acento fuerte solo en el CTA de reserva: naranja saturado.
- Alto contraste, casi monocromo con un único punto de color funcional.

### Espaciado, bordes, sombras, fotografía
- Muy limpio, aire generoso, sin box-shadow visibles en botones o cards.
- Border-radius casi siempre 0 excepto el botón naranja.
- Fotografía real de platos (Scallop, Tonburi) y del farm (Magic Farms), a sangre o con buen peso visual. No ilustraciones ni stock genérico.
- Wordmark tipográfico/logo de hojas en lugar de foto hero full-bleed obligatoria.

### Menú, móvil y copy
- Menú no es carta HTML completa en home; se enfoca en la experiencia y reserva. Hay wine list separado.
- Móvil: H1 reduce a 21px, "Open Menu" claro, CTAs siguen siendo texto o el filled naranja.
- Copy directo y concreto: dirección, teléfono, "Join us in The Studio at Clemente Bar. Tucked above the EMP Dining Room is The Studio... Book your seat now." Descripciones de platos específicas ("Marinated with Kohlrabi and Hazelnut"). Sin adjetivos vacíos ni "experience the magic".

### Patrones concretos útiles para webs anti-IA
1. **CTA texto mayúscula ligera vs un solo filled de acento**: La mayoría de navegación es texto uppercase peso 300 con tracking; solo el booking real es filled naranja con radio pequeño. Evita el "todo es botón redondeado" de plantillas IA.
2. **Monocromo + un acento funcional**: Blanco/negro dominante y un solo naranja saturado exclusivamente para la acción de reservar. Nada de paletas pastel o gradientes.
3. **Tipografía mixta controlada**: Sans ligera (nobel) para UI + Helvetica bold para display + toques de Garamond. No una sola familia moderna en todo.
4. **Fotografía de plato real con pie descriptivo concreto**: Imágenes de comida específica (no "beautiful dish") y copy de ingredientes reales. Humaniza más que cualquier ilustración.
5. **Reserva externa clara pero integrada**: "Book on Resy" filled + links de texto a Resy. No finge un sistema de reservas propio.
6. **Aire y cero sombra**: Espaciado generoso, radios 0 en casi todo, sin cards ni shadows. La jerarquía la da el tamaño y el peso tipográfico, no el elevation.

Notas honestas: El sitio usa Squarespace (URLs de CDN). El menú principal parece overlay. El botón naranja tiene radio suave (no 0 ni pill). En móvil el H1 se reduce significativamente. No hay carta completa HTML en la home; el foco es la reserva y la historia.

## 2026-11-02 — Cutler (premium independent, Fitzroy Melbourne)

Sitio: https://www.cutlerandco.com.au
Tipo: Premium independiente / fine dining (Andrew McConnell, former metalworks factory).

### Estructura y CTAs
- Navegación superior horizontal: Reservations, Menu, Drinks, Private Dining, Gift Vouchers, Journal, Sundays at Cutler. Todo en uppercase con tracking amplio.
- Lado izquierdo: MAKE A RESERVATION (texto), LOCATION (dirección completa), OPENING HOURS, CONTACT (teléfono + email).
- Hero / bienvenida con texto descriptivo + grid de fotografías de interior y platos (no full-bleed hero obligatorio).
- CTA de reserva enlaza a SevenRooms (externo). Hay varios “MAKE A RESERVATION” como texto puro.
- Footer: Instagram, Careers, Privacy, Contact, Trader House, SUBSCRIBE FOR NEWS (outline).
- Reconocimiento de tierras (Wurundjeri) al final.

### Tipografía
- Navegación y CTAs: “Persona, Archivo Narrow”, sans-serif, ~15px, peso 700, uppercase, letter-spacing ~3px (muy abierto).
- Cuerpo y algunos contenedores: Caslon / garamond-premier-pro (serif) ~16px / 400.
- Body base: sans-serif genérico 17px / 400, color rgb(34,34,34).
- Contraste claro: UI sans bold uppercase con tracking vs serif más editorial para cuerpo.

### Botones
- Mayoría de CTAs son texto puro: sin fondo, sin borde, radio 0, uppercase, peso 700, tracking alto.
- “SUBSCRIBE FOR NEWS”: outline, borde 2px solid rgb(34,34,34), padding ~21px 34px, radio 0, uppercase, peso 700, letter-spacing ~2.9px.
- Skip to content: filled oscuro con borde.
- Ningún pill, ningún filled de color saturado en home. Todo radio 0.

### Colores
- Fondo principal: blanco + secciones cream/beige muy suave rgb(247, 247, 237).
- Texto: rgb(34, 34, 34) casi negro.
- Casi monocromo. Sin acentos de color fuerte; la jerarquía es tipográfica y espacial.
- Alto contraste, paleta muy contenida.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, aire entre bloques.
- Border-radius siempre 0. Sin box-shadow visibles.
- Fotografía real de alta calidad: interiores del local (lámparas, mesas, brick), platos (steak, seafood, postres), ambiente. Grid de imágenes con “View fullsize”. No stock genérico ni ilustraciones.
- Logo wordmark “CUTLER” serif/display.

### Menú, móvil y copy
- Menú y Drinks como secciones separadas (no carta completa HTML en home).
- En desktop navegación visible; “Open Menu” presente (hamburger en móvil).
- Copy concreto y local: historia de la fábrica metalworks, “refined, simple, hospitable dining”, horarios específicos, “Walk-in for a bite and drink in our bar, or make a reservation for the dining room.” Reconocimiento de Traditional Custodians. Sin frases vacías tipo “experience the magic of fine dining”.

### Patrones concretos útiles para webs anti-IA
1. **Navegación uppercase con tracking extremo y peso 700**: Persona/Archivo Narrow ~15px, letter-spacing ~3px. Sensación editorial/periodística, no “UI moderna redondeada”.
2. **Serif editorial para cuerpo + sans bold uppercase para UI**: Caslon/Garamond Premier en texto + sans condensa/estrecha en nav. Mezcla controlada que evita el mono-fuente Inter/Helvetica de plantillas.
3. **Outline generoso con radio 0 y padding grande**: Solo el subscribe es outline 2px, padding vertical ~21px. El resto es texto puro. Cero pills o filled de color.
4. **Fondo cream suave + monocromo**: rgb(247,247,237) como acento de fondo en lugar de color saturado. La fotografía hace el trabajo visual.
5. **Fotografía de local y plato real en grid sin hero forzado**: Imágenes de ambiente y comida específica (no abstractas), integradas en el flujo del texto. Humaniza más que cualquier stock.
6. **Reserva externa (SevenRooms) como texto, no botón llamativo**: “MAKE A RESERVATION” es link de texto. No finge un sistema propio ni usa filled de acento.

Notas honestas: Sitio Squarespace (CDN images.squarespace). CTAs de reserva son texto puro (algunos apuntan a # o a página interna que redirige a SevenRooms). Fondo cream muy sutil. Fotos de alta calidad de interiores y platos. No hay carta HTML completa en la home; el foco es la atmósfera, la historia y la reserva. En móvil aparece “Open Menu”.

## 2026-11-02 — Ma‘ono Fried Chicken (casual independent, Seattle)

Sitio: https://www.maonoseattle.com
Tipo: Casual independiente / fried chicken Hawaiian-inspired (Chef Mark Fuller, multiple locations in Seattle area including Benbow Room).

### Estructura y CTAs
- Home con fondo amarillo brillante y banner repetitivo "CRISPY ∗ JUICY ∗ ALOHA" en mayúsculas.
- Hero con H1 grande "HAWAIIAN STYLE FRIED CHICKEN" y CTA "ORDER ONLINE" filled naranja.
- Secciones de ubicaciones (West Seattle, Woodinville, U Village, South Lake Union) con nombres concretos.
- Navegación hamburger "Open Menu" con items uppercase bold (Menu, Locations, About, Contact, FAQ, Catering).
- Footer con "FIND US" lista de locations y "NAVIGATE" (See The Menu, Contact, Events & Catering, Gift Cards).
- "SKIP TO CONTENT" filled naranja.

### Tipografía
- Display / H1: "obviously-narrow" (o "obviously"), ~63px en home, peso 800, uppercase, color oscuro rgb(27,36,46).
- Cuerpo / p: "Varela Round", ~25.6px / 400 en menú, line-height ~36px, mismo color oscuro.
- Nav links: uppercase, peso 800, ~23.7px, sans.
- Contraste fuerte: display ultra-bold estrecha vs cuerpo redondeada amigable.

### Botones
- "ORDER ONLINE" y "Catering": filled, fondo rgb(226, 75, 37) naranja/rojo, texto blanco, peso 700, uppercase, border-radius ~6.4px, padding generoso.
- Nav y mayoría de links: texto puro, radio 0, sin fondo, uppercase peso 800.
- Skip to content: filled naranja con radio 6.4px y padding ~16px 20px.
- No pills perfectos ni outlines en home principal; radio pequeño solo en filleds de acción.

### Colores
- Fondo principal: amarillo/oro saturado rgb(254, 195, 59) en todo el body.
- Texto: oscuro casi negro rgb(27, 36, 46).
- Acento: naranja/rojo rgb(226, 75, 37) exclusivo para CTAs de ordenar/catering.
- Alto contraste, paleta limitada y energética (amarillo + naranja + oscuro). Nada de grises o pasteles.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, bloques claros.
- Border-radius 0 en casi todo; ~6.4px solo en botones filled de acción. Sin box-shadow visibles.
- Fotografía real de comida: sandwiches, drumsticks, fingers, sliders, abuela en la cocina, hermana comiendo picnic chicken. Con "View fullsize". No stock genérico; imágenes específicas del producto y familia.
- Banner tipográfico repetitivo en lugar de hero fotográfico full-bleed.

### Menú, móvil y copy
- Menú con fotos + descripciones concretas: "Crispy fried chicken breast on a butter toasted King’s Hawaiian bun, with daikon pickles, Kewpie Mayo, iceberg lettuce." "Your first dipping sauce is free but you should probably get more."
- Móvil: "Open Menu" claro, H1 grande se mantiene legible, CTAs filled visibles.
- Copy personal y específico: "The Legend of Ma‘ono" cuenta la historia real de Kauai, abuelos, picnic chicken de la abuela, seasoning secret, "so ono", King’s Hawaiian bun, takuan. Sin "experience the aloha" vacío; todo concreto y familiar.

### Patrones concretos útiles para webs anti-IA
1. **Fondo de color saturado dominante + texto oscuro**: Amarillo rgb(254,195,59) en todo el body en lugar de blanco. Da personalidad inmediata y evita el blanco limpio de plantillas IA.
2. **Display ultra-bold estrecha uppercase + cuerpo redondeada**: obviously-narrow peso 800 para títulos vs Varela Round 400 para texto. Mezcla de personalidad tipográfica, no mono-fuente geométrica.
3. **Filled de acento con radio pequeño solo para acción principal**: ORDER ONLINE naranja radio 6.4px; el resto texto puro. Jerarquía clara sin que todo sea botón.
4. **Copy de producto hiper-específico + historia familiar real**: Descripciones de ingredientes concretos (Kewpie, takuan, King’s Hawaiian) y anécdota personal de la abuela. Humaniza más que cualquier "bold flavors".
5. **Banner tipográfico repetitivo como elemento de marca**: "CRISPY ∗ JUICY ∗ ALOHA" en lugar de foto hero. Simple, memorable y anti-stock.
6. **Fotografía de comida y familia real sin polish excesivo**: Imágenes de platos específicos y "Grandma at the stove". Menos "lifestyle perfect" y más real.

Notas honestas: Sitio Squarespace (CDN images.squarespace-cdn). Fondo amarillo muy saturado en body. Menú tiene fotos + texto descriptivo concreto. ORDER ONLINE es filled naranja con radio suave. Historia personal fuerte en About. Múltiples locations listadas claramente. No hay carta con precios en HTML visible en las páginas visitadas; el foco es ordenar online y la identidad.

## 2026-11-02 — Sweetgreen (fast-casual chain, national US)

Sitio: https://www.sweetgreen.com
Tipo: Cadena fast-casual / salads & bowls (múltiples locations, foco en order online).

### Estructura y CTAs
- Hero con tipografía grande sobre foto de producto (wrap Caesar) + CTA principal "ORDER NOW" pill lima.
- Navegación simple con "ORDER" visible; hamburger "Toggle main menu" en móvil.
- Secciones de productos destacados (Kale Caesar, Guacamole Greens, Buffalo Chicken, Harvest Bowl…) con foto circular/cuadrada, descripción de ingredientes y link "Order now →".
- CTAs secundarios: "LET US KNOW" (para nuevas locations), "LEARN MORE" (careers). Footer con About Us, Social, Support, Legal.
- Menu page separada con H1 de misión.

### Tipografía
- Cuerpo y UI: "SweetSansText" (custom sans), 16px / 400, color oscuro rgb(14, 21, 14).
- Display / hero text: "SweetSans" o similar, ~63px / 400, line-height ajustado.
- Títulos de categorías / tabs: "Grenette" (serif), ~38px, peso 200 (muy ligero), capitalize, letter-spacing negativo ~-1.8px.
- H2 de productos: SweetSansText ~22px / 400, uppercase, letter-spacing ~0.67px.
- Contraste: sans custom limpia + serif ultra-light para categorías.

### Botones
- CTAs principales (ORDER NOW, LET US KNOW, LEARN MORE): filled pill completo (border-radius 1000px), fondo lima brillante rgb(230, 255, 85), texto verde oscuro rgb(0, 71, 60), uppercase, padding generoso ~15px 60px, peso 400.
- "Order now →": texto puro, radio 0, sin fondo, color oscuro.
- Skip to content: fondo cream con sombra suave y padding pequeño.
- Tabs de categoría: texto serif ligero, radio 4px, sin filled.
- No outlines clásicos; el acento es el pill lima saturado.

### Colores
- Fondo principal body: cream/off-white rgb(244, 243, 231).
- Texto principal: verde-negro muy oscuro rgb(14, 21, 14) o rgb(0, 71, 60).
- Acento fuerte: lima/amarillo-verde saturado rgb(230, 255, 85) exclusivo para pills de acción.
- Alto contraste, paleta natural/saludable (cream + oscuro + lima). Sin grises fríos.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, carousels de productos.
- Border-radius 0 en la mayoría; pills perfectos solo en CTAs de acción; pequeño 4px en tabs.
- Casi sin box-shadow (solo el skip link tiene una suave).
- Fotografía real de producto de alta calidad con alts detallados (ej. "Three halves of a chicken Caesar-style wrap stacked vertically, held at the top by a hand with red nail polish, showing a filling of chopped chicken, romaine, dill, pickles…"). Imágenes de platos específicos, no stock genérico.
- Hero tipográfico + foto de producto en lugar de lifestyle abstracto.

### Menú, móvil y copy
- Menú HTML con nombres de platos, ingredientes concretos, alérgenos ("Contains milk, eggs, fish, meat, wheat") y link directo a order.
- Móvil: toggle menu presente; CTAs pill se mantienen prominentes.
- Copy concreto y de marca: "The Caesar Got Dilly", "We source the best ingredients from farmers we know + prepare them fresh.", descripciones de ingredientes específicas (kale, romaine, parm crisps, lime cilantro jalapeño sauce). Sin "fresh and healthy" vacío; todo anclado a productos reales y misión de sourcing.

### Patrones concretos útiles para webs anti-IA
1. **Pill de acento saturado + texto puro para secundarios**: ORDER NOW es pill lima 1000px con padding generoso; "Order now →" es link de texto. Jerarquía clara sin que todo sea botón redondeado.
2. **Custom sans + serif ultra-light para categorías**: SweetSansText 400 para cuerpo/UI vs Grenette peso 200 ~38px con tracking negativo. Personalidad tipográfica propia, no mono-Inter.
3. **Fondo cream natural + lima funcional**: rgb(244,243,231) dominante y lima solo en acciones. Sensación de marca saludable real, no blanco digital genérico.
4. **Fotografía de producto con alt hiper-detallado + ingredientes reales**: Imágenes específicas del wrap o bowl con descripción visual completa y lista de ingredientes + alérgenos. Humaniza más que stock "healthy salad".
5. **Copy de producto concreto + misión de sourcing**: Nombres juguetones ("The Caesar Got Dilly") y H1 de menu "farmers we know". Evita adjetivos vacíos.
6. **Order como infraestructura principal**: Todo el flujo lleva a order.sweetgreen.com; no finge sistema propio en la home pero lo integra de forma clara.

Notas honestas: Sitio custom (Contentful images.ctfassets). CTAs principales son pills perfectos lima. Fotos de producto excelentes con alts largos y específicos. Menú tiene ingredientes y alérgenos reales. Fondo cream consistente. En móvil el hamburger es claro. Foco total en order online y productos, no en experiencia de dining room.
