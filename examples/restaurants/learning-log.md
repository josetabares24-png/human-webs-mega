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
