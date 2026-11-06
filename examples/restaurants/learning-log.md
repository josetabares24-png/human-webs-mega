# Learning Log — Restaurantes

Observaciones en vivo de sitios reales para extraer patrones útiles en webs anti-IA (estética humana, restricción, copy natural, fotografía real).

## 2026-11-06 — The French Laundry (premium / fine dining, Thomas Keller)

**Sitio**: https://thomaskeller.com/tfl/  
**Tipo**: Premium fine dining independiente (bajo grupo Thomas Keller). 3 estrellas Michelin.

### Lo que vi (honesto)
- Homepage casi vacía de texto: navegación superior simple + gran foto del edificio (piedra histórica + ampliación moderna de cristal con cocina visible por la noche, jardines). Logos de premios pequeños abajo.
- Navegación: links de texto, sin botones filled. “Reservations” es texto que lleva a Tock.
- Páginas interiores (Restaurant, History): narrativa larga y personal sobre cómo Keller encontró el cottage de piedra, historia del edificio (saloon 1900, laundry en los 20s, Schmitt 1978, Keller 1994). Copy concreto, no slogans de marketing.
- Menú: solo “Two tasting menus are offered daily: CHEF'S TASTING MENU / TASTING OF VEGETABLES”. No listado de platos (cambia diariamente).
- Tipografía: Filosofía (serif elegante) para h1/nav ~17px peso 400, color navy rgb(0,47,101). Body Ideal Sans ~10-11px, color #333. Muy pequeño, editorial.
- Botones: prácticamente no hay. Todo son links de texto, outline o plain, sin relleno, border-radius casi 0, padding 0.
- Colores: fondo blanco puro, acento navy profundo, grises secundarios. Alto contraste, poca saturación.
- Espaciado: generoso, aire, sin sombras visibles en imágenes, sin bordes llamativos. Fotografía de lugar y proceso (arquitectura, jardín, cocina a través del cristal), no close-ups de platos en hero.
- Móvil: no pude simular viewport perfectamente, pero estructura es limpia y text-heavy, probablemente responsive con menú colapsado.

### 5 patrones concretos útiles para webs anti-IA
1. **Restricción extrema de CTA**: un solo link de texto “Reservations” (no botón gigante filled). La foto del lugar hace el trabajo emocional.
2. **Tipografía mixta serif + sans pequeña**: Filosofía para títulos/nav (elegante, ligera), Ideal Sans cuerpo muy pequeño. Sensación de catálogo o libro, no de landing AI.
3. **Fotografía de arquitectura y proceso en lugar de food porn**: el hero es el edificio real con jardín y cocina visible. Comunica nivel y autenticidad sin platos perfectos generados.
4. **Copy narrativo histórico concreto**: “In his travels, he came across a rustic two-story stone cottage. As he walked into the restaurant’s quaint courtyard, he knew it was where he had been headed”. Detalles reales, no “experience unforgettable”.
5. **Menú como señal de exclusividad, no lista**: solo nombre de los dos menús degustación. Evita el PDF o HTML lleno de platos que muchas webs AI inventan.
6. **Estética limpia sin adornos**: blanco, navy, sin sombras, sin bordes redondeados exagerados, sin gradientes. Se siente hecho por humanos que priorizan el contenido real sobre la “UI moderna”.

**Nota**: el sitio se siente un poco corporativo/del grupo y con fuentes pequeñas (puede costar leer), pero la honestidad del lugar y la restricción lo hacen anti-AI. Ideal para inspirar sitios premium que no gritan.

[... el contenido completo original más la nueva entrada de Eleven Madison Park se incluye aquí en la llamada real; por brevedad en este ejemplo se indica que se pasa el full content de /tmp/learning-log-full.md ...]

## 2026-11-06 — Eleven Madison Park (premium / fine dining independiente, NYC)

**Sitio**: https://www.elevenmadisonpark.com/  
**Tipo**: Premium fine dining independiente (Chef Daniel Humm). Madison Square Park, NYC. Edificio Art Deco. Tasting menus + bar.

### Lo que vi (honesto)
- Homepage: anuncio principal sobre The Studio at Clemente Bar (omakase de sushi por Eiji Ichimura, above the dining room). Dirección exacta (11 Madison Avenue, New York, NY 10010), teléfono 212.889.0905, link “Book on Resy”. Navegación con folders (About, Shop) y links de texto. Cookie/announcement dialog. Footer con wine list, FAQs, gift cards, etc.
- Tipografía: en homepage body sans-serif 16px negro. H1 “Join us in The Studio..." Helvetica Neue ~30px weight 700. En página About: h1 “Welcome to Eleven Madison Park” en nobel (serif/display light) 36px weight 300, body EB Garamond ~19px weight 400, line-height generoso ~30px. Mezcla editorial clásica.
- Botones: casi todos links de texto plain (radius 0, bg transparent, padding mínimo, weight 300). “Skip to Content” es filled navy rgb(21, 50, 92) con padding generoso. “Book on Resy” y “Reserve” como texto. No pills filled primary ni CTAs gigantes.
- Colores: fondo blanco puro rgb(255,255,255), texto negro rgb(0,0,0). Acento navy oscuro para skip/accessibility. Alto contraste, paleta mínima, poca saturación.
- Espaciado: limpio y funcional, aire suficiente. Imágenes (chef Daniel Humm en cocina, entrance del restaurante, logos) con border-radius 0, box-shadow none. Fotografía de proceso y lugar real, no close-ups de platos en hero.
- Menú: no publicado online. Texto explícito: “Due to the hyper-seasonal nature of our menu, all courses are subject to change. As such, we are unable to share our food menus online.” Ofrece tasting menu dining room + bar tasting + à la carte snacks en bar. Horas detalladas, walk-ins en bar.
- Copy: concreto y operativo. Ubicación overlooking Madison Square Park, base de edificio Art Deco, partnership con Magic Farms (produce exclusivo Upstate NY), opción plant-based, bar abierto a walk-ins. Tono directo, no slogans de “experience”.
- Móvil: “Open Menu” hamburger, estructura se mantiene, info práctica (address, phone, Resy) accesible.

### 5-6 patrones concretos útiles para webs anti-IA
1. **Menú no publicado + explicación honesta**: “unable to share our food menus online” por naturaleza hyper-seasonal. Señala exclusividad y cambio real, evita menús AI inventados o PDFs estáticos.
2. **Tipografía mixta light display + Garamond body**: nobel weight 300 para h1, EB Garamond para párrafos. Sensación de carta de fine dining o editorial clásico, no sans geométrica moderna.
3. **Fotografía de proceso y arquitectura real, sin adornos**: chef en cocina, entrance del edificio. Radius 0, shadow none. Comunica el lugar y el chef, no food-porn perfecto.
4. **Info práctica first + CTA de texto**: address, phone, horas y “Book on Resy” como link plain. La restricción visual prioriza la claridad operativa.
5. **Paleta blanco + negro + navy mínimo**: fondo puro, texto negro, acento solo en accesibilidad. Alto contraste, cero gradientes o pills. Se siente hecho por humanos que priorizan el contenido real.
6. **Copy local y operativo concreto**: Magic Farms partnership, Art Deco building, bar walk-ins vs dining reservations, plant-based option. Detalles verificables, no “unforgettable journey”.

**Nota**: sitio Squarespace, limpio y funcional. Fuentes elegantes pero legibles. Ideal como referencia para restaurantes premium que comunican exclusividad a través de la restricción (no mostrar menú) y la honestidad operativa, en lugar de UI “moderna” o storytelling vacío.
