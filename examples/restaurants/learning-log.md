# Learning Log — Restaurantes

Observaciones concretas de sitios reales para extraer patrones útiles en webs anti-IA (estética humana, tipografía propia, copy específico, CTAs no genéricos).

## Canlis (canlis.com) — Premium / Independiente (Seattle)
**Fecha observación:** 2026-11-08  
**Tipo:** Fine dining familiar desde 1950, edificio icónico, menú degustación.

### Lo que vi (honesto)
- Fondo principal crema cálido suave `rgb(239, 240, 235)` / ~#EFF0EB. Texto principal marrón oscuro `rgb(39, 35, 32)`. Secciones oscuras puntuales (oliva/negro).
- Tipografía: cuerpo y la mayoría de títulos en **GT Sectra Book** (serif personalizada, peso 400, ~20px en h2). Un display enorme para el CTA principal: **GT Sectra Display Light / Italic** a **112px** en “Book a table”. Nav y CTAs pequeños en **Helvetica Neue Medium**, ~11.7px, uppercase, letter-spacing 0.65px.
- Botones casi inexistentes como “filled”. El Reserve del nav es texto plano (sin fondo, sin borde grueso). El CTA más fuerte es tipográfico, no un botón rectangular.
- Fotografía generosa y real: exterior nocturno, sala con servicio, preparación tableside del Canlis Salad, platos (pork belly, etc.). Alta resolución, atmosférica, no stock.
- Menú en HTML real: estructura de 6 courses, eliges 3, descripciones cortas y poéticas (ej. “chili XO, komatsuna, and shiso”). Precios solo en add-ons (+$55). No PDF.
- Copy específico y humano: “The opportunity to meet and serve you is one we don’t take lightly, not for the past 75 years at least.” Menciona arquitectos (Roland Terry, Jim Cutler), premios concretos (James Beard Design Icon, ranked #2 Food & Wine 2025), chef actual.
- Nav minimalista: RESERVE | EXPLORE (disclosure) | PRIVATE EVENTS. Mucho espacio en blanco. Sombras presentes pero sutiles. Contraste alto pero paleta apagada.
- Reserva va a Tock. No hay sticky bar agresiva ni botones naranjas/rojos.

### 5 patrones concretos para webs anti-IA
1. **CTA tipográfico gigante en lugar de botón**: Un enlace “Book a table” a 112px en serif light/italic, sin caja ni fondo. Se siente editorial y premium, no “template de landing”.
2. **Serif custom de peso normal + sans pequeño uppercase en nav**: GT Sectra Book (400) para cuerpo y títulos medios; Helvetica Neue Medium 12px uppercase + tracking para navegación. Evita el Inter/Roboto bold de las IAs.
3. **Paleta crema + marrón oscuro, sin negros puros ni acentos neón**: Fondo #EFF0EB, texto #272320. Secciones oscuras puntuales. Contraste excelente pero cálido y apagado.
4. **Menú HTML con estructura de experiencia, no lista de platos con precios**: “Elegís 3 de 6 courses” + descripciones cortas de ingredientes. Precios solo donde hay upsell. Se siente exclusivo y real.
5. **Copy con hechos concretos y voz de anfitrión**: Años exactos, nombres de arquitectos/chefs, premios verificables, frases como “come spend the evening with us”. Nada de “culinary excellence” genérico.
6. **Fotografía de servicio y lugar, no solo food porn**: Exterior del edificio, sala con meseros atendiendo, preparación tableside. Transmite la experiencia física.

**Utilidad anti-IA:** La combinación de tipografía propia de peso ligero, CTA tipográfico enorme, paleta crema apagada y copy hiper-específico es muy difícil de generar automáticamente con los defaults actuales de modelos. Se siente hecho a mano y con criterio.

---

## Cutler & Co. (cutlerandco.com.au) — Premium / Independiente (Fitzroy, Melbourne)
**Fecha observación:** 2026-11-08  
**Tipo:** Fine dining contemporáneo en antigua fábrica metalúrgica, abierto 2009 por Andrew McConnell. Sitio en Squarespace.

### Lo que vi (honesto)
- Fondo blanco puro `rgb(255, 255, 255)`, texto casi negro `rgb(34, 34, 34)`. Muy limpio, poco color de acento. Contraste alto pero neutro.
- Tipografía dual clara: cuerpo en **Caslon** (serif clásico, fallback garamond-premier-pro), 16px, peso 400, line-height 24px. Títulos de sección y labels (MAKE A RESERVATION, LOCATION, OPENING HOURS, WELCOME TO CUTLER) en **Persona** / Archivo Narrow sans-serif, 16px, peso 700, letter-spacing ~1.12px, uppercase. Nav similar, ~15px bold.
- Botones casi inexistentes como filled. Los CTAs principales (“MAKE A RESERVATION”, “Reservations”) son texto bold sin fondo ni borde. Hay outline mínimo (border 2px solid negro) en elementos secundarios como “SUBSCRIBE FOR NEWS” o skip link. Nada de rounded filled naranja/azul.
- Fotografía real y generosa en grid: interior con mesas de mantel blanco, plantas grandes, platos (burger, pescado, postres, vinos), exterior del local. Imágenes de Squarespace CDN, alta resolución, no stock genérico. Transmite el espacio físico.
- Menú 100% HTML con precios reales y secciones claras: APPETISERS (focaccia $12, donuts $36, caviar $240), SEASONAL SEAFOOD, ENTRÉES, CUTLER CLASSICS (rib eye 1kg $240 “on the menu from day one”, suckling pig $140), MAIN COURSES, etc. Descripciones cortas y concretas. No PDF.
- Copy específico y de lugar: “Andrew McConnell opened Cutler & Co. in 2009 in a former metal works factory in Fitzroy, Melbourne’s first suburb.” Ethos: “refined, simple, hospitable dining”. Menciona walk-ins (siempre reservan espacio), 10% surcharge los domingos, acknowledgment de Traditional Custodians (Wurundjeri Woi Wurrung). Nada de “culinary journey” vacío.
- Estructura homepage: bloque izquierdo con info práctica inmediata (dirección 55–57 Gertrude St., horarios, teléfono, email) + foto grande derecha. Nav superior simple: Reservations | Menu | Drinks | Private Dining | Gift Vouchers | Journal | Sundays at Cutler. Botón “Open Menu” para móvil. Espaciado generoso, casi sin sombras ni bordes pesados.
- Reserva lleva a página propia que reitera horarios y walk-ins. Sitio ligero y rápido.

### 6 patrones concretos para webs anti-IA
1. **Dual type clásico + sans narrow uppercase con tracking**: Caslon serif 16px peso 400 para cuerpo; Persona/Archivo Narrow 16px bold uppercase + letter-spacing 1.12px para headings de sección. Se siente editorial y deliberado, no Inter bold de template.
2. **CTAs como texto bold sin caja ni fondo**: “MAKE A RESERVATION” y links de nav son solo tipografía. Evita el botón filled rectangular genérico. El contraste lo da el peso y el tracking.
3. **Info práctica (dirección, horarios, contacto) visible above the fold** junto a una foto grande del local. No escondida en footer. El visitante sabe dónde está y cuándo abre sin scroll.
4. **Menú HTML con precios reales y “classics” señalados**: Secciones claras, precios al lado, nota “on the menu from day one” en el rib eye. Se siente transparente y con historia, no un PDF o una lista sin números.
5. **Paleta blanco puro + negro casi puro, fotografía del lugar como único color**: Sin acentos de marca saturados. Las fotos (mesas, plantas, platos) aportan la calidez y la textura. Muy difícil de “IA-generar” con paletas pastel default.
6. **Copy anclado a hechos locales y operativos**: Año de apertura, tipo de edificio original, nombre del fundador, política de walk-ins, surcharge, acknowledgment territorial. Voz de anfitrión concreto, no marketing genérico.

**Utilidad anti-IA:** La combinación de serif clásico de cuerpo + sans narrow tracking para labels, CTAs tipográficos puros, menú con precios reales y copy hiper-específico de lugar (fábrica, año, walk-ins) produce un sitio que se siente hecho por alguien que conoce el restaurante, no por un modelo con defaults de Squarespace/Webflow. El blanco puro y la ausencia de botones filled lo alejan aún más de las landings genéricas.

---

## Sweetgreen (sweetgreen.com) — Casual / Cadena (EE.UU.)
**Fecha observación:** 2026-11-08  
**Tipo:** Cadena de salads y bowls saludable, rápida-casual, múltiples locations, fuerte en online order.

### Lo que vi (honesto)
- Fondo principal crema suave `rgb(244, 243, 231)` / ~#F4F3E7. Texto principal casi negro verdoso `rgb(14, 21, 14)`. Acento lima brillante `rgb(230, 255, 85)` para el botón principal. Secciones oscuras puntuales.
- Tipografía: familia custom **SweetSansText** (sans-serif) para cuerpo y UI, 16px peso 400. Display grande **SweetSans** (variante de la misma familia) a ~63px peso 400 para headlines como “Fall’s Best Dressed” o “Where should we open next?”. Nav en uppercase 16px peso 400. Nada de bold pesado genérico.
- Botones: el CTA principal “ORDER NOW” es filled pill (border-radius 1000px), fondo lima `rgb(230,255,85)`, texto verde oscuro `rgb(0,71,60)`, padding generoso ~15px 60px, peso 400. Nav y links secundarios son texto plano (sin fondo, sin borde), uppercase. Hay un “Our Menu” grande en color claro sobre fondo.
- Fotografía de comida real y generosa: platos de temporada (Maple Glazed Salmon), bowls, ingredientes visibles. No stock genérico. Hero con overlay de texto grande.
- Menú / productos: cards con nombre en mayúsculas (KALE CAESAR), lista corta de ingredientes, alérgenos explícitos (“Contains milk, eggs…”), y “Order now →”. Online order prioritario.
- Copy específico y de temporada: “Fall’s Best Dressed”, “Where should we open next? LET US KNOW”, “Come join our team”. Voz directa, joven, no corporativa genérica. Menciona antibiotic-free, etc.
- Estructura: nav superior simple (Our Menu, Our Mission, Locations, Catering…), hero con producto + CTA, secciones de menú, recruiting. Espaciado amplio, sombras muy sutiles (`rgba(0,0,0,0.4) 0 0 3px`). Contraste alto. Sitio rápido, orientado a mobile/order.
- Reserva/order: “ORDER” prominente en nav y hero. No sticky agresivo, pero CTAs claros para pedir.

### 5 patrones concretos para webs anti-IA
1. **Familia tipográfica custom sans de peso regular + display ligero**: SweetSansText 16px/400 para cuerpo y nav; SweetSans ~63px/400 para headlines. Evita Inter bold y serifs genéricas. Se siente de marca propia.
2. **Botón pill filled con acento lima saturado sobre crema**: “ORDER NOW” radius 1000px, bg #E6FF55, texto verde oscuro, padding amplio. El resto de CTAs son texto plano uppercase. Contrasta con botones rectangulares naranjas default de IA.
3. **Paleta crema + verde-negro + lima puntual**: Fondo #F4F3E7, texto #0E150E, acento solo en el CTA principal. Cálida pero fresca, no pastel genérico ni negro puro.
4. **Menú / productos con ingredientes listados y alérgenos explícitos**: Nombre uppercase, lista corta de componentes, “Contains…”. Se siente transparente y real para comida rápida-saludable, no descripciones poéticas vacías.
5. **Copy de temporada y conversacional + hero tipográfico grande**: “Fall’s Best Dressed” a 63px, preguntas directas como “Where should we open next?”. Voz de marca joven y concreta, no “fresh healthy meals” genérico.
6. **Fotografía de producto real con overlay de texto y CTA inmediato**: Platos de temporada visibles above the fold junto al botón order. Prioriza la acción (pedir) sin perder estética.

**Utilidad anti-IA:** La combinación de familia sans custom de peso ligero, paleta crema + lima saturada solo en un pill button, menú con ingredientes/alérgenos reales y copy de temporada específico es difícil de generar con los defaults actuales (Inter, botones blue/orange rectangulares, copy genérico de “healthy bowls”). Se siente de una marca con identidad propia y operativa real.

---

*(Entradas anteriores: ver historial del repo. El archivo se reinició aquí con esta observación limpia.)*
