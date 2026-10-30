# Learning log — webs de restaurantes

Registro de observaciones reales. Cada entrada viene de una revisión con navegador.

## 2026-10-30 — Bon Bouquet Café (thehungryfamily.com)

**Tipo**: Brunch lúdico. Elegido por el usuario. [Ficha con evidencia](../../design-library/references/bon-bouquet-cafe/2026-10-30/reference.json); [receta separada](../../design-library/recipes/playful-brunch.json).

**Captura**: Inicio, concepto y collage a 1280×800; inicio y collage a 390×844; primera página de carta en visor PDF. Seis capturas originales guardadas e inspeccionadas. Se descartaron y sobrescribieron muestras que todavía estaban en escritorio al intentar cambiar el viewport móvil. Las aceptadas confirman scrollWidth 1265 / 375 frente a viewport 1280 / 390. Sin envío de formularios ni pedido.

**Tipografía**: CSS Gastromond, fallback sans-serif; archivo identificado como Gastromond Test Regular, PostScript Gastromond-Regular. Peso CSS 400 y tracking normal. Hero escritorio 110px / 88px; móvil 52px / 41.6px. Secciones 100px / 110px; móvil 40px / 44px. Subtítulos 56px / 56px; móvil 26px / 26px. Cuerpo Clash Grotesk Light 300, 20px / 28px / tracking 0.6px; móvil 14px / 19.6px / tracking 0.42px. CTA Clash Grotesk Semibold 600, 24px / 24px / tracking 1.68px; móvil 20px / 20px / 1.4px. Solo metadatos guardados, no archivos tipográficos.

**Botones y recuadros**: CTA pill, radio 50px, borde 0, sin sombra, padding 20px 30px, altura 64px escritorio / 60px móvil. Fondo muestreado como degradado verde #00966c a menta #7dd7be (90°) o lila #efe7fd (30°); no se reconstruyen tiempos de cambio. Sellos de navegación dentro de contenedor fixed, 130px escritorio / 64px móvil. Fotos del collage con mask-image de estrella/festón; muestra con radio computado 500px y sombra blanca 0 0 10px. Copiar solo el radio no reproduce la silueta.

**Color y composición**: Verde #00966c, rosa #ffcade y blanco; cian #bdfbff y verde profundo #004f3c medidos en contenedores. Portada con carrusel y titular que cambia con flip; fotos reales, sellos y formas rosas. Concepto editorial a dos columnas en escritorio. Collage de quince imágenes, incluida la acción central, con máscaras repetidas y posiciones variadas. Separadores ondulados y continuidad de motivos entre lugar, Instagram y contacto.

**Carta real**: /menuBB abre otra pestaña y resuelve a /wp-content/uploads/2025/09/MENUBB10.09.pdf. Visor con cuatro páginas; solo se inspecciona la primera. No afirmar carta HTML ni vigencia de precios. Para sitios del cliente, la receta propone HTML y PDF secundario.

**Reutilización y comprobaciones**: Pill, máscara, degradado y resplandor forman aquí una identidad coherente; no son defectos universales ni pasan a otros casos automáticamente. Usar ilustraciones y fotografía propias. Los cuatro enlaces de anclas muestreados tienen texto vacío, aria-label ausente y alt vacío: darles nombre accesible. Verificar contraste y cuerpo móvil de 14px/300; la receta propone 16px/24px/400. Evitar superposición de navegación sobre títulos como en Concept y probar reducción de movimiento. Sin auditoría completa de accesibilidad, teclado ni formularios.

## 2026-10-30 — Carbone New York (carbonenewyork.com)

**Tipo**: Premium teatral. [Ficha y evidencia](../../design-library/references/carbone-new-york/2026-10-30/reference.json); [receta original separada](../../design-library/recipes/premium-theatrical.json).

**Observación en vivo**: inicio, introducción editorial, carta y navegación móvil en IAB. Capturas originales guardadas e inspeccionadas. Muestras normalizadas a 1280×800 y 390×844; la captura exploratoria del bloque About se etiqueta sin viewport normalizado. Cookies rechazadas. Sin formularios enviados ni reserva.

**Tipografía**: títulos visibles en Bourgeois BoldCond, identificada por metadatos OpenType (PostScript Bourgeois-BoldCond), 32px / 38px / CSS 700 / mayúsculas / tracking normal. CTA 20px / 28px / CSS 400 sobre el mismo archivo BoldCond. Cuerpo Hoefler Txt Roman (PostScript HoeflerTxt-Roman), 18px / 26.4px en escritorio y 16px / 24px en móvil, peso 400 y tracking normal. CSS usa aliases de Next y fallback Arial con métricas ajustadas; no son los nombres reales. Hoefler Bold también identificado. No se guardan binarios; no se ha verificado una licencia de reutilización.

**Botón**: reserva marfil #fff9f0 sobre texto marino #0a1a29, borde computado 0.8px marino, radio 2px, sin sombra, padding 10px 16px 6px, altura escritorio 45.6px. La reserva inferior móvil mide 64px; no está dentro del header. Header sticky de 80px escritorio / 54px móvil, marino y sin sombra.

**Color y composición**: marino #0a1a29, marfil #fff9f0. Foto real de servicio a sangre y rótulo geográfico breve; el H1 semántico está visualmente oculto, no es un titular grande. Bloques de lectura marfil sobre marino, fotografía ancha y pares imagen/texto. Sin card genérica de tres columnas ni sombra decorativa. Body base marfil; no confundirlo con el fondo de los bloques.

**Interacción**: navegación móvil de pantalla completa con enlaces serif y acciones al pie. La carta usa pestañas de escritorio y combobox personalizado móvil (botón de 44px, no select nativo). Al elegir cena, URL ?menu=dinner; contenido HTML con 7 listas y 44 ítems, sin imágenes dentro del panel. No se copian platos ni precios al catálogo. scrollWidth 1265 con viewport 1280 y 375 con viewport 390: sin overflow horizontal en esas muestras.

**Patrón reutilizable**: identidad por contraste de serif de lectura y sans condensada, dos colores, fotografía del negocio, narrativa factual y carta HTML. La receta conserva ese sistema con contenido propio y fallbacks explícitos; todavía no es una implementación renderizada ni una réplica validada. La barra móvil requiere espacio inferior y comprobación de foco/oclusiones antes de usarse.

**Anti-IA y límites**: no convertir la fotografía en hero con eslogan genérico, no mezclar este CTA con otros casos y no presentar fotos, logo o fuentes de Carbone como assets del cliente. No se ha auditado accesibilidad completa ni el flujo de reservas. La ficha distingue medidas, limitaciones y propuestas para que el siguiente intento no convierta suposiciones en hechos.

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

## 2026-10-30 — Cutler & Co. (cutlerandco.com.au)

**Tipo**: Premium / independiente (fine dining Modern Australian en Fitzroy, Melbourne; Andrew McConnell; antiguo metal works factory).

**Lo que se ve**:
- Home con sidebar izquierda: “MAKE A RESERVATION”, LOCATION (55–57 Gertrude St.), OPENING HOURS (Wed–Sat from 5 pm, Sun from 12 pm), CONTACT. Foto grande del interior (mesas blancas, plantas, ladrillo visto).
- Texto de bienvenida: Andrew McConnell opened Cutler & Co. in 2009 in a former metal works factory… ethos refined, simple, hospitable dining… evolution from neighbourhood and city.
- Grid de fotos reales del espacio y mesa. Footer con Instagram, Careers, Privacy, Contact, Trader House y acknowledgement a Wurundjeri Woi Wurrung.
- Menú en HTML: secciones APPETISERS, SEASONAL SEAFOOD, ENTRÉES, CUTLER CLASSICS, MAIN COURSES. Platos concretos con precios (Homemade FOCACCIA 12, CUTLER DONUTS… 36, Wood-grilled 1 kg DRY-AGED RIB EYE … 240, Prime CHEESEBURGER 38).
- Reservas: info práctica (hold space for walk-ins, 10% surcharge on Sundays), “MARK THE OCCASION” con gifts (Champagne, blooms, chocolate délice).

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Mix. Nav y CTAs en Persona / “Archivo Narrow” (sans, uppercase, peso 700, letter-spacing ~1.1px, ~15-16px). Cuerpo y ítems de menú/precios en Caslon / garamond-premier-pro (serif, ~16px, peso 400). Body base sans-serif 17px. Sensación editorial + funcional.
- **Botones**: “MAKE A RESERVATION” es texto puro: uppercase sans, peso 700, fondo transparente, sin borde, radius 0, color rgb(34,34,34), letter-spacing 1.12px. No filled, no outline, no pill.
- **Colores**: Fondo principal blanco (rgb(255,255,255)), algo de crema suave (rgb(247,247,237)). Texto rgb(34,34,34) o negro. Acentos oscuros para skip/overlays. Paleta restringida, alto contraste, sin colores de marca brillantes.
- **Espaciado, bordes, sombras, fotografía**: Limpio y generoso, sin box-shadows ni cards pesadas. Fotografía real del comedor (ladrillo, mesas, plantas, staff/diners) y platos; no stock genérico. En móvil (390px) no overflow.

**Patrones útiles**:
1. Mix serif clásico (Caslon/Garamond) para cuerpo y menú + sans condensed uppercase (Archivo Narrow) para nav/CTAs → se siente como carta de restaurante con UI clara, no template.
2. CTA de reserva como texto uppercase sin chrome de botón (radius 0, sin fill/borde) → discreto y menos “app”.
3. Menú HTML plano con nombres específicos y precios (rib eye de 1 kg “on the menu from day one”, cheeseburger al lado de suckling pig) → como carta impresa, no cards de plato.
4. Copy anclado al lugar y al tiempo: former metal works factory, 16 años de evolución, farms concretos (Ramarro, Corner Inlet), acknowledgement local de Traditional Custodians.
5. Info operativa práctica integrada sin hype: walk-ins, surcharge 10% Sundays, gifts for occasions.
6. Fotografía de espacio real y mesa sin overlays marketing ni captions vacíos.

**Anti-IA**: No suena a briefing ni a tema de Squarespace genérico (aunque está en Squarespace). Los platos concretos, la historia del edificio, el mix tipográfico y los CTAs de texto lo hacen sentir un restaurante real de Melbourne que creció, no una plantilla de fine dining. Eso es lo copiable para anti-IA.
