# Memoria visual documentada de Human Webs

Esta biblioteca conserva **investigación**, no código de un constructor. Se migró desde el PR experimental del Builder a la memoria maestra. Las capturas son evidencias de estudio: **no se deben reutilizar como recursos de webs comerciales**.

## Consultar rápido

```sh
node tools/design-library/query.mjs premium
node tools/design-library/query.mjs brunch
node tools/design-library/query.mjs carbone --recipe
node tools/design-library/query.mjs bon-bouquet-cafe --recipe
node tools/design-library/query.mjs --check
```

El índice `index.json` devuelve fichas pertinentes. La receta sólo se usa si encaja con el caso y se compara con **otras** direcciones; **no es una plantilla universal**. Sigue [ART-DIRECTION](../memory/ART-DIRECTION.md).

## Sectores y fichas exploratorias
Los casos medidos de este directorio son, por ahora, **restaurantes**. Para localizar estudios por tipo de negocio sin mover capturas ni recetas existentes, consulta [biblioteca por sectores](../memory/SECTORS/README.md). Allí hay [10 servicios investigados](../memory/SECTORS/servicios/README.md) y [referencias de restaurantes](../memory/SECTORS/restaurantes/README.md). No mezclar niveles de evidencia ni marcar como medidos los casos sin inspección DOM.

## Estudios exploratorios nuevos (NO medidos ni aprobados)
La biblioteca conserva dos casos medidos. Cinco nuevos análisis basados en páginas originales y capturas de estudios/terceros están en [cinco restaurantes en revisión](../memory/REFERENCES/RESTAURANTS-2026-10-30/INDEX.md). **No están incorporados a `index.json`** porque no tienen DOM medido ni capturas móviles verificadas, y el usuario todavía no ha aprobado rasgos visuales de esas cinco webs. No presentar esos ejemplos como referencias validadas en el mismo nivel que Carbone y Bon Bouquet.

## Casos con observación y medidas

| Referencia | Carácter visual observado | Evidencia |
|---|---|---|
| [Carbone New York](https://carbonenewyork.com/) | Marino y marfil, editorial teatral, tipografía condensada, menú HTML y navegación móvil observada | [Ficha](references/carbone-new-york/2026-10-30/reference.json) |
| [Bon Bouquet Café](https://thehungryfamily.com/bon-bouquet-cafe/#menu) | Verde y rosa, brunch lúdico, máscaras fotográficas, collage y carta enlazada | [Ficha](references/bon-bouquet-cafe/2026-10-30/reference.json) |

Ambos registros son del 30 de octubre de 2026. Las fuentes o medidas de esos sitios pueden cambiar; no presentar investigaciones antiguas como «estado actual» sin revisarlas. Los ejemplos de restaurantes anteriores están en [biblioteca histórica](../examples/restaurants/biblioteca.md). Estas dos direcciones prueban que **no existe un fondo terracota obligatorio**.

## Formato y límites

- `index.json`: búsqueda pequeña con fuentes y etiquetas.
- `references/<sitio>/<fecha>/reference.json`: observación verificada, fecha, tipografías, métricas y límites.
- JPEG: capturas de investigación, no assets que podamos vender ni reutilizar en clientes.
- JSON de medidas: valores observados en escritorio y móvil; «missing» no significa que el elemento no exista en toda la web.
- `recipes/*.json`: adaptaciones originales basadas en observaciones; **no** equivalen a fuentes/imagenes licenciadas.

## Añadir nuevas referencias
1. Investigar sitios originales en navegador y registrar fecha + viewport (al menos 390px y escritorio si es posible).
2. Observar composición, tipografía, color, menú, CTAs, fotografía, navegación y estados. Separar hechos de hipótesis.
3. Registrar evidencia y límites, incluidos los estados de consentimiento y carga. No inventar mediciones ni inferir interacción sin probarla.
4. Construir una receta **original** aplicable a un caso específico y registrar qué no se debe copiar.
5. Actualizar índice y validar con `node tools/design-library/query.mjs --check`.
6. Comparar con los demás casos y con [errores](../memory/ERRORS.md): no convertir un color o composición en plantilla predeterminada.

La presencia de fotos o fuentes de terceros en la investigación **no concede permiso** para redistribuir sus recursos en una web nueva.
