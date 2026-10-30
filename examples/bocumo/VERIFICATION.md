# Verificación de Bocumo

Fecha: 30 de octubre de 2026. Previa local, no publicación de un negocio real.

## Resultado

La web se escribió directamente en código y se abrió en el navegador integrado. No llama al motor del Builder ni a una IA durante su uso. Las cinco páginas tienen contenido propio, recursos locales y un único H1.

## Comprobaciones realizadas

- Sintaxis de `site.mjs`, `build.mjs`, `server.mjs` y `public/app.js`: superada.
- Compilación de cinco páginas estáticas: superada.
- HTTP: cinco páginas y once recursos/enlaces internos comprobados con respuesta 200. Ruta inexistente devuelve 404, POST devuelve 405, `/carta` redirige a `/carta/`. CSP limita recursos a la misma procedencia, bloquea conexiones y envíos de formularios.
- Navegación a la carta: comprobada en navegador.
- Filtro de pasta: tras activarlo, solo queda visible la categoría `pasta` y su botón tiene `aria-pressed=true`.
- Reserva: fecha 30/10/2026, cuatro personas y 21:00; el resumen mostrado coincide y se identifica expresamente como demostración.
- Móvil: apertura del menú y navegación a La casa comprobadas. Cierre de reserva con Escape y devolución del foco al botón de apertura comprobados.
- El formulario móvil se ajustó a una columna para no truncar el selector de comensales.
- Registro de consola consultado durante la revisión sin errores registrados; no equivale a monitorización de todos los navegadores.

## Responsive

`previews/reflow.json` registra trece muestras DOM reales del navegador:

| Ancho CSS | Páginas revisadas | Resultado |
|---|---|---|
| 390px | Inicio, carta, casa, visita y créditos | Sin scroll horizontal ni imágenes fallidas en las muestras |
| 320px | Inicio y carta | Sin scroll horizontal ni imágenes fallidas en las muestras |
| 768px | Inicio | Sin scroll horizontal ni imágenes fallidas en la muestra |
| 1280px | Las cinco páginas | Sin scroll horizontal ni imágenes fallidas en las muestras |

Las medidas de reflujo de página se tomaron con el diálogo cerrado. No se presenta como una auditoría de todas las combinaciones de dispositivo, zoom y controles nativos.

## Capturas aceptadas

- `previews/desktop-home.jpg`: composición inicial de portada en escritorio.
- `previews/desktop-menu.jpg`: filtro de pasta activo.
- `previews/desktop-booking-result.jpg`: resultado local de reserva para cuatro personas.
- `previews/mobile-home.jpg`: composición inicial de portada móvil.
- `previews/mobile-house.jpg`: página La casa en móvil.

Las capturas muestran la revisión de diseño; algunas preceden al cambio del texto de cabecera de «Una mesa para ti» a «Reservar mesa». Se rechazó la última captura de diálogo móvil porque mostraba otra página, por lo que no se conserva como prueba del formulario.

## Assets y límites

Dos imágenes generadas para la prueba, servidas en WebP local: aproximadamente 319 kB y 197 kB. Fraunces y DM Sans locales, con sus licencias OFL y fuentes de descarga. No se han reutilizado fotos, logos, sellos ni fuentes comerciales de las referencias.

La reserva no tiene servicio externo, disponibilidad, pagos ni almacenamiento. Carta, horarios y ubicación son datos de ejemplo. No se ha certificado accesibilidad completa ni se han realizado reservas o publicaciones reales. La revisión cubre la experiencia de esta previa.
