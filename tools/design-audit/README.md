# Auditoría de flechas decorativas en componentes de interfaz

Herramienta pequeña y sin dependencias externas. Lee HTML, JSX, TSX, Vue, Svelte, Astro, MDX y CSS, y marca **candidatos**: flechas visibles, entidades HTML e iconos direccionales frecuentes.

```sh
node tools/design-audit/arrows.mjs /ruta/al/proyecto
node tools/design-audit/arrows.mjs /ruta/al/proyecto --json
node tools/design-audit/arrows.mjs /ruta/al/proyecto --strict
node --test tools/design-audit/arrows.test.mjs
```

- **Modo normal:** advertencias con ruta/línea; devuelve éxito aunque aparezcan flechas, porque algunos usos son funcionales.
- **`--strict`:** devuelve código 1 cuando hay candidatos sin justificar. Usarlo con revisión humana y excepciones documentadas, no a ciegas en webs antiguas.
- **Excepción:** añadir un comentario `human-web-arrow-functional: explicación concreta` justo sobre el control, o `data-arrow-purpose="carousel"` en la misma línea de su icono cuando proceda. Esta excepción no valida accesibilidad.
- **Límites:** no interpreta componentes, CSS generado, iconos como imágenes, CSS `content` escapado, ni analiza si un icono es decorativo. Un 0 hallazgos no certifica diseño humano, WCAG o coherencia de marca.
- **Seguridad:** solo lee archivos; ignora `node_modules`, `.next`, `.git`, `build` y otras carpetas generadas, y no sigue enlaces simbólicos.

Para escanear un cliente, ejecutar desde su checkout con ruta a este script, **sin copiar el repo cliente a Human Webs**. Ver [interacciones de texto primero](../../memory/TEXT-FIRST-INTERACTIONS.md) y [puertas de calidad](../../memory/QUALITY-GATES.md).
