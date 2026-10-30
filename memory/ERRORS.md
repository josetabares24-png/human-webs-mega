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
