# Preflight de diseño — Human Webs

Verificador **local** y sin dependencias. Comprueba si un brief está documentado y si las tres opciones son diferencias **declaradas** de composición, tipografía, imágenes, navegación, interacción y contenido, **sin contar los colores**.

```sh
node --test tools/design-preflight/check.test.mjs
node tools/design-preflight/check.mjs tools/design-preflight/fixtures/good-new.json
node tools/design-preflight/check.mjs --json tools/design-preflight/fixtures/bad-recolored-clones.json
```

Para un **rediseño** exige cuatro rutas de capturas del sitio actual (home/interior, escritorio/móvil) y un contrato de continuidad (logo, paleta/tipos, fotografías, copy, navegación, SEO, negocio). Los textos son auto-declarados: **el script no comprueba que existan ni inspecciona las capturas**.

Los ejemplos son sintéticos. `good-redesign-structure-only.json` tiene rutas inventadas **como fixture** y no es una aprobación ni permiso para codificar. El reviewer debe abrir imágenes verdaderas, confirmar activos y comparar original y propuesta.

Un `exit 0` NO prueba gusto, belleza, originalidad, rendimiento, SEO, derechos ni ausencia de apariencia IA. Solo indica que los campos formales están completos. Además, un modelo puede engañar el comparador cambiando palabras; la decisión exige juicio humano.

Consultar [dirección artística](../../memory/ART-DIRECTION.md), [tendencias](../../memory/TRENDS-2027.md) y [herramientas](../../memory/TOOLS-2027.md).
