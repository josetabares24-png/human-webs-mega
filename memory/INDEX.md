# Índice de memoria maestra

**Objetivo:** navegación selectiva, no un prompt gigantesco. Versión: 1.2 · Actualizado: 2026-10-31.

## Ruta universal (leer primero)
- [Decisiones vigentes](DECISIONS.md): qué es Human Webs y prioridades.
- [Errores conocidos](ERRORS.md): fallos concretos y cómo no repetirlos.
- [Controles de entrega](QUALITY-GATES.md): bloqueos y evidencias mínimas.

## Biblioteca por sector — entrada recomendada
**[Elegir sector antes de investigar](SECTORS/README.md):** restaurantes, servicios y **turismo**; este último distingue destinos, excursiones, agencias y alojamiento. La sección servicios está dividida en hogar, belleza, profesionales e inmobiliaria/interiores. Leer solo la carpeta pertinente y **nunca asumir que una referencia estudiada fue aprobada**.

## Leer solo según el encargo
| Encargo | Documentación |
|---|---|
| CTAs sin flechas decorativas ni iconos gratuitos | **[Interacciones de texto primero](TEXT-FIRST-INTERACTIONS.md)**: regla aprobada, excepciones funcionales y QA |
| Aprovechar una idea de otro sector sin copiar la web | **[Cruce entre bibliotecas](CROSS-SECTOR-IDEAS.md)** y [consulta CLI](../tools/inspiration/README.md): usarlo solo cuando resuelva una necesidad |
| Tipografías, botones CTA y animaciones | **[Biblioteca tipográfica y de microinteracciones](TYPOGRAPHY-CTA-MOTION.md)**: referencias, parejas, implementación en Next y autoprompt; NO instalar todas por defecto |
| Crear web nueva o rediseño | **[ART-DIRECTION](ART-DIRECTION.md)**, [WORKFLOW](WORKFLOW.md), [DESIGN](DESIGN.md), [QUALITY-GATES](QUALITY-GATES.md) |
| Futuro del diseño 2027 y herramientas | **[RADAR-2027](TRENDS-2027.md)**, [herramientas GitHub](TOOLS-2027.md), [preflight](../tools/design-preflight/README.md) |
| Buscar ideas, evitar terracota repetido | [INSPIRATION-SOURCES](INSPIRATION-SOURCES.md), [biblioteca visual](../design-library/README.md), [ficha creativa](DESIGN-DIRECTION-TEMPLATE.md) |
| Lecciones de rediseño rechazado | [Mil Sabores: prototipo inferior](CASES/MIL-SABORES-REJECTED-PROTOTYPE-2026-10-30.md), **[Estaba en Lisboa: Atlántico rechazado por apariencia IA](CASES/ESTABA-EN-LISBOA-ATLANTICO-REJECTED-2026-10-31.md)**, [seis mockups con marca también rechazados](CASES/ESTABA-LISBOA-SIX-BRANDED-MOCKUPS-REJECTED-2026-10-31.md), [errores](ERRORS.md) |
| Turismo: mapas, tours, viajes y hoteles | **[Turismo](SECTORS/turismo/README.md)**, [12 estudios](SECTORS/turismo/COMPARATIVA-VISUAL.md), **[6 referencias editoriales cruzadas](SECTORS/turismo/direccion-arte-editorial/README.md)**, [playbook](SECTORS/turismo/PLAYBOOK.md), [catálogo](SECTORS/catalog.json) |
| Web de servicios — presupuesto, cita o consulta | **[Servicios](SECTORS/servicios/README.md)**, [comparativa de 10 webs](SECTORS/servicios/COMPARATIVA-VISUAL.md), [playbook](SECTORS/servicios/PLAYBOOK.md), [catálogo](SECTORS/catalog.json) |
| Referencias de restaurante en revisión (5 casos) | [Ursula, La Semilla, BAVET, Lucky Folks y Brunchit](REFERENCES/RESTAURANTS-2026-10-30/INDEX.md) — **pendiente de preferencias del usuario** |
| Diseño de restaurante | [entrada por sector](SECTORS/restaurantes/README.md), [biblioteca de restaurantes](../examples/restaurants/biblioteca.md), [diario](../examples/restaurants/learning-log.md), [memoria visual](../design-library/README.md), [DESIGN](DESIGN.md) |
| Redacción o SEO | **[VOICE-AND-COPY](VOICE-AND-COPY.md)**, [COPY-SEO](COPY-SEO.md), [herramientas de copy](COPY-TOOLS.md), [revisor local](../tools/copy/README.md), [redacción humana](../principles/human-copy.md) |
| Código, despliegue, formularios | [TECHNICAL](TECHNICAL.md), [QUALITY-GATES](QUALITY-GATES.md) |
| Corregir incidencia o actualizar memoria | [ERRORS](ERRORS.md), [RECORD-TEMPLATE](RECORD-TEMPLATE.md) |

## Usar desde otra IA / otro repositorio
- [Prompt portátil y montaje de memoria](START-HERE.md). El acceso no se hereda automáticamente cuando se abre el repositorio de un cliente.

## Antirrepetición (nuevas webs/rediseños)
No elegir una paleta predeterminada. Usar tres direcciones realmente distintas (no solo variaciones de color), fuentes de inspiración con fecha, selección justificada y comparación con proyectos previos cuando estén disponibles. Ver **[ART-DIRECTION](ART-DIRECTION.md)**.

## Qué NO incluir como contexto automáticamente
- Copias completas del repo, ejemplos HTML antiguos, capturas, lockfiles, secretos o expedientes de clientes.
- Conclusiones basadas en estudios de caso que no corresponden al sector.
- Afirmaciones sin fecha, medición, enlace o estado. Si la fuente es antigua o no comprobada, marcarla como hipótesis.

## Ciclo de aprendizaje
Brief -> contexto específico -> código -> prueba en navegador -> fallo observado -> causa -> regla concreta -> test/criterio verificable -> entrada versionada -> próximo trabajo.

La memoria no garantiza cero errores: hace más probable detectarlos antes de entregar.
