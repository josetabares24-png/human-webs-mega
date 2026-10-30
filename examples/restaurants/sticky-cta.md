> **Archivo histórico.** No usar como plantilla predeterminada. El contrato de `prompts/bot.md` y `examples/restaurants/biblioteca.md` prevalece: sin hero genérico, pill rojo, tres tarjetas ni sticky CTA por defecto. La implementación actual vive en `builder/`; ver `docs/DESIGN.md` y `builder/README.md`.

# Barra fija inferior (sticky CTA)

Patrón muy común en webs de restaurantes: una barra fija abajo con las acciones principales (Pedir, Reservar, Menú, Llamar). Nunca se pierde al hacer scroll.

## HTML

```html
<div class="sticky-bar">
  <a href="#menu" class="sticky-btn">Menú</a>
  <a href="#order" class="sticky-btn primary">Pedir</a>
  <a href="#reserve" class="sticky-btn">Reservar</a>
  <a href="tel:+123" class="sticky-btn">Llamar</a>
</div>
```

## CSS

```css
.sticky-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 100;
  padding: 0.5rem;
}
.sticky-btn {
  flex: 1;
  text-align: center;
  padding: 0.8rem 0.5rem;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 0.9rem;
}
.sticky-btn.primary {
  background: #e31837;
  color: white;
  border-radius: 6px;
  margin: 0 0.25rem;
}
```

## Por qué funciona

- En móvil (donde ocurre la mayoría de visitas a restaurantes) el usuario siempre tiene la acción a mano.
- Reduce fricción: no hay que volver arriba.
- Usado por muchas cadenas y restaurantes independientes de alto tráfico.

Añade un padding-bottom al body para que el contenido no quede tapado.
