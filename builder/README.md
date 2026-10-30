# Human Webs — taller de creación de webs

Aplicación Next.js que amplía el MVP existente. Genera una web estática de cuatro páginas, permite editarla, conservar versiones y descargar el código. Funciona sin claves en modo local; IA, GitHub y publicación Vercel son conectores opcionales protegidos.

## Ejecutar en tu ordenador

Requiere Node 22 o posterior (validado con Node 24) y npm.

```bash
cd builder
npm ci
npm run dev
```

Abre http://localhost:3000. Para usar el build de producción:

```bash
npm run build
npm run start
```

## Usar el taller

1. Escribe una idea, por ejemplo «Necesito una web para una barbería premium en Lisboa». El modo local reconoce sector, ciudad y estilo; no inventa nombre ni contacto.
2. Completa los datos reales. Servicios/carta admite una línea por concepto: `Nombre | precio | descripción`. Precio y descripción pueden quedar vacíos.
3. Crea la primera versión. Navega dentro de la previa o usa su selector de páginas; alterna escritorio/móvil.
4. Selecciona una página en la previa. Conversación local: `Titular: …`, `Texto: …`, `SEO: …` y `Título SEO: …` cambian esa página. «Hazlo más elegante» o «hazlo oscuro» cambian el estilo de toda la web; `Descripción: …` y `Contacto: …` modifican datos generales. Las instrucciones no reconocidas explican sus límites. Con IA configurada puedes pedir cambios abiertos de copy y dirección visual.
5. Página permite editar navegación, titular, texto y metadatos sin IA. Guarda antes de cambiar de página o herramienta; cada guardado con cambios crea una versión. Datos actualiza el negocio; Estilo cambia composición; Versiones restaura sin borrar versiones anteriores; Calidad muestra bloqueos y avisos. La navegación dentro de la previa sincroniza la página seleccionada del editor.
6. Descarga el ZIP con HTML, proyecto editable, informe, configuración Vercel y sitemap/robots cuando hayas indicado una URL final.
7. Mis proyectos y Conexiones permiten exportar/importar copias JSON. Los proyectos se guardan en este navegador: no están sincronizados en la nube. Hasta 40 proyectos y 50 versiones por proyecto. Usa una pestaña de edición y conserva copias.

Los datos incompletos quedan señalados. No se generan fotos, precios, horarios, reseñas ni testimonios ficticios. El formulario solo se incluye si configuras un servicio HTTPS real de recepción. El código exportado envía POST con `name`, `email`, `message`, `consent`; la previa desactiva el envío. Debes verificar recepción y condiciones de privacidad con tu servicio.

## Configurar los conectores

Copia `.env.example` a `.env.local` y configura únicamente las integraciones que quieras usar. No subas este archivo a Git ni pegues sus claves en el chat.

| Variable de servidor | Uso |
|---|---|
| `HUMAN_WEBS_OPERATOR_TOKEN` | Secreto propio de al menos 32 caracteres aleatorios. Autoriza las operaciones del taller. |
| `HUMAN_WEBS_APP_ORIGIN` | Origen exacto de la app si el proxy cambia el origen de las peticiones; por ejemplo `http://localhost:3000`. |
| `AI_GATEWAY_API_KEY` | Credencial AI Gateway para ejecución local. En Vercel puede usarse su OIDC automático. |
| `AI_GATEWAY_MODEL` | ID actual del catálogo https://ai-gateway.vercel.sh/v1/models con salida estructurada. Sin valor, IA está deshabilitada. |
| `HUMAN_WEBS_VERCEL_TOKEN` | Credencial Vercel del operador con acceso al equipo de destino. |
| `HUMAN_WEBS_VERCEL_TEAM_ID` | Equipo Vercel opcional. |
| `HUMAN_WEBS_GITHUB_TOKEN` | Credencial de la cuenta que creará repositorios privados dedicados; necesita crear repositorios y escribir contenido. Usa un token con alcance mínimo apropiado a tu cuenta. |

Reinicia el servidor. En Conexiones introduce solo la **clave de operador**, que vive en memoria; las credenciales de proveedores permanecen en el servidor. Activa IA conscientemente: enviarás el briefing al proveedor y consumirás sus créditos. La IA devuelve JSON validado, nunca código arbitrario. No puede cambiar contactos, endpoints ni rutas; los hechos del negocio se editan en Datos. La generación inicial prepara el sitio completo; las ediciones posteriores envían al proveedor solo la página seleccionada y los datos relevantes, y reciben un parche de campos. El estilo puede cambiar para toda la web. Si una generación inicial falla, la app conserva una alternativa local; una edición fallida no sustituye la versión anterior.

## Publicar con aprobación

Publicar muestra la versión concreta y exige revisar contenido y aceptar avisos, además de marcar «Apruebo publicar esta versión en Vercel». Identidad o contacto inválidos bloquean la acción. La aprobación queda ligada al SHA-256 de los archivos públicos.

Cada proyecto usa un destino independiente `human-webs-<UUID>`. La creación puede tardar: pulsa Comprobar estado para consultar Vercel. Solo se muestra una URL verificada al recibir READY y comprobar proyecto y digest. Ante fallo de red, revisa Vercel antes de reintentar; no se recrea automáticamente el despliegue.

Guardar en GitHub requiere una aprobación separada. Crea un repositorio privado de cliente y una rama por versión, sin actualizar ni fusionar main. No es necesario para descargar ni publicar directamente en Vercel. El JSON editable y el informe privado se excluyen de ambos envíos. Una publicación manual del ZIP debe excluir esos JSON y README.

Para alojar el taller en Vercel: Root Directory **builder**, framework Next.js y Node 24. Configura secretos en el servidor. Este taller tiene una clave de operador compartida; aún no es un servicio multiusuario para clientes. No publiques el taller ni webs de clientes sin la aprobación correspondiente. El repositorio no incluye un workflow de despliegue automático.

## Comprobar el código

```bash
npm run check
npx playwright install chromium
npm run test:e2e
npm run format:check
npm audit
```

La CI activa en `.github/workflows/builder.yml` usa Linux y ejecuta instalación reproducible, formato, lint, TypeScript, pruebas, build, auditoría de ejecución y Chromium. Se ejecuta al actualizar el PR o las ramas configuradas cuando cambia el builder o el workflow. Consulta sus resultados en [GitHub Actions](https://github.com/josetabares24-png/human-webs-mega/actions/workflows/builder.yml). Las pruebas externas usan respuestas controladas: no gastan créditos, publican webs ni crean repositorios reales. La CI no despliega ni fusiona cambios.

Consulta [auditoría](../docs/AUDIT-2026-10-30.md), [verificación y límites](../docs/VERIFICATION.md), [arquitectura](../docs/ARCHITECTURE.md), [diseño](../docs/DESIGN.md) y [selección open source](../docs/OPEN-SOURCE.md). No se afirma certificación WCAG, Core Web Vitals de producción ni integraciones remotas verificadas sin credenciales.
