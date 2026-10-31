# Human Webs — memoria maestra para IA constructoras

Human Webs **no es un bot ni una aplicación para crear webs**. Es la memoria versionada que consultan Codex y otras IA al desarrollar sitios para clientes: conocimiento visual, decisiones, errores detectados, SEO, accesibilidad y pruebas. El código de cada web se construye en su repositorio de destino.

**Decisión 30/10/2026:** se descarta el constructor autónomo experimental. El código `builder/` **no está en `main`** y el PR del constructor se cierra; no reabrirlo por defecto. Conservamos aquí las investigaciones de diseño, separadas de la app descartada.

## Arranque rápido

1. Leer [AGENTS.md](AGENTS.md) y [índice de memoria](memory/INDEX.md).
2. Si Codex trabaja en otro repositorio, usar el [prompt de conexión](memory/START-HERE.md); no tiene acceso automático.
3. Para **una web nueva o rediseño**, abrir [dirección artística antirrepetición](memory/ART-DIRECTION.md), [diseño](memory/DESIGN.md) y [biblioteca visual](design-library/README.md).
4. Buscar referencias reales **distintas para cada negocio**, comparar tres direcciones con variaciones de composición, tipografía y paleta, elegir y construir.
5. Antes de entregar, comprobar [errores conocidos](memory/ERRORS.md), [calidad](memory/QUALITY-GATES.md) y pruebas del proyecto.
6. Documentar el aprendizaje con la [plantilla](memory/RECORD-TEMPLATE.md).

## Bibliotecas organizadas por tipo de web

- [Ver sectores](memory/SECTORS/README.md) y su [catálogo estructurado](memory/SECTORS/catalog.json).
- [Restaurantes](memory/SECTORS/restaurantes/README.md): conserva las investigaciones de Bon Bouquet, Carbone y cinco estudios exploratorios, sin mover las fichas históricas ni sus capturas.
- **[Turismo](memory/SECTORS/turismo/README.md): 12 estudios** entre [destinos](memory/SECTORS/turismo/destinos-guias/README.md), [actividades](memory/SECTORS/turismo/excursiones-actividades/README.md), [agencias](memory/SECTORS/turismo/agencias-circuitos/README.md) y [alojamientos](memory/SECTORS/turismo/alojamientos/README.md). Incluye [comparativa visual](memory/SECTORS/turismo/COMPARATIVA-VISUAL.md), [playbook](memory/SECTORS/turismo/PLAYBOOK.md) y [estándar](memory/SECTORS/turismo/ESTANDAR-DE-FICHAS.md). Investigación **no medida** y pendiente de aprobación.
- [Servicios](memory/SECTORS/servicios/README.md): 10 estudios en [hogar](memory/SECTORS/servicios/hogar/README.md), [belleza](memory/SECTORS/servicios/belleza/README.md), [profesionales](memory/SECTORS/servicios/profesionales/README.md) e [inmobiliaria/interiores](memory/SECTORS/servicios/inmobiliaria-interiores/README.md), una [comparativa visual](memory/SECTORS/servicios/COMPARATIVA-VISUAL.md), [estándar](memory/SECTORS/servicios/ESTANDAR-DE-FICHAS.md) y un [playbook](memory/SECTORS/servicios/PLAYBOOK.md) para presupuestos, zonas, reservas y confianza.

Estas fichas de servicios **son referencias investigadas, no diseños aprobados** por el usuario ni capturas CSS medidas. No se ha construido ningún constructor ni se han tocado webs de clientes.

## Biblioteca y conocimiento conservado

- [Memoria visual documentada](design-library/README.md): referencias, capturas de investigación, medidas y recetas originales. Incluye [búsqueda local](tools/design-library/query.mjs).
- [Fuentes de inspiración comprobadas](memory/INSPIRATION-SOURCES.md): directorios para investigar webs actuales; visitar y verificar cada sitio original.
- [Principios](principles/pre-ai-web-design.md), [copy natural](principles/human-copy.md), [guía de voz y copy](memory/VOICE-AND-COPY.md) y [UX móvil](examples/mobile-ux-patterns.md).
- [Revisor de textos local](tools/copy/README.md): advertencias ES/PT/EN sobre clichés y repeticiones, con pruebas automáticas; [investigación de herramientas externas](memory/COPY-TOOLS.md).
- [Restaurantes](examples/restaurants/biblioteca.md), [diario de observaciones](examples/restaurants/learning-log.md): observaciones específicas; jamás un molde universal.
- [Errores](memory/ERRORS.md): incluye el uso repetido de fondos terracota y diseños indistinguibles.
- [Caso Mil Sabores](memory/CASES/MIL-SABORES-REJECTED-PROTOTYPE-2026-10-30.md): prototipo rechazado frente a una web real existente; **distinto no es mejor**. Las demos incompletas sin imágenes cargadas no son pruebas de superioridad visual.

## Regla estética fundamental

**No usar terracota, marrones, fondos crema o «estilo editorial IA» como comodín.** No están prohibidos cuando forman parte de una marca real, pero se exige una razón verificable. Cambiar solamente el color de un template no cuenta como otra dirección. La diferencia debe afectar composición, jerarquía, imagen, navegación y personalidad.

`node tools/memory/check.mjs` valida la estructura y rutas documentales; `node tools/design-library/query.mjs --check` valida la biblioteca con sus evidencias. Estas comprobaciones no sustituyen una revisión visual humana.

## Historial

El [constructor experimental (PR #1)](https://github.com/josetabares24-png/human-webs-mega/pull/1) quedó descartado por petición del usuario. [README histórico](archive/README-legacy-2026-10-30.md) y [prompt histórico](archive/bot-contract-legacy-2026-10-30.md) se conservan solo para trazabilidad, no como instrucciones vigentes. Las versiones históricas de Git pueden conservar commits aunque se eliminen archivos de las ramas actuales.
