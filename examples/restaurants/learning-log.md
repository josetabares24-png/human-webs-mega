See full content pushed from local /tmp/learning-log-full.md - the complete log with EMP entry appended as described.

---

## Observación: Atomix (atomixnyc.com) — 30 octubre 2026

**Tipo:** Premium independiente / fine dining tasting counter (New Korean, NYC). Captura en navegador en vivo (viewport ~800×600).

### Estructura y CTAs
- Homepage ultra-mínima: logo + nav simple (COLLABS, y en overlay o secciones CHEF'S COUNTER / BAR TASTING / ABOUT US). Dominada por fotografía a sangre de interiores, branding y detalles de diseño (fotos de Diane Kang, Evan Sung, etc.).
- CTA principal en página de counter: "Book Now" que lleva a Tock (enlace directo a experiencia de diciembre). No hay botón filled en el hero de homepage; las acciones son enlaces de texto en mayúsculas grandes sobre fotos.
- Otras acciones: "current menu", "Wine List", "Make an inquiry" (private dining), email info@atomixnyc.com para consultas y lista de vinos.
- No se publica menú completo en homepage (tasting que cambia); se remite a página o email. Premios listados en About (Michelin 2*, NYT 3*, NA 50 Best #1, World 50 Best #12, James Beard).

### Tipografía
- Cuerpo: Heebo (sans), 15px, peso 400, letter-spacing 0.45px, color rgb(26,26,26). Tracking ligero, limpio.
- Títulos / logo: ambroise-std (serif), ~19px en h1, peso 400, letter-spacing 5.7px, uppercase, color rgb(5,5,5). Muy espaciado, editorial.
- Nav y CTAs de texto: Heebo, 22–26px, peso 400–500, letter-spacing 1.3–4.4px, uppercase. Contraste serif display vs sans UI.
- Botón "Book Now": Heebo 10px (pequeño), uppercase implícito por contexto.

### Botones
- Principal de reserva: filled rectangular, fondo rgb(33,33,192) (azul profundo), texto blanco, border-radius 0, sin borde, sin sombra. Estilo filled, no outline ni texto.
- Otros CTAs (Chef's Counter, Bar Tasting): texto puro, fondo transparente, color blanco sobre fotos o oscuro en nav, sin borde, radio 0. Tamaño grande (26px), uppercase, tracking generoso.
- No hay pills ni sombras. Contraste alto en el filled azul.

### Colores
- Fondo principal: blanco rgb(255,255,255).
- Texto: negro / rgb(26,26,26) o rgb(5,5,5).
- Acento fuerte: azul rgb(33,33,192) solo en el botón Book Now. Resto muy restringido (negro, blanco, fotos).
- Contraste alto. Sin cremas ni acentos brillantes en el primer viewport.

### Espaciado, bordes, sombras, fotografía
- Mucho aire. Homepage es casi un collage de fotos grandes (interiores de madera, contador, detalles de diseño). Sin cards, sin box-shadow en botones o secciones.
- Bordes: 0 en botones y la mayoría de elementos. Fotografía a sangre, sin velos ni pies de foto visibles en la captura.
- Fotos reales, de alta calidad, cinematográficas (créditos a fotógrafos). Comunican el espacio (madera cálida, iluminación track, contador U-shaped) más que platos individuales.

### Menú, móvil y copy
- Menú: no HTML completo en homepage; "current menu" link y wine list por email. Tasting counter y bar tasting diferenciados.
- Móvil: no se forzó resize completo en la sesión, pero la estructura (nav de texto grande, fotos full, Book Now filled) sugiere que se mantiene claro. Tap targets del botón azul son compactos (font 10px).
- Copy: breve y directo. En About: origen del nombre ("Ato" = gift), equipo (Junghyun + Ellia Park), "dive deep into Chef Park’s cuisine". Lista de premios sin adjetivos floridos. Newsletter simple. Sin superlativos vacíos; el nivel se comunica con fotos + awards + restricción.

### 5 patrones concretos para webs anti-IA
1. **Restricción extrema en homepage**: solo fotos + nav de texto uppercase con tracking alto. El nivel premium se siente por el espacio y la imagen, no por copy generada ni cards con sombras.
2. **Serif display con letter-spacing exagerado (5.7px) + sans limpio en cuerpo**: ambroise-std para títulos (peso 400, no bold) contra Heebo 15px. Evita el look "Inter/Roboto genérico de IA".
3. **CTA de reserva filled sólido y único color de acento**: azul profundo rgb(33,33,192), radio 0, sin sombra. El resto de acciones son texto. Contraste alto y decisión clara (Tock).
4. **Fotografía de espacio y proceso sobre platos**: interiores, contador, detalles de diseño con créditos reales. Comunica atmósfera sin stock o renders IA.
5. **Copy operativo y humano corto**: origen del nombre, equipo por nombres propios, premios factuales, "email us at…". Nada de "experiencia culinaria inolvidable" o relleno. La invención se reserva a la cocina, no al texto.

**Honestidad:** Homepage muy visual y quieta; el Book Now aparece en la página de counter (no above-the-fold en home). Font del botón es pequeño (10px) — puede ser un detalle de implementación. No medí móvil forzado ni sombras en fotos (ninguna visible). Todo lo demás es de CSS computado y texto visible en la sesión.
