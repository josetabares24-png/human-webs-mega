# Patrones detallados — Restaurantes premium y famosos

**Nota de revisión**: La primera versión de este archivo fue demasiado rápida. Esta actualización incluye observaciones directas de sitios reales (con las limitaciones de sitios pesados en JavaScript) y distingue claramente entre datos observados y síntesis de estudios secundarios.

## Observaciones directas (revisión más lenta)

### Noma (noma.dk)
- Layout extremadamente limpio y textual.
- CTA principal: “Book a table” que lleva a Tock.
- Narrativa fuerte sobre la vuelta a Copenhague 2026-2027.
- No hay menú en la homepage.
- Productos (pantry, café, libro) integrados sin competir con la reserva.
- Sensación editorial / notebook más que de “sitio de restaurante clásico”.

### Canlis (canlis.com)
- Restricción extrema. “Reserve” es la primera palabra de la navegación.
- Nombre del restaurante en tipografía enorme superpuesta a la foto del edificio.
- Poco texto, mucha atmósfera. No necesita explicar quiénes son.
- Enfoque en la experiencia y el espacio más que en platos individuales.

### Alinea
- Énfasis en las distintas experiencias (Kitchen Table, Gallery, Salon).
- Booking externo (Tock).
- Fotografía de platos tratada como obra de arte.
- Mailing list para ticket releases.

### Sweetgreen
- Orientado claramente a conversión. Botón de Order presente y prioritario.

**Limitación**: Muchos sitios premium (Eleven Madison Park, Atelier Crenn, etc.) dependen de JavaScript y carga dinámica, por lo que el scraping automático obtiene contenido incompleto. Los patrones de estos se basan en análisis de diseño y artículos especializados + observaciones parciales.

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

## Sitios de referencia

- **Noma**: restricción editorial, booking a Tock, narrativa fuerte.
- **Canlis**: nombre enorme, “Reserve” primero en nav, atmósfera sobre explicación.
- **Alinea**: plato como arte, experiencias diferenciadas, Tock.
- **Eleven Madison Park / Atelier Crenn**: galería cinematográfica, booking externo.
- **Sweetgreen / Shake Shack**: orden como infraestructura, CTA dominante.

## Cómo usar esto

1. Decide el tipo (casual conversión vs premium experiencia).
2. Usa los patrones de botones, heroes y sticky de los otros archivos de esta carpeta.
3. Aplica restricción o alto contraste según el caso.
4. Pasa el checklist.
5. Adapta el copy a humano (ver `/principles/human-copy.md`).

El repo sigue creciendo. La investigación de sitios premium es más lenta por naturaleza (muchos son experiencias visuales pesadas).
