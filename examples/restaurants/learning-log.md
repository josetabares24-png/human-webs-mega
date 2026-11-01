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
