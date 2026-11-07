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
