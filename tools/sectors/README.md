# Verificación de Human Webs por sector

```sh
node tools/sectors/check.mjs
```

Comprueba que los sectores estén accesibles desde `memory/SECTORS/catalog.json`, las fichas pertenezcan a su subcategoría, conserven URL/fuentes, advertencias de no copia, el estado **PENDIENTE**, y que los enlaces internos Markdown no estén rotos. Se ejecuta en GitHub Actions.

**Esto no comprueba que las webs externas sigan online, no captura pantallas, no valida preferencias del usuario ni mide calidad estética.** Para diseñar una web real: inspeccionar la fuente actual en navegador, tener activos autorizados, revisar móvil y seguir `memory/QUALITY-GATES.md`.

Para agregar un sector: crear carpeta con índice y ejemplos sustantivos; registrar en el catálogo con el estado correspondiente y actualizar el verificador sin asumir siempre diez casos. No añadir directorios vacíos ni duplicar capturas de la biblioteca histórica.

[Catálogo de sectores](../../memory/SECTORS/README.md).
