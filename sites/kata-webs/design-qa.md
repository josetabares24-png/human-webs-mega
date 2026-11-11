# KATA WEBs — pulido del estudio, 11/11/2026

## Alcance y continuidad

Fuente: web existente `https://kata-webs-prototipos.vercel.app/web/`. El usuario corrigió explícitamente el alcance: solo pulir la web. Se conserva logo, amarillo `#ffd60a`, negro `#141414`, Bricolage Grotesque, DM Sans, nueve rutas y composiciones. No se integra el PR #18 ni se crean demos. Las cuatro rutas antiguas `/ej/` se preservan byte por byte, sin enlaces nuevos desde el estudio.

## Comparación visual inspeccionada

- Baseline: `C:/Users/estab/Desktop/revision-kata-webs-2026-11-11/06-inicio-escritorio.png` y `12-inicio-movil.png`.
- Implementación: `polish-home-1440.png`, `polish-home-390.png`, `polish-services-1440.png`, `polish-contact-390.png` y `polish-footer-390.png` en esa carpeta.
- Comparaciones conjuntas abiertas e inspeccionadas: [escritorio](qa/comparison-desktop.jpg) y [móvil](qa/comparison-mobile.jpg). Izquierda: original. Derecha: pulido.
- Escritorio: viewport CSS 1440 × 900; ambas capturas 1425 × 891 píxeles. Móvil: viewport 390 × 844; ambas capturas 375 × 811. Se conservaron tamaños iguales, sin estirar las capturas. El navegador excluye su barra lateral y parte de su superficie; no se atribuye la diferencia a un DPR medido.
- Lámina de tres vistas reales: [inicio, servicios y móvil](qa/kata-pulido.jpg). No es una propuesta de identidad nueva ni una imagen generada.
- El contacto y el pie móvil también se inspeccionaron a tamaño de captura: no hizo falta ampliar un detalle de precisión adicional para evaluar los controles.

## Resultado de las cinco superficies

- **Tipografía:** familias y pesos del original conservados; tamaños y ritmo móvil ajustados. H1 legible, sin truncamiento. La variación de nitidez entre capturas es un artefacto de captura; no se presenta como mejora del código.
- **Espacios y composición:** mismo hero y teléfono ilustrativo original; menos bloques repetidos. Se compactó el pie compartido, manteniendo accesos de servicios y sectores. El CTA móvil queda antes que en el baseline.
- **Color:** conserva tokens originales y contraste negro/amarillo. El CTA Contacto de cabecera mantiene el tratamiento negro original; el estado activo no produce texto amarillo sobre fondo amarillo.
- **Imágenes y activos:** no se generaron fotografías, logos ni ejemplos. Favicon preservado. La imagen social es una captura real de la portada del estudio. Los medios y créditos de rutas antiguas no se modifican.
- **Contenido:** datos personales retirados, alcance de extras/costes aclarado y repeticiones reducidas. Contacto solo permite correo; como el usuario no lo ha creado, muestra «Próximamente» sin destinatario inventado ni formulario de envío simulado.

## Historial de correcciones

1. **P1, alcance:** al principio se estaba integrando el PR de demos. El usuario pidió solo pulido. Se restauraron los archivos originales del PR #18 y se abrió una rama nueva desde main. El build actual genera únicamente las nueve páginas del estudio. Las pruebas rechazan enlaces o páginas nuevas de demos.
2. **P1, contacto:** antes se publicaba el correo y el Instagram personales. Corregido con una configuración de correo comercial nula y un estado honesto. Se probaron por separado estado pendiente y dirección de fixture aislada, sin envíos.
3. **P2, consistencia y densidad:** pie grande y repetición de bloques genéricos. Corregido con un pie único y contenido depurado. La comprobación del DOM encontró un único HTML de pie en las nueve rutas.
4. **P2, móvil:** control de menú en ventanas de poca altura. Se limita a la altura disponible y permite desplazamiento interno. Apertura, cierre con Escape y navegación comprobados. Las nueve páginas se comprobaron en 320, 390, 768 y 1440 px sin overflow; se revisó también el cambio de cabecera en 1024 y 1100 px.

## Validación

- `npm test`: nueve rutas, enlaces/activos/anclas, canonical y noindex, JSON-LD válido, dos builds idénticos, contactos pendiente/configurado y preservación exacta del archivo antiguo.
- `npm run build` y sintaxis JS: correctos.
- Navegador integrado Chromium: 36 comprobaciones de rutas/tamaños; cero imágenes fallidas, cero desbordamientos y cero errores de consola observados. Menú y desplegable de precio probados.
- Lighthouse accesibilidad: 100 en Inicio y Contacto. Es una comprobación automatizada de esas páginas, no certificación WCAG ni prueba en Safari/iPhone.
- Memoria: el checkout compartido contiene `builder/` antiguo no versionado; no se elimina trabajo ajeno para satisfacer el checker. Se comprueba la copia limpia de los archivos versionados antes de entregar.

## Límites aceptados

El correo comercial sigue pendiente por decisión y disponibilidad del usuario. No se afirma recepción de mensajes. No se cambia producción ni se promociona una preview automáticamente. La aprobación visual corresponde al usuario; se ha verificado el pulido, no una mejora de conversión medida.

final result: passed
