# KATA WEBs — manual editorial específico para la propuesta comercial

**Fecha:** 2026-11-08 · **Estado:** guía propuesta para revisión · **Proyecto:** https://kata-webs-prototipos.vercel.app/web/ · **Idiomas:** ES / EN · **Alcance:** marketing de KATA WEBs, no webs de clientes.

## Por qué existe este documento

KATA WEBs quiere captar negocios locales con webs útiles, no impresionar con adjetivos. La personalidad debe ser segura, clara, profesional, cercana sin exceso de confianza y concreta. **Profesional no significa grandilocuente; humano no significa informal por obligación.**

La web puede tener un diseño cuidado, pero ningún texto debe prometer clasificación en Google, ingresos, más clientes garantizados, llamadas registradas o integraciones que no estén implementadas y probadas. Diferenciar oferta disponible, capacidad técnica futura, complemento con coste aparte y ejemplo ficticio.

Conservar el estilo y diseño vigente si ya funciona; esta guía no autoriza rediseños ni cambios productivos. KATA WEBs no es Estaba en Lisboa ni la marca personal.

## Voz de marca

- **Quién habla:** un estudio pequeño y resolutivo que hace webs para negocios reales. Usar «hacemos», «preparamos», «revisamos», «te enseñamos». No fingir un equipo de 20 personas, certificaciones ni experiencia no documentada.
- **A quién:** dueños de restaurantes, personas de oficios, clínicas dentales, barberías y otros comercios. Cada sector tiene necesidades, presupuesto y lenguaje propios.
- **Registro:** profesional, natural y fácil de leer. Tuteo moderado si el resto del sitio lo usa. No tratar como ingenuo al lector ni añadir emojis para parecer accesible.
- **Argumento comercial:** qué información encontrará su cliente, qué acción podrá realizar y cómo se preparará la web para que buscadores la entiendan. Sin garantías de resultados.
- **Idioma:** redactar la versión inglesa como texto original equivalente, no traducción literal del español. Revisar el registro de profesionales del mercado objetivo.
- **Diferenciación real:** hablar de cómo será la web en cada negocio y enseñar ejemplos honestamente identificados como *demo*.

## Filtro editorial contra el copy de plantilla

1. **Quitar frases intercambiables:** «elevamos tu negocio al siguiente nivel», «soluciones digitales innovadoras», «transformamos tu presencia online», «experiencias únicas», «unlock your potential», «stand out in a crowded marketplace». Son alertas, no una lista universal de palabras prohibidas.
2. **Una sección, una función:** el hero explica la oferta; ejemplos muestran; proceso despeja dudas; sector resuelve necesidades específicas; CTA indica un próximo paso.
3. **Escribir con verbos y objetos reales:** «mostrar la carta», «pedir una cita», «enviar fotos de la avería», «ver la zona de servicio», «abrir la ubicación».
4. **No reutilizar el mismo copy con cambiar el sector.** Un dentista no vende pedidos para llevar; un fontanero normalmente quiere recibir llamadas y solicitudes de presupuesto, no presentar una carta.
5. **Ritmo humano:** alternar longitud de frases donde convenga, leer en voz alta y permitir frases cortas. No imitar patrones fijos de tres beneficios ni forzar preguntas al inicio de cada bloque.
6. **SEO compatible:** conservar las keywords concretas («web para restaurantes», «web para fontaneros», etc.) cuando aporten orientación. No sustituir términos buscados por sinónimos artificiosos.
7. **Veracidad:** no inventar casos, cifras, precios, testimonios, porcentajes de conversión, clientes ni funcionamiento de Stripe, reservas, formularios o paneles.
8. **CTA verificable:** «Ver una demo» cuando abre una demo; «Pedir una propuesta» solo si existe un canal real de contacto. Si aún no funciona, corregir la UX o marcar como pendiente, nunca afirmar que ya funciona.

## Propuesta de titulares y texto breve — BORRADOR, no publicado

| Página | Titular sugerido | Apoyo sugerido | CTA sugerido |
| --- | --- | --- | --- |
| Inicio | Una web donde tus clientes encuentren lo que necesitan | Hacemos páginas para negocios locales. Mostramos tus servicios, horarios, ubicación y formas de contacto sin complicar lo sencillo. | Ver ejemplos / Cuéntanos tu negocio |
| Restaurantes | Tu carta, tus fotos y cómo reservar. Todo fácil de encontrar. | Si alguien descubre tu restaurante desde el móvil, debería poder ver qué ofreces y cómo llegar. Podemos incluir reservas o pedidos cuando tu negocio los necesite. | Ver demo de restaurante |
| Oficios | Que sepan qué reparas y cómo localizarte | Servicios, zonas donde trabajas y una forma clara de llamarte o pedir presupuesto. Si necesitas recibir fotos, podemos preparar esa opción. | Ver demo de oficios |
| Dentistas | Una web que explique tu clínica con claridad | Tratamientos, equipo, ubicación y cómo solicitar cita. Información fácil de consultar, sin afirmaciones médicas que no hayas aprobado. | Ver demo de clínica |
| Barberías | Que puedan ver tu trabajo antes de pedir cita | Fotos auténticas, servicios y horarios confirmados. La reserva se añade si ya tienes un sistema o contratas uno. | Ver demo de barbería |

**Los títulos anteriores son candidaturas editoriales, no sustituciones literales aprobadas.** Deben contrastarse con los titulares reales de cada ruta y verificarse las funciones antes de implementarlos.

### Un ejemplo de diferenciación por lengua

- **ES:** «Hacemos webs para negocios locales. Tu carta, tus servicios y tu forma de contacto, sin que el cliente tenga que buscar de más».
- **EN (copy propio, no calco):** «Your customers should be able to find the menu, service or contact details they came for. We build clear websites for local businesses.»
- No usar traducción palabra por palabra si suena antinatural ni afirmar que los ejemplos corresponden a funcionalidades ya probadas.

## Proceso obligatorio en KATA WEBs antes de publicar copy

1. Extraer texto visible de **todas** las rutas: hero, títulos, cuerpo, botones, FAQ, pie, alt, meta y mensajes de formularios; comparar también ES/EN.
2. Preparar una matriz por ruta: destinatario, problema real, servicio comprobado, CTA real, datos pendientes, palabras clave SEO.
3. Redactar primera versión desde hechos. Evitar crear nuevas funciones, testimonios o promesas para rellenar diseño.
4. Ejecutar **primero** el revisor propio: `node tools/copy/lint.mjs --lang es borrador-es.md` y `node tools/copy/lint.mjs --lang en borrador-en.md`. Consultar `tools/copy/README.md`. El linter se ejecuta desde Human Webs con copias autorizadas o se porta al repo cliente; no afirmar que lee Vercel automáticamente.
5. Para inglés, probar adicionalmente Vale y/o plain-english **solo tras revisar seguridad, licencia, versión, dependencias y compatibilidad**. Para español usar principalmente las reglas propias y edición humana; no ejecutar herramientas EN sobre ES.
6. Revisar manualmente naturalidad, especificidad, matices y voz; no aplicar reemplazos automáticos, no borrar términos SEO solo para evitar avisos.
7. Leer en móvil y desktop: frases largas, CTA, cortes, accesibilidad y resultado del clic.
8. Guardar cambios en rama de preview, comparar antes/después y someter a revisión. **No publicar producción sin autorización.**

## Fuentes abiertas verificadas el 2026-11-08

- [Human Webs: herramienta local](../../tools/copy/README.md) — ES/PT-PT/EN, ya existente; debe ser primera opción.
- [avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing) — guía para reescribir patrones de estilo preservando voz y evidencias, referencia editorial, no detector fiable.
- [anti-ai-writing](https://github.com/avectats7/anti-ai-writing) — guía EN/ES; repositorio pequeño y reglas muy prescriptivas. Usar como revisión secundaria, nunca prohibir puntuación o estructuras legítimas en bloque.
- [Vale](https://github.com/vale-cli/vale) — linter de estilo configurado por nuestras reglas; buena opción futura para automatización de revisiones.
- [plain-english](https://github.com/nordscope-fi/plain-english) — chequeo de clichés y jerga en inglés, integración con Codex; el propio proyecto advierte de falsos positivos y que no demuestra autoría.
- [proselint](https://github.com/amperser/proselint) — clichés, redundancias, registros burocráticos y comerciales, principalmente en inglés.
- [LanguageTool](https://github.com/languagetool-org/languagetool) — gramática y ortografía multilingües si se instala en entorno autorizado.

## Estado técnico y siguientes pasos (no confundir con ejecución)

Al 2026-11-08 el prototipo KATA WEBs está desplegado mediante Vercel CLI en el proyecto `kata-webs-prototipos`, con páginas ES y ejemplos de cuatro sectores. El despliegue está en READY, pero no se identificó un GitHub conectado al despliegue. **No se ha cambiado el sitio en producción ni instalado los linters externos.** Para automatizar, primero localizar o crear un repositorio de código del sitio, sincronizar fuentes reales y configurar revisión editorial al generar cambios.

## Aceptación

- Páginas distinguibles entre sí por su contenido y necesidades, no solo por nombre del oficio.
- CTA comprobado, no simulado.
- En ES y EN no hay frases promocionales vacías dominantes; todas las afirmaciones relevantes pueden respaldarse.
- Ningún lenguaje promete «primer puesto en Google» ni ventas aseguradas.
- Revisión humana final y publicación separadas.
