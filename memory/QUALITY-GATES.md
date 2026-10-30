# Controles de calidad antes de entregar una web

Son puertas de verificación, no un test de marketing. Adaptar al alcance y al stack del cliente; **no certificar lo que no se midió**.

## Bloqueos (no entregar como terminada)
- [ ] Identidad, horarios, precios, servicios, imágenes, testimonios y datos de contacto proceden de datos reales autorizados; desconocidos marcados pendiente.
- [ ] Navegación, rutas, botones, teléfono, WhatsApp, reservas, formularios y pagos que se presentan como funcionales funcionan realmente.
- [ ] No hay secretos en código público, HTML, logs, repositorio, capturas ni variables expuestas. Validación de entradas, cabeceras y dependencias acorde al stack.
- [ ] Es legible y operable en móvil (comprobar como mínimo 390px) y escritorio; sin overflow, textos cortados ni controles inaccesibles.
- [ ] Build/typecheck/lint/tests adecuados al proyecto han sido ejecutados y sus resultados documentados, o se indican impedimentos.
- [ ] Contenido original: sin copia no autorizada de fotos, tipografías, logos ni textos de terceros.
- [ ] Publicar en producción, cambiar DNS, habilitar cobros o correos solo con autorización y comprobación de destino.

## Bloqueo de identidad para webs nuevas y rediseños
- [ ] Se consultaron referencias reales del sector y alguna transversal, registrando URLs, fecha y lo observado; cuando no hubo navegador, se indicó explícitamente y se usaron referencias ya documentadas.
- [ ] Existen tres direcciones visuales diferenciables en **algo más que el color**, con propuestas de layout, tipografía, fondo, tratamiento de imagen y CTA, documentadas según [ART-DIRECTION](ART-DIRECTION.md).
- [ ] Se escogió la dirección con razones del negocio, no por la plantilla habitual; se contrastó su huella visual con proyectos previos accesibles.
- [ ] No se ha elegido fondo terracota / arcilla / beige cálido ni combinación serif + cards como estilo por defecto; si aparece, se documentó la razón de identidad concreta.
- [ ] Se revisaron capturas de home y plantillas internas en móvil y escritorio. No basta con cambiar un único hex para reclamar una estética original.

Estos controles aplican a web nueva y rediseño visual, no obligan a rediseñar un sitio cuando solo se corrige un error técnico.

## Revisión UX / visual
- [ ] Dirección visual coincide con el brief y se aplica a home, navegación, pie, páginas internas y estados de formulario.
- [ ] Títulos específicos, jerarquía tipográfica, márgenes, contraste y botones coherentes.
- [ ] Revisar viewport 390px y 1280px; menús, imágenes, lectura, foco visible, teclado y target táctil cuando corresponda.
- [ ] No usar capturas de una única página como prueba de que todo el sitio está bien.

## SEO / contenido
- [ ] Cada ruta indexable tiene título/description útil y único, H1 adecuado, enlaces internos y contenido original.
- [ ] Canonical, sitemap, robots, redirects, hreflang y datos estructurados **solo cuando correspondan**; verificar dominio real y contenido publicado.
- [ ] Metadatos sociales y OG image con assets permitidos; noindex para previews según necesidad.
- [ ] SEO local no promete rankings ni resultados económicos.

## Performance / accesibilidad
- [ ] Imágenes optimizadas, dimensiones y lazy-loading prudente; comprobar LCP/CLS/INP con mediciones cuando sea posible.
- [ ] Semántica HTML, nombres accesibles, teclado, labels, errores de formulario, color/contraste y reduced motion.
- [ ] Automatizar Lighthouse/axe cuando estén disponibles y revisar manualmente: un resultado automático no certifica WCAG.

## Evidencia final
Entregar: rutas y funcionalidades cambiadas, commit/PR, URL preview si existe, comandos y resultados de pruebas, capturas o mediciones relevantes, limitaciones y pendientes. Distinguir **propuesto / implementado / probado / desplegado**.
