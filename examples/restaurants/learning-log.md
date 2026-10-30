# Learning log — webs de restaurantes

Registro de observaciones reales. Cada entrada viene de una revisión con navegador.

**Foco obligatorio en cada investigación**:
- Tipografía (serif/sans, pesos, tamaños, títulos vs cuerpo)
- Botones (forma, color, contraste, estilo filled/outline/texto, tamaño)
- Colores (paleta, acentos, fondos, contraste)
- Espaciado, bordes, sombras, fotografía
- Estructura, CTAs, menú, móvil y copy

## 2026-10-30 — Dishoom (dishoom.com)

**Tipo**: Cadena de restaurantes indios (inspirados en Bombay), múltiples locales.

**Lo que se ve**:
- CTA “Book a table” muy presente (botón y en secciones).
- Narrativa fuerte de marca: “Each Dishoom is a love letter to Bombay…”, citas, historia de la ciudad, fotos con captions (“ABOVE: The legendary B. Merwan…”).
- Menús organizados por momento del día (breakfast, lunch, dinner, late tipples).
- Lista de cafés y permit rooms por ciudad.
- Secciones de store, recipes, awards.
- Copy cálido y específico, no genérico.

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Cuerpo y títulos en serif (cheltenhamBT / fallback Georgia). Títulos con peso 400 (no bold extremo), tamaño moderado (~24px en el quote principal). Botones y navegación en sans (gill-sans-nova).
- **Botones**: “Book a table” es outline pill (border-radius 9999px), borde 1px blanco, texto blanco, fondo transparente. Estilo elegante y discreto, no filled agresivo.
- **Colores**: Fondo principal crema cálido (rgb(240, 236, 224)). Texto oscuro (rgb(53, 56, 57)). Acentos en negro y blancos suaves. Contraste alto pero paleta suave y de papel, no digital brillante.
- **Fotografía**: Imágenes con captions contextuales (“ABOVE: The legendary B. Merwan on Bombay’s Grant Road dating from 1914”, “RIGHT: Bun (& Brun) Maska”). No stock genérico.

**Patrones útiles**:
1. Narrativa de origen + historia concreta (no “welcome to our restaurant”).
2. CTA de reserva repetido pero integrado en el flujo de explorar menús.
3. Menús por ocasión/momento en vez de solo categorías de comida.
4. Fotografía con contexto y pies de foto que cuentan algo.
5. Voz consistente y con personalidad (se siente escrito por alguien que conoce Bombay).
6. Serif para el texto principal + sans para botones/UI → sensación editorial y humana.
7. Botón outline pill en lugar de filled de alto contraste → más elegante y menos “app”.

**Anti-IA**: El texto no suena a plantilla. Habla de sitios concretos, de chai, de buns, de Grant Road. La tipografía serif y el fondo crema refuerzan que no es un template moderno genérico. Eso es lo que hay que copiar.

## 2026-10-30 — Sweetgreen (sweetgreen.com)

**Tipo**: Casual / QSR saludable (cadena de ensaladas y bowls, EE.UU., enfoque en ingredientes frescos y pedido rápido).

**Lo que se ve**:
- CTA “ORDER” y “ORDER NOW” muy visibles y repetidos.
- Listado de bowls y ensaladas con ingredientes específicos, alérgenos y botones “Order now →”.
- Secciones de ubicaciones (“Where should we open next?”), careers, y productos.
- Fotografía de platos reales (no stock genérico).
- Copy directo y funcional, orientado a conversión.

**Detalles estéticos (captura en vivo)**:
- **Tipografía**: Custom sans “SweetSansText” para todo (body 16px, peso 400). Headings también en la misma familia, tamaños modestos. Sensación limpia y contemporánea, no editorial.
- **Botones**: “ORDER” es texto plano (bg transparente, radius 0, color oscuro). Otros CTAs “Order now →” son links de texto. No hay pills filled agresivos en el primer viewport; el estilo es más texto/link que botón de app.
- **Colores**: Fondo crema suave rgb(244, 243, 231). Texto casi negro rgb(14, 21, 14). Paleta natural y restringida, sin acentos brillantes de marca en el hero.
- **Espaciado**: Generoso, sin sombras ni cards pesadas. Layout limpio orientado a escaneo rápido de platos.

**Patrones útiles**:
1. Tipografía custom sans ligera (peso 400) para todo → se siente contemporáneo y humano, no template bold.
2. CTAs como texto/link en lugar de botones filled de alto contraste → menos “app”, más editorial incluso en casual.
3. Fondo crema natural + texto oscuro → calidez sin parecer digital genérico.
4. Menú en HTML con ingredientes y alérgenos claros + “Order now” por plato → conversión práctica sin perder legibilidad.
5. Copy corto y específico (nombres de bowls, ingredientes reales) en vez de marketing vacío.

**Anti-IA**: Aunque es una cadena moderna, evita el look de template SaaS. La tipografía custom ligera, el fondo crema y los CTAs de texto lo hacen más cercano a un local de comida real que a un dashboard de pedido. Útil como contraste con los premium de serif.
