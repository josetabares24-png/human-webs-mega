# Biblioteca por caso

Solo medidas sacadas de `learning-log.md`. Si un número no está en el diario, no está aquí. Sirve para elegir, no para mezclar filas.

## Tipografía

| Caso | Referencia | Familia | Dónde | Tamaño y peso |
|---|---|---|---|---|
| Editorial | Dishoom | cheltenhamBT, fallback Georgia | Cuerpo y títulos | Títulos peso 400, quote ~24px. No bold de display. |
| Editorial | Dishoom | gill-sans-nova | Botones y navegación | Sans solo en la UI. |
| Casual | Sweetgreen | SweetSansText | Todo | Cuerpo 16px, peso 400. Títulos en la misma familia, tamaño moderado. |
| Premium invitación | Alinea | Cormorant Garamond | Títulos | ~45px, peso 500. |
| Premium invitación | Alinea | adobe-garamond-pro | Reserva y navegación | Serif también en el CTA. |
| Premium invitación | Alinea | sans genérica | Cuerpo | El contraste es display serif contra cuerpo sans. |
| Premium cartel | St. JOHN | Georgia, fallback Times, Times New Roman | Todo, UI incluida | Cuerpo 16px / 400 / tracking 0.96px. Nav 20px / 700 / mayúsculas / tracking 1.2px. Barra 14px / 700. H1 de local 120px / 700 / mayúsculas / tracking 7.2px; en móvil 30px / tracking 1.8px. Fecha del menú en itálica 20px. |
| Premium independiente | Cutler & Co. | Persona / Archivo Narrow | Nav y CTA | Sans, mayúsculas, peso 700, ~15–16px, letter-spacing ~1.1px. |
| Premium independiente | Cutler & Co. | Caslon / garamond-premier-pro | Cuerpo, platos y precios | Serif, ~16px, peso 400. Body base sans 17px. |

## Botones

| Caso | Referencia | Forma | Relleno | Radio | Sombra | Medida |
|---|---|---|---|---|---|---|
| Editorial | Dishoom, "Book a table" | Outline pill | Fondo transparente, borde 1px blanco, texto blanco | 9999px | No anotada | Elegante, no filled. |
| Casual | Sweetgreen, "ORDER" | Texto | Fondo transparente, color oscuro | 0 | No | Otros CTA son enlaces "Order now →". |
| Premium invitación | Alinea, "RESERVE" | Texto | Fondo transparente, sin borde | 0 | No | No hay filled ni outline. |
| Premium cartel | St. JOHN | Rectángulo | "View Menus" outline 1px negro sobre blanco. "Make a Reservation" filled negro, texto blanco. Misma caja. | 0 | Ninguna | Desktop ~318×57, Georgia 18px / 400, padding 17px. Móvil 310×44, tipo 14px. Inputs iguales: borde 1px, radio 0. |
| Premium independiente | Cutler & Co., "MAKE A RESERVATION" | Texto | Fondo transparente, sin borde, color `rgb(34, 34, 34)` | 0 | No | Mayúsculas, sans peso 700, letter-spacing 1.12px. |

No usar como defecto el pill rojo `#e31837` de `button-patterns.md`. No coincide con ninguna de estas cuatro webs.

## Recuadros

| Caso | Qué hay | Qué no hay |
|---|---|---|
| Editorial | Fotos con pie ("ABOVE:", "RIGHT:"). El pie es el recuadro verbal. | No se anotó card con sombra. |
| Casual | Lista de platos escaneable, aire generoso. | Sin cards pesadas ni sombra. |
| Premium invitación | Bloques de texto e información operativa. | Sin sombra, sin cards, fondo blanco. |
| Premium cartel | Foto a sangre, sin pie y sin velo. Horarios en columnas. Menú en tabla HTML. | Sin `box-shadow` en botón, nav o foto. El aire lo da el H1, no una card. |
| Premium independiente | Foto real del comedor y rejilla de fotos. Menú HTML por secciones, con precio. | Sin `box-shadow` y sin cards pesadas. |

Defecto si el caso no pide otra cosa: sin card, sin sombra, sin tres columnas iguales. La tabla de la carta y el borde de 1px del botón no son cards.

## Color

| Caso | Fondo | Texto | Acento |
|---|---|---|---|
| Editorial | Crema `rgb(240, 236, 224)` | `rgb(53, 56, 57)` | Negro y blanco suave. Sin brillo digital. |
| Casual | Crema `rgb(244, 243, 231)` | `rgb(14, 21, 14)` | Sin acento brillante en el primer viewport. |
| Premium invitación | Blanco `rgb(255, 255, 255)` | Negro `rgb(0, 0, 0)` | Ninguno. |
| Premium cartel | Página `rgb(249, 249, 249)`, html blanco | Negro | Barra superior negra con texto blanco. Sin segundo color. |
| Premium independiente | Blanco `rgb(255, 255, 255)`, crema `rgb(247, 247, 237)` | `rgb(34, 34, 34)` o negro | Oscuro solo en skip y velos. Sin color de marca brillante. |

## Al añadir un caso

Hace falta una fila nueva en las cuatro tablas, con números. "Serif elegante" no cuenta. Si la web no enseña la familia en el CSS computado, se escribe "no medida" en vez de inventarla.
