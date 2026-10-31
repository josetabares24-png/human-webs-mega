# Human Webs · puente selectivo entre bibliotecas
Consulta referencias **investigadas**, no recomendaciones estéticas aprobadas.

```sh
node tools/inspiration/bridge.mjs turismo conversion
node tools/inspiration/bridge.mjs turismo navegacion
node tools/inspiration/bridge.mjs restaurantes relato
node tools/inspiration/bridge.mjs servicios confianza
node tools/inspiration/bridge.mjs --check
node --test tools/inspiration/bridge.test.mjs
```

La herramienta combina `memory/SECTORS/catalog.json` (referencias exploratorias) con `design-library/index.json` (dos referencias medidas de restaurantes). El mapa `transfers.json` aporta puentes opcionales seleccionados manualmente; **ninguna combinación se genera de forma automática ni sustituye una investigación actual**.

Salida JSON: `sectorReferences` (referencias de ese sector), `crossSectorIdeas` (principios a explorar de otro), `limits` y estado de aprobación. Cualquier fuente externa requiere volver a verificarse; nunca copiar fotos, textos ni marcas. El puente debe satisfacer una tarea real: si no hay necesidad de cruzar sectores, no se utiliza.

Para personalizar una nueva transferencia, añadir un caso con identificadores reales de los catálogos y ejecutar `--check`. Ver [método completo](../../memory/CROSS-SECTOR-IDEAS.md).
