# Portfolio V6: implementación y límites — 2026-11-03

**Estado:** IMPLEMENTADO EN PREVIEW, **NO APROBADO visualmente y NO publicado en producción**. 
**Repositorio destino:** https://github.com/josetabares24-png/Portfolio 
**PR:** https://github.com/josetabares24-png/Portfolio/pull/5
**Rama:** `preview/portfolio-humanweb-v6-2026-11-03`
**Commit confirmado:** `3d636ee85a0c14834b084860c5b5791e73cb37d6`
**Preview informada por Vercel en el PR:** https://portfolio-git-preview-portfolio-humanweb-942c8a-estabaenlisboa.vercel.app/
**Vercel:** estado `success` en el commit del PR; no atribuir una revisión visual remota exhaustiva por ello.

## Material realmente ejecutado
- Site multipágina con Vite: `/`, `/proyectos/estaba-en-lisboa/` (proyecto editorial propio), `/proyectos/mil-sabores/` (trabajo web para restauración).
- Display tipográfico en hero, dos portadas gráficas diferenciadas, índice con hover, enfoque, bio, contacto `mailto:`.
- Menú móvil que se puede cerrar con Escape, foco visible, reduced motion. `requestAnimationFrame` de cursor solo cuando hover está activo; se cancela al salir.
- Fuente web declarada: **Barlow Condensed** y **DM Sans** vía Google Fonts; fallback del sistema para navegación offline. El navegador local bloquea navegación de red, de modo que carga efectiva remota de fuentes no validada.
- Documentación `AGENTS.md` en el repo de destino para vincularlo con esta memoria maestra.
- `noindex,nofollow` en las tres rutas, orientado exclusivamente a preview.

## QA ejecutada / evidencia y límites
Chromium local sin navegación (HTML, CSS y JS inyectados desde el código fuente exacto). Capturas a 390, 768, 1280 y 1440 px de home, más casos a 390 y 1280. En esas pruebas: body.scrollWidth = viewport, cero errores JS, menú abierto/cerrado con Escape, hover del índice funcionando, reduced motion desactiva ticker y preview. Node syntax check de JS y Vite config; HTML parser de las tres páginas. La compilación del último commit fue confirmada por Vercel tras PR. Las capturas locales quedan como evidencia temporal en la conversación, no archivos del repo GitHub (API de escritura usada acepta texto).

**No afirmar realizado:** screenshots/videos auténticos de `estabaenlisboa.com` y `milsaboresbrunch.com`; navegador local bloqueó esos dominios. Las portadas son composiciones tipográficas originales y están identificadas como tales en sitio y documentación. La preview remota no pudo abrirse mediante el navegador de herramientas, aunque GitHub/Vercel sí informó estado READY.

## Antes de aprobar producción
1. Evaluación estética del usuario frente a Eliot Besson, sin asumir que le guste V6 por estar desplegada.
2. Obtener capturas y grabaciones auténticas y autorizadas de los proyectos, sustituyendo artwork cuando mejore la presentación.
3. Comprobar fuentes descargadas realmente, imágenes, URL remota en escritorio/móvil y performance de carga.
4. Validar email comercial, necesidad de inglés, condiciones de SEO y dominio definitivo.
5. Mantener PR draft; no fusionar sin aprobación.

## Aprendizaje transferible
La diferencia entre un portfolio hecho en CSS y uno que demuestra el oficio está en mostrar trabajos reales (capturas/recorridos) y casos con evidencia. Un deploy READY y capturas locales de artwork no cubren ese requisito visual; registrarlo como bloqueo pendiente, no como meta alcanzada. Las referencias de turismo y restaurantes son casos, no identidad global del estudio personal.
