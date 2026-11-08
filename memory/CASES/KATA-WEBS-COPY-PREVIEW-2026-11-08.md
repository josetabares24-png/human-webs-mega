# KATA WEBs — revisión editorial aplicada en preview

**Fecha:** 2026-11-08 · **Estado:** desplegado en vista previa; producción sin cambios.

**Proyecto Vercel:** `kata-webs-prototipos` · **Despliegue:** `dpl_4wY7J4Rap5dmGnGuTRAYarvE5wKQ` · **Panel:** https://vercel.com/estabaenlisboa/kata-webs-prototipos/4wY7J4Rap5dmGnGuTRAYarvE5wKQ

## Alcance verificado
- Se recuperaron las nueve páginas HTML del sitio actual: inicio, servicios, restaurantes, oficios, dentistas, barberías, cómo trabajamos, preguntas y contacto.
- Se aplicaron **260 sustituciones** automáticas verificadas (incluidos textos de metadatos) con 0 reglas específicas sin coincidencia en la primera versión.
- Revisión de claridad, SEO técnico sin promesas de indexación, métricas (visitas y clics frente a reservas y llamadas confirmadas), Google Business Profile, formas de pago y funciones específicas por sector.
- Se preservó el titular distintivo original de la home: «Hacemos webs para que te llamen, no para que te miren».
- Se mantuvieron los CSS y JS originales, icono y OG; no se inventaron testimonios ni precios.
- Se conservaron noindex y robots de prototipo.

## Pruebas
- Despliegue Vercel READY.
- Las nueve rutas respondieron HTTP 200 en el preview autenticado.
- CSS, JS, favicon y OG respondieron HTTP 200.
- La página pública actual conserva su titular anterior y no fue reemplazada.
- La versión inglesa aún no está desplegada en el proyecto; la revisión cubre todas las páginas actualmente publicadas en español.
- No se ha ejecutado una QA visual real de pantallas móviles y escritorio ni una prueba automatizada completa de interacción.

## Paso de publicación
No promover este despliegue directamente a producción: el deploy de edición contiene únicamente el árbol `/web` y assets compartidos, no todos los prototipos y demostraciones originales del proyecto. La integración definitiva debe aplicar los cambios textuales en el código fuente completo de KATA y preservar las demás rutas, assets y la versión inglesa cuando exista. **Publicar requiere comprobación integral.**
