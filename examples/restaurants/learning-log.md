# Learning log — Restaurantes

Observaciones de sitios reales. Cada entrada es un caso concreto visto en el navegador. Sirve para extraer patrones anti-IA.

---

## noma.dk (Noma, Copenhague) — premium independiente

**Fecha de observación:** 2026-11-03  
**URL:** https://noma.dk/  
**Tipo:** Premium independiente (restaurante de referencia mundial, nuevo nórdico).

### Lo que vi (honesto)

- **Estructura y CTAs:** Hero visual con foto a sangre y texto blanco superpuesto. Navegación en mayúsculas/serifs grandes. CTA principal “Book a table” visible. Menú y reservas como enlaces de texto, no botones pesados. Hay waitlist (“Join our Taste Buds 2027”) y tienda de productos. Copy estacional y directo (“Copenhagen 2026-2027”, “We’re coming home”, “Friends,”).
- **Tipografía:** Cuerpo en **Reckless, serif** a 18px / 400, color verde oscuro. Títulos en **Reckless-Neue, serif** (H1 ~33–56px / 500). Navegación y algunos CTAs en la misma serif a ~28px. Solo el banner de cookies usa sans (Roobert). Contraste claro: serif display + serif cuerpo.
- **Botones:** “Book a table” es **outline cuadrado** (border-radius 0, borde 1px blanco, fondo transparente, texto blanco, serif ~28px, padding generoso ~18px 39px, letter-spacing ligero). No es pill ni filled. El único filled es el “Accept all” de cookies (fondo verde oscuro, radio 0, sans).
- **Colores:** Fondo crema `rgb(249, 249, 243)`. Texto `rgb(41, 56, 43)` (verde bosque oscuro). Texto sobre hero en blanco. Sin acentos brillantes ni saturados. Paleta natural y apagada.
- **Espaciado, bordes, sombras, fotografía:** Fotos reales de alta resolución (interiores, platos, productos, temporada). Esquinas rectas. Bordes finos solo donde hace falta. Alguna sombra presente pero no cards con drop-shadow pesado. Aire generoso alrededor del tipo grande.
- **Menú, móvil y copy:** Menú accesible como enlace de texto. En móvil el tipo se reduce pero mantiene serif. Copy humano, temporal y específico (años concretos, “Friends,”, waitlist abierta). No genérico de marketing.

### Patrones concretos útiles para webs anti-IA

1. **Serif en cuerpo y títulos** (Reckless / Reckless-Neue). Evita el look “Inter + system-sans en todo” típico de templates IA. El cuerpo a 18px serif da lectura editorial real.
2. **CTA outline cuadrado con borde fino y padding real**, no pill redondeado filled. El botón “Book a table” se siente deliberado, no de librería de componentes.
3. **Paleta crema + verde bosque oscuro** con blanco solo en overlay. Nada de negro puro sobre blanco puro ni acentos cyan/magenta. Colores que parecen de papel e impresión.
4. **Fotografía específica y estacional** (fotos con fecha o contexto de temporada, no stock genérico de “plato bonito”). Las imágenes tienen peso y lugar.
5. **Navegación y CTAs en serif grande** (~28px) en lugar de sans pequeña o iconos. Da jerarquía humana y menos “app UI”.
6. **Copy temporal y ligeramente personal** (“Copenhagen 2026-2027”, “Friends,”, waitlist con año). Rompe el tono eterno y optimizado de IA.

Estos patrones se pueden reutilizar en sitios independientes o premium que quieran alejarse del look generativo estándar (sans neutra, pills, cards con sombra, stock, copy genérico).
