# Selección de herramientas — 30 octubre 2026

Se conservan Next.js y React en lugar de migrar el proyecto. Se consultaron repositorios y documentación oficiales; versiones efectivas y dependencias transitivas están en `builder/package-lock.json`. Las estrellas indican comunidad observada, no garantía de seguridad. La auditoría npm se ejecuta además de comprobar licencias; cero alertas conocidas no demuestra ausencia de vulnerabilidades.

| Solución | Mantenimiento y comunidad observados | Licencia / compatibilidad | Decisión y seguridad |
|---|---|---|---|
| [Zod](https://github.com/colinhacks/zod) | Documentación y rama 4 activas; comunidad amplia (~44k estrellas observadas) | MIT; TS/Node/navegador; 4.6.7 instalada | Elegido: un contrato de ejecución infiere los tipos y genera JSON Schema. Validación estricta antes de renderizar. |
| [Ajv](https://github.com/ajv-validator/ajv) | Proyecto consolidado con documentación, política de seguridad y amplia comunidad (~15k) | MIT; JSON Schema y Node/browser | Alternativa válida si se intercambian esquemas externos complejos. No añadir un segundo validador que pueda divergir de los tipos. |
| [fflate](https://github.com/101arrowz/fflate) | Biblioteca especializada con documentación y comunidad menor (~3k) | MIT; JS/browser; 0.8.3 instalada | Elegida para ZIP. Solo se comprimen archivos de nombre cerrado y tamaño acotado; la app no descomprime ZIP no confiables. Menor alcance que introducir un editor completo. |
| [Playwright](https://github.com/microsoft/playwright) | Microsoft; releases y comunidad muy amplias (~99k) | Apache-2.0; pruebas Node sobre Chromium/Firefox/WebKit | Elegido solo en desarrollo; los recorridos actuales usan Chromium. No afirmar cobertura Safari/Firefox. |
| [axe-core](https://github.com/dequelabs/axe-core) | Deque; proyecto dedicado a reglas automáticas de accesibilidad | MPL-2.0; integración Playwright 4.14.0 instalada | Solo pruebas, sin modificar ni distribuir el motor en webs de clientes. Complementa revisión manual, no certifica WCAG. |
| [Dexie](https://github.com/dexie/Dexie.js) | Repositorio activo y comunidad amplia (~15k) | Apache-2.0; IndexedDB | Pospuesto: los registros acotados actuales caben en almacenamiento nativo; no resuelve por sí mismo sincronización ni permisos remotos. Reconsiderar para archivos y mayor capacidad offline. |
| [GrapesJS](https://github.com/GrapesJS/grapesjs) | Framework especializado con ecosistema de plugins y SDK | Revisar la licencia de cada paquete/SDK elegido; no se ha integrado | Pospuesto: edición visual libre introduce una superficie de HTML/CSS/plugins que el motor de componentes seguros no necesita todavía. Revisar licencias, sanitización y sandbox antes de adoptar paquetes concretos. |

No se ha copiado una web de terceros. Se reutilizan principios tipográficos del repositorio con fallbacks del sistema; no se redistribuyen fuentes comerciales. No se añaden SDK de proveedores para un único request HTTP. Las dependencias de ejecución añadidas son Zod y fflate; el resto amplía comprobaciones de desarrollo.

## Fuentes técnicas contrastadas

- [Next.js: actualización de seguridad de octubre](https://nextjs.org/blog/nextjs-security-update-october-14-2026) y [política de soporte](https://nextjs.org/support-policy). Se conserva 15.5.28 y se corrige PostCSS transitivo con override 8.5.32. Es necesario planificar la migración de la rama 15 antes de terminar su soporte.
- [Zod: uso y validación](https://zod.dev/basics).
- [AI Gateway: API Chat Completions](https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-chat-completions) y [catálogo vivo](https://ai-gateway.vercel.sh/v1/models). Modelo y costes quedan bajo configuración del operador; no se consumieron créditos.
- [Vercel: crear despliegue](https://vercel.com/docs/rest-api/deployments/create-a-new-deployment).
- [GitHub: repositorios](https://docs.github.com/en/rest/repos/repos) y [árboles Git](https://docs.github.com/en/rest/git/trees).
