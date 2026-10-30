# Memoria visual de Human Webs

Esta biblioteca es memoria versionada del proyecto para el asistente. Guarda observaciones verificables y recetas separadas de ellas; no depende de recordar un chat. Las instrucciones de `AGENTS.md` y `prompts/bot.md` obligan a consultarla antes de diseñar.

Para elegir sin cargar toda la investigación:

```powershell
node tools/design-library/query.mjs premium
node tools/design-library/query.mjs carbone --recipe
node tools/design-library/query.mjs brunch --recipe
node tools/design-library/query.mjs --check
```

La primera consulta devuelve hasta tres resúmenes y rutas. La segunda entrega la receta seleccionada con su procedencia; abre después la ficha y solo las capturas necesarias. Repomix sigue sirviendo para orientarse en el código. No introducir imágenes ni todo el diario en cada prompt. Esto reduce contexto repetido; no garantiza un porcentaje de ahorro en facturación.

## Referencias disponibles

| Referencia | Caso | Estado | Ficha |
|---|---|---|---|
| [Carbone New York](https://carbonenewyork.com/) | Premium teatral | Observado el 30/10/2026, escritorio y móvil | [Medidas, fuentes y evidencias](references/carbone-new-york/2026-10-30/reference.json) |
| [Bon Bouquet Café](https://thehungryfamily.com/bon-bouquet-cafe/#menu) | Brunch lúdico | Observado el 30/10/2026, escritorio, móvil y carta enlazada | [Medidas, fuentes y evidencias](references/bon-bouquet-cafe/2026-10-30/reference.json) |

Las dos referencias fueron elegidas por el usuario por su diseño. Representan direcciones diferentes: editorial marino y lúdica verde/rosa. Elegir una combinación coherente para cada negocio; no mezclar piezas automáticamente. Los cinco casos anteriores siguen en `examples/restaurants/biblioteca.md`; no se han recapturado ni convertido automáticamente a este formato.

## Qué se conserva

- `index.json`: índice pequeño y buscable, sin capturas ni copy del sitio.
- `references/<caso>/<fecha>/reference.json`: fuente, alcance, fuentes tipográficas identificadas, medidas, evidencia y límites.
- JPEG originales: prueba visual de cada estado capturado. No son assets de producción para clientes.
- JSON de medidas: valores DOM computados y viewport. Un elemento `missing` significa que no apareció en ese selector; por ejemplo, la reserva móvil vive fuera del header.
- `recipes/`: decisiones originales reutilizables. Los números redondeados, fallbacks y reglas de implementación son adaptaciones, no mediciones nuevas.

## Añadir una referencia

1. Visitar la fuente real; capturar inicio, bloque editorial, acción principal y navegación a escritorio y 390px. Registrar fecha y viewport. Distinguir estados con consentimiento de capturas limpias.
2. Medir familias, pesos CSS, tamaños, interlineado, tracking, colores, borde, radio, sombra y padding. Identificar nombres reales en CSS/metadatos cuando sea posible; escribir «no medido» si falta evidencia.
3. Comprobar la interacción que define el patrón. Una carta cerrada no demuestra su formato: abrirla y verificar HTML, imagen o PDF.
4. Guardar capturas exactas, inspeccionarlas y enlazarlas desde la ficha. Documentar cambios de viewport, carga incompleta y limitaciones. No convertir una muestra en una afirmación de accesibilidad completa.
5. Crear una receta separada con contenido propio, opciones tipográficas autorizadas y comprobaciones de implementación. No descargar fuentes ni fotos ajenas para reutilizarlas.
6. Añadir el registro al índice, actualizar el diario y las cuatro tablas históricas, y ejecutar `--check`. Un caso debe conservar su combinación coherente de tipo, botones, color y composición.

Las capturas y fuentes externas conservan los derechos de sus titulares. La biblioteca registra investigación; la receta no concede permisos de uso sobre la marca, las imágenes o las fuentes observadas. No se ha instalado memoria global ni un servicio autónomo que rastree webs: el asistente actualiza este repositorio al investigar una referencia.
