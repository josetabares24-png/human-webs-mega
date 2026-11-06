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
