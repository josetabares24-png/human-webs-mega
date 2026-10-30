# Patrones de UX móvil

La mayoría de visitas a restaurantes (y a muchas webs) ocurren en móvil. Estos patrones están pensados para pulgares, pantallas pequeñas y decisiones rápidas.

## 1. Thumb Zone (zona del pulgar)

La zona más cómoda de alcanzar con una mano es la parte inferior-central de la pantalla.

- **Coloca aquí**: CTA principal, barra inferior, acciones frecuentes.
- **Evita**: botones importantes solo arriba a la izquierda o en esquinas difíciles.

## 2. Tamaño mínimo de tap targets

- Mínimo recomendado: **44×44 px** (Apple HIG / WCAG AAA).
- Preferible: 48×48 px.
- Espacio entre botones: al menos 8 px para evitar toques accidentales.

```css
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.25rem;
}
```

## 3. Sticky CTA / Barra fija inferior

El patrón de mayor impacto en restaurantes: una barra fija abajo con las acciones principales.

Ya documentado en `examples/restaurants/sticky-cta.md`. Resumen:

- Pedir / Reservar / Menú / Llamar siempre a un toque.
- No se pierde al hacer scroll.
- Añade `padding-bottom` al body para que el contenido no quede tapado.

## 4. Click-to-call y click-to-map

Obligatorios en móvil para restaurantes.

```html
<a href="tel:+34912345678">📞 Llamar</a>
<a href="https://maps.google.com/?q=direccion" target="_blank">📍 Cómo llegar</a>
```

## 5. Menú en HTML, nunca PDF

- PDF obliga a pinchar/zoom y es invisible para Google.
- Menú en texto real, secciones claras, precios visibles, legible sin zoom.

## 6. Header sticky minimalista

En móvil: logo + teléfono (tappable) + un CTA. El resto en hamburger.

## 7. Horario y dirección visibles sin scroll

En el primer viewport o justo debajo del hero. La gente decide "¿está abierto?" y "¿dónde está?" en segundos.

## 8. Velocidad

- Objetivo: < 2–3 segundos en móvil.
- Evita heroes con vídeo pesado o sliders que retrasan el contenido.

## Checklist móvil rápido

- [ ] CTA principal en zona de pulgar o sticky
- [ ] Tap targets ≥ 44 px
- [ ] Teléfono y mapa clickeables
- [ ] Menú en HTML legible
- [ ] Horario y dirección visibles rápido
- [ ] Carga rápida
- [ ] Probado en móvil real (no solo desktop redimensionado)

## Referencias

- Apple Human Interface Guidelines (44 pt)
- Material Design (48 dp)
- Estudios de restaurantes: >70-75% de visitas en móvil
- Patrones de cadenas: Shake Shack, Sweetgreen, Domino’s (CTA siempre alcanzable)
