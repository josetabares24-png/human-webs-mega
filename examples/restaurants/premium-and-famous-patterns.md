# Patrones detallados — Restaurantes premium y famosos

**Nota de revisión**: Actualizado con capturas del navegador en vivo (no solo scraping o artículos secundarios).

## Observaciones en vivo (navegador)

### Noma (noma.dk)
- Header simple: logo “noma” + menú + idiomas (EN/DA).
- CTA muy claro: “Book a table” / “Reservations” (lleva a Tock).
- Narrativa larga y personal sobre la vuelta a Copenhague 2026-2027 (carta a los amigos).
- Secciones de productos (Noma Projects, Noma Kaffe) sin competir con la reserva.
- No hay menú de platos en homepage. Sensación editorial/notebook.
- Botón “Unlock reservations!” y teaser de reservas.

### Alinea (alinearestaurant.com)
- Anuncio destacado de transición Tock → OpenTable (fechas claras).
- Links directos: “Reserve through October on Tock” y “Reserve November/December on OpenTable”.
- Descripción de las tres experiencias: Kitchen Table, The Gallery, The Salon.
- Premios y reconocimientos bien visibles (Michelin 3*, World’s 50 Best, etc.).
- Mailing list para ticket releases.
- Dirección y emails de contacto claros.

### Canlis (canlis.com)
- Navegación ultra-limpia: **RESERVE** es el primer elemento, luego EXPLORE y PRIVATE EVENTS.
- Teléfono y dirección visibles arriba.
- Texto de invitación personal (“The opportunity to meet and serve you is one we don’t take lightly…”).
- Énfasis en el espacio y la historia del edificio (Roland Terry, 1950).
- Premios (James Beard, Wine Spectator) y press.
- Links claros a “Make a reservation”, “Get directions”, “Call the restaurant”.

### Eleven Madison Park (elevenmadisonpark.com)
- CTA principal: “Book on Resy”.
- Dirección y teléfono visibles.
- Secciones: Wine List, FAQs, Gift Cards, Clemente Bar, Press, Careers, etc.
- Promoción de The Studio at Clemente Bar (omakase).
- Enfoque en reserva externa y experiencia.

### Dishoom (dishoom.com)
- CTA “Book a table” repetido varias veces.
- Narrativa fuerte de marca (“From Bombay with Love”, historia de la ciudad).
- Menús por tipo de comida (breakfast, lunch, dinner, late tipples).
- Lista de locales y cafés.
- Enfoque en booking + exploración de menús.

## Diferencias clave: Casual/QSR vs Premium/Fine dining

| Aspecto | Casual / QSR | Premium / Michelin |
|---------|--------------|--------------------|
| Hero | Foto de comida apetecible + CTA grande de pedido | Foto atmosférica o plato artístico + reserva discreta |
| CTA principal | "Pedir ahora" / "Order" muy visible, alto contraste | "Book a table" / "Reservations" repetido pero elegante |
| Menú | HTML con precios, fotos, filtros dietéticos | A menudo no publican menú completo (cambia con temporada) |
| Fotografía | Platos reales, abundantes | Editorial, cinematográfica, alta calidad, menor cantidad |
| Tipografía y espacio | Limpia, funcional, bold | Serif elegante, mucho aire, restricción |
| Móvil | Sticky bar de pedido/reserva | Header sticky + botón de reserva claro |

## Lecciones consolidadas

### 1. Restricción y claridad (premium)
- Un solo CTA de reserva visible en header y hero.
- Poca navegación.
- La fotografía y el espacio hacen el trabajo de comunicar el nivel.

### 2. Booking imposible de perder
- Botón en header, en hero y repetido.
- Integración con Resy, Tock, OpenTable o SevenRooms.
- Datos de OpenTable: sitios con reserva above the fold obtienen ~37% más reservas.

### 3. Menú en HTML (regla universal cuando se publica)
- Estudios de 40 sitios independientes: la mayoría de los que convierten bien usan texto en página.
- PDF = fricción en móvil + invisible para Google.

### 4. Primer viewport en móvil (datos de estudio de 40 sitios)
- 60% muestran botón de pedido/reserva en el primer pantalla.
- Solo 8% muestran horario en el primer viewport.
- 0% muestran teléfono + horario + dirección juntos en la primera pantalla.
→ Oportunidad clara.

### 5. Sticky y thumb zone
- Barra inferior fija en móvil es de alto impacto en casual.
- Tap targets ≥ 44 px.
- Acciones principales en zona de pulgar.

## Checklist expandido

**Crítico:**
- [ ] CTA de reserva/pedido visible sin scroll en móvil
- [ ] Menú en HTML (si se publica)
- [ ] Fotos reales (no stock/IA)
- [ ] Click-to-call y click-to-map
- [ ] Carga rápida
- [ ] Tap targets grandes

**Premium extra:**
- [ ] Restricción visual
- [ ] Fotografía editorial de alta calidad
- [ ] Booking integrado
- [ ] Claridad si no publican menú completo

**Casual extra:**
- [ ] Sticky bar de acción
- [ ] Flujo de pedido en pocos pasos

## Sitios de referencia (con observaciones en vivo)

- **Noma**: restricción editorial, booking a Tock, narrativa fuerte, productos secundarios.
- **Canlis**: “RESERVE” primero en nav, invitación personal, énfasis en el espacio y la historia.
- **Alinea**: transición clara de sistemas de reserva, tres experiencias diferenciadas, premios visibles.
- **Eleven Madison Park**: “Book on Resy”, promoción de experiencias adicionales (Clemente Bar).
- **Dishoom**: “Book a table” repetido, menús por momento del día, narrativa de marca fuerte.
- **Sweetgreen / Shake Shack**: orden como infraestructura, CTA dominante.

## Cómo usar esto

1. Decide el tipo (casual conversión vs premium experiencia).
2. Usa los patrones de botones, heroes y sticky de los otros archivos de esta carpeta.
3. Aplica restricción o alto contraste según el caso.
4. Pasa el checklist.
5. Adapta el copy a humano (ver `/principles/human-copy.md`).

El repo sigue creciendo. Las observaciones en vivo confirman los patrones de restricción y claridad en premium, y de CTA dominante en casual.
