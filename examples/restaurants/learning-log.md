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

## 2026-11-06 — Dishoom (casual-premium grupo, Londres / Bombay)

**Sitio**: https://www.dishoom.com/  
**Tipo**: Grupo de restaurantes casual-premium (cafés indios inspirados en Bombay). Múltiples ubicaciones en UK. No fine dining, sino comfort food con carácter.

### Lo que vi (honesto)
- Hero con citas grandes en serif sobre fondo oscuro/crema: “Look across the bay. You’ll be walking and eating your way through the city that lies before you.” y “FROM BOMBAY WITH LOVE”. Navegación superior con links uppercase (Explore, Cafés, Menus, Shop, Festivities) + botón “Book a table”.
- Fondo general crema cálido rgb(240, 236, 224) / #f0ece0, texto oscuro rgb(53, 56, 57). Secciones alternan fondos.
- Tipografía: cheltenhamBT (serif) en casi todo el sitio. H1 ~24px peso 400 con letter-spacing 2.4px, color claro en hero. H2 30px peso 700. Body 16px. Consistente, editorial pero legible, no sans geométrica moderna.
- Botones: mezcla. Uno outline pill (border-radius 9999px, border 1px blanco, padding 6px 10px, peso 700). Otro filled oscuro (bg rgb(53,56,57), border 2px solid mismo, padding 10px 16px, radius 0, peso 700). Nav links como texto uppercase 14px peso 600.
- Copy muy narrativo y concreto: “Each Dishoom is a love letter to Bombay – its food and its culture, its many varied people, its rich history and its endless eccentricities.” Referencias reales a B. Merwan (1914), Bun Maska, Vada Pau, cafés específicos. No slogans genéricos.
- Menú (all-day): texto con precios y descripciones poéticas pero específicas. Ej: “BUNGALOW SPICE ROASTED PINEAPPLE 16.90 — Chef Vikas’s resplendent jewel. Juiciest pineapple wheel marinated in roasted spices... Spicy banana ketchup sparks celestial fires.” Filtros dietarios, especials temporales (Diwali con chef invitado).
- Fotografía: imágenes de lugares reales de Bombay, comida (grills, chai, akuri), con captions tipo “ABOVE: The legendary B. Merwan on Bombay’s Grant Road...”. Sin sombras fuertes ni bordes redondeados en imgs (radius 0, shadow none).
- Cookie banner humano: “The best cookies are for dipping. Preferably into a warming cup of our House Chai. Regrettably, our digital cookies are less tasty than... biscuits.”
- Móvil: menú hamburger “Toggle Menu”, botón “Book” abreviado, estructura de menú se mantiene legible y filtrable.
- Espaciado generoso, poco ruido visual. No gradientes ni glassmorphism.

### 5-6 patrones concretos útiles para webs anti-IA
1. **Fondo crema cálido en lugar de blanco puro**: rgb(240,236,224) da sensación de papel, menú impreso o café antiguo. Evita el look “AI SaaS blanco limpio”.
2. **Serif consistente en todo el sitio (cheltenhamBT)**: títulos y cuerpo misma familia, con pesos y tracking variados. Se siente editorial/human, no system-ui o Inter genérico.
3. **Copy como “carta de amor” a un lugar real**: referencias históricas específicas (Grant Road 1914, Bun Maska, B. Merwan), no “authentic flavors that transport you”. El tono es personal y un poco excéntrico.
4. **Menú con precios + descripciones sensoriales concretas**: “silkiest golden coconut and mustard seed curry sauce, tarty with tamarind”. Precios visibles, especials con fecha. Contrasta con menús AI perfectos o PDFs fríos.
5. **Botones mixtos y no-overstyled**: outline pill + filled cuadrado oscuro. No todos rounded-full filled primary. Nav como texto uppercase simple.
6. **Fotografía con captions de lugar y proceso + banner de cookies ingenioso**: imágenes reales de Bombay y platos, etiquetadas “ABOVE:”. El cookie consent es copy de marca (chai y biscuits), no el genérico “We value your privacy”.

**Nota**: el sitio es de un grupo con varias sedes y tiene ecommerce (store, meal kits), así que no es ultra-minimal. Aun así, la voz, la tipografía serif y el fondo crema lo hacen claramente humano y anti-AI. Buen modelo para restaurantes casuales con personalidad fuerte.

## 2026-11-06 — Cutler (premium / fine dining independiente, Melbourne)

**Sitio**: https://www.cutlerandco.com.au/  
**Tipo**: Premium fine dining independiente (Andrew McConnell / Trader House). Fitzroy, Melbourne. Antigua fábrica metalúrgica. Recientemente simplificó de degustación a à la carte más casual.

### Lo que vi (honesto)
- Homepage: sidebar izquierda con info práctica (Make a Reservation, Location 55–57 Gertrude St., Opening Hours, Contact) en labels uppercase, luego gran foto del comedor (mesas blancas, plantas grandes fiddle-leaf, ladrillo visto, luz natural). Abajo grid de fotos de platos y espacio. Texto de bienvenida narrativo.
- Navegación superior: links de texto uppercase (Reservations, Menu, Drinks, Private Dining, Gift Vouchers, Journal, Sundays at Cutler). Sin botones filled. Logo “CUTLER” serif grande.
- Tipografía mixta: Persona / Archivo Narrow (sans narrow, weight 700, ~15-16px, letter-spacing ~1.1px) para nav, h3 labels y secciones. Caslon / garamond-premier-pro (serif, 16px weight 400) para body y ítems de menú. Muy legible, editorial clásico.
- Botones: casi inexistentes. Todo son links de texto. “SKIP TO CONTENT” es el único con fondo oscuro y padding generoso, pero es accesibilidad. CTAs principales son texto plano.
- Colores: fondo blanco puro rgb(255,255,255), texto #222 / rgb(34,34,34). Alto contraste, cero saturación extra. Sin acentos de color fuerte.
- Espaciado: generoso en vertical, secciones con aire. Imágenes con border-radius 0, box-shadow none. Fotografía real del espacio (comedor, plantas, brick) y platos servidos (no food-porn ultra-procesado).
- Menú (/menu): HTML puro, secciones h2 uppercase (APPETISERS, SEASONAL SEAFOOD, ENTRÉES), platos en serif con precios al lado (Homemade FOCACCIA 12, CUTLER DONUTS… 36). Intro: “Our menu reflects how we like to cook, dine and eat right now. It is spontaneous, thoughtful and modern cooking…”
- Copy: concreto y local. “Andrew McConnell opened Cutler & Co. in 2009 in a former metal works factory in Fitzroy, Melbourne’s first suburb. Behind a glass façade that has reflected the changes around it for over sixteen years… Our ethos – refined, simple, hospitable dining”. Menciona walk-in en bar vs reserva en dining room.
- Móvil: hamburger “Open Menu”, estructura se mantiene, info práctica accesible. Viewport 375 ok.

### 5-6 patrones concretos útiles para webs anti-IA
1. **Info práctica en sidebar / primera pantalla**: location, hours y contact visibles sin scroll, junto a foto del lugar real. El CTA “Make a reservation” es texto, no botón.
2. **Tipografía mixta serif cuerpo + sans narrow bold labels**: Caslon/Garamond para texto corrido y platos, Persona/Archivo Narrow uppercase bold para secciones y nav. Sensación de carta impresa o editorial, no de UI genérica.
3. **Fotografía del espacio real y platos servidos, sin sombras ni radius**: grid de fotos del comedor (plantas, brick, mesas) y platos reales. Cero box-shadow, border-radius 0. Se siente fotografía de restaurante, no stock AI.
4. **Menú HTML con precios visibles y nombres concretos**: no PDF. Platos como “Wood-grilled CORNER INLET CALAMARI, green harissa & fennel 38”. Intro honesta sobre cómo cocinan ahora.
5. **Restricción total de botones filled y adornos**: nav y CTAs son links de texto plain. Blanco + negro, sin gradientes, sin pills, sin sombras. La restricción visual comunica premium y humano.
6. **Copy local y evolutivo**: historia del edificio fábrica, ethos “refined, simple, hospitable”, y nota de que puedes walk-in al bar. Nada de slogans vacíos.

**Nota**: el sitio es Squarespace, limpio y funcional. Fuentes un poco pequeñas en desktop pero legibles. Ideal como referencia para restaurantes premium que priorizan el lugar y la carta real sobre la “experiencia inmersiva” AI.
