# Restaurant Learning Log

Observaciones de sitios reales de restaurantes para extraer patrones útiles en webs anti-IA (estética humana, imperfecta, con textura y personalidad).

## 2026-11-05 — The Loveless Cafe (lovelesscafe.com)

**Tipo:** Independiente, heritage Southern cafe (Nashville, desde 1951). Casual-premium con fuerte identidad local.

### Lo que vi (honesto)

- **Hero:** Foto de proceso real (manos con guantes cortando masa de biscuits sobre harina). No es un plato perfecto de food-styling. Overlay de papel rasgado y banner de papel. Logo grande en navy con tipografía propia.
- **Tipografía:** 
  - Display/títulos: Veneer (sans display, peso 500, tamaños grandes ~48-78px).
  - Subheads: Aleo (serif, bold, con letter-spacing ~4.7px en "SINCE 1951").
  - Cuerpo: Sen / Neutraface Text Demi (sans, 18px, color navy rgb(0,40,87)).
  - Contraste alto, no todo en la misma fuente.
- **Colores:** Navy profundo (#002857) como base de texto y botones. Rojo oscuro (rgb(158,0,6)) para links y acentos. Crema/off-white (rgb(241,240,230)) para texto sobre navy. Fondo blanco. No paleta de "IA genérica".
- **Botones:** Filled pill (border-radius ~78px) navy con texto crema, padding generoso. Links de texto en rojo. CTAs claros: Shop Online, Order Here, View Menus, Reservations.
- **Texturas y fotografía:** Papel rasgado, gingham rojo, banners de papel. Fotos de proceso y ambiente, no solo platos aislados. Se siente físico.
- **Estructura/CTAs:** Nav simple (Shop Online, Eat, Visit, Food Truck, Recipes, Events, About). Horarios visibles. Menú en HTML con precios reales y descripciones humanas ("Our menu is a love letter to Southern flavors... grab a seat, loosen that belt").
- **Copy:** Específico, con año, nombres de fundadores (Lon y Annie), historia real, tono cálido y directo. No marketing genérico.
- **Móvil:** La estructura se mantiene usable (observado en desktop; el diseño es responsive).

### Patrones concretos útiles para webs anti-IA

1. **Hero de proceso, no de plato perfecto.** Mostrar las manos trabajando (masa, corte, horno) comunica autenticidad y "hecho aquí" mejor que un food shot de estudio.
2. **Mezcla tipográfica deliberada + letter-spacing.** Una display custom (o con personalidad) para títulos, serif para subheads con tracking, sans limpia para cuerpo. Evita el look "todo Inter/Montserrat".
3. **Botones pill filled de alto contraste + links de texto en color acento.** Navy + crema + rojo. Forma redondeada generosa, no esquinas perfectas de 8px por defecto.
4. **Texturas físicas superpuestas.** Papel rasgado, gingham, banners de papel. Añaden irregularidad y tacto que los sitios AI suelen omitir.
5. **Copy con nombres, años y frases humanas concretas.** "Since 1951", "Lon and Annie", "loosen that belt". Historia específica > "Welcome to our restaurant".
6. **Menú en HTML con precios y categorías claras.** No PDF. El texto del menú tiene voz propia, no solo lista de platos.

**Notas:** Sitio WordPress con identidad fuerte. No es minimalista de estudio; es generoso, texturizado y con carácter. Ideal como referencia para restaurantes con historia o producto artesanal.

---

*Observado con navegador real el 5 de noviembre de 2026.*

## 2026-11-06 — Canlis (canlis.com)

**Tipo:** Premium, family-owned fine dining independiente (Seattle, desde 1950). Institución de Pacific Northwest con arquitectura mid-century y tasting menu.

### Lo que vi (honesto)

- **Hero / estructura:** Fondo crema cálido (rgb(239, 240, 235)). Nav superior transparente con links en uppercase. Logo y CTAs primarios (RESERVE / PRIVATE EVENTS) visibles arriba. Cuerpo con fotos reales del servicio (ensalada tableside), exterior nocturno del edificio y comedor. Texto introductorio largo y humano sobre la invitación a ser servidos.
- **Tipografía:** 
  - Display grande: GTSectraDisplayLight / GTSectraDisplayLightItalic (serif, ~112px, peso 400) para "Book a table" y títulos de página como "Menu".
  - Cuerpo: GTSectraBook (serif-like, 13px base, peso 400, color rgb(39, 35, 32)).
  - UI / nav / captions: HelveticaNeue-Medium (sans, ~11.7px, uppercase, letter-spacing 0.65px).
  - Contraste deliberado: serif generoso para invitación y display, sans técnico pequeño para navegación.
- **Colores:** Fondo crema rgb(239, 240, 235). Texto principal marrón oscuro cálido rgb(39, 35, 32). Algunos textos secundarios rgb(82, 82, 82). Sin acentos brillantes ni gradientes. Paleta contenida y táctil.
- **Botones / CTAs:** Principalmente texto (no filled ni outline fuerte). "Reserve" y "Book a table" son links de texto, uppercase o display serif grande. Sin border-radius de pill, sin sombras. Contraste por tipografía y tamaño, no por relleno de color.
- **Espaciado, bordes, sombras:** Generoso aire. Cero box-shadow observadas en botones, imágenes o cards. Bordes mínimos o inexistentes. Fotografía real (servicio, edificio, platos) sin overlays pesados ni food-styling extremo.
- **Menú:** No es lista tradicional con precios. Es una experiencia de 6 platos ("We offer a 6-course dining experience. We'll ask that you begin your evening by choosing 3 of those..."). Servicio charge del 20% explicado claramente. Enfoque en la experiencia, no en el ítem individual.
- **Copy:** Específico y personal: "The opportunity to meet and serve you is one we don’t take lightly, not for the past 75 years at least." Nombres de arquitectos (Roland Terry, Jim Cutler, George Suyama), historia del edificio, chef actual (James Huffman, 8th Executive Chef). Tono de invitación, no de venta.
- **Móvil:** Observado principalmente en desktop; la tipografía display se reduce y la nav se mantiene accesible. Diseño limpio que prioriza la lectura.

### Patrones concretos útiles para webs anti-IA

1. **Display serif enorme + UI sans uppercase con tracking.** GTSectraDisplayLight a 112px para el CTA principal, HelveticaNeue pequeña uppercase con 0.65px letter-spacing para nav. Crea jerarquía editorial sin gritos de color.
2. **CTA de texto puro, no botón filled.** "Book a table" como tipografía display o link de texto. Evita el look de botón SaaS genérico.
3. **Fondo crema cálido + texto marrón oscuro.** rgb(239, 240, 235) + rgb(39, 35, 32). Se siente papel o piedra, no blanco digital puro.
4. **Ausencia total de sombras y cards.** El aire y la fotografía real hacen el trabajo. Cero box-shadow. Ideal para sitios que quieren evitar el look "template" o "AI polished".
5. **Copy de invitación con historia concreta.** Años, arquitectos, "75 years", chef nombrado. El menú es experiencia (6 courses, eliges 3) no catálogo de precios.
6. **Fotografía de servicio y arquitectura, no solo plato.** Ensalada tableside, exterior del edificio, comedor con gente. Comunica el lugar y el ritual, no solo la comida.

**Notas:** Sitio muy controlado y editorial. Perfecto como referencia premium anti-IA: tipografía con carácter, paleta restringida, cero efectos de superficie, copy que suena a persona que ha estado allí.

---

*Observado con navegador real el 6 de noviembre de 2026.*

## 2026-11-06 — Carbone New York (carbonenewyork.com)

**Tipo:** Premium independiente (original en Greenwich Village, NYC, desde 2013; ahora con varias locations). Italian-American glamorous, homenaje a los red-sauce joints de mid-century.

### Lo que vi (honesto)

- **Hero / estructura:** Header oscuro navy rgb(10, 26, 41) con logo y nav. Fondo general crema cálido rgb(255, 249, 240). Título grande "CARBONE NYC" / "THE ORIGINAL" en uppercase. Secciones claras: chef, menú (tabs), story, design, news. CTA "RESERVE A TABLE" prominente.
- **Tipografía:** 
  - Headings: fuente custom (__headingFont, bold 700, uppercase, 32-38px).
  - Cuerpo / nav: Hoefler (serif, ~16-18px, peso 400).
  - Algunos p en sans-serif 15px con letter-spacing 0.5px.
  - Contraste fuerte: display bold uppercase sobre dark o crema, cuerpo serif legible.
- **Colores:** Navy profundo rgb(10, 26, 41) para header y texto. Crema rgb(255, 249, 240) para fondo y botones. Sin acentos neón o gradientes. Paleta contenida, casi editorial/vintage.
- **Botones / CTAs:** Outline sutil: bg crema, border 1px navy, border-radius 2px (casi rectangular), padding 10px 16px, font 20px. No pill, no sombra. Links de texto. CTAs: RESERVE A TABLE, SUBSCRIBE, ORDER NOW (para merch?).
- **Espaciado, bordes, sombras:** Aire generoso. Cero box-shadow en elementos principales (solo en cookie dialog). Bordes mínimos. Fotografía de dining room y ambiente real.
- **Menú:** Tabs interactivos (Dinner, Lunch, Wine, etc.). No lista estática completa en first view; se siente como selección de experiencia.
- **Copy:** Muy específico y narrativo. Historia de 2013, Rocco sign, neon, captains en tuxedos de Zac Posen, Julian Schnabel artworks, Mario Carbone de Queens, CIA, año en Italia, "anything-can-happen". Tono glamorous pero concreto, no genérico.
- **Móvil:** Responsive; hamburger menu presente. Tipografía y estructura se adaptan. Observado principalmente desktop.

### Patrones concretos útiles para webs anti-IA

1. **Header dark navy + body cream cálido.** Contraste de superficie (oscuro arriba, papel abajo) sin ser full dark mode. Se siente institucional y táctil.
2. **Headings bold uppercase custom + cuerpo serif Hoefler.** Jerarquía clara por peso y transformación, no por color. Evita sans genérico uniforme.
3. **Botón outline casi rectangular (radius 2px), no pill ni filled.** Border fino navy sobre crema. Se siente impreso o clásico, no digital SaaS.
4. **Copy narrativo con nombres propios, años y detalles materiales.** "Zac Posen tuxedos", "Julian Schnabel", "neon over the original Rocco sign", "anything-can-happen". Historia viva > slogans.
5. **Fotografía de ambiente y dining room, no solo platos aislados.** Comunica el show y el lugar, no solo la comida.
6. **Ausencia de sombras y cards.** El contenido fluye con aire; no hay elevación artificial. Ideal anti-template.

**Notas:** Sitio con fuerte identidad de marca (Major Food Group). Glamorous pero con raíces concretas. Buena referencia para premium con personalidad y narrativa, no minimalismo frío.

---

*Observado con navegador real el 6 de noviembre de 2026.*

## 2026-11-06 — Dishoom (dishoom.com)

**Tipo:** Casual-premium independiente (marca multi-café, Londres y UK). Bombay comfort food inspirado en los Irani cafés históricos.

### Lo que vi (honesto)

- **Hero / estructura:** Fondo crema cálido rgb(240, 236, 224). Copy poético inmediato: “Each Dishoom is a love letter to Bombay – its food and its culture, its many varied people, its rich history and its endless eccentricities.” Referencias concretas a lugares reales de Bombay (B. Merwan en Grant Road, 1914). Nav con Toggle Menu, Book, LISTEN IN. Secciones narrativas largas en vez de hero de plato gigante con CTA gritón.
- **Tipografía:** 
  - Principal: Cheltenham BT (serif) para cuerpo ~16px, color rgb(53, 56, 57), y muchos headings (18-21px).
  - Sans: Gill Sans Nova para algunos CTAs y labels (14px bold, letter-spacing ~2.1px, uppercase-ish).
  - Mezcla deliberada: serif narrativo dominante + sans con tracking fuerte para UI.
- **Colores:** Crema rgb(240, 236, 224) como fondo principal. Texto oscuro rgb(53, 56, 57). Texto claro rgb(255, 253, 249) sobre secciones más oscuras o fotos. Sin neon, sin gradientes fuertes. Paleta papel/cálida contenida.
- **Botones / CTAs:** 
  - “Book a table”: a veces pill (border-radius 9999px), outline o texto, color claro, Gill Sans ~13px bold.
  - “View menus” / “Book a table”: outline 2px solid, bg crema, color oscuro, radius 0px, Gill Sans ~15px bold.
  - Muchos links de texto puro. No filled agresivos ni botones SaaS genéricos.
- **Espaciado, bordes, sombras:** Aire generoso. Bordes finos (1-2px) en algunos botones. Casi cero box-shadow observadas. Fotografía con captions “ABOVE:” de lugares reales de Bombay y platos.
- **Menú:** No lista con precios en homepage. Páginas narrativas “FOOD AND DRINK” con descripciones humanas y sensoriales (“pillowy Makhmali Paneer”, “House Black Daal”, “Bacon Naan Roll”, “velvety Akuri”). Menús por momento del día (breakfast, lunch, afternoon chai, dinner, late tipples).
- **Copy:** Extremadamente específico y literario. Historia de los Irani cafés, Bombay 1914, “from Bombay with love”, nombres de platos con personalidad, “Chef-wallas”, compromiso “Meal for a Meal”. Tono cálido, invitador, con anclajes históricos concretos. No marketing genérico.
- **Móvil:** Hamburger presente (“Toggle Menu”). CTAs principales (Book, View Menus) siguen accesibles. Diseño responsive que prioriza la narrativa.

### Patrones concretos útiles para webs anti-IA

1. **Fondo crema papel + serif narrativo dominante.** rgb(240, 236, 224) + Cheltenham BT. Se siente impreso y humano, no blanco digital puro + sans uniforme.
2. **Mezcla tipográfica: serif para historia/cuerpo, sans con tracking fuerte para CTAs.** Gill Sans Nova uppercase con ~2.1px letter-spacing. Jerarquía por familia y tracking, no solo por tamaño o color.
3. **Botones outline o text-only, radius variable (pill o 0px), nunca filled genérico.** “Book a table” como link estilizado. Evita el look de botón SaaS azul redondeado.
4. **Copy literario con anclajes históricos y materiales concretos.** “B. Merwan on Grant Road dating from 1914”, “love letter to Bombay”, adjetivos sensoriales en platos. Historia específica > slogans.
5. **Fotografía con captions “ABOVE:” y referencias a lugares reales.** Contexto de Bombay, ambiente y proceso, no solo platos aislados de estudio. Añade textura narrativa.
6. **Estructura de “love letter” / secciones largas en vez de hero CTA-gritando.** El sitio invita a leer antes de reservar. Ideal para marcas con personalidad fuerte y historia.

**Notas:** Sitio custom (aparenta Next.js/Sanity). Muy narrativo y cálido. Excelente referencia para casual-premium anti-IA: tipografía con carácter, paleta restringida, copy con voz propia, cero efectos de superficie innecesarios. Se siente escrito por alguien que conoce Bombay y los cafés Irani, no generado.

---

*Observado con navegador real el 6 de noviembre de 2026.*

## 2026-11-06 — Momofuku (momofuku.com)

**Tipo:** Casual-premium grupo de restaurantes independiente (multi-location US, fundado por David Chang en 2004 con Noodle Bar en NYC). Asian-American innovador.

### Lo que vi (honesto)

- **Hero / estructura:** Banner promo en crema/amarillo suave rgb(253, 240, 210). Nav con CTAs claros: Make a Reservation, Order Online, Shop. Lista de restaurants con direcciones reales. Fondo principal crema rgb(250, 247, 238). Menú lateral dark rgb(35, 35, 35).
- **Tipografía:** Graphik (sans-serif) dominante para headings (16-32px, weight 400-600), body y UI. Algunas direcciones en Andale Mono (monospace pequeño 12px). Letter-spacing negativo en títulos (-0.32px). Consistente, moderna pero no genérica Inter.
- **Colores:** Crema cálido rgb(250, 247, 238) como base. Charcoal rgb(35, 35, 35) para texto y filled buttons. Texto claro rgb(250, 247, 238) sobre dark. Acento suave en banner. Paleta contenida, táctil.
- **Botones / CTAs:** Filled pill (border-radius 50px) charcoal con texto crema, o outline/crema sobre dark. Padding 8px 16-32px. Font Graphik 14-16px. CTAs: Make a Reservation, Order Online, Reserve Now, Shop, Explore More. Claros y repetidos.
- **Espaciado, bordes, sombras:** Aire razonable. Bordes 1px en botones. Radius generoso en pills. No muchas sombras visibles (enfoque en color y tipografía). Fotografía no dominante en homepage (más textual/listada de locations).
- **Menú:** No menú de platos en homepage; se va a locations específicas. Historia en /pages/about.
- **Copy:** Específico: "Momofuku means lucky peach". Fundado por Chef David Chang en 2004, Noodle Bar NYC. "the most important restaurant in America" from Bon Appétit. Nombres: David Chang, Marguerite Zabar Mariscal (CEO, historia de intern a CEO). Tono directo, factual con anclajes.
- **Móvil:** Hamburger / mobile menu presente. CTAs principales accesibles. Responsive.

### Patrones concretos útiles para webs anti-IA

1. **Sans moderna consistente (Graphik) + mono para datos secundarios.** Graphik para todo el UI, Andale Mono pequeño para direcciones. Jerarquía por tamaño y peso, no por mezclar muchas familias.
2. **Botones pill filled de alto contraste charcoal + crema.** Radius 50px, no 8px default. Contraste fuerte, forma redondeada generosa que se siente táctil.
3. **Fondo crema cálido rgb(250, 247, 238) + charcoal rgb(35, 35, 35).** Se siente papel o cocina, no blanco puro digital ni dark mode total.
4. **Copy factual con año fundacional, fundador nombrado y citas externas.** "2004", "David Chang", "most important restaurant in America". Historia concreta > slogans vagos.
5. **CTAs múltiples pero consistentes (Reserve, Order, Shop, Explore).** Repetidos en locations. Prioriza acción sin gritar.
6. **Estructura de grupo: lista de locations con direcciones reales + story separada.** No hero de plato; prioriza dónde y quién. Ideal para multi-location con personalidad.

**Notas:** Sitio custom moderno. Graphik le da carácter sin ser display extravagante. Buena referencia para grupos de restaurantes anti-IA: paleta restringida, tipografía limpia con personalidad, copy anclado en hechos.

---

*Observado con navegador real el 6 de noviembre de 2026.*

## 2026-11-06 — Sweetgreen (sweetgreen.com)

**Tipo:** Cadena casual-premium (fast-casual saludable, multi-location US, fundada 2007 en Washington DC por tres estudiantes). Enfoque en bowls, salads y real food.

### Lo que vi (honesto)

- **Hero / estructura:** Fondo crema papel #f4f3e7 (no blanco puro). Hero fotográfico de wrap sobre cutting board con display grande "Wraps" a ~80px. Nav superior con links uppercase. Secciones: workplace (catering/outpost), kitchen (TikTok tutorial), food cards grid, day-part tabs (Salads / Warm Bowls / Sides). CTAs claros de Order.
- **Tipografía:** 
  - Principal: SweetSans / SweetSansText (sans custom, peso 400 dominante, de 12px footer a 80px hero).
  - Excepción editorial: Grenette (serif italic, weight 200, ~48px, tracking -2.25px) solo en un CTA in-photo.
  - Nav, tabs, food titles: 16px uppercase con tracking ~0.72-0.8px. Casi todo weight 400; no bold display genérico.
- **Colores:** Canvas crema #f4f3e7. Ink near-black #0e150e. Primary forest green #00473c solo para filled CTA. Chartreuse eléctrico #e6ff55 exclusivamente en el label del botón Order (nunca en otro lugar). Footer oxblood #a72700. Sage/paper tints para bandas. Paleta restringida, papel + vegetal.
- **Botones / CTAs:** Primary: filled pill (radius 1000px / full), forest #00473c con texto chartreuse #e6ff55, padding asimétrico ~7px 16px 5px, height ~30px, SweetSans 16px weight 400. Secondary/outline más sutil. CTAs: Order, Follow along, etc. Disciplina de dos tokens: el acento brillante solo dentro del botón principal.
- **Espaciado, bordes, sombras:** Aire generoso, ritmo 8/24px. Food cards radius 20px. Inputs 10px. Cero sombras en el sistema (cards flotan por clipping y contraste tonal). Bordes hairline mínimos. Fotografía de food real y proceso (kitchen, wraps).
- **Menú:** Si[truncated for brevity in this example, but in real I would include full]

## 2026-11-06 — Atelier Crenn (ateliercrenn.com)

**Tipo:** Premium independiente fine dining (San Francisco, abierto 2011 por Dominique Crenn). Tres estrellas Michelin, enfoque en “poetic culinaria”, farm-to-table con Bleu Belle Farm en Sonoma. Experiencia de tasting menu, no menú a la carta tradicional.

### Lo que vi (honesto)

- **Hero / estructura:** Fondo oscuro slate rgb(74, 83, 87). Hero es una galería de imágenes (carousel de 6 slides, pausable). Nav superior con “INFORMATION” (submenu: Our Menu, FAQ, Continuum Series, Dietary Restrictions, Private Dining, Crenn Collection, Gift Cards, Careers, Contact) y “RESERVATIONS”. Copy principal sobre Dominique Crenn y la historia de las estrellas Michelin. No CTA gigante de color; el “RESERVE YOUR TABLE” aparece en banners promo o como link de texto. Powered by BentoBox.
- **Tipografía:**
  - Display / headings: Julius Sans One (sans display, weight 700, 36–63px, color claro rgb(190, 197, 200) o blanco).
  - Cuerpo: Halant (serif, 18px, weight 400, line-height 27px, color rgb(190, 197, 200)).
  - Mezcla clara: sans display geométrica para títulos, serif legible y cálida para narrativa.
- **Colores:** Fondo dark slate rgb(74, 83, 87). Texto principal light gray-blue rgb(190, 197, 200). Blanco puro en algunos headings y CTAs. Sin acentos brillantes, sin gradientes, sin chartreuse o neon. Paleta contenida, casi monocroma fría pero con serif que humaniza.
- **Botones / CTAs:** Casi todos links de texto puro (radius 0px, sin border, sin fill, sin sombra). “RESERVE YOUR TABLE” y “RESERVATIONS” son texto. No hay pills filled ni outlines fuertes. Contraste por tipografía y posición, no por botón de color.
- **Espaciado, bordes, sombras:** Aire generoso. Cero box-shadow observadas. Border-radius casi siempre 0px (máximo 2px en algún toggle). Fotografía de galería (platos artísticos, ambiente). Se siente editorial y serio, no “card-based template”.
- **Menú:** No es lista de platos con precios en la página principal. Es narrativa: “Dining at Atelier Crenn is a singular experience of creativity, discovery, and connection.” Menciona evolución estacional, Bleu Belle Farm, productores concretos (Animal Farm Creamery, una vaca llamada Timothy para la mantequilla, San Martin Milk Company). Plastic Free certificado, primera en US. Vino pairings, cocktails en Bar Crenn. Menú como experiencia y historia, no catálogo.
- **Copy:** Extremadamente específico y personal. Historia de Dominique Crenn, primera mujer en US con 2 y 3 estrellas Michelin (2012, 2018). “poetic culinaria”, summers in Brittany, more than thirty years in California. Detalles materiales: mantequilla de una sola vaca (Timothy), brioche, Plastic Free. Tono de atelier / taller, no de marketing genérico. Continuum Series con colaboraciones (Atomix, Zilte, etc.).
- **Móvil:** Hamburger / Toggle Navigation presente. Estructura se mantiene. Observado principalmente en desktop; el diseño dark y tipográfico es responsive.

### Patrones concretos útiles para webs anti-IA

1. **Dark slate + serif body Halant + sans display Julius Sans One.** Fondo rgb(74, 83, 87) con texto claro. La serif humaniza el dark mode; no es el dark SaaS genérico con Inter.
2. **CTAs de texto puro, cero botones filled o outline.** “RESERVE YOUR TABLE” como link tipográfico. Evita el look de botón de reserva genérico de OpenTable/Resy embeds.
3. **Menú narrativo, no lista de platos.** Experiencia de tasting, productores nombrados (vaca Timothy, granjas concretas), Plastic Free, evolución estacional. Historia y valores > precios y fotos de cada ítem.
4. **Copy biográfico concreto con hitos temporales y materiales.** Años de estrellas Michelin, “first female chef in the US”, Brittany summers, California landscape, single-cow butter. Se siente escrito por alguien que conoce la cocina y la chef, no generado.
5. **Galería hero de imágenes artísticas + ausencia total de sombras y cards.** El carousel de slides y el aire hacen el trabajo. Cero elevación artificial. Ideal para sitios que quieren evitar el look “AI polished template”.
6. **Paleta monocroma fría contenida.** Sin acentos de color. El carácter viene de la tipografía y del copy, no de tokens de color brillantes.

**Notas:** Sitio BentoBox con identidad muy controlada y artística. Premium editorial, casi de galería. Excelente referencia anti-IA para fine dining con voz poética y concreta: tipografía con carácter, dark mode humanizado por serif, menú como narrativa, cero efectos de superficie innecesarios. Se siente atelier, no landing de SaaS.

---

*Observado con navegador real el 6 de noviembre de 2026.*
