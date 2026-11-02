# Learning Log — Restaurantes

Observaciones específicas de sitios reales para patrones anti-IA.

## 2026-11-02 — Eleven Madison Park (premium fine dining, NYC)

Sitio: https://www.elevenmadisonpark.com
Tipo: Premium independiente / fine dining de alto perfil.

### Estructura y CTAs
- Hero mínimo con logo wordmark (hojas) y navegación superior simple.
- Dirección, teléfono y Instagram visibles de inmediato.
- CTA principal de reservas redirige a Resy (externo). Hay "Book on Resy" filled naranja y varios "Reservations" como texto.
- Menú hamburger en móvil. Secciones: About, Team, Magic Farms, Events, Stories, Shop.
- Footer con lista de enlaces (Wine List, FAQs, Gift Cards, Clemente Bar, etc.) y signup de email.

### Tipografía
- Navegación y links de UI: familia "nobel", ~17px, peso 300, uppercase, letter-spacing ~0.34px. Muy ligera y espaciada.
- H1: "Helvetica Neue", 30px, peso 700 (en móvil baja a ~21px).
- Cuerpo: sans-serif genérico 16px / 400.
- Algunos elementos usan "EB Garamond" (serif) ~19px con tracking ligero.
- Contraste claro entre UI sans ligera en mayúsculas y display más bold.

### Botones
- Mayoría de CTAs son texto puro: sin fondo, sin borde, radio 0, uppercase, peso ligero.
- "Book on Resy": filled, fondo rgb(252, 72, 55) naranja brillante, texto blanco, peso 700, border-radius ~6.4px, padding horizontal.
- "Reserve" (para el counter): filled negro, texto blanco, radio 0, padding generoso (~18px vertical).
- Skip link: filled azul oscuro con padding grande.
- Ningún pill, ningún outline clásico en el primer viewport.

### Colores
- Fondo principal: blanco rgb(255,255,255).
- Texto: negro / rgb(0,0,0) o rgb(26,26,26).
- Acento fuerte solo en el CTA de reserva: naranja saturado.
- Alto contraste, casi monocromo con un único punto de color funcional.

### Espaciado, bordes, sombras, fotografía
- Muy limpio, aire generoso, sin box-shadow visibles en botones o cards.
- Border-radius casi siempre 0 excepto el botón naranja.
- Fotografía real de platos (Scallop, Tonburi) y del farm (Magic Farms), a sangre o con buen peso visual. No ilustraciones ni stock genérico.
- Wordmark tipográfico/logo de hojas en lugar de foto hero full-bleed obligatoria.

### Menú, móvil y copy
- Menú no es carta HTML completa en home; se enfoca en la experiencia y reserva. Hay wine list separado.
- Móvil: H1 reduce a 21px, "Open Menu" claro, CTAs siguen siendo texto o el filled naranja.
- Copy directo y concreto: dirección, teléfono, "Join us in The Studio at Clemente Bar. Tucked above the EMP Dining Room is The Studio... Book your seat now." Descripciones de platos específicas ("Marinated with Kohlrabi and Hazelnut"). Sin adjetivos vacíos ni "experience the magic".

### Patrones concretos útiles para webs anti-IA
1. **CTA texto mayúscula ligera vs un solo filled de acento**: La mayoría de navegación es texto uppercase peso 300 con tracking; solo el booking real es filled naranja con radio pequeño. Evita el "todo es botón redondeado" de plantillas IA.
2. **Monocromo + un acento funcional**: Blanco/negro dominante y un solo naranja saturado exclusivamente para la acción de reservar. Nada de paletas pastel o gradientes.
3. **Tipografía mixta controlada**: Sans ligera (nobel) para UI + Helvetica bold para display + toques de Garamond. No una sola familia moderna en todo.
4. **Fotografía de plato real con pie descriptivo concreto**: Imágenes de comida específica (no "beautiful dish") y copy de ingredientes reales. Humaniza más que cualquier ilustración.
5. **Reserva externa clara pero integrada**: "Book on Resy" filled + links de texto a Resy. No finge un sistema de reservas propio.
6. **Aire y cero sombra**: Espaciado generoso, radios 0 en casi todo, sin cards ni shadows. La jerarquía la da el tamaño y el peso tipográfico, no el elevation.

Notas honestas: El sitio usa Squarespace (URLs de CDN). El menú principal parece overlay. El botón naranja tiene radio suave (no 0 ni pill). En móvil el H1 se reduce significativamente. No hay carta completa HTML en la home; el foco es la reserva y la historia.
