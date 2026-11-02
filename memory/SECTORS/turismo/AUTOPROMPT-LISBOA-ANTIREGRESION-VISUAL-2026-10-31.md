# Autoprompt de reconstrucción visual — Estaba en Lisboa
**Fecha:** 2026-10-31 · **Estado:** crítica de entregas rechazadas y brief creativo obligatorio para un PR futuro. **NO implica aprobación de una propuesta, aumento de madurez ni cambio en producción**.

## Punto de partida y decisión
El usuario ha rechazado explícitamente las tres últimas láminas **01 Lisboa Editorial**, **02 Lisboa a tu manera** y **03 Las otras Lisboas**, preparadas en la conversación como `Estaba_en_Lisboa_MASTER_A/B/C.png`. La nota de auditoría **28/100** es un juicio cualitativo sobre esas láminas, no un test automatizado ni un ranking de la web pública.

**Comparaciones inspeccionadas:**
- Concepto visual temprano `a_high_detail_presentation_board_ui_concept_mock.png`: composición de agencia de viajes con fotografía vivaz, distintos ambientes, cabeceras atractivas, accesos turísticos y móvil. **Es referencia de intensidad y sensación de destino, no diseño aprobado exacto**; algunas fotos y el logo están generados, los componentes se muestran idealizados y el usuario no autorizó copiarla literalmente.
- Evidencia real `comparacion_real_estaba_en_lisboa.png`: captura de portada pública con mensaje personal **«La Lisboa que le enseño a quien viene a verme»**, navegación e inicio rápido de contenido útil; contraste contra laboratorio y una guía interior.
- Rechazadas `Estaba_en_Lisboa_MASTER_A.png`, `_B.png`, `_C.png`: grandes superficies beige/menta, tres variantes de hero partido, mismos dos recortes de fotos de capturas originales, tipografía serif parecida, UI turística demasiado pequeña y demasiado espacio reservado a las explicaciones de la presentación. Las fotografías son capturas recortadas, no activos originales en alta calidad. El logotipo se reconstruyó aproximadamente en vez de usar el recurso real.

**Raíz del problema:** se sustituyó el criterio de **web turística real, reconocible, luminosa y moderna** por una estética editorial sobria inventada por la IA. Se optimizó la maqueta HTML y la lámina explicativa, no la experiencia final de viaje. La evaluación anterior de la «Mente Maestra» no se aplicó de forma adversarial a los outputs.

### Evaluación crítica de las tres entregas: 28/100 (subjetiva)
| Aspecto | Máximo | Puntuación razonada |
|---|---:|---:|
| Fidelidad a marca real | 15 | **4**: mensaje parcialmente conservado, logo recreado, paleta rediseñada sin razón documentada |
| Impacto turístico/fotográfico | 25 | **4**: mismas fotos en todas las direcciones, poco color y recorte panorámico repetido; desaparece la energía del destino |
| Originalidad real entre propuestas | 20 | **3**: tres variantes del mismo split-hero, bloques y ritmo serif |
| Utilidad de la guía | 15 | **8**: rutas, barrios y CTA reconocibles, pero la navegación y el contenido están subordinados al concepto de revista |
| Calidad de lectura de 3 vistas en Brisa | 15 | **4**: portada, interior y móvil existen, pero se presentan demasiado pequeños mientras las anotaciones ocupan el espacio |
| Evidencia de funcionamiento y continuidad | 10 | **5**: HTML renderizado en capturas; enlaces conceptuales, sin comparativa funcional sobre la web real ni evaluación de performance |
| **Total** | **100** | **28** |

**Criterios de NO aceptación:** si una opción es menos vibrante/atractiva que las primeras imágenes que motivaron el trabajo; si no se reconoce Lisboa y una guía para planificar el viaje al primer vistazo; si la identidad es una recreación; si tres opciones solo cambian tipografía/diagonal/paleta; si la home se vuelve un poster de revista; si móvil e interior son miniaturas; o si se promete un componente que no existe. Ningún test de construcción puede anular estas puertas.

---

## AUTOPROMPT MAESTRO — próximo intento (no ejecutar sin objetivo visual)

> Actúa como **director de arte senior especializado en turismo y guías urbanas**, diseñador UX/UI, especialista SEO y **revisor adversarial** de Human Webs.
>
> **Producto:** Estaba en Lisboa, guía independiente en español para descubrir y planificar Lisboa. No es una agencia de lujo, revista de arte, inmobiliaria ni landing comercial genérica.
>
> **Intención del usuario:** alcanzar el atractivo turístico y la calidad de presentación de los conceptos iniciales que le interesaron, **pero con la marca y contenido verdaderos**, sin apariencia IA, ni plantillas repetitivas, ni falsear que HTML = diseño validado. No mostrar versiones intermedias mediocres solo por haberlas terminado.
>
> **0. FUENTES Y BLOQUEOS (antes de generar nada).** Abrir y comparar de forma consciente: (a) la captura real de la home actual en 1280px/390px y una interior; (b) la lámina inicial atractiva como referencia de **nivel**, no como diseño copiable; (c) las tres últimas propuestas rechazadas como ejemplos de **qué NO repetir**. Inspeccionar los archivos **REALES** de logotipo, fotografías y componentes en `josetabares24-png/portugal-autentico-v2`. Nunca reconstruir logo desde una captura, ampliar fotos borrosas o usar una fotografía que suplante un lugar. No fingir acceso si no lo hay.
>
> **1. CONSERVAR LA MARCA.** Mantener el mensaje y voz primera persona, logo verdadero, los barrios, rutas 1/2/3 días, free tours, entradas, guías y enlaces reales. La portada debe parecer una **guía de Lisboa operativa y cercana**, no simplemente una revista elegante. Los contenidos comerciales deben distinguirse de la recomendación independiente.
>
> **2. DIRECCIÓN DE ARTE TURÍSTICA, NO DECORATIVA.** El viaje es protagonista: imágenes nítidas y locales, carácter de cada barrio, escenas urbanas vivas, composición con ritmo y color fundamentado en fotografías, no fondos beige vacíos ni degradados IA. Evitar hero partido 50/50 como solución por defecto, tarjetas uniformes, iconos y flechas ornamentales, exageración tipográfica sin función y los sellos/pills como decoración. Asegurar legibilidad en contraste con fotos y accesos útiles visibles al comenzar a desplazarse.
>
> **3. TRES ESTRUCTURAS VERDADERAMENTE DIFERENTES.** Cada opción debe seguir siendo **Estaba en Lisboa**, pero con una arquitectura y estilo gráfico propios, no tres tintes de la misma landing:
> - **A — Destino inmersivo, útil desde el primer momento:** foto protagonista de verdad + cabecera original + acceso editorial a planificar y explorar, ritmo de fotografías y guías por necesidad. La emoción no justifica ocultar el contenido útil en móvil.
> - **B — Descubrimiento por barrio:** primera pantalla que invite a descubrir zonas mediante fotos/lugares auténticos, itinerarios y selección de barrio; navegación/filtro que tenga destinos reales, no cards vacías.
> - **C — Guía de autor con reportajes visuales:** identidad personal, escenas de Lisboa, artículos culturales y rutas, sin sacrificar búsquedas prácticas o convertir todo en revista.
> Si al ver las tres siluetas en escala de grises parecen la misma retícula, **rechazar y rehacer**. Si una se vuelve genérica o abstracta, corregir antes de mostrar.
>
> **4. FORMATO DE PRESENTACIÓN «BRISA» SIN PERDER DIMENSIÓN.** Preparar una lámina independiente por propuesta mostrando **HOME escritorio, INTERIOR escritorio y MÓVIL** de **la misma dirección**. Las interfaces deben ocupar **al menos ~80 % del espacio útil** de la lámina; notas breves en margen/cabecera, no grandes secciones explicativas. La home debe poder leerse sin lupa. Si una única lámina no permite eso, incluir vistas grandes adicionales; nunca encoger el producto para encajar notas. Mantener densidad y alineación cuidadas y no inventar un segundo logo para las maquetas.
>
> **5. AUTOAUDITORÍA CRÍTICA ANTES DE PRESENTAR.** Renderizar/capturar la propuesta real y compararla **lado a lado** con baseline y la referencia inicial de nivel visual. Preguntar:
>   - ¿Se reconoce visualmente Lisboa antes de leer el título?
>   - ¿La imagen comunica ganas de viajar sin clichés inventados?
>   - ¿Se ve una guía funcional en vez de un portfolio minimalista?
>   - ¿El logo, voz, fotografía y contenidos son auténticos?
>   - ¿La primera pantalla móvil invita a continuar y permite planificar?
>   - ¿Interior y portada pertenecen al mismo sistema?
>   - ¿La nueva es visualmente más convincente que las últimas rechazadas?
>   - ¿Las tres son claramente diferentes en estructura, fotografía y jerarquía?
> Si falla cualquier pregunta decisiva, **NO ENTREGAR**, rehacer antes de presentarla. Nunca elogiar la nueva versión sin contrastarla.
>
> **6. SEGURIDAD SEO Y QA.** Cuando la opción escogida llegue a implementación: rama privada, no producción, no cambiar URLs, canonicals, robots, schema, enlaces afiliados, contenidos, fotos ni telemetría sin necesidad. Probar navegación real, accesibilidad, teclado, carga de imágenes, móvil e interior. Las capturas no acreditan métricas de conversión ni Lighthouse; etiquetar lo no medido.
>
> **7. SALIDA.** Entregar las tres direcciones solo si superan controles visuales y funcionales relevantes, con comentarios honestos sobre aciertos/riesgos. No pedir elegir entre opciones mediocres. Se debe presentar una mejora **contrastable** de lo existente y de la referencia inicial, no una nueva interpretación arbitraria.

## Aprendizaje del proceso
**No confundir:** «enfoque editorial» ≠ «fondo crema + Georgia + foto partida». «Menos IA» ≠ «menos color, menos fotografía y más espacios vacíos». «Tres vistas» ≠ «tres miniaturas». «He usado fotos reales» ≠ «he usado originales con la calidad adecuada». «He renderizado HTML» ≠ «funciona como web turística».
**Ritual final obligatorio:** mirar el producto a tamaño normal antes de leer el copy de la lámina. Si se necesita explicar por qué es bonito, probablemente el diseño no comunica por sí solo.

**Prioridad del siguiente trabajo:** no producir todavía otro HTML o una tercera iteración de la misma idea. Definir con activos reales una dirección de arte para turismo y contrastar visualmente contra las primeras referencias y la home pública. Una buena propuesta puede salir de ese proceso; el informe de errores por sí solo **no sube** el 67/100 de madurez de Human Webs.
