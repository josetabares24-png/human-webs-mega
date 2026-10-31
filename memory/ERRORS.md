# Registro de errores y prevención

Cada entrada: síntoma, evidencia/alcance, causa probable, corrección, prueba de no regresión, estado. No convertir preferencias subjetivas en leyes absolutas.

### ERR-001 — Sitios genéricos sin identidad
- **Observado:** diseños repetidos, apariencia de plantilla IA, copy intercambiable.
- **Contexto:** iteraciones anteriores de webs de negocio y ejemplos históricos de restaurantes; valoración estética del usuario, no experimento A/B.
- **Causa:** empezar desde héroes/cards/CTAs genéricos antes de entender el negocio.
- **Prevención:** brief, contenido específico y dirección visual coherente primero; comprobar unicidad de titular, estructura y jerarquía. Evitar testimonios o fotos inventados.
- **Prueba:** revisión visual de home y dos páginas internas en móvil y escritorio con checklist de [QUALITY-GATES](QUALITY-GATES.md).
- **Estado:** regla vigente; comprobación visual humana necesaria.

### ERR-002 — Reglas estéticas contradictorias
- **Observado:** `examples/restaurants/button-patterns.md` propone botón rojo redondeado mientras la biblioteca de casos registra CTAs de texto y rectángulos para otros negocios.
- **Causa:** usar un ejemplo específico como plantilla universal.
- **Prevención:** elegir referencia y combinación coherente con sector; `examples/restaurants/biblioteca.md` y medidas de fuente prevalecen frente a patrones genéricos antiguos.
- **Prueba:** justificar cada botón y tipo principal con la ficha del caso; no mezclar casos sin criterio.
- **Estado:** vigente; ejemplos contradictorios siguen conservados como histórico.

### ERR-003 — Demo confundida con web terminada
- **Observado:** HTML de una pantalla presentado como si representara un sitio completo.
- **Causa:** no especificar páginas, funciones, contenido y aceptación del cliente antes del código.
- **Prevención:** matriz de alcance en brief, navegación real, páginas necesarias, activos y acciones funcionales verificadas.
- **Prueba:** recorrer todas las rutas, enlaces y acciones críticas con navegador; comprobar que la entrega corresponde al alcance.
- **Estado:** vigente.

### ERR-004 — Formularios y acciones simuladas
- **Riesgo:** botón contacto sin destinatario, formulario decorativo o resultado «enviado» sin recepción confirmada.
- **Prevención:** configurar backend real autorizado; confirmar entrega de mensaje de prueba y consentimiento/legalidad aplicable. Si no existe, mostrar alternativa honesta.
- **Prueba:** enviar prueba end-to-end, comprobar recepción y estados de error. Nunca afirmar recepción si no se verificó.
- **Estado:** prevención activa; no atribuir incidentes concretos no demostrados.

### ERR-005 — Cambios visuales que no afectan al sitio completo
- **Observado:** estética de un artículo diferente a su blog; revisiones superficiales donde componentes de distintas rutas conservan estilos incoherentes.
- **Prevención:** heredar design system/tokens reales del proyecto; auditar home, plantillas e internas; evitar soluciones aisladas solo en una captura.
- **Prueba:** screenshots comparativos móvil/escritorio de todas las plantillas afectadas, prueba de navegación y coherencia.
- **Estado:** regla vigente; evidencia depende de cada proyecto.

### ERR-006 — Prometer más de lo verificado
- **Riesgo:** afirmar «SEO listo», «100% accesible», «publicado» o «carga instantánea» solo por compilar.
- **Prevención:** clasificar como implementado, probado localmente, comprobado en producción o pendiente; guardar logs, URLs y pruebas pertinentes.
- **Prueba:** reportar resultados reales y limitaciones por entorno.
- **Estado:** prevención activa.

### ERR-007 — Fondo terracota repetido en proyectos distintos
- **Observado:** el usuario informa que las webs generadas por IA tienden a repetir un fondo terracota y una estética similar, aunque sean negocios diferentes (feedback explícito, 2026-10-30).
- **Alcance:** nuevos proyectos y rediseños con libertad creativa; no invalida una marca cuya identidad requiera ese tono.
- **Causa:** hipótesis: la IA reutiliza combinaciones «seguras» de crema/terracota, serif y cajas sin investigar la marca ni el sector. La causa técnica no se ha demostrado.
- **Prevención:** prohibir **terracota/beige como valores predeterminados**, no como colores absolutos. Investigar fuentes reales y bosquejar tres direcciones no intercambiables; comparar paleta, composición, tipografía, navegación, fotografía y CTA con trabajos anteriores si están disponibles. Ver [ART-DIRECTION](ART-DIRECTION.md).
- **Prueba:** registrar las tres direcciones y al menos tres diferencias de sistema entre opciones; justificar por qué la elegida no replica el proyecto anterior. Inspeccionar capturas de móvil y escritorio; si vuelve el terracota, documentar razón concreta del negocio o rehacer la dirección.
- **Estado:** regla vigente por preferencia explícita. Evaluación cualitativa; ningún control automático garantiza originalidad estética.

### ERR-008 — Prototipo «diferente» inferior al sitio real del cliente
- **Observado:** en el ejercicio de Mil Sabores el usuario rechazó el prototipo y prefirió claramente su web existente («Es mil veces mejor la mía», feedback explícito 2026-10-30). La comparación no es una medición de conversión ni rendimiento.
- **Alcance:** rediseños y propuestas visuales frente a webs existentes; no webs totalmente nuevas sin baseline.
- **Causa:** **fallo de proceso demostrado:** se recomendó una propuesta sin una comparación justa de antes/después ni imágenes cargadas en el prototipo. **Hipótesis no verificada:** calidad visual menos pulida por composición, fotografía, jerarquía o acabado. No atribuir motivos específicos al usuario sin preguntarle.
- **Prevención:** consultar y respetar el branding `LOCKED`; tomar capturas completas del sitio existente; exigir fotos, fuentes y logo realmente cargados; comparar páginas y funciones equivalentes y documentar mejoras y regresiones. No vender como «mejor» una demo incompleta. Si no mejora claramente, mantener la web actual y proponer cambios pequeños. Véase [caso Mil Sabores](CASES/MIL-SABORES-REJECTED-PROTOTYPE-2026-10-30.md).
- **Prueba:** revisión lado a lado a 390 y 1280 px con imágenes renderizadas, checklist de funciones/idiomas y tres mejoras concretas defendibles; registrar decisión de usuario si existe. Si falla, detener el rediseño y no publicar.
- **Estado:** rechazo real registrado; prevención nueva, aún no verificada en una entrega posterior.

### ERR-009 — Copy genérico y palabras/frases repetidas en varias webs
- **Observado:** el usuario solicita expresamente mejorar textos para que suenen más humanos y evitar palabras repetidas durante las pruebas de diseño de restaurantes (feedback de 2026-10-30). Los ejemplos anteriores recurrían a titulares de marketing intercambiables; no hay un estudio cuantitativo de conversión ni preferencias detalladas frase por frase.
- **Causa:** **hipótesis de proceso:** generar titulares independientes sin mapa de voz ni revisión transversal de hero, secciones y CTA, apoyándose en clichés que suenan aceptables en cualquier sector. No se ha demostrado una causa de modelo concreta.
- **Prevención:** documentar público, voz, idioma y hechos verificables; cada sección aporta una utilidad diferente, no el mismo eslogan. Leer [VOICE-AND-COPY](VOICE-AND-COPY.md) y usar opcionalmente [el revisor local](../tools/copy/README.md) para detectar patrones repetidos en borradores. Respetar keywords, nombres propios y slogans reales; no prohibir palabras ni usar sustituciones automáticas.
- **Prueba:** ejecutar node --test tools/copy/lint.test.mjs; revisar borrador con node tools/copy/lint.mjs --lang es|pt|en archivo.md; comparar home y páginas interiores y verificar que las correcciones preservan sentido y SEO. Una salida de cero warnings NO sustituye lectura humana.
- **Estado:** reglas y pruebas añadidas, pendientes de validación en una web nueva real.

### ERR-010 — «Atlántico»: rediseño turístico genérico pese a tener reglas antiplantilla
- **Observado:** el usuario rechaza explícitamente el prototipo independiente para Estaba en Lisboa: «Terriblemente IA fuera de sí nada que ver con lo que venimos hablando» (2026-10-31). Este es el juicio del usuario; no atribuirle motivos visuales concretos que no haya enumerado.
- **Evidencia de implementación:** landing HTML/CSS/JS con hero 50/50, titular genérico, paleta menta/turquesa ajena a la web, accesos uniformes, selector, tarjetas y mapa; se ejecutó y desplegó sin baseline fotográfico antes/después y sin revisar en navegador el resultado completo.
- **Causa demostrada:** se saltaron criterios de `ART-DIRECTION` y caso Mil Sabores — no se tomó ni comparó un baseline visual real y no se acreditó continuidad de identidad. **Hipótesis editorial del agente:** estructura repetitiva y lenguaje intercambiable intensificaron la apariencia «IA».
- **Prevención:** exigir **4 puertas de rediseño**: capturas reales del sitio existente, contrato de continuidad visual/funcional, dirección original basada en el negocio y comparación/screenshot funcional antes de entregar. No reemplazar terracota por verde/azul como atajo. Ver [caso Atlántico](CASES/ESTABA-EN-LISBOA-ATLANTICO-REJECTED-2026-10-31.md).
- **Prueba:** revisión lado a lado (390 y 1280px) con misma calidad de medios; guías internas, enlaces, mapa y CTA reales probados; tres mejoras defendibles y posibles regresiones documentadas. Si no se puede validar, **no afirmar que el rediseño es superior**.
- **Estado:** RECHAZADO, sin usarlo como referencia positiva ni publicar cambios sobre `estabaenlisboa.com`.

### ERR-011 — Flechas decorativas repetidas en botones y tarjetas
- **Observado:** el usuario rechaza expresamente el empleo repetido de flechas por asociarlo con una estética generada por IA (2026-10-31). Los laboratorios anteriores contienen flechas y no son estilos aprobados.
- **Causa:** hipótesis de proceso: la guía de CTA recomendaba animar un icono direccional como efecto por defecto. No se ha medido impacto en conversión.
- **Prevención:** diseñar controles de texto primero, sin flechas o iconos ornamentales automáticos; conservar las excepciones de orientación funcional y la identidad existente. Ver [interacciones de texto primero](TEXT-FIRST-INTERACTIONS.md).
- **Prueba:** revisión del JSX/HTML y capturas de home e internas en 390px/1280px, semántica, foco y excepciones documentadas. Las demos antiguas deberán corregirse en su repositorio propio si se retoman.
- **Estado:** vigente. El laboratorio experimental `preview/human-web-design-system-2026-10-31` fue corregido en sus componentes principales el 31/10/2026; no equivale a revisión visual final ni a publicación de producción.


### ERR-012 — Confundir pruebas documentales con validación visual del sitio real
- **Observado:** los checks de memoria se completaban correctamente aunque las referencias carecían de capturas propias comparables y las demos no acreditaban mejoras visuales. El usuario pide seguir aprendiendo y pulir la estética, no solo guardar fuentes.
- **Causa:** las pruebas verificaban existencia de archivos, campos, patrones sintácticos y herramientas, sin imágenes baseline/candidate reales de páginas equivalentes.
- **Prevención:** comparar la web real antes/después con [capturador reproducible](../tools/visual-evidence/README.md), cuatro viewports por versión y registro de errores, sin declarar calidad por el número de tests. Separar mockup editorial Brisa del registro de QA y de una aprobación real del usuario.
- **Prueba:** `node --test tools/visual-evidence/report.test.mjs` valida integridad de capturas sintéticas; la comprobación real requiere ejecutar `capture.py` en un navegador con acceso a ambos sitios, revisar `evidence-report.html`, verificar SEO/acciones y documentar mejoras/riesgos. No afirmar que esta última se ejecutó mientras no exista evidencia.
- **Estado:** infraestructura de prueba añadida y CI ejecutada; aplicación visual a una web real pendiente.


### ERR-013 — El prototipo técnicamente correcto perdió la calidad de la propuesta visual
- **Observación:** tres láminas generadas inicialmente con fotografía potente y composición agradable derivaron en propuestas HTML estrechas, apagadas y demasiado similares. El usuario las rechazó expresamente; no se aprobó ninguno de esos diseños para la web.
- **Causa:** se optimizó por facilidad de construir seis HTML y encajarlos en una composición pequeña, no por reproducir la dirección de arte y conservar la experiencia visual que motivó la elección.
- **Nueva puerta:** la referencia aprobada (o la primera visualización atractiva) es un **objetivo mínimo verificable**. Tomar capturas del HTML en condiciones equivalentes y revisar por separado **impacto fotográfico, identidad real, jerarquía, escala, densidad, diferencias entre propuestas y móvil**. Rechazar antes de entregar si las capturas pierden fuerza respecto al concepto. Una lámina 3-en-1 no sustituye tres presentaciones grandes.
- **Prueba de recuperación, sin exagerarla:** se prepararon tres láminas independientes 2048×1440 y seis HTML conceptuales no conectados a producción, con home, interior y móvil. Las fotografías principales son recortes de capturas del propio sitio, no los archivos originales en alta resolución; el wordmark está recreado aproximadamente. **No afirmar fidelidad de marca exacta, funcionalidad de enlaces, test de SEO, equivalencia con producción ni aprobación del usuario.**
- **Prevención:** ejecutar antes de generar HTML la revisión obligatoria de referencia inicial, baseline actual y tres propuestas rechazadas, usando los activos originales y la [puerta antirregresión](SECTORS/turismo/AUTOPROMPT-LISBOA-ANTIREGRESION-VISUAL-2026-10-31.md). No entregar maquetas que pierdan impacto, sean split-heros equivalentes o muestren móvil/interior diminutos.
- **Prueba:** comparación visual manual lado a lado de referencia inicial y capturas reales 390/1280 del nuevo diseño, comprobando logo auténtico, contenido turístico, jerarquía, fotografía, diferencias de composición e interior coherente; registrar también un fallo explícito y el rechazo antes de aprobación. Es una prueba pendiente para la próxima propuesta, no una medición ya superada.
- **Regla duradera:** preservar en las iteraciones la identidad *real*; el código debe alcanzar la referencia visual, no obligar a rebajarla. Si una versión mejor no se consigue, comunicarlo y no aprobar una inferior.
- **Estado:** tres propuestas de recuperación **también rechazadas explícitamente por el usuario** el 31/10/2026: `Estaba_en_Lisboa_MASTER_A/B/C.png`. La corrección anterior NO funcionó. Comparación crítica 28/100 y regla de bloqueo detalladas en [autoprompt antirregresión de Lisboa](SECTORS/turismo/AUTOPROMPT-LISBOA-ANTIREGRESION-VISUAL-2026-10-31.md). Prohibido reutilizarlas como referencias positivas.
