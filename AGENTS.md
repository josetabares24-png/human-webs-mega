# Trabajo con contexto reducido

- Para localizar código, empieza con `rg`; lee solo los archivos y rangos relevantes. No vuelques todo el repositorio ni los lockfiles a la conversación.
- Si necesitas un mapa global, genera el índice local con `npm --prefix tools/context run pack` después de instalar sus dependencias mediante `npm --prefix tools/context ci --ignore-scripts`. Busca símbolos en `.codex-context/human-webs.xml` y abre solo el fragmento relevante. Para una búsqueda concreta, `rg` directo sigue siendo preferible a generar o leer el índice completo.
- El índice Repomix elimina detalles de implementación: sirve para orientación, nunca para decidir una corrección sin leer el código original. Regénéralo después de cambiar código si vas a utilizarlo.
- No incluyas `.env`, credenciales, logs, builds, dependencias, capturas ni copias de proyectos de clientes en el contexto. No desactives la comprobación de secretos ni publiques los paquetes de contexto.
- Resume resultados de herramientas y pruebas; muestra detalles completos solo ante un fallo relevante. Tras cambios, ejecuta las comprobaciones apropiadas, sin repetir suites superadas si no hay cambios o dudas nuevas.
- `builder/README.md` y `docs/ARCHITECTURE.md` describen el producto. Para estética, lee `prompts/bot.md` y la biblioteca indicada allí antes de cambiar diseños.
- El PR usa la rama `feat/instant-web-builder-mvp`. Publicar clientes o fusionar main requiere aprobación explícita. Reducir contexto no permite omitir verificaciones ni inventar resultados.
