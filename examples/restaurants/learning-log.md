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
