# Patrones detallados — Restaurantes premium y famosos

Investigación de cientos de referencias (análisis de 40+ sitios independientes, estudios de Michelin, mejores ejemplos 2026: Noma, Eleven Madison Park, Alinea, Canlis, Atelier Crenn, Dishoom, Commander's Palace, Carbone, Sweetgreen, Shake Shack, etc.).

## Diferencias clave: Casual/QSR vs Premium/Fine dining

| Aspecto | Casual / QSR (McD, Domino’s, Chipotle, Shake Shack) | Premium / Michelin (Noma, Alinea, EMP, Canlis) |
|---------|-----------------------------------------------------|-----------------------------------------------|
| Hero | Foto de comida apetecible + CTA grande de pedido | Foto atmosférica o plato artístico + reserva discreta |
| CTA principal | "Pedir ahora" / "Order" muy visible, alto contraste | "Book a table" / "Reservations" repetido pero elegante |
| Menú | HTML con precios, fotos, filtros dietéticos | A menudo no publican menú completo (cambia con temporada) o solo descripción |
| Fotografía | Platos reales, abundantes | Editorial, cinematográfica, poca cantidad de alta calidad |
| Tipografía y espacio | Limpia, funcional, bold | Serif elegante, mucho aire, restricción |
| Velocidad | Crítica (<2s) | Igual de importante, pero priorizan estética |
| Móvil | Sticky bar de pedido/reserva | Header sticky + botón de reserva claro |

## Lecciones de los mejores (premium)

### 1. Restricción y claridad (Noma, Eleven Madison Park, Alinea)
- Un solo CTA de reserva visible en header y hero.
- Poca navegación (Reservations, Menu/Story, Private Events, Shop).
- La fotografía hace el trabajo de "explicar" el nivel.
- Alinea: el plato es la obra de arte; el botón "Book" aparece dos veces sin competir.
- EMP y Noma: a veces explican por qué no publican el menú (cambia cada temporada).

### 2. Booking imposible de perder
- Botón en header, en hero, después del menú y al final.
- Integración con Resy, Tock, OpenTable o SevenRooms.
- Datos: sitios con botón de reserva above the fold obtienen ~37% más reservas (OpenTable).

### 3. Fotografía real y de alta calidad
- Premium: platos tratados como arte, interiores, proceso.
- Casual: comida que se vea comestible, no stock genérico.
- Evitar imágenes de IA o stock obvias (anti-IA checklist).

### 4. Menú en HTML (regla universal)
- Estudios de 40 sitios: la mayoría que convierten bien usan texto en página.
- PDF = fricción en móvil + invisible para Google.
- Estructura: secciones claras, precios visibles, descripciones cortas y humanas, tags dietéticos.

### 5. Primer viewport en móvil (datos reales)
De análisis de 40 restaurantes independientes:
- 60% muestran botón de pedido/reserva en el primer pantalla.
- Solo 8% muestran horario en el primer viewport.
- 0% muestran teléfono + horario + dirección juntos en la primera pantalla.
→ Oportunidad enorme: poner las 3 cosas visibles sin scroll.

### 6. Sticky y thumb zone
- Barra inferior fija en móvil (Order / Reserve / Menu / Call) es uno de los patrones de mayor impacto.
- Tap targets ≥ 44 px.
- Acciones principales en zona de pulgar.

## Patrones específicos extraídos

### Hero premium
```html
<section class="hero-premium">
  <div class="hero-content">
    <h1>Nombre del restaurante</h1>
    <p>Cocina de temporada — Ciudad</p>
    <a href="#reservar" class="btn-reserve">Reservar mesa</a>
  </div>
</section>
```
Estilo: foto full-bleed de plato o sala, tipografía serif, botón discreto pero claro.

### Hero casual / conversión
Foto de comida + texto corto + botón primario grande de alto contraste (rojo/marca).

### Barra sticky móvil (mejorada)
```html
<div class="sticky-bar">
  <a href="#menu">Menú</a>
  <a href="#order" class="primary">Pedir</a>
  <a href="#reserve" class="primary">Reservar</a>
  <a href="tel:+34...">Llamar</a>
</div>
```

### Bloque de info rápida (recomendado en primer viewport)
- Horario de hoy ("Abierto hasta las 23:00")
- Dirección + enlace a mapa
- Teléfono clickeable
- Rating de Google (si es bueno)

## Checklist expandido (basado en cientos de referencias)

**Crítico (casi todos los mejores lo hacen):**
- [ ] CTA de reserva/pedido visible sin scroll en móvil
- [ ] Menú en HTML legible
- [ ] Fotos reales (no stock/IA)
- [ ] Click-to-call y click-to-map
- [ ] Carga rápida (<2-3s)
- [ ] Tap targets grandes

**Premium extra:**
- [ ] Restricción visual (poco ruido)
- [ ] Fotografía editorial de alta calidad
- [ ] Booking integrado (Resy/Tock/etc.)
- [ ] Explicación clara si no publican menú completo

**Casual extra:**
- [ ] Sticky bar de acción
- [ ] Ofertas o pedido rápido visibles
- [ ] Flujo de pedido en pocos pasos

## Sitios de referencia adicionales (premium y famosos)

- **Noma** (noma.dk): restricción editorial, un booking claro.
- **Eleven Madison Park**: galería cinematográfica + Resy.
- **Alinea**: el plato como arte, botón de reserva repetido con elegancia.
- **Canlis**: minimalismo, nombre grande, foto del edificio.
- **Atelier Crenn**: experiencia inmersiva, fotografía poética.
- **Dishoom**: menús por tipo de comida, booking siempre visible.
- **Commander's Palace / Carbone**: hero + reserva clara, menú HTML.
- **Sweetgreen / Shake Shack**: orden como infraestructura, CTA dominante.

## Cómo usar esto

1. Decide el tipo (casual conversión vs premium experiencia).
2. Copia los patrones de botones, heroes y sticky de los archivos anteriores.
3. Aplica la restricción o el alto contraste según el caso.
4. Pasa el checklist.
5. Adapta el copy a humano (ver `/principles/human-copy.md`).

Este documento se basa en análisis de sitios reales y estudios de 2026. El repo sigue creciendo.
