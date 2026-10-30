# Learning log — webs de restaurantes

Registro de observaciones reales. Cada entrada viene de una revisión con navegador.

**Foco obligatorio en cada investigación**:
- Tipografía (serif/sans, pesos, tamaños, títulos vs cuerpo)
- Botones (forma, color, contraste, estilo filled/outline/texto, tamaño)
- Colores (paleta, acentos, fondos, contraste)
- Espaciado, bordes, sombras, fotografía
- Estructura, CTAs, menú, móvil y copy

## 2026-10-30 — Dishoom (dishoom.com)

**Tipo**: Cadena de restaurantes indios (inspirados en Bombay), múltiples locales.

**Lo que se ve**:
- CTA “Book a table” muy presente (botón y en secciones).
- Narrativa fuerte de marca: “Each Dishoom is a love letter to Bombay…”, citas, historia de la ciudad, fotos con captions (“ABOVE: The legendary B. Merwan…”).
- Menús organizados por momento del día (breakfast, lunch, dinner, late tipples).
- Lista de cafés y permit rooms por ciudad.
- Secciones de store, recipes, awards.
- Copy cálido y específico, no genérico.

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Cuerpo y títulos en serif (cheltenhamBT / fallback Georgia). Títulos con peso 400 (no bold extremo), tamaño moderado (~24px en el quote principal). Botones y navegación en sans (gill-sans-nova).
- **Botones**: “Book a table” es outline pill (border-radius 9999px), borde 1px blanco, texto blanco, fondo transparente. Estilo elegante y discreto, no filled agresivo.
- **Colores**: Fondo principal crema cálido (rgb(240, 236, 224)). Texto oscuro (rgb(53, 56, 57)). Acentos en negro y blancos suaves. Contraste alto pero paleta suave y de papel, no digital brillante.
- **Fotografía**: Imágenes con captions contextuales (“ABOVE: The legendary B. Merwan on Bombay’s Grant Road dating from 1914”, “RIGHT: Bun (& Brun) Maska”). No stock genérico.

**Patrones útiles**:
1. Narrativa de origen + historia concreta (no “welcome to our restaurant”).
2. CTA de reserva repetido pero integrado en el flujo de explorar menús.
3. Menús por ocasión/momento en vez de solo categorías de comida.
4. Fotografía con contexto y pies de foto que cuentan algo.
5. Voz consistente y con personalidad (se siente escrito por alguien que conoce Bombay).
6. Serif para el texto principal + sans para botones/UI → sensación editorial y humana.
7. Botón outline pill en lugar de filled de alto contraste → más elegante y menos “app”.

**Anti-IA**: El texto no suena a plantilla. Habla de sitios concretos, de chai, de buns, de Grant Road. La tipografía serif y el fondo crema refuerzan que no es un template moderno genérico. Eso es lo que hay que copiar.

## 2026-10-30 — Sweetgreen (sweetgreen.com)

**Tipo**: Casual / QSR saludable (cadena de ensaladas y bowls, EE.UU., enfoque en ingredientes frescos y pedido rápido).

**Lo que se ve**:
- CTA “ORDER” y “ORDER NOW” muy visibles y repetidos.
- Listado de bowls y ensaladas con ingredientes específicos, alérgenos y botones “Order now →”.
- Secciones de ubicaciones (“Where should we open next?”), careers, y productos.
- Fotografía de platos reales (no stock genérico).
- Copy directo y funcional, orientado a conversión.

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Custom sans “SweetSansText” para todo (body 16px, peso 400). Headings también en la misma familia, tamaños modestos. Sensación limpia y contemporánea, no editorial.
- **Botones**: “ORDER” es texto plano (bg transparente, radius 0, color oscuro). Otros CTAs “Order now →” son links de texto. No hay pills filled agresivos en el primer viewport; el estilo es más texto/link que botón de app.
- **Colores**: Fondo crema suave rgb(244, 243, 231). Texto casi negro rgb(14, 21, 14). Paleta natural y restringida, sin acentos brillantes de marca en el hero.
- **Espaciado**: Generoso, sin sombras ni cards pesadas. Layout limpio orientado a escaneo rápido de platos.

**Patrones útiles**:
1. Tipografía custom sans ligera (peso 400) para todo → se siente contemporáneo y humano, no template bold.
2. CTAs como texto/link en lugar de botones filled de alto contraste → menos “app”, más editorial incluso en casual.
3. Fondo crema natural + texto oscuro → calidez sin parecer digital genérico.
4. Menú en HTML con ingredientes y alérgenos claros + “Order now” por plato → conversión práctica sin perder legibilidad.
5. Copy corto y específico (nombres de bowls, ingredientes reales) en vez de marketing vacío.

**Anti-IA**: Aunque es una cadena moderna, evita el look de template SaaS. La tipografía custom ligera, el fondo crema y los CTAs de texto lo hacen más cercano a un local de comida real que a un dashboard de pedido. Útil como contraste con los premium de serif.

## 2026-10-30 — Alinea (alinearestaurant.com)

**Tipo**: Premium / independiente (fine dining modernista en Chicago, Grant Achatz, Michelin 3 estrellas).

**Lo que se ve**:
- Transición de reservas (Tock hasta 31 oct, OpenTable desde 1 nov).
- Tres experiencias distintas: Kitchen Table, The Gallery, The Salon.
- Copy sobre premios (Elite Traveler, World’s 50 Best, Michelin, James Beard) de forma factual.
- Dirección, emails de contacto y mailing list.
- Navegación mínima: Reserve, Mailing List.

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Títulos en Cormorant Garamond (serif, ~45px, peso 500). Reserva y navegación en adobe-garamond-pro (serif). Cuerpo en sans genérico. Sensación editorial y de invitación.
- **Botones**: “RESERVE” es texto plano (fondo transparente, radius 0, sin borde). No hay botones filled u outline. Estilo texto puro.
- **Colores**: Fondo blanco puro (rgb(255,255,255)). Texto negro puro (rgb(0,0,0)). Paleta de papel/impresión, contraste máximo, sin acentos de color.
- **Espaciado**: Limpio y generoso. Sin sombras ni cards. Layout minimalista.

**Patrones útiles**:
1. Tipografía serif display (Cormorant Garamond / Adobe Garamond) para títulos y CTAs → se siente como carta o invitación impresa, no como app.
2. CTAs como texto plano sin fondo ni borde → discreto y editorial, evita el look de botón de conversión.
3. Paleta absoluta blanco + negro → austeridad y legibilidad máxima, no digital brillante.
4. Copy factual sobre premios y experiencias concretas (Kitchen Table, Gallery, Salon) sin hype.
5. Información operativa clara (transición de reservas, direcciones, emails) integrada con la narrativa.

**Anti-IA**: El sitio es la herramienta de un restaurante que no necesita venderse con hero marketing o CTAs brillantes. Habla de experiencias específicas y premios reales. La serif clásica + fondo blanco puro + texto plano lo hacen sentir como una invitación de papel, no como un template. Eso es lo que hay que replicar en premium.

## 2026-10-30 — St. JOHN (stjohnrestaurant.com)

**Tipo**: Independiente (Fergus Henderson y Trevor Gulliver, Smithfield, Londres; varios locales, panadería y bodega). No es cadena ni template de reservas.

**Lo que se ve**:
- Home casi vacía: barra negra de utilidad, logo dibujado (SVG), navegación en palabras (Restaurants, Bakery, Winery, Shop, Contact) y una sola foto ancha de mesa. El pie tiene mailing list, redes, teléfono y emails.
- La ficha de Smithfield no vende: H1 enorme “SMITHFIELD”, dirección con “(Directions)”, “View Menus” y “Make a Reservation”, y horarios en columnas (lunch / supper).
- Menú de lunch en HTML, fechado “Friday 30th October 2026”, platos sin descripción (“Olives 5.00”, “Roast Bone Marrow and Parsley Salad 16.50”, “Eccles Cake and Lancashire Cheese 12.50”). “Download as PDF” es un enlace secundario, no el menú.
- Aviso operativo literal: los menús no se publican hasta las 11.00 (lunch) y las 17.00 (supper).
- Letra pequeña escrita entera: corkage £32 la botella, £42 espumoso o dulce, £64 magnum, £84 magnum de Champagne; cakeage £5 por persona; service charge discrecional del 12.50% repartido al equipo.
- Our Story es una cronología (1993–hoy), no un manifiesto. Frases reales: “Trevor and Fergus are introduced by their mutual olive oil man”, “Local forms of Tumbleweed blow by”, “no plan, no roll out”, “Fergus puts it on the plate and Trevor puts it in the glass.”
- “Make a Reservation” va a `/pages/reservations`. El marcado carga el widget estándar de OpenTable (Smithfield rid 4850, Marylebone 284994, Bread and Wine 4851) detrás de un `<select>` nativo. En esta sesión el iframe del widget no llegó a pintarse: solo se vio el selector de local.
- Copyright del pie sigue diciendo © 2021. La tienda es Shopify (hay “Basket”).

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Una sola familia para todo, UI incluida: Georgia (fallback Times, Times New Roman). Cuerpo 16px, peso 400, tracking 0.96px, negro. Navegación 20px, peso 700, mayúsculas, tracking 1.2px. Barra superior 14px, peso 700, mayúsculas, tracking 0.84px, blanco. H1 de local (“SMITHFIELD”, “LUNCH”, “OUR STORY”) 120px, peso 700, mayúsculas, tracking 7.2px, padding 30px. En móvil el mismo H1 baja a 30px y tracking 1.8px. Años y “THE FOUNDERS” 32px, peso 700, tracking 1.92px. Horarios: el rótulo “LUNCH” es 16px peso 700 (mismo tamaño que el cuerpo; la jerarquía es la negrita y la caja alta). Fecha del menú en itálica 20px. Platos en tabla 16px peso 400. El itálico también está en los nombres del desplegable de menús (18px).
- **Botones**: Rectángulos, radius 0, sin sombra. “View Menus” es outline: borde 1px solid rgb(0,0,0), fondo blanco, texto negro, Georgia 18px peso 400, tracking 1.08px, padding 17px, 318×57 en desktop. “Make a Reservation” es el filled: fondo rgb(0,0,0), texto blanco, mismo borde, mismo tipo, mismo radius. El alta a la mailing list repite ese filled (357×57) y los inputs son outline 1px negro, fondo transparente, radius 0, Georgia 18px, padding 17px. En móvil ambos CTAs miden 310×44 y el tipo baja a 14px. No hay pills ni botones de texto.
- **Colores**: Casi solo negro y blanco. Fondo de página rgb(249, 249, 249); html blanco. Texto rgb(0, 0, 0). Barra superior negro con texto blanco. Sin acento de marca, sin crema editorial, sin gradiente.
- **Espaciado, bordes, sombras, fotografía**: Sin box-shadow en botones, nav ni fotos. La home usa una sola imagen (`restaurant.jpg`, 1300×520) de mesa — asados, médula, pan, ensalada — a sangre, sin caption ni velo. En Smithfield, debajo de los horarios, una foto horizontal del comedor (imgix, encuadre ~1280×540): sala blanca, mesas vacías, sin gente y sin texto encima. El aire está en el H1 gigante y en los márgenes, no en cards.

**Patrones útiles**:
1. Una serif de sistema (Georgia) para títulos, cuerpo, nav, botones y precios. El tracking constante (~0.06em) y las mayúsculas hacen de cartel, no de hero de marketing.
2. Solo dos botones, los dos con radius 0 y sin sombra: outline para mirar el menú, filled negro para reservar. Misma caja, mismo tipo. En móvil crecen a ancho de columna y 44px de alto, pero no se redondean.
3. Menú como carta impresa: tabla HTML de nombre + precio, fecha del día en itálica, cero fotos de plato y cero adjetivos. El PDF existe, pero como descarga, no como página.
4. Copy que solo puede escribir quien estuvo: cronología con años, el “olive oil man”, el tumbleweed de Smithfield, Parkinson, Nose to Tail. Nada de “welcome to our culinary journey”.
5. Normas de casa en frases completas y cifras exactas (corkage, cakeage, 12.50%), no en un FAQ de acordeón genérico.
6. La home no compite con la reserva. La foto ocupa el primer viewport; reservar vive en la barra negra y en la ficha del local. En móvil (390px) no hay overflow y los dos CTAs siguen en la primera pantalla, sin barra sticky.

**Anti-IA**: Se siente un letrero pintado y una carta de impresora, no un tema de restaurante. Rechaza la serif de Google Fonts “elegante”, el pill, la sombra y la foto de plato con overlay. Lo humano está en lo que una plantilla no se atreve a dejar: el copyright viejo, el basket al lado de reservations, platos sin descripción y frases torcidas que no suenan a briefing.
