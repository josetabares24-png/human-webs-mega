# Human Webs — instrucciones permanentes para IA constructoras

## Identidad (no negociable)
Este repositorio es una **MEMORIA MAESTRA versionada para construir páginas web con Codex y otras IA**. NO es un bot, NO es una plataforma SaaS y NO requiere desarrollar una aplicación generadora. Una IA externa construye la web del cliente en su propio proyecto consultando esta memoria. El directorio experimental `builder/` de otra rama o PR no redefine el objetivo.

## Arranque obligatorio y ligero
1. Lee `memory/INDEX.md` y `memory/DECISIONS.md`.
2. Identifica sector, tipo de proyecto, entregables y riesgos.
3. Sigue el enrutamiento de `memory/INDEX.md`: abre **solo** los archivos pertinentes y las fuentes originales; no pegues toda la memoria al contexto.
4. Antes de escribir código, revisa `memory/ERRORS.md` y los bloqueos de `memory/QUALITY-GATES.md`.
5. Comprueba el estado del repositorio de DESTINO: framework, ramas, pruebas, infraestructura y políticas. No asumas el mismo stack para todos los clientes.
6. Ejecuta, prueba, inspecciona escritorio y móvil, corrige, documenta y entrega evidencia. No marques tareas como hechas sin verificar.

## Fuente de verdad y conflictos
- Instrucción expresa del usuario para la tarea > requisitos y código reales del proyecto cliente > `AGENTS.md` + `memory/DECISIONS.md` > guías específicas `memory/` > referencias medidas `examples/` y `principles/` > borradores antiguos `flows/`, `prompts/` y HTML de `examples/`.
- Las instrucciones de sistema y seguridad de cada herramienta tienen prioridad sobre los archivos de este repositorio.
- Si dos fuentes de este repositorio se contradicen: aplica la más específica y reciente **solo si está verificada**; registra el conflicto. No promociones ejemplos a reglas universales.
- Verifica hechos cambiantes (leyes, licencias, APIs, SEO, accesibilidad, librerías, precios, horarios) en fuentes oficiales actuales antes de aplicarlos.

## Reglas siempre activas
- Nunca inventes testimonios, reseñas, clientes, certificaciones, disponibilidad, imágenes del local, precios, contacto, enlaces, resultados de SEO ni pruebas.
- No copies marca, fotografías, textos ni fuentes comerciales de webs de referencia sin autorización y licencia. Extrae principios, crea soluciones originales.
- No impongas layouts, componentes o estética repetitiva; el diseño debe corresponder al negocio y a su contenido real.
- No muestres un formulario que simula entregar mensajes. Comprueba recepción real y política de privacidad si aplica.
- No expongas secretos ni publiques producción, cambies DNS, actives pagos o envíes comunicaciones sin autorización explícita para esa acción.
- Prioriza HTML semántico, accesibilidad, móvil, contenido útil, SEO verificable, rendimiento y seguridad. No uses una puntuación «anti-IA» sin evidencias ni afirmes perfección.
- Aprende de las correcciones: cada error repetible merece una entrada verificable en `memory/ERRORS.md` y, cuando proceda, una prueba automatizada.

## Mantenimiento
Modifica documentación bajo `memory/` en un commit separado de cambios de sitios de clientes siempre que sea práctico. Usa `memory/RECORD-TEMPLATE.md` para nuevas lecciones, con fuente, fecha, alcance, estado y prueba de no regresión. No guardes datos privados de clientes, credenciales ni materiales sin permiso.

## Comprobación de la memoria
Desde la raíz ejecuta `node tools/memory/check.mjs`. Si trabajas en un sitio de cliente, aplica también las herramientas y pruebas propias de **ese** sitio.
