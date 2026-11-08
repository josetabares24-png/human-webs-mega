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

*(Entradas anteriores: ver historial del repo. El archivo se reinició aquí con esta observación limpia.)*
