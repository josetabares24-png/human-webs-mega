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
