# TRANSIT — investigación editorial cruzada para Human Webs

- **Referencia:** https://transit.jp/
- **Modelo real:** Revista japonesa de cultura viajera y publicaciones por edición
- **Fecha:** 2026-10-31
- **Estado de preferencia:** **PENDIENTE — no aprobado estéticamente por el usuario**.
- **Nivel de investigación:** Alta para contenido y estructura textual actual; media para composición de captura de proyecto 2025; no medido en CSS/móvil.
- **No es plantilla:** la ficha sirve para aprender principios aplicables a un medio de turismo con contenido propio, no para copiar estructura/color/fuentes.

## Fuentes originales y evidencia atribuida

- https://transit.jp/
- https://transit.jp/about/
- https://www.evinari.jp/work/transit
- https://therethere.tokyo/

**Evidencia visual principal:** https://www.evinari.jp/work/transit

**Fecha y alcance visual:** Captura de proyecto atribuida a eieio y suplemento web, con edición Mongolia Nº68 de 2025; portada actual de TRANSIT ofrece 2026 Nº73 Nueva Zelanda. No confundir esa imagen con la home actual.

## Auditoría visual ampliada

| Dimensión | Observado, documentado y límites |
|---|---|
| Fondo y color | Paletas contextualizadas por cada número (Mongolia Nº68: azul de cielo/cubierta, naranja de letras, tierra en fotografía; aparecen rojo y azul en interfaz). No convertir un color del número a token permanente de Estaba en Lisboa. |
| Tipografía | Contraste entre tipografía display de portada (letras latinas condensadas y japonesas propias de la edición) y navegación mínima/sans. La familia exacta no ha sido inspeccionada en DOM; no recomendar ni licenciar una fuente basándose en la imagen. |
| Fotografía y recursos | Fotografía periodística y cubiertas de revista reales con dirección propia. En el sitio actual, publicaciones por números, año y tema conviven con categorías TRAVEL, LEARN, EAT, WEAR, etc. |
| Primer viewport y composición | En la captura histórica del sitio web, paisaje a sangre como escenario; la portada impresa flotando en primer plano; textos cortos en las esquinas, una banda superior horizontal y pestañas/índice verticales a la derecha. La portada funciona como objeto de colección que estructura las entradas y no como «tarjeta» de blog. La composición editorial dibuja un marco alrededor de una fotografía documental. |
| Fondo por sección | El entorno es la imagen del destino —no un gradiente neutro— y se recorta con capas de interfaz; la densidad visual cambia según el contenido. |
| Interacción y navegación | El proyecto muestra indicación «Scroll for Trip», pestañas de números, navegación entre ediciones; la web oficial contiene navegación por categorías, destinos, «On this day», números y tienda. **No** se probó con navegador el scroll animado actual ni su accesibilidad. |

**Qué la diferencia realmente:** La identidad proviene del sistema de ediciones, de imágenes autorales y de reglas tipográficas persistentes mientras el contenido cambia radicalmente.

## Principio reutilizable

Conservar la identidad aprobada de Estaba en Lisboa y probar en concepto una «historia de portada» sobre un tema real (por ejemplo, guía de Alfama o reportaje de un mirador) con firma, fecha, imagen original y rutas relacionadas. Convertir la portada del reportaje en puerta de entrada editorial, NO convertir toda la home en escaparate de revistas ficticias.

### Boceto original para un negocio pequeño

Una sección anual o mensual con una historia visual protagonista, una breve entradilla firmada y artículos satélite; una columna lateral con capítulos que estén publicados. El resto de la web permanece navegable desde categorías y búsqueda actuales.

**Ejemplo de copy humano (hipótesis, sujeto a contenido publicado):** ««Alfama a pie: cómo orientarse entre miradores, calles y cuestas» — ejemplo editorial para artículo real, no slogan de home.»

## Qué no copiar

No copiar portada central superpuesta, fotomontajes, banda roja, pestañas estrechas, logos, fotógrafos, tipografías exclusivas ni jerarquía exacta; no simular una revista impresa inexistente.

## QA, móvil y aceptación

En móvil, la portada ilustrativa no debe bloquear títulos ni navegación; comprobar contraste sobre foto, peso/decodificación, alt, enlaces de capítulo, fecha de publicación y SEO. Animaciones desactivables; baseline y comparación reales con la web actual antes de programar.

- **Inspección propia en navegador:** NO efectuada para las seis. La consulta de HTML oficial y capturas publicadas por terceros **no** autoriza afirmar que conocemos valores CSS exactos, detalles de scroll actuales o la captura móvil 390/1280 px.
- **Preferencia expresa del usuario:** NO recibida sobre esta referencia. El encargo fue investigarla, no aprobarla.
- **Antes de usar en un rediseño:** ver [caso Atlántico rechazado](../../../CASES/ESTABA-EN-LISBOA-ATLANTICO-REJECTED-2026-10-31.md): captura verificable del sitio actual, contrato de continuidad y comparación antes/después.

[Índice de las seis](README.md) · [Guías turísticas](../README.md) · [Comparativa](COMPARATIVA-VISUAL.md).
