# Learning log — Restaurantes

Observaciones de sitios reales. Cada entrada es un caso concreto visto en el navegador. Sirve para extraer patrones anti-IA.

---

## noma.dk (Noma, Copenhague) — premium independiente

**Fecha de observación:** 2026-11-03  
**URL:** https://noma.dk/  
**Tipo:** Premium independiente (restaurante de referencia mundial, nuevo nórdico).

### Lo que vi (honesto)

- **Estructura y CTAs:** Hero visual con foto a sangre y texto blanco superpuesto. Navegación en mayúsculas/serifs grandes. CTA principal “Book a table” visible. Menú y reservas como enlaces de texto, no botones pesados. Hay waitlist (“Join our Taste Buds 2027”) y tienda de productos. Copy estacional y directo (“Copenhagen 2026-2027”, “We’re coming home”, “Friends,”).
- **Tipografía:** Cuerpo en **Reckless, serif** a 18px / 400, color verde oscuro. Títulos en **Reckless-Neue, serif** (H1 ~33–56px / 500). Navegación y algunos CTAs en la misma serif a ~28px. Solo el banner de cookies usa sans (Roobert). Contraste claro: serif display + serif cuerpo.
- **Botones:** “Book a table” es **outline cuadrado** (border-radius 0, borde 1px blanco, fondo transparente, texto blanco, serif ~28px, padding generoso ~18px 39px, letter-spacing ligero). No es pill ni filled. El único filled es el “Accept all” de cookies (fondo verde oscuro, radio 0, sans).
- **Colores:** Fondo crema `rgb(249, 249, 243)`. Texto `rgb(41, 56, 43)` (verde bosque oscuro). Texto sobre hero en blanco. Sin acentos brillantes ni saturados. Paleta natural y apagada.
- **Espaciado, bordes, sombras, fotografía:** Fotos reales de alta resolución (interiores, platos, productos, temporada). Esquinas rectas. Bordes finos solo donde hace falta. Alguna sombra presente pero no cards con drop-shadow pesado. Aire generoso alrededor del tipo grande.
- **Menú, móvil y copy:** Menú accesible como enlace de texto. En móvil el tipo se reduce pero mantiene serif. Copy humano, temporal y específico (años concretos, “Friends,”, waitlist abierta). No genérico de marketing.

### Patrones concretos útiles para webs anti-IA

1. **Serif en cuerpo y títulos** (Reckless / Reckless-Neue). Evita el look “Inter + system-sans en todo” típico de templates IA. El cuerpo a 18px serif da lectura editorial real.
2. **CTA outline cuadrado con borde fino y padding real**, no pill redondeado filled. El botón “Book a table” se siente deliberado, no de librería de componentes.
3. **Paleta crema + verde bosque oscuro** con blanco solo en overlay. Nada de negro puro sobre blanco puro ni acentos cyan/magenta. Colores que parecen de papel e impresión.
4. **Fotografía específica y estacional** (fotos con fecha o contexto de temporada, no stock genérico de “plato bonito”). Las imágenes tienen peso y lugar.
5. **Navegación y CTAs en serif grande** (~28px) en lugar de sans pequeña o iconos. Da jerarquía humana y menos “app UI”.
6. **Copy temporal y ligeramente personal** (“Copenhagen 2026-2027”, “Friends,”, waitlist con año). Rompe el tono eterno y optimizado de IA.

Estos patrones se pueden reutilizar en sitios independientes o premium que quieran alejarse del look generativo estándar (sans neutra, pills, cards con sombra, stock, copy genérico).

---

## cutlerandco.com.au (Cutler & Co, Fitzroy / Melbourne) — premium independiente

**Fecha de observación:** 2026-11-04  
**URL:** https://www.cutlerandco.com.au/  
**Tipo:** Premium independiente (dining room & bar de Andrew McConnell, en una antigua fábrica de metalurgia en Fitzroy).

### Lo que vi (honesto)

- **Estructura y CTAs:** Layout casi editorial: columna lateral izquierda con “MAKE A RESERVATION”, Location, Opening Hours y Contact (todo texto). Hero/foto grande a la derecha del interior (mesas blancas, plantas, ladrillo). Luego bloque “WELCOME TO CUTLER” con dos columnas de texto sobre la historia (abrió 2009 en antigua metal works) y el ethos. Grid de fotos de platos e interiores. CTAs principales son enlaces de texto “Reservations” y “MAKE A RESERVATION” (repetido), no botones filled. Navegación superior: Reservations, Menu, Drinks, Private Dining, Gift Vouchers, Journal, Sundays at Cutler. Sitio construido en Squarespace.
- **Tipografía:** Cuerpo y bloques de texto en **Caslon / garamond-premier-pro, serif** a ~16px / 400, line-height 24px, color `rgb(34, 34, 34)`. Navegación y labels de CTA en **Persona / Archivo Narrow, sans-serif** bold (700), ~15px, uppercase, letter-spacing generoso (~1–3px). El botón “Open Menu” usa la serif Caslon. Contraste serif cuerpo + sans narrow para nav. No hay H1 grande de display; el logo es imagen.
- **Botones:** Casi no hay botones filled u outline. “MAKE A RESERVATION” y “Reservations” son **enlaces de texto** (uppercase, tracking, sin fondo ni borde, padding mínimo). El único “botón” visible es el hamburger/Open Menu en serif. Nada de pills, radios altos ni filled de acento. Estilo de texto deliberado.
- **Colores:** Fondo blanco puro `rgb(255, 255, 255)`. Texto casi negro `rgb(34, 34, 34)`. Sin acentos de color. Paleta extremadamente neutra (blanco + gris oscuro). Las fotos aportan el color (comida, madera, plantas, ladrillo).
- **Espaciado, bordes, sombras, fotografía:** Padding generoso en secciones (~82px en algunos bloques). Sin box-shadows visibles. Bordes casi inexistentes (0px). Fotografía real y de alta calidad: interiores del local (mesas, cristalería, plantas grandes, ladrillo visto), platos (octopus, steaks, postres), detalles. Grid limpio de imágenes. Esquinas rectas. Aire y ritmo de revista más que de landing moderna.
- **Menú, móvil y copy:** Menú y reservas como enlaces de texto claros. Copy concreto y local: dirección exacta (55–57 Gertrude St., Fitzroy), horarios precisos, historia de la fábrica de 2009, “Walk-in for a bite and drink in our bar, or make a reservation for the dining room.” Tono de hospitalidad refinada, no marketing genérico. En móvil la estructura se adapta (nav colapsa a menu), pero mantiene el contraste serif/sans y el blanco limpio.

### Patrones concretos útiles para webs anti-IA

1. **Serif clásico (Caslon / Garamond) en el cuerpo de texto** a 16px con line-height relajado. Da lectura de libro o carta de restaurante, no de SaaS o template. Contrasta con la sans narrow solo en nav.
2. **CTAs como enlaces de texto uppercase con letter-spacing**, no botones. “MAKE A RESERVATION” se siente como una invitación tipográfica, no como un componente de UI kit.
3. **Paleta blanco puro + texto casi negro**, dejando que las fotografías reales lleven todo el color y la atmósfera. Evita fondos crema forzados o acentos de marca saturados.
4. **Fotografía de lugar y plato específica** (interiores con ladrillo y plantas, platos reales del menú) en grid simple, sin overlays de texto ni cards con sombra. Las imágenes documentan, no decoran genéricamente.
5. **Estructura de columna lateral de información práctica** (dirección, horarios, contacto) junto al visual principal. Prioriza lo útil de forma tipográfica, no en cards o footers genéricos.
6. **Copy anclado a hechos locales y temporales** (año de apertura 2009, antigua metal works factory, horarios exactos, “neighbourhood and city”). Rompe el tono abstracto y eterno típico de generación automática.

Estos patrones (serif cuerpo + text-link CTAs + blanco limpio + fotos de lugar) funcionan especialmente bien para restaurantes premium o independientes que quieren sentir manufactura humana y editorial en lugar de “landing generada”.

---

## mazeltov.hu (Mazel Tov, Budapest) — independiente casual-premium

**Fecha de observación:** 2026-11-04  
**URL:** https://mazeltov.hu/en/  
**Tipo:** Independiente casual-premium (New Jewish Kitchen / Mediterranean en jardín urbano del barrio judío de Pest, abierto desde 2014).

### Lo que vi (honesto)

- **Estructura y CTAs:** Hero con foto del jardín/interior (luces, plantas, gente) y texto superpuesto. Secciones claras: House, Kitchen, Bar, Events, Book, Contact. CTAs principales “RESERVE A TABLE” (filled) repetidos, y “MENU”, “DRINKS”, etc. como botones ligeros. Navegación simple. Copy centrado en el jardín urbano, la comunidad y la cocina.
- **Tipografía:** Títulos grandes en **Old Standard TT, serif** a 42px / 400 (H1 “Budapest's iconic city garden”, “House”, “Kitchen”…). Subtítulos H3 también en la misma serif a 24px. Cuerpo en **Oswald, sans-serif** light (300) a 18–20px, line-height generoso. Contraste serif display clásico + sans condensada ligera. Texto sobre hero en blanco.
- **Botones:** “RESERVE A TABLE” es **filled** con fondo dorado/oliva `rgb(199, 185, 97)`, border-radius 4px (ligeramente redondeado, no pill), padding 12px 24px, texto uppercase con letter-spacing. “MENU” similar pero fondo blanco semi-transparente. No outline puro ni text-link; estilo de botón contenido y material.
- **Colores:** Fondo principal crema cálido `rgb(251, 247, 237)`. Acento dorado/oliva `rgb(199, 185, 97)` en títulos y botones. Algunos títulos en azul suave `rgb(107, 125, 181)`. Texto negro o blanco según fondo. Paleta cálida y apagada, inspirada en el jardín y la luz.
- **Espaciado, bordes, sombras, fotografía:** Fotografía real de alta resolución del jardín cubierto (luces de cuerda, plantas, mesas, gente real comiendo), interiores y detalles. Sin sombras pesadas visibles en cards. Bordes mínimos. Aire generoso. Las fotos documentan el lugar específico (Akácfa Street, Jewish Quarter).
- **Menú, móvil y copy:** Menú accesible vía CTA. Copy concreto y local: “Since 2014”, “old Pest Jewish Quarter”, “A garden area bathed in light during the day”, platos específicos (shakshuka, falafel, hummus), eventos reales (“BBQ Thursdays - every week!”, Guest Chef). Tono de comunidad y oasis urbano, no marketing genérico. En móvil el tipo se adapta manteniendo la serif display.

### Patrones concretos útiles para webs anti-IA

1. **Serif clásico (Old Standard TT) en títulos grandes** a 42px / 400, combinado con sans light (Oswald 300) en cuerpo. Da carácter editorial de carta o revista de barrio, no de template SaaS.
2. **Botones filled con color acento apagado** (dorado/oliva) y radio bajo (4px), no pills ultra-redondeados ni outline genérico. Se sienten de material (papel, metal, jardín) en lugar de UI kit.
3. **Paleta crema cálida + acento dorado-oliva**, con fotos reales del lugar aportando el color vivo. Evita negro puro/blanco puro o acentos saturados de marca digital.
4. **Fotografía de lugar específico y vivo** (jardín con luces y plantas, gente real, no stock de plato aislado). Las imágenes anclan el sitio a un espacio concreto.
5. **Copy anclado a hechos y lugar** (“Since 2014”, Jewish Quarter, platos concretos, eventos semanales). Rompe el tono abstracto y eterno de generación automática.
6. **Estructura por secciones temáticas** (House / Kitchen / Bar / Events) con títulos serif grandes, priorizando atmósfera y comunidad antes que solo menú o reserva.

Estos patrones (serif display + filled material + crema cálida + fotos de jardín real) funcionan bien para restaurantes independientes casuales o de barrio que quieren sentir lugar y hospitalidad humana, alejándose del look generativo estándar.

---

## elevenmadisonpark.com (Eleven Madison Park, Nueva York) — premium independiente

**Fecha de observación:** 2026-11-04  
**URL:** https://www.elevenmadisonpark.com/  
**Tipo:** Premium independiente (fine dining de Chef Daniel Humm, tres estrellas Michelin históricas, en edificio Art Deco frente a Madison Square Park).

### Lo que vi (honesto)

- **Estructura y CTAs:** Homepage bastante minimalista y visual: logo wordmark, fotografía de granja, platos, equipo y cocina. Navegación colapsada en menú hamburger (“Open Menu”). CTA principal visible “Book on Resy” (filled). Otros enlaces de texto: Reservations, About Us, Team, Magic Farms, Events, Stories, Gift Cards. Hay un anuncio/popup sobre The Studio at Clemente Bar (omakase). Footer con dirección, teléfono, newsletter. No es un hero full-bleed con overlay de texto grande; más bien una secuencia de imágenes documentales con texto mínimo.
- **Tipografía:** Cuerpo y párrafos en **EB Garamond, serif** a ~19px / 400, line-height ~30px, color negro. Títulos (H1 “Welcome to Eleven Madison Park”) en **nobel, sans** light (300) a ~36px. Navegación y algunos labels en nobel light ~17px. “Book on Resy” en nobel bold. Inter Tight aparece en elementos de accesibilidad/skip. Contraste serif cuerpo clásico + sans ligera para display.
- **Botones:** El CTA de reserva “Book on Resy” es **filled** con fondo coral/rojo `rgb(252, 72, 55)`, texto blanco, border-radius ~6px, padding horizontal, nobel 700. El resto (Reservations, etc.) son **enlaces de texto** sin fondo ni borde. Hay un botón azul oscuro `rgb(21, 50, 92)` en algunos elementos de skip o nav. No pills altos ni outlines gruesos. Estilo contenido y funcional.
- **Colores:** Fondo blanco puro. Texto negro. Acentos: azul oscuro `rgb(21, 50, 92)` y coral `rgb(252, 72, 55)` solo en CTAs de acción. Overlay oscuro en alguna foto. Paleta neutra; el color vivo viene de las fotografías (verduras, platos, granja).
- **Espaciado, bordes, sombras, fotografía:** Sin box-shadows visibles en cards o bloques (radius 0 o bajo). Bordes mínimos. Fotografía real y específica: Magic Farms (beets, lechugas, túneles), Chef Humm con el farmer Maciek, equipo de comedor antes del servicio, platos nombrados (Tardivo salad, Scallop with kohlrabi, Tonburi), cócteles. Imágenes documentan el proceso y el lugar, no stock genérico. Aire limpio, ritmo de revista de cocina.
- **Menú, móvil y copy:** No hay menú online (explican que es hiperestacional y “we are unable to share our food menus online”). Reservas vía Resy. Copy concreto y factual: edificio Art Deco en East 24th y Madison, partnership con Magic Farms desde 2021, opciones plant-based, horarios precisos, tasting menu vs bar. Stories con actualizaciones reales (truffle dinner, algae oil, farm visit). En móvil el menú se colapsa correctamente. Tono preciso y de hospitalidad, sin superlativos vacíos.

### Patrones concretos útiles para webs anti-IA

1. **Serif clásico (EB Garamond) en el cuerpo** a ~19px con line-height generoso, combinado con sans light (nobel) solo en títulos y nav. Lectura de libro de cocina o carta, no de landing SaaS.
2. **Un solo botón filled de acento funcional** (coral, radio bajo ~6px) para la acción principal (reserva), y el resto como text-links. Evita la proliferación de pills y botones de UI kit.
3. **Fotografía documental específica** de granja, chef con productor, equipo en preparación y platos con nombre y contexto. Las imágenes cuentan el origen y el proceso, no decoran.
4. **Copy que admite limitaciones reales** (“unable to share our food menus online” por ser hiperestacional) y ancla a hechos (Magic Farms 2021, edificio Art Deco, horarios exactos). Rompe el tono eterno y optimizado.
5. **Estructura visual prioritaria con texto mínimo** en home, dejando que las fotos y los Stories hagan el trabajo narrativo. Menos bloques de marketing, más documentación.
6. **Paleta casi blanca + negro**, con acentos de color solo en los CTAs de conversión. Las fotos aportan la atmósfera y el color real.

Estos patrones (serif cuerpo + un filled funcional + fotos de proceso/origen + copy factual con limitaciones) funcionan especialmente bien para restaurantes premium que quieren transmitir rigor, estacionalidad y hospitalidad real en lugar de un look generativo pulido y genérico.
