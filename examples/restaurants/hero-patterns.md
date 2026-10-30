> **Archivo histórico.** No usar como plantilla predeterminada. El contrato de `prompts/bot.md` y `examples/restaurants/biblioteca.md` prevalece: sin hero genérico, pill rojo, tres tarjetas ni sticky CTA por defecto. La implementación actual vive en `builder/`; ver `docs/DESIGN.md` y `builder/README.md`.

# Patrones de Hero — Restaurantes

## 1. Hero con foto de comida + CTA centrado (estilo más común)

```html
<section class="hero">
  <div class="hero-content">
    <h1>La mejor pizza de la ciudad</h1>
    <p>Masa madre, ingredientes frescos, entregada en 30 min.</p>
    <a href="#order" class="btn-primary">Pedir ahora</a>
  </div>
</section>
```

```css
.hero {
  min-height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
              url('pizza.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
}
.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 0.5rem;
}
```

## 2. Hero con dos CTAs (Order + Menu)

Común en Sweetgreen, Shake Shack y muchas cadenas.

```html
<div class="hero-ctas">
  <a href="#order" class="btn-primary">Pedir online</a>
  <a href="#menu" class="btn-secondary light">Ver menú</a>
</div>
```

## 3. Hero minimalista fine dining

Foto atmosférica + un solo botón de reserva.

```html
<section class="hero-minimal">
  <h1>Nombre del restaurante</h1>
  <p>Cocina de temporada — Ciudad</p>
  <a href="#reserve" class="btn-reserve">Reservar mesa</a>
</section>
```

## Principios tomados de las webs reales

- Foto de comida o ambiente que se vea apetecible (no genérica de IA).
- Texto corto y humano.
- Un CTA principal imposible de perder.
- Funciona bien en móvil (la mayoría del tráfico de restaurantes).
