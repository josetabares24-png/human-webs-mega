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
