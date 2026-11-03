# Learning Log — Restaurantes

Observaciones específicas de sitios reales para patrones anti-IA.

## 2026-11-03 — Padella (casual independent, London)

Sitio: https://www.padella.co/
Tipo: Independiente casual / pasta italiana (múltiples locations: Borough Market, Shoreditch, Soho). Menú-first.

### Estructura y CTAs
- Hero con vídeo de fondo (cocina/platos en movimiento), logo centrado, "Scroll down" discreto.
- Nav minimal: logo + Vouchers + Careers + toggle (móvil).
- Inmediatamente debajo: tres tarjetas de locations (Borough Market, Shoreditch, Soho) con fotos reales de los locales y links.
- El cuerpo principal es el menú del día (fecha visible: TUESDAY 3RD NOVEMBER), con secciones ANTIPASTI, PASTA, PUDDING, etc., precios en £, sin fotos de platos individuales.
- No hay CTA de reserva dominante en la home; el foco es el menú actual y las locations. Reservas probablemente por location o externo.

### Tipografía
- Títulos/secciones: Oswald (sans condensed, bold 700 o 500), tamaños 24-40px, uppercase en locations y fecha.
- Cuerpo/menú: Roboto Condensed 16px regular, blanco sobre negro.
- Contraste alto. Sin serif. Pesos fuertes en headings para jerarquía clara de categorías de menú.

### Botones
- Pocos botones filled. Links de navegación y locations son texto o áreas clickeables.
- Botón sample (nav toggle o similar): outline/transparente, padding 16px 6px, radio 0, fuente Oswald.
- Estilo minimal: texto o relleno sutil, no pills ni sombras pesadas.

### Colores
- Paleta: negro puro de fondo (rgb(0,0,0)), texto blanco. Acentos mínimos (quizá en hover o fotos).
- Alto contraste, casi monocromo. Fotos aportan el color.

### Espaciado, bordes, sombras, fotografía
- Espaciado generoso entre secciones de menú.
- Bordes casi inexistentes, sombras nulas. Estilo limpio, tipográfico.
- Fotografía: vídeo hero + fotos de los tres locales (interiores/exteriores reales, no staged food porn). Menú es texto puro, no imágenes de platos.

### Menú, móvil y copy
- Menú HTML completo del día con precios, secciones claras (Antipasti, Pasta...). Cambia diariamente.
- Móvil: nav colapsable, menú scrolleable.
- Copy: directo, factual, fecha del menú en grande. Sin fluff marketing. "Italian Restaurant in Shoreditch, Borough Market & Soho".

### Patrones concretos (4-6) para webs anti-IA
1. **Menú del día como hero/contenido principal**: Fecha visible + lista tipográfica con precios. Anti-IA porque AI suele hacer menús genéricos estáticos o con fotos stock.
2. **Fondo negro + sans condensed (Oswald + Roboto Condensed)**: Alto contraste, tipografía condensa da sensación de menú de pizarra real. Evita el look "clean SaaS" beige/serif de muchos AI.
3. **Locations como tarjetas con foto real del local + nombre en Oswald bold**: Prioriza el lugar físico sobre el plato abstracto.
4. **Ausencia de CTA de reserva gigante**: El menú es la estrella; la acción es secundaria. Humaniza (gente quiere ver qué hay hoy).
5. **Vídeo hero de proceso/cocina + fotos de locales, no food photography editorial**: Más auténtico, menos "AI-generated perfect dish".
6. **Estilo sin sombras, radios 0, bordes mínimos**: Look de menú impreso o pizarra digital, no UI moderna genérica.

Honesto: sitio muy limpio y funcional, casi austero. El menú carga rápido y es legible. Ideal referencia para casual menu-first que no parezca generado por plantilla AI.

(Anteriores: Eleven Madison Park, Cutler, Ma‘ono, Sweetgreen, Dishoom, El Celler de Can Roca — ver historial de commits.)
