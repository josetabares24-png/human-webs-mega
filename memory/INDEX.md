# Índice de memoria maestra

**Objetivo:** navegación selectiva, no un prompt gigantesco. Version: 1.0 · Actualizado: 2026-10-30.

## Ruta universal (leer primero)
- [Decisiones vigentes](DECISIONS.md): qué es Human Webs y prioridades.
- [Errores conocidos](ERRORS.md): fallos concretos y cómo no repetirlos.
- [Controles de entrega](QUALITY-GATES.md): bloqueos y evidencias mínimas.

## Leer solo según el encargo
| Encargo | Documentación |
|---|---|
| Crear web nueva o rediseño | [WORKFLOW](WORKFLOW.md), [DESIGN](DESIGN.md), [QUALITY-GATES](QUALITY-GATES.md) |
| Diseño de restaurante | [biblioteca de restaurantes](../examples/restaurants/biblioteca.md), [diario](../examples/restaurants/learning-log.md), [DESIGN](DESIGN.md) |
| Redacción o SEO | [COPY-SEO](COPY-SEO.md), [redacción humana](../principles/human-copy.md) |
| Código, despliegue, formularios | [TECHNICAL](TECHNICAL.md), [QUALITY-GATES](QUALITY-GATES.md) |
| Corregir incidencia o actualizar memoria | [ERRORS](ERRORS.md), [RECORD-TEMPLATE](RECORD-TEMPLATE.md) |

## Usar desde otra IA / otro repositorio
- [Prompt portátil y montaje de memoria](START-HERE.md). El acceso no se hereda automáticamente cuando se abre el repositorio de un cliente.

## Qué NO incluir como contexto automáticamente
- Copias completas del repo, ejemplos HTML antiguos, capturas, lockfiles, secretos o expedientes de clientes.
- Conclusiones basadas en estudios de caso que no corresponden al sector.
- Afirmaciones sin fecha, medición, enlace o estado. Si la fuente es antigua o no comprobada, marcarla como hipótesis.

## Ciclo de aprendizaje
Brief -> contexto específico -> código -> prueba en navegador -> fallo observado -> causa -> regla concreta -> test/criterio verificable -> entrada versionada -> próximo trabajo.

La memoria no garantiza cero errores: hace más probable detectarlos antes de entregar.
