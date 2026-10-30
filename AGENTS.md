# Human Webs — instrucciones permanentes para IA constructoras

## Identidad (no negociable)
Este repositorio es una **MEMORIA MAESTRA versionada para construir páginas web con Codex y otras IA**. NO es un bot, NO es una plataforma SaaS y NO requiere desarrollar una aplicación generadora. Una IA externa construye la web del cliente en su propio proyecto consultando esta memoria. El constructor web autónomo fue descartado por decisión del usuario. No crear ni restaurar `builder/` ni convertir esta memoria en aplicación. El PR histórico del constructor está cerrado.

## Arranque obligatorio y ligero
1. Lee `memory/INDEX.md` y `memory/DECISIONS.md`.
2. Identifica sector, tipo de proyecto, entregables y riesgos. **Consulta [memory/SECTORS/README.md](memory/SECTORS/README.md)** y abre exclusivamente la subcategoría del cliente: restaurantes no son servicios profesionales; belleza no es reparación del hogar. Para servicios, revisar su [playbook](memory/SECTORS/servicios/PLAYBOOK.md).
3. **No confundir investigación con aprobación:** referencias exploratorias deben quedar marcadas `PENDIENTE`; no trasladar gustos de otras webs al usuario sin feedback explícito. Evitar atribuir capturas de archivo como capturas móviles actuales.
4. Sigue el enrutamiento de `memory/INDEX.md`: abre **solo** los archivos pertinentes y las fuentes originales; no pegues toda la memoria al contexto. Para webs nuevas y rediseños, lee `memory/ART-DIRECTION.md` y consulta `design-library/` antes de elegir colores o composición.
5. Antes de escribir código, revisa `memory/ERRORS.md` y los bloqueos de `memory/QUALITY-GATES.md`.
6. Comprueba el estado del repositorio de DESTINO: framework, ramas, pruebas, infraestructura y políticas. No asumas el mismo stack para todos los clientes.
7. Ejecuta, prueba, inspecciona escritorio y móvil, corrige, documenta y entrega evidencia. No marques tareas como hechas sin verificar.

## Fuente de verdad y conflictos
- Instrucción expresa del usuario para la tarea > requisitos y código reales del proyecto cliente > `AGENTS.md` + `memory/DECISIONS.md` > guías específicas `memory/` > referencias medidas `examples/` y `principles/` > borradores antiguos `flows/`, `prompts/` y HTML de `examples/`.
- Las instrucciones de sistema y seguridad de cada herramienta tienen prioridad sobre los archivos de este repositorio.
- Si dos fuentes de este repositorio se contradicen: aplica la más específica y reciente **solo si está verificada**; registra el conflicto. No promociones ejemplos a reglas universales.
- Verifica hechos cambiantes (leyes, licencias, APIs, SEO, accesibilidad, librerías, precios, horarios) en fuentes oficiales actuales antes de aplicarlos.

## Reglas siempre activas
- Nunca inventes testimonios, reseñas, clientes, certificaciones, disponibilidad, imágenes del local, precios, contacto, enlaces, resultados de SEO ni pruebas.
- No copies marca, fotografías, textos ni fuentes comerciales de webs de referencia sin autorización y licencia. Extrae principios, crea soluciones originales.
- **Antirrepetición obligatoria:** nada de fondo terracota/arcilla, beige cálido ni el mismo hero, tarjetas y botones por defecto. Ni siquiera repetir la misma solución con una paleta diferente. Solo usar esos colores si los exige una identidad existente o hay un motivo concreto documentado.
- En web nueva/rediseño, **investiga referencias actuales y originales** (fuente, fecha, características verificables), explora **tres direcciones visuales sustancialmente diferentes** y decide según marca, contenido, accesibilidad y conversión. Si no puedes navegar, usa referencias verificadas de la biblioteca y declara esa limitación. No afirmes haber visitado una web sin haberlo hecho.
- Compara paleta, estructura, tipografía, navegación, fotografía y CTAs con los proyectos previos disponibles; evita repetir su huella visual. Registra elección y opciones descartadas en el trabajo del cliente; sigue `memory/ART-DIRECTION.md`.
- **En rediseños:** preserva el baseline de la web existente y las decisiones `LOCKED` de marca. Una demo sin imágenes/logo/tipografía realmente cargados no pasa como propuesta visual completa. Exige comparación antes/después en iguales condiciones, mejoras concretas y ausencia de regresiones. Si lo nuevo no supera al original, recomienda conservarlo; no defiendas el rediseño solo por ser distinto. Consulta el [caso Mil Sabores](memory/CASES/MIL-SABORES-REJECTED-PROTOTYPE-2026-10-30.md).
- **Copy anti-plantilla obligatorio:** antes de redactar lee [VOICE-AND-COPY](memory/VOICE-AND-COPY.md) y el branding del cliente. Titulares, CTA y párrafos específicos del negocio, sin «experiencia única», «momentos inolvidables» ni «explosão de sabores» como relleno. Evitar que las secciones arranquen todas igual. Revisar repetición entre rutas y, cuando convenga, usar [linter local](tools/copy/README.md) con revisión humana; nunca sustituir keywords útiles, nombres propios ni eslóganes reales automáticamente. No afirmar que un linter detecte autoría IA.
- **Contexto sectorial:** no copiar «menú» de restaurantes en webs de servicios; diferenciar reservar una cita, pedir presupuesto y contactar. Una plataforma de profesionales no es el mismo negocio que un autónomo: no implementar rankings, calendarios o pagos que no existan. Consultar [sectores](memory/SECTORS/README.md) y, en servicios, verificar zona, credenciales, alcance, CTA real, consentimiento y casos auténticos.
- No impongas layouts, componentes o estética repetitiva; el diseño debe corresponder al negocio y a su contenido real.
- No muestres un formulario que simula entregar mensajes. Comprueba recepción real y política de privacidad si aplica.
- No expongas secretos ni publiques producción, cambies DNS, actives pagos o envíes comunicaciones sin autorización explícita para esa acción.
- Prioriza HTML semántico, accesibilidad, móvil, contenido útil, SEO verificable, rendimiento y seguridad. No uses una puntuación «anti-IA» sin evidencias ni afirmes perfección.
- Aprende de las correcciones: cada error repetible merece una entrada verificable en `memory/ERRORS.md` y, cuando proceda, una prueba automatizada.

## Mantenimiento
Modifica documentación bajo `memory/` en un commit separado de cambios de sitios de clientes siempre que sea práctico. Usa `memory/RECORD-TEMPLATE.md` para nuevas lecciones, con fuente, fecha, alcance, estado y prueba de no regresión. No guardes datos privados de clientes, credenciales ni materiales sin permiso.

## Comprobación de la memoria
Desde la raíz ejecuta `node tools/memory/check.mjs`. Si trabajas en un sitio de cliente, aplica también las herramientas y pruebas propias de **ese** sitio.

## Usar esta memoria desde OTRO repositorio
Codex detecta AGENTS.md automáticamente **solo en el árbol de trabajo actual**. No suponerse que ha leído Human Webs si el sitio del cliente está en otro repositorio. Antes de programar en un cliente, abrir esta memoria como segundo checkout o acceso GitHub y seguir `memory/START-HERE.md`; el AGENTS.md del cliente sigue aplicándose a sus archivos. Otras IA también requieren cargar el índice de forma explícita. Confirmar qué rutas se leyeron; no fingir acceso.
