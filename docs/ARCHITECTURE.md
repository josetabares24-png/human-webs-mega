# Human Webs: taller local y conectores opcionales

La aplicación reutiliza el MVP Next.js/React de `builder/`. No ejecuta código generado por modelos ni necesita credenciales para generar, guardar, editar con comandos o exportar una web.

## Flujo

1. `components/studio.tsx`: panel de creación, proyectos, conversación, versiones y previa.
2. `lib/schema.ts`: contratos Zod versionados para briefing, sitio, páginas, proyectos y copias. Rutas enumeradas; tamaños limitados; campos desconocidos rechazados.
3. `lib/engine.ts`: interpretación local conservadora, elección de sector/estilo y cuatro páginas. Un restaurante obtiene carta; otros negocios obtienen servicios. Datos desconocidos quedan pendientes. Edición local explícita y actualización de datos sin perder titulares personalizados.
4. `lib/design.ts`: tres composiciones originales con tokens de color, familias/fallbacks, radio, borde, sombra, CTA y estructura. `lib/render.ts` comparte cabecera, menú HTML, contacto, navegación y SEO.
5. La previa es un documento Blob revocable dentro de `sandbox="allow-scripts"`, **sin `allow-same-origin`, formularios ni acceso al documento padre**. Solo un script fijo de navegación está permitido por su hash CSP. No contiene código del usuario o del modelo. Una prueba comprueba el hash y otra comprueba que no puede leer `parent.document`. Los textos siguen escapados.
6. Las webs exportadas son archivos HTML independientes, sin JavaScript ejecutable, fuentes remotas ni fotos ficticias. JSON-LD usa `\\u003c` para impedir salir del elemento. Los enlaces del ZIP apuntan a archivos existentes. Un formulario solo aparece con endpoint HTTPS configurado y consentimiento obligatorio; en la previa está deshabilitado.
7. `lib/projects.ts`: persistencia local con esquema validado. Hasta 40 proyectos y 50 versiones por proyecto; restaurar añade una versión. La importación crea copias nuevas. Un fallo de lectura o cuota se comunica y no borra los datos originales. Hay copia JSON y descarga de datos originales para recuperación.
8. `lib/quality.ts`: bloqueos de identidad/contacto, SEO, enlaces, peso y avisos de contenido/dominio/formulario/revisión humana. No certifica WCAG ni Core Web Vitals.
9. `lib/export.ts`: ZIP editable y conjunto separado de archivos públicos. JSON de edición e informe quedan fuera de Vercel/GitHub. SHA-256 liga la revisión al contenido público exacto.

## IA

`POST /api/generate` usa la API compatible Chat Completions de AI Gateway. El modelo se configura en servidor con un ID del catálogo actual; no se inventa un ID ni se guarda una recomendación fija. La salida pide JSON Schema y se valida de nuevo con Zod. La IA puede cambiar copy y estilo, conservando el inventario de rutas y todos los datos operativos originales. Los datos factuales se cambian en Datos o mediante comandos locales explícitos. No hay generación libre de componentes ni ejecución de HTML/CSS/JS del modelo.

El timeout de proveedor es 45 s; el navegador espera como máximo 55 s. Si falla la primera generación con IA, se entrega el borrador local y se informa. Una edición fallida conserva la versión anterior. La redacción requiere revisión humana: validar el esquema no demuestra que una frase sea cierta.

## Operaciones con credenciales

Las API de IA, Vercel y GitHub requieren un token de operador configurado en servidor (mínimo 32 caracteres), comparación de tiempo constante y comprobación de origen. La clave de operador introducida en el panel solo vive en memoria. Las credenciales de los proveedores nunca viajan al navegador, al HTML, a GitHub ni al almacenamiento del proyecto. Se limitan cuerpos por bytes incluso sin Content-Length, peticiones por proceso y tiempos de red. No se imprimen errores de proveedor que puedan contener datos sensibles.

Vercel: aprobación explícita + confirmación de contenido + digest + informe sin bloqueos. Proyecto dedicado `human-webs-<UUID>`; la UI guarda el identificador del despliegue en sessionStorage y permite verificarlo sin volver a publicar. Solo el estado remoto READY con proyecto y digest coincidentes permite mostrar una URL publicada. No se reintenta automáticamente una creación tras un fallo de red.

GitHub: aprobación separada, repositorio privado dedicado en la cuenta del token, comprobación de propietario y marca de proyecto, rama por versión, commit con digest. No actualiza ni fusiona main. Reintentar la misma versión devuelve la rama existente solo si el contenido coincide.

## Límites para convertirlo en un SaaS

Es un taller para un operador. No incorpora cuentas multiusuario, aislamiento por tenant, sincronización de proyectos, base de datos remota, cobros, dominios automáticos, tienda o reservas propias. localStorage no es una copia de seguridad y puede agotarse; varias pestañas pueden competir por guardar: usa una sola pestaña de edición y descarga copias.

Antes de ofrecer cuentas de clientes: sustituir `projects.ts` por un repositorio con autorización por usuario, migraciones y backups, cambiar la clave compartida por sesiones y permisos, registrar aprobaciones y despliegues en almacenamiento duradero y añadir límites de gasto/rate limit distribuidos. Mantener el esquema de sitio y el render seguro permite hacer esa transición sin rehacer el motor. No guardar credenciales en las tablas de proyectos. La futura facturación debe usar webhooks verificados e idempotencia; no hay botones de pago simulados.

La publicación remota, el modelo y la recepción real del formulario deben validarse con las cuentas/endpoints del operador. Los tests con respuestas controladas comprueban el contrato y el flujo, no esas cuentas.
