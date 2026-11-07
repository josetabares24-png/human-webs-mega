# Learning Log - Restaurantes

Observaciones de sitios reales para extraer patrones útiles en webs anti-IA. Cada entrada es específica y honesta sobre lo visto.

## Canlis (Seattle) - Premium, familiar, fine dining desde 1950
**URL:** https://canlis.com/
**Tipo:** Premium independiente / institucional familiar
**Fecha de observación:** 2026-11-07

### Estructura y CTAs
- Nav minimalista en la parte superior: "RESERVE" a la izquierda, "PRIVATE EVENTS" y "EXPLORE" a la derecha. No hay menú hamburger prominente en desktop.
- Hero principal es una foto grande del edificio con el nombre "CANLIS" superpuesto en tipografía grande y ligera (casi translúcida).
- CTA principal es texto "RESERVE" / "Make a reservation", no un botón filled.
- Secciones posteriores: invitación narrativa, historia del espacio, prensa, y footer con teléfono, dirección, Instagram.
- Muy poco clutter. El foco es la atmósfera y la reserva.

### Tipografía
- Títulos (h1/h2): GTSectraBook (serif custom / display), ~20px, peso 400, color rgb(39, 35, 32). No bold agresivo.
- Nav y CTAs: HelveticaNeue-Medium, ~11.7px, peso 400, uppercase, letter-spacing 0.65px, color oscuro.
- Cuerpo: mezcla, algunos párrafos en la misma sans uppercase con tracking, otros en el serif. Base del body ~13px.
- Contraste serif para narrativa/display vs sans para UI. Sin display gigante ni weights extremos.

### Botones
- No hay botones filled ni outline clásicos. El CTA principal es un link de texto transparente, sin borde, sin sombra, radio 5px (casi invisible).
- Estilo: texto plano, uppercase, pequeño, tracking positivo. Contraste bajo-medio con el fondo crema.
- En reservas y eventos se mantienen como enlaces textuales.

### Colores
- Fondo principal: rgb(239, 240, 235) — crema suave / off-white cálido, no blanco puro.
- Texto: rgb(39, 35, 32) para títulos, rgb(82, 82, 82) para algunos body. Tonos marrón-gris apagados.
- Sin acentos brillantes (no rojo, no azul digital). Paleta muy restringida, casi monocromática cálida.
- Fotos aportan el color y el contraste.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, mucho aire entre secciones. Sin cards densas ni grids perfectos de 3 columnas iguales.
- Bordes: mínimos o inexistentes en UI. Sin box-shadow en botones, nav o contenedores principales.
- Fotografía: de alta calidad, real. Edificio al anochecer con árboles, interiores con luz natural, platos servidos con manos vertiendo salsa (imperfectos y vivos), piano en lounge, bodega de vinos. No stock genérico. Composición editorial, no hero de comida aislada perfecta.

### Menú, móvil y copy
- Menú: experiencia de 6 platos donde el comensal elige 3. Texto descriptivo, sin precios visibles en la página principal del menú (tasting style). Secciones One/Two/Three.
- Copy: hospitalario y narrativo. "Seattle's family-owned fine dining, since 1950." "The opportunity to meet and serve you is one we don’t take lightly..." Habla de historia, cuidado, invitación. Nada de "Book now and save!" o lenguaje de marketing agresivo.
- Móvil: no se forzó resize completo en la sesión, pero la estructura sugiere que el nav colapsa y las fotos se adaptan. El CTA de reserva permanece prioritario.

### Patrones concretos útiles para webs anti-IA (4-6)
1. **CTA de texto puro con tracking** — Usar links uppercase con letter-spacing en vez de botones filled redondeados o con sombra. Parece más editorial y menos "template SaaS".
2. **Fondo crema cálido + texto marrón-gris** — Evitar blanco puro #fff y negro #000. El off-white rgb(239,240,235) y texto rgb(39,35,32) dan sensación de papel impreso y menos digital.
3. **Serif custom ligero para títulos (peso 400) + sans solo en UI** — GTSectraBook a 20px weight 400. No display bold gigante. Contraste de familias sin exagerar.
4. **Fotografía atmosférica con presencia humana y contexto** — Manos sirviendo, edificio real, piano, bodega. Evitar platos perfectos aislados o stock de stock.
5. **Copy de invitación histórica específica** — Nombrar años, familia, arquitectos, en vez de "experiencia única" genérica. La especificidad humana reduce el tono de IA.
6. **Ausencia de sombras y cards** — Sin box-shadow, sin recuadros con borde sutil. El aire y la tipografía crean la jerarquía. Menos "diseño de dashboard".

Estos patrones priorizan restricción, materialidad y especificidad sobre la pulidez perfecta típica de generadores de IA.

## Padella (Londres) - Casual pasta bar, pequeño grupo independiente
**URL:** https://www.padella.co/
**Tipo:** Casual / pasta bar independiente (3 locales: Borough Market, Shoreditch, Soho)
**Fecha de observación:** 2026-11-07

### Estructura y CTAs
- Homepage es esencialmente el menú del día: fecha actual en heading ("SATURDAY 7TH NOVEMBER"), luego secciones (Antipasti, Pasta, etc.) con platos + precios en texto.
- Arriba: video autoplay muted (timelapse de cocina/proceso), logo, "Scroll down".
- Links a los 3 locales con fotos reales de cada uno (Borough Market, Shoreditch, Soho).
- Nav simple con Vouchers, Careers, locales. CTA de reserva o booking no es el hero; el menú lo es. Links textuales uppercase.
- Footer con about breve y link a Trullo (otro restaurante del grupo).

### Tipografía
- Body: "Roboto Condensed", sans-serif, ~16px.
- Headings (locales, fecha, secciones de menú): Oswald, sans-serif. Fecha ~40px weight 500, secciones ~26px weight 400, locales ~30px weight 700.
- Todo sans condensed/display. Letter-spacing ligero negativo en algunos headings (-0.25px). Uppercase en nav y algunos links.
- Alto contraste: blanco sobre negro.

### Botones
- No hay botones filled, outline o con sombra. Todo son links de texto.
- Estilo: uppercase, color blanco, sin border, sin padding excesivo, border-radius 0, box-shadow none.
- "Scroll down", nombres de locales, Vouchers/Careers como texto plano.

### Colores
- Fondo: rgb(0, 0, 0) — negro puro.
- Texto: rgb(255, 255, 255) — blanco puro.
- Paleta estrictamente monocromática. Sin acentos de color. El contraste viene de las fotos de locales y el video.
- Overlay o elementos con rgba(0,0,0,0.96) en algunos casos.

### Espaciado, bordes, sombras, fotografía
- Espaciado funcional, menú en lista vertical clara. Sin cards, sin grids de fotos de platos.
- Sin bordes visibles en UI, sin box-shadow en ningún elemento principal.
- Fotografía: fotos reales de las fachadas/interiores de cada local (no stock). Video timelapse de la cocina/proceso de pasta. No hay close-ups perfectos de platos en el hero; el menú es texto.
- Las imágenes de locales están asociadas a links, no como grid decorativo.

### Menú, móvil y copy
- Menú: texto completo con precios (ej. "Nocellara olives £4", "Tagliarini with dried chilli, garlic & pangrattato £9.5"). Secciones claras. Fecha del día visible, da sensación de actualizado.
- Copy: breve y personal. "Padella is the culmination of Tim and Jordan’s long held dream to open a pasta bar serving fresh, hand rolled pasta with delicious sauces and fillings inspired by their trips to Italy." Menciona fundadores y origen concreto.
- Móvil: hay hamburger ("Toggle navigation"). La estructura de lista de menú se adapta bien a vertical. Video y fotos de locales se reordenan.

### Patrones concretos útiles para webs anti-IA (5)
1. **Menú como homepage con fecha y precios en texto** — Listar platos reales con precios y la fecha del día en vez de grids de fotos perfectas o hero de comida. Se siente operativo y actual, menos "landing de plantilla".
2. **Monocromo negro puro + blanco puro** — Evitar paletas pasteles o acentos digitales. El alto contraste y la ausencia de color dan un look de menú impreso o pizarra, menos generativo.
3. **Sans condensed (Oswald) para headings + Roboto Condensed body** — Tipografía utilitaria condensed en vez de serifs elegantes o display ultra-bold. Se siente de restaurante de barrio, no de agencia.
4. **Video de proceso real (timelapse cocina) + fotos de locales específicos** — Mostrar el trabajo y los espacios reales en lugar de food porn aislado. La especificidad del local reduce el tono genérico de IA.
5. **Links de texto puro uppercase sin botones** — Continuar el patrón de Canlis pero en alto contraste. Evita el look de botones redondeados filled típico de templates modernos/IA.
6. **Copy personal corto con nombres propios** — Nombrar a Tim y Jordan y sus viajes a Italia. La anécdota concreta humana corta el copy genérico de "experiencia única".

Estos patrones priorizan funcionalidad directa del menú, restricción cromática extrema y especificidad operativa sobre la pulidez visual perfecta.

## Eleven Madison Park (Nueva York) - Premium fine dining, 3 Michelin
**URL:** https://www.elevenmadisonpark.com/
**Tipo:** Premium independiente / fine dining (Chef Daniel Humm)
**Fecha de observación:** 2026-11-07

### Estructura y CTAs
- Homepage muy minimalista: imagen de logo/edificio, botón "Open Menu" (hamburger), promo breve para "The Studio at Clemente Bar" con texto y "Reserve", y "Book on Resy".
- Nav no visible en desktop; se abre con "Open Menu". Links a Reservations, About, Events, Stories, Shop, etc.
- Dirección, teléfono y links de footer (Wine List, FAQs, Gift Cards, Clemente Bar, Press, Careers, Contact) presentes.
- Foco en reserva y narrativa corta; no hay grid de platos o secciones densas.
- CTAs principales son links de texto o "Book on Resy".

### Tipografía
- Títulos (h1 en About): "nobel" (sans/display light), ~36px, peso 300, color negro. Ligero, no bold.
- Cuerpo (párrafos): "EB Garamond" (serif), ~19px, peso 400, line-height ~1.6, color negro.
- Nav/links: uppercase, peso 300, ~17px, sin tracking extremo.
- Contraste claro: sans light para headings, serif clásico para body. Se siente editorial/libro, no digital moderno.

### Botones
- La mayoría son links de texto transparentes: bg rgba(0,0,0,0), color negro, border-radius 0, box-shadow none, padding mínimo, uppercase, peso 300.
- Un elemento "Skip to Content" tiene bg navy rgb(21,50,92) y texto blanco, pero es accesibilidad, no CTA principal.
- Estilo: filled casi ausente. Text-link o texto plano. Sin outline, sin sombras, sin radios redondeados grandes.
- "Book on Resy" y "Reserve" siguen el patrón de texto.

### Colores
- Fondo principal: rgb(255,255,255) — blanco puro.
- Texto: rgb(0,0,0) — negro puro.
- Acento ocasional: navy oscuro rgb(21,50,92) solo en elementos de accesibilidad.
- Paleta extremadamente restringida. Las fotos aportan todo el color y vida (platos, granja, interiores).
- Alto contraste, limpio, casi monocromático.

### Espaciado, bordes, sombras, fotografía
- Espaciado amplio, páginas limpias sin clutter. Párrafos con aire.
- Sin box-shadow visibles, sin bordes en UI principal, sin cards.
- Fotografía: real y específica. Alts como "Scallop Marinated with Kohlrabi and Hazelnut", "Inside one of the tunnels at Magic Farms", "The dining room team meeting before opening for service", "White wine being poured", "Lettuces growing at Magic Farms". No stock genérico; contexto de granja, proceso y platos concretos.
- Imágenes grandes, editoriales.

### Menú, móvil y copy
- Menú: no se comparte online. "Due to the hyper-seasonal nature of our menu, all courses are subject to change. As such, we are unable to share our food menus online." Honesto y específico.
- Copy: factual y concreto. Nombra a Chef Daniel Humm, Magic Farms, Art Deco building, Madison Square Park, tasting menus con opción plant-based, horas exactas. Sin hipérbole de marketing.
- Móvil: hamburger "Open Menu" presente. Estructura se adapta; el CTA de reserva permanece.

### Patrones concretos útiles para webs anti-IA (6)
1. **Serif body (EB Garamond ~19px) + sans light weight 300 para headings** — Contraste editorial de libro. Evita sans modernos bold o display exagerados típicos de IA/templates.
2. **Links de texto puro uppercase peso 300, sin botones filled** — Continuación del patrón de Canlis/Padella. Se siente institucional/editorial, no comercial SaaS.
3. **Blanco puro + negro puro con fotos que cargan el color** — Restricción extrema de paleta. Las imágenes reales hacen el trabajo visual; no necesita acentos digitales.
4. **Fotografía con captions/alts hiper-específicos de plato/granja/proceso** — "Scallop Marinated with Kohlrabi and Hazelnut" o túneles de Magic Farms. La especificidad concreta reduce el genérico de IA.
5. **Ausencia deliberada de menú online + nota de estacionalidad** — Honestidad operativa. En vez de forzar un menú estático o fotos de platos, se prioriza la reserva y la narrativa de la granja.
6. **Copy factual con nombres propios y detalles de lugar** — Daniel Humm, Magic Farms, Art Deco, horas exactas. Nada de "experiencia culinaria única" o lenguaje inflado.

Estos patrones refuerzan restricción tipográfica, honestidad operativa y especificidad de imagen/copy frente a la pulidez genérica de generadores de IA.

## Cutler (Fitzroy, Melbourne) - Premium independiente, modern Australian
**URL:** https://www.cutlerandco.com.au/
**Tipo:** Premium independiente / fine-to-casual dining (Chef Andrew McConnell, Trader House)
**Fecha de observación:** 2026-11-07

### Estructura y CTAs
- Homepage: hamburger "Open Menu", logo, sidebar izquierda con "MAKE A RESERVATION", LOCATION (dirección exacta), OPENING HOURS, CONTACT (teléfono y email).
- Hero / bienvenida: texto narrativo sobre la apertura en 2009 en antigua fábrica metalúrgica en Fitzroy. Fotos de interiores y platos a continuación (grid de imágenes con "View fullsize").
- Nav (al abrir menú): RESERVATIONS, MENU, DRINKS, PRIVATE DINING, GIFT VOUCHERS, JOURNAL, SUNDAYS AT CUTLER.
- CTA principal: "MAKE A RESERVATION" como link de texto repetido. Footer con Instagram, Careers, Privacy, Contact, Trader House, y reconocimiento a Traditional Custodians (Wurundjeri Woi Wurrung).
- Foco operativo: info práctica (horas, dirección, reserva) + narrativa corta + fotos reales. Sin clutter de marketing.

### Tipografía
- Headings / labels (MAKE A RESERVATION, LOCATION, secciones menú): "Persona, \"Archivo Narrow\", sans-serif", ~16px, peso 700, color rgb(34, 34, 34). Condensed-ish, bold pero no display gigante.
- Body / menú: "Caslon, garamond-premier-pro, serif", ~16px, peso 400, line-height 24px. Serif clásico para descripciones y menú.
- Nav links: misma sans Persona/Archivo Narrow, ~15px, peso 700, uppercase.
- Contraste: sans bold/condensed para UI y labels, serif para contenido narrativo y platos. Se siente editorial pero funcional.

### Botones
- Todos los CTAs son links de texto: background transparent (rgba(0,0,0,0)), color rgb(34,34,34), border none, border-radius 0, box-shadow none.
- "MAKE A RESERVATION", "Open Menu", items de nav: texto plano uppercase o capitalizado, peso 700 en sans.
- Sin filled, sin outline, sin radios redondeados, sin sombras. Estilo link editorial.

### Colores
- Fondo: rgb(255, 255, 255) — blanco puro.
- Texto: rgb(34, 34, 34) — casi negro, ligeramente suave.
- Paleta restringida. Fotos de interiores (mármol verde, ladrillo, cuero) y platos aportan el color y textura.
- Alto contraste, limpio. Sin acentos digitales brillantes.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso en homepage: texto de bienvenida, luego grid de fotos. Menú en lista vertical clara con precios.
- Sin box-shadow, sin bordes en elementos UI, sin cards.
- Fotografía: reales del espacio (interiores con mármol verde, ladrillo blanco, booths de cuero) y platos. Alts/nombres de archivo específicos (Cutler_hdavison..., BRAT_CUTLER...). No stock genérico; contexto del local industrial reconvertido.
- Imágenes grandes, editoriales, con opción "View fullsize".

### Menú, móvil y copy
- Menú: texto completo a la carta con precios (ej. "Homemade FOCACCIA 12", "CUTLER DONUTS, crème fraîche, chives & Yarra Valley salmon roe 36", "Wood-grilled 1 kg DRY-AGED RIB EYE ... 240"). Secciones: APPETISERS, SEASONAL SEAFOOD, ENTRÉES, CUTLER CLASSICS, MAIN COURSES, ACCOMPANIMENTS, DESSERT, CHEESE.
- Nota de estacionalidad y compromiso con produce australiano / small-scale farmers. Menciona "Prime CHEESEBURGER 38" (shift a formato más flexible).
- Copy: específico y evolutivo. "Andrew McConnell opened Cutler & Co. in 2009 in a former metal works factory in Fitzroy, Melbourne’s first suburb." Ethos: "refined, simple, hospitable dining". Reconocimiento a Traditional Custodians. Sin hipérbole.
- Móvil: hamburger "Open Menu" presente. Estructura se adapta; info práctica y reserva prioritarias.

### Patrones concretos útiles para webs anti-IA (5)
1. **Sans condensed/bold (Archivo Narrow / Persona peso 700) para labels y nav + serif (Caslon/Garamond) para body y menú** — Contraste utilitario-editorial. Evita display ultra-bold o sans modernos uniformes de IA.
2. **Links de texto puro peso 700, radius 0, sin sombras ni filled** — Continuación del patrón de Canlis/Padella/EMP pero con más peso en la sans. Se siente de menú impreso o carta de restaurante, no de template SaaS.
3. **Menú a la carta completo en texto con precios y notas de produce/estacionalidad** — Lista operativa real (focaccia 12, rib eye 240, burger 38). La especificidad de platos y orígenes reduce el genérico de "experiencia culinaria".
4. **Fotografía de interiores arquitectónicos y platos con contexto local** — Mármol, ladrillo de fábrica, booths. No food porn aislado perfecto; el espacio industrial reconvertido es protagonista.
5. **Copy con historia concreta + reconocimiento de lugar/Traditional Custodians** — Año 2009, fábrica metalúrgica, Fitzroy, Wurundjeri. Detalles humanos y territoriales específicos cortan el tono de IA genérico.
6. **Info práctica prioritaria (horas, dirección, contacto) junto a narrativa corta** — No hero marketing; la utilidad operativa + una historia de evolución del local.

Estos patrones priorizan funcionalidad de menú real, tipografía mixta editorial-utilitaria y especificidad de lugar/historia sobre la pulidez digital perfecta.

## Alinea (Chicago) - Premium independiente, modernist / molecular
**URL:** https://www.alinearestaurant.com/
**Tipo:** Premium independiente / fine dining modernist (Chef Grant Achatz)
**Fecha de observación:** 2026-11-07

### Estructura y CTAs
- Homepage: hamburger "Open Menu", logo "Alinea", secciones con mailing list, "Alinea Dining Room", descripción de las tres experiencias (Kitchen Table, The Gallery, The Salon), y "GALLERY >".
- Nav (al abrir): Gallery, Private Events, The Alinea Group, Careers, Gift Cards, FAQ, BOOK A TABLE.
- CTA principal: "BOOK A TABLE" como botón filled en gris apagado. También mailing list con "Subscribe".
- Footer con dirección exacta (1723 N Halsted St, Chicago), emails (hospitality@, press@), careers.
- Foco en las experiencias distintas y reserva; no hay menú de platos ni grid denso de comida. Página limpia con poco clutter.

### Tipografía
- Títulos (h1/h2/h3): "Cormorant Garamond" (serif), h1 ~44.8px peso 500, h2 ~33px peso 500, h3 ~27.5px peso 500. Elegante, no ultra-bold.
- Body / párrafos: "adobe-garamond-pro" (serif), ~17.9px, peso 300, line-height ~32px. Clásico y legible.
- Nav/links y algunos botones: uppercase, peso 500.
- Todo serif. Se siente de carta de lujo impresa.

### Botones
- "BOOK A TABLE": filled, background rgb(168, 166, 161) (gris beige apagado), color negro, border-radius 0, box-shadow none, padding moderado.
- Estilo sutil, material, no brillante. Otros links texto puro.

### Colores
- Fondo: blanco puro.
- Texto: negro.
- Acento: taupe/gris apagado para el botón. Fotos aportan color.

### Espaciado, bordes, sombras, fotografía
- Espaciado amplio, secciones con aire. No cards densas ni grids perfectos.
- Sin box-shadow, bordes mínimos o none, radius 0 en UI.
- Fotografía: reales y específicas de Alinea (alts/nombres como 20160518_gilsonAlinea_0011.jpg, platos con composiciones artísticas, interiores). No stock genérico; contexto de la experiencia modernist. Imágenes grandes, editoriales.

### Menú, móvil y copy
- Menú: no se lista online de forma estática. Se enfoca en las tres experiencias (Kitchen Table, Gallery, Salon) con descripciones. FAQ detalla reservas, dietary, wine pairings (precios como Standard $195, Reserve $285, Alinea $475), service charge 20%, dress code, etc. Honesto y operativo.
- Copy: específico y factual. Nombra a chef Grant Achatz, Lincoln Park, las tres experiencias, awards (Michelin, James Beard), mailing list para ticket releases. Sin hipérbole vacía; habla de "innovative approach to modernist cuisine" pero anclado en hechos y nombres.
- Móvil: hamburger "Open Menu" presente. Estructura se adapta; CTAs de reserva y mailing prioritarios. Tipografía serif se mantiene legible.

### Patrones concretos útiles para webs anti-IA (6)
1. **Serif clásico dual (Cormorant Garamond headings peso 500 + Adobe Garamond Pro body peso 300)** — Todo serif, elegante y editorial. Evita sans modernos o display bold típicos de IA/templates. Se siente de menú impreso de lujo.
2. **Botón filled en gris beige apagado (rgb(168,166,161)), radius 0, sin sombra** — CTA visible pero sutil y material, no el azul/rojo brillante redondeado de SaaS. Contraste alto pero tono neutro.
3. **Enfoque en experiencias nombradas (Kitchen Table, Gallery, Salon) en vez de menú de platos** — Especificidad de formato de dining. Reduce el genérico de "tasting menu"; prioriza la reserva y la narrativa de las opciones.
4. **Fotografía artística real de platos/espacios con nombres de archivo/alts específicos** — Composiciones modernist reales, no stock perfecto. El contexto de Alinea (y no food porn genérico) corta el tono de IA.
5. **Copy factual con nombres propios, awards y detalles operativos (FAQ de reservas, pairings, service charge)** — Grant Achatz, fechas de ticket release, precios concretos. Honestidad y especificidad sobre marketing inflado.
6. **Ausencia de sombras, radios y clutter + blanco puro con acento taupe** — Restricción visual extrema. La tipografía serif y las fotos hacen el trabajo; menos "diseño digital perfecto".

Estos patrones priorizan elegancia tipográfica clásica, sutilidad de CTA material y especificidad de experiencias/operación sobre la pulidez genérica y colorida de generadores de IA.

## St. JOHN (Londres) - Independiente British, nose-to-tail, institucional casual
**URL:** https://stjohnrestaurant.com/
**Tipo:** Independiente / British (grupo pequeño: Smithfield, Bread and Wine, Marylebone, Neal’s Yard + bakery/wines)
**Fecha de observación:** 2026-11-07

### Estructura y CTAs
- Homepage: hamburger "MENU", logo, botón "RESERVATIONS". Secciones narrativas: Restaurants (con historia de 1994), Bakeries, About (nose-to-tail), Wines, Shop. Links "LEARN MORE".
- Footer con teléfono (020 7251 0848), emails, Instagram, Facebook, newsletter signup.
- En página de restaurants: listado de locales con direcciones exactas y descripciones.
- Menú (Smithfield): actualizado diariamente, secciones Lunch/Supper/Bar, lista de texto con precios, opción Download PDF. Nota: "Our menus are updated daily. Menus will not be updated until 11.00am for lunch and 5.00pm for supper."
- Foco en historia, locales específicos y reserva. Poco clutter; narrativa + utilidad operativa.

### Tipografía
- Todo en serif custom: body "Adigi Times", georgiapro, Georgia, Times, serif. ~16-18px, peso 400-700.
- Headings grandes: en restaurants ~80px, peso 700, uppercase.
- Links y CTAs: uppercase, peso 700, ~14-18px.
- Consistente serif en toda la UI y contenido. Se siente de libro/menú impreso, no digital moderno.

### Botones
- CTAs principales ("LEARN MORE", "RESERVATIONS", nav items): links de texto, background transparent (rgba(0,0,0,0)), color negro, border-radius 0, box-shadow none, border none.
- Estilo: uppercase bold, sin filled, sin outline, sin radios. Texto plano.
- Cookie banner tiene botones filled (third-party), pero UI propia es text-link.

### Colores
- Fondo: rgb(255, 255, 255) — blanco puro.
- Texto: rgb(0, 0, 0) — negro puro.
- Paleta estrictamente monocromática. Sin acentos de color. Las fotos (locales, Instagram feed) aportan el color y vida.
- Alto contraste, limpio, editorial.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso, secciones con aire. Listas verticales claras.
- Sin box-shadow, sin bordes en UI, radius 0.
- Fotografía: reales de los locales (fachadas, interiores, proceso). Instagram feed integrado con captions específicas. No stock genérico ni grids de food porn perfectos. Contexto de espacios reales (Smithfield, etc.).

### Menú, móvil y copy
- Menú: lista de texto completa con precios y fecha exacta (ej. "Saturday 7th November 2026", "Roast Bone Marrow and Parsley Salad 16.50", "Ox Liver, Bacon and Mash 27.00"). Secciones claras, Download PDF. Actualizado diariamente.
- Copy: muy específico e histórico. "St. JOHN began quietly, cooking what we enjoyed for those who enjoyed what we do." "Founded on nose-to-tail eating and honest cooking." Menciona 1994, antigua smokehouse en Smithfield, Fergus Henderson, Trevor, locales concretos, "gentle rigour". Nada de hype genérico.
- Móvil: hamburger "MENU" presente. Estructura se adapta bien; menú de texto prioriza lectura vertical.

### Patrones concretos útiles para webs anti-IA (6)
1. **Serif custom consistente en todo (Adigi Times / Georgia, headings 80px uppercase peso 700)** — Tipografía de libro/menú impreso. Evita sans modernos o display mixto típico de templates/IA. Se siente institucional y humano.
2. **Menú diario en texto puro con precios, fecha exacta y Download PDF** — Lista operativa real (Bone Marrow 16.50, etc.) actualizada. Reduce el genérico de grids fotográficos o menús estáticos de plantilla.
3. **Links de texto puro uppercase bold, radius 0, sin filled/sombras** — Continuación del patrón de Canlis/Padella/EMP/Cutler. Se siente de carta de restaurante o libro, no de SaaS comercial.
4. **Copy histórico ultra-específico con nombres, años y filosofía concreta** — 1994, smokehouse, Fergus Henderson, nose-to-tail, "gentle rigour", locales exactos. La anécdota humana detallada corta el tono de IA genérico.
5. **Blanco puro + negro puro con fotos de espacios reales e Instagram contextual** — Restricción cromática extrema. Las imágenes de los locales reales hacen el trabajo visual; no necesita acentos digitales.
6. **Info práctica prioritaria (direcciones exactas, horas, teléfono, menú diario) integrada en narrativa** — Utilidad operativa + historia. Menos hero marketing, más "esto es lo que hacemos y dónde".

Estos patrones priorizan tipografía editorial clásica, honestidad de menú diario y especificidad histórica/operativa sobre la pulidez visual perfecta y colorida típica de generadores de IA.
