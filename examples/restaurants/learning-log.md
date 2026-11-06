# Learning Log — Restaurantes

Observaciones en vivo de sitios reales para extraer patrones útiles en webs anti-IA (estética humana, restricción, copy natural, fotografía real).

## 2026-11-06 — The French Laundry (premium / fine dining, Thomas Keller)

**Sitio**: https://thomaskeller.com/tfl/  
**Tipo**: Premium fine dining independiente (bajo grupo Thomas Keller). 3 estrellas Michelin.

### Lo que vi (honesto)
- Homepage casi vacía de texto: navegación superior simple + gran foto del edificio (piedra histórica + ampliación moderna de cristal con cocina visible por la noche, jardines). Logos de premios pequeños abajo.
- Navegación: links de texto, sin botones filled. “Reservations” es texto que lleva a Tock.
- Páginas interiores (Restaurant, History): narrativa larga y personal sobre cómo Keller encontró el cottage de piedra, historia del edificio (saloon 1900, laundry en los 20s, Schmitt 1978, Keller 1994). Copy concreto, no slogans de marketing.
- Menú: solo “Two tasting menus are offered daily: CHEF'S TASTING MENU / TASTING OF VEGETABLES”. No listado de platos (cambia diariamente).
- Tipografía: Filosofía (serif elegante) para h1/nav ~17px peso 400, color navy rgb(0,47,101). Body Ideal Sans ~10-11px, color #333. Muy pequeño, editorial.
- Botones: prácticamente no hay. Todo son links de texto, outline o plain, sin relleno, border-radius casi 0, padding 0.
- Colores: fondo blanco puro, acento navy profundo, grises secundarios. Alto contraste, poca saturación.
- Espaciado: generoso, aire, sin sombras visibles en imágenes, sin bordes llamativos. Fotografía de lugar y proceso (arquitectura, jardín, cocina a través del cristal), no close-ups de platos en hero.
- Móvil: no pude simular viewport perfectamente, pero estructura es limpia y text-heavy, probablemente responsive con menú colapsado.

### 5 patrones concretos útiles para webs anti-IA
1. **Restricción extrema de CTA**: un solo link de texto “Reservations” (no botón gigante filled). La foto del lugar hace el trabajo emocional.
2. **Tipografía mixta serif + sans pequeña**: Filosofía para títulos/nav (elegante, ligera), Ideal Sans cuerpo muy pequeño. Sensación de catálogo o libro, no de landing AI.
3. **Fotografía de arquitectura y proceso en lugar de food porn**: el hero es el edificio real con jardín y cocina visible. Comunica nivel y autenticidad sin platos perfectos generados.
4. **Copy narrativo histórico concreto**: “In his travels, he came across a rustic two-story stone cottage. As he walked into the restaurant’s quaint courtyard, he knew it was where he had been headed”. Detalles reales, no “experience unforgettable”.
5. **Menú como señal de exclusividad, no lista**: solo nombre de los dos menús degustación. Evita el PDF o HTML lleno de platos que muchas webs AI inventan.
6. **Estética limpia sin adornos**: blanco, navy, sin sombras, sin bordes redondeados exagerados, sin gradientes. Se siente hecho por humanos que priorizan el contenido real sobre la “UI moderna”.

**Nota**: el sitio se siente un poco corporativo/del grupo y con fuentes pequeñas (puede costar leer), pero la honestidad del lugar y la restricción lo hacen anti-AI. Ideal para inspirar sitios premium que no gritan.
