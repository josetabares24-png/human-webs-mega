# KATA WEBs — auditoría de lanzamiento y mejoras ejecutadas

**Fecha:** 2026-11-09. **Estado:** vista previa lista, sitio publicado sin modificar.

## Evidencia técnica y entrega
- Proyecto Vercel: kata-webs-prototipos. Despliegue: dpl_22JSEhnnDooWpKjkmBwBGNDVoruM. URL: https://kata-webs-prototipos-9gjoim1f2-estabaenlisboa.vercel.app/web/
- El acceso al preview requiere autenticación o un enlace temporal de revisión. El sitio público principal se conserva: https://kata-webs-prototipos.vercel.app/web/
- Se preservaron los archivos y demos del despliegue original; 117 entradas de archivos en el nuevo despliegue.
- Web comercial: 10 páginas (inicio, servicios, restaurantes, oficios, dentistas, barberías, cómo trabajamos, preguntas, contacto, ejemplos).
- Página nueva de ejemplos: cuatro demostraciones identificadas como ficticias, con enlaces a versiones navegables para restaurantes, fontanería, clínica dental y barbería.
- Dos referencias externas reales, Mil Sabores y Estaba en Lisboa, identificadas como proyectos de la persona detrás de KATA, sin testimonios ni cifras inventadas.
- Thumbnails WebP de entre 12 y 23 KB, carga diferida y dimensiones declaradas.
- Redacción por sector respaldada por la guía editorial de Human Webs; sin prometer primer puesto ni indexación garantizada.

## SEO y lanzamiento
- Se conservaron metadatos de página y se agregó la página de ejemplos al sitemap del prototipo.
- BLOQUEO DE LANZAMIENTO: el prototipo tiene noindex y robots Disallow: /. No es un error mientras sea preview. Antes de indexar un dominio definitivo se deben retirar ambas restricciones, cambiar URLs absolutas canonical, Open Graph, JSON-LD, sitemap, revisar redirecciones y verificar con Search Console.
- La versión en inglés aún no está desplegada. Cuando exista, usar contenido original equivalente, canonicals por idioma y hreflang recíproco.
- No crear páginas de zonas o servicios duplicadas para aparentar cobertura SEO. Priorizar textos originales, ejemplos navegables y enlaces útiles.
- Fuente: https://developers.google.com/search/docs/essentials
- Idiomas: https://developers.google.com/search/docs/specialty/international/localized-versions

## Seguridad comprobada
- La vista previa recibe CSP de navegador para las rutas web, X-Content-Type-Options nosniff, X-Frame-Options DENY, Referrer-Policy strict-origin-when-cross-origin y Permissions-Policy restrictiva.
- HTTPS está activo; no se incluyeron formularios de captación falsos ni pagos operativos.
- Ajustar la CSP en el futuro si se integran Stripe, analítica o servicios externos. Evaluar seguridad con OWASP Top 10:2025: https://top10.owasp.org/2025/es/
- El sitio enlaza a correo personal mediante mailto. Eso no mide ni garantiza conversión; elegir dirección profesional y comprobar recepción.
- Valorar alojamiento local de tipografías y revisar consentimiento antes de añadir analíticas o cookies no necesarias.

## QA
- HTTP 200: diez páginas comerciales, cuatro demos, estilos y cuatro imágenes WebP.
- Chrome headless/Playwright: 390, 768, 1440 píxeles, sin desbordamientos horizontales, errores JavaScript ni solicitudes fallidas en home y ejemplos.
- Menú móvil probado; enlace Ejemplos visible; cuatro miniaturas cargadas.
- Axe-core WCAG 2/2.1 A/AA, siete páginas en entorno local: cero infracciones automatizadas. No equivale a certificación de accesibilidad ni sustituye revisión manual.
- Lighthouse se intentó sin conseguir medición válida. No citar una puntuación inventada.

## Marca
Recomendación provisional: conservar KATA WEBs, que ya tiene identidad visual y un titular distintivo. Existen empresas llamadas Kata en diseño y marketing, incluida https://www.kataagency.com/en/about y https://www.kataconsulting.co/; no equivalen por sí mismas a una infracción. Comprobar INPI portugués, EUIPO/TMview, OMPI, dominios y redes en mercados objetivo antes de registrar o comprar. No asumir disponibilidad del .pt o .com.
Fuentes: https://servicosonline.inpi.pt/pesquisas/main/marcas.jsp?lang=PT y https://justica.gov.pt/Registos/Propriedade-Industrial/Marca/Como-registar-marcas-ou-outros-sinais

## Privacidad, legal y datos bloqueantes
- El artículo 10 del Decreto-Lei 7/2004 recoge exigencias de identificación y contacto del prestador en Portugal, incluido NIF según corresponda. Fuente oficial: https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-73199154-73197494
- Las reglas europeas de información sobre tratamiento de datos exigen definir identidad, finalidades, base jurídica, plazos y derechos aplicables, entre otros. Fuente: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en
- No publicar NIF, domicilio, nombre social, política de privacidad ni periodos de conservación inventados. Recopilar y autorizar datos reales antes de lanzamiento.
- No instalar banner de cookies por estética: comprobar primero las tecnologías efectivamente utilizadas y obligaciones locales.

## Prioridad operativa

P0 antes de producción:
1. Validar marca y dominio.
2. Confirmar datos de identidad legal y preparar información de privacidad conforme al caso real.
3. Configurar email comercial y probar recepción y trazabilidad de consultas.
4. Crear repositorio Git versionado con código y assets completos: el proyecto actual Vercel no tiene fuente Git conectada identificada, Human Webs es memoria, no código del sitio.
5. Completar la versión inglesa o no anunciarla hasta que esté revisada.
6. Cambiar canonicals/OG/schema/sitemap al dominio real y retirar noindex solo al abrir oficialmente.
7. Verificar derechos y permiso de exposición de ejemplos reales.

P1 después de activar el dominio:
- Medir clics de contacto y leads confirmados sin inventar llamadas completadas.
- Optimizar imágenes de las demos que aún sean demasiado grandes al abrir sus páginas completas.
- Terminar revisión manual de accesibilidad, teclado, foco y contraste.
- Documentar mantenimiento, backup, dominio a nombre del cliente y proceso de entrega.

No ejecutado: compra de dominio, registro de marca, despliegue en producción, versión en inglés, formulario real, pagos, analíticas y publicación legal.
