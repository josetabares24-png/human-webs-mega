> **Archivo histórico.** No usar como plantilla predeterminada. El contrato de `prompts/bot.md` y `examples/restaurants/biblioteca.md` prevalece: sin hero genérico, pill rojo, tres tarjetas ni sticky CTA por defecto. La implementación actual vive en `builder/`; ver `docs/DESIGN.md` y `builder/README.md`.

# Patrones de botones y CTAs — Restaurantes

Inspirados en las webs más visitadas (McDonald’s, Domino’s, Chipotle, Shake Shack, Sweetgreen, etc.).

## 1. Botón primario de pedido / reserva (estilo QSR)

Alto contraste, grande, texto claro. Aparece en hero y se repite.

```html
<a href="#order" class="btn-primary">
  Pedir ahora
</a>
```

```css
.btn-primary {
  display: inline-block;
  background: #e31837; /* rojo tipo Domino’s / McD */
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s;
}
.btn-primary:hover {
  background: #c4142f;
  transform: translateY(-1px);
}
```

## 2. Botón secundario (estilo fine dining / casual)

Más discreto, borde o fondo neutro.

```html
<a href="#menu" class="btn-secondary">
  Ver menú
</a>
```

```css
.btn-secondary {
  display: inline-block;
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
}
.btn-secondary:hover {
  background: #1a1a1a;
  color: white;
}
```

## 3. Par de botones (Order + Reserve) — muy común

```html
<div class="cta-pair">
  <a href="#order" class="btn-primary">Pedir online</a>
  <a href="#reserve" class="btn-secondary">Reservar mesa</a>
</div>
```

```css
.cta-pair {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
```

## 4. Botón con icono (teléfono / mapa)

```html
<a href="tel:+123456789" class="btn-icon">
  📞 Llamar
</a>
<a href="https://maps.google.com" class="btn-icon">
  📍 Cómo llegar
</a>
```

## Notas de las cadenas reales

- **Shake Shack / Sweetgreen**: el botón "Order" es el elemento más visible del primer viewport.
- **McDonald’s / Domino’s**: rojo de marca fuerte + texto blanco.
- **Fine dining (Carbone, Commander’s Palace)**: un solo "Reserve" o "Book" claro sobre el hero.
- **Chipotle**: flujo de pedido extremadamente directo, botones grandes y de alto contraste.

Adapta el color de marca del restaurante concreto. El principio es el mismo: un CTA principal imposible de perder.
