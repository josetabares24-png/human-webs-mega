# Contexto de código con menos tokens

Se ha integrado [Repomix](https://github.com/yamadashy/repomix), versión **1.18.1**, licencia MIT, como herramienta local de desarrollo. Está aislado en `tools/context`: no aumenta las dependencias, el JavaScript ni los costes de ejecución de las webs de clientes.

## Medición local

Mismo conjunto de **31 archivos**, misma configuración de inclusión y codificación **o200k_base**:

| Paquete | Tokens |
|---|---:|
| Código completo con envoltorio XML | 34.700 |
| Índice Repomix comprimido | 6.378 |
| Reducción del paquete | **81,62 %** |

No es una compresión sin pérdida: Tree-sitter conserva estructura y firmas y omite implementación. Es un mapa para localizar símbolos; los cambios se deciden leyendo el código original. Los recuentos dependen de la versión del código, la selección y el tokenizador; no representan una reducción garantizada de la facturación total de Codex ni de las llamadas de IA del generador. No se ha enviado el repositorio a ningún proveedor para hacer esta medición.

## Reproducir

Desde la raíz:

```bash
npm --prefix tools/context ci --ignore-scripts
npm --prefix tools/context run pack
npm --prefix tools/context run benchmark
```

`pack` genera solo el índice; `benchmark` compara completo y comprimido. Los paquetes y métricas se guardan en `.codex-context/`, excluido de Git. El índice es `.codex-context/human-webs.xml`; la comparación reproducible está en `.codex-context/metrics.json`.

Para trabajar: empezar por `rg` en el código si se conoce el símbolo. Solo si se necesita orientación global, generar el índice y buscar fragmentos en él. Abrir después el rango de código original necesario. No leer todo el paquete por defecto. `AGENTS.md` guarda estas convenciones para próximos trabajos.

## Selección y límites

| Alternativa | Evaluación y decisión |
|---|---|
| [Repomix](https://github.com/yamadashy/repomix) | MIT, proyecto con CLI, documentación y [releases mantenidas](https://github.com/yamadashy/repomix/releases/tag/v1.18.1). Node >=22 compatible con este repo. Elegido para contexto de código y recuento local. |
| [TOON](https://github.com/toon-format/toon) | MIT, codificación compacta de objetos JSON para prompts. Útil para datos tabulares del generador, pero no sustituye un mapa del código. No se añade otra dependencia para este objetivo. |
| `rg` y lecturas acotadas | Primera opción para tareas concretas: frecuentemente necesitan menos contexto que cualquier paquete global. |

La configuración JSON usa una lista de inclusión cerrada y excluye entornos, secretos, logs, dependencias, builds, lockfiles, capturas y copias de clientes. El escaneo Secretlint sigue activado; si encuentra archivos sospechosos, el wrapper falla y no presenta el índice como utilizable. La detección de secretos es heurística: revisa cualquier contenido antes de compartirlo.

Se revisaron las [advertencias de seguridad de Repomix](https://github.com/yamadashy/repomix/security) y se fijó la versión actual en un lockfile separado. Solo se procesa este checkout local; no se activa su servidor MCP, configuración remota, subida, portapapeles ni envío a modelos. La instalación se ejecuta con `--ignore-scripts`. `npm audit` informó cero vulnerabilidades en la instalación registrada. CI vuelve a comprobar instalación, sintaxis, generación y auditoría de la herramienta.

El flujo funcional del builder y los contratos JSON de su IA se mantienen. Esta mejora reduce el contexto de desarrollo que necesito consultar; no altera aprobación de publicación ni fusiona main.
