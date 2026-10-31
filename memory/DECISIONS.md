# Decisiones arquitectónicas y de producto

Actualizado: 2026-10-30. Cada decisión incluye estado; cuando cambie, documentar nueva fecha y motivo.

## D-001 · Misión del repositorio
**Estado:** vigente · **Decisión:** Human Webs es una memoria maestra portátil para IA constructoras. Su resultado es conocimiento aplicable a repositorios de clientes. No es un bot, SaaS o sitio web.  
**Por qué:** el valor diferencial es no repetir errores y construir más rápido utilizando una IA ejecutora distinta.  
**Consecuencia:** los esfuerzos por defecto son documentación verificable, protocolos de revisión, patrones de diseño y aprendizaje; no features de una aplicación generadora.

## D-002 · Navegación, no megacontexto
**Estado:** vigente · **Decisión:** `AGENTS.md` breve más `memory/INDEX.md` que enruta a documentos específicos.  
**Por qué:** leer todos los documentos en cada tarea introduce contradicciones, coste y desactualización.  
**Verificación:** comprobar que el agente abre primero el índice y solo los archivos necesarios.

## D-003 · Referencias con procedencia
**Estado:** vigente · **Decisión:** separar `observado`, `adaptación propuesta`, `supuesto` y `rechazado`; fecha y fuente obligatorias para nuevos ejemplos.  
**Regla:** nunca copiar fotos, fuentes propietarias ni branding; referencias son evidencia de decisiones de diseño, no permisos de reutilización.

## D-004 · Construcción en el repositorio de destino
**Estado:** vigente · **Decisión:** Codex u otra IA construye en el repositorio de la web del cliente, siguiendo su propio stack y pruebas.  
**Excepción:** prototipos y herramientas de investigación del repositorio Human Webs se pueden desarrollar **solo** cuando se soliciten expresamente.

## D-005 · El usuario decide publicar
**Estado:** vigente · **Decisión:** toda modificación productiva externa, cobro, envío y publicación requiere autorización relevante. Previews y ramas aisladas son preferibles a cambios irreversibles.  
**Verificación:** evidenciar pruebas y confirmación antes de producción.

## D-006 · No confundir anti-IA con estética prohibitiva
**Estado:** vigente · **Decisión:** no hay un estilo visual universal «humano». Lo correcto depende de marca, contenido, sector y audiencia.  
**Verificación:** evaluar copy, composición, navegación y credibilidad con ejemplos concretos, no por mera presencia de cards o tipo de fuente.

## D-007 · Eliminar el constructor autónomo
**Estado:** vigente (sustituye el estado experimental anterior) · **Decisión:** el usuario descarta el constructor `builder/`. No forma parte de `main`; se cierra PR #1 y se retira de su rama activa.  
**Por qué:** Human Webs es memoria de apoyo a Codex y a otras IA, no una app de generación.  
**Consecuencia:** no añadir componentes SaaS, servidores, interfaz generadora ni dependencias de Builder. Se preservan investigación visual y aprendizajes, no la plataforma.

## D-008 · No reutilizar terracota ni la misma composición
**Estado:** vigente · **Decisión:** el usuario observó reiteración de fondos terracota en webs construidas. Terracota/crema/béige cálido y plantilla editorial no pueden ser valores iniciales por defecto. Solo se usan por identidad real o justificación específica y documentada.  
**Por qué:** cambiar textos o colores en la misma composición no crea identidad de marca.  
**Verificación:** comparar al menos tres direcciones que cambien de forma sustancial composición, tipografía y tratamiento cromático o de imagen, antes de elegir; guardar qué se descartó y por qué.

## D-009 · Investigación real por proyecto y diversidad
**Estado:** vigente · **Decisión:** en webs nuevas y rediseños con libertad visual, consultar referencias del sector más una dirección de otro sector, verificar cada web original (si se dispone de navegador) y registrar contexto, fecha, observación y límites. Nunca copiar assets no autorizados.  
**Por qué:** reutilizar una estética por hábito reduce diferenciación.  
**Verificación:** ficha creativa de [ART-DIRECTION](ART-DIRECTION.md) y revisión comparativa en móvil/escritorio.

## D-010 · Formato de presentación visual de webs (referencia Brisa)
**Estado:** vigente · **Fecha:** 2026-10-31 · **Fuente:** preferencia visual explícita del usuario, imagen de referencia compartida en conversación.

**Decisión:** cuando se solicite una propuesta visual de web, entregar preferentemente **una sola lámina coherente con tres vistas de la misma solución**: (1) home de escritorio con hero y secciones reales, (2) página interior o catálogo/servicio en escritorio, y (3) versión móvil de esa misma web. La referencia «Brisa Brunch Club» define el **formato de entrega y nivel de detalle**, no una estética, paleta, logo ni estructura a copiar.

**Aplicación:** enseñar navegación, CTAs, tipografía, imágenes, tarjetas/secciones y adaptación responsive, con contenido propio del negocio; no mostrar únicamente un hero ni tres diseños inconexos. Distinguir claramente maqueta conceptual de captura real. Nunca inventar precios, reseñas, disponibilidad, testimonios ni funciones operativas. Conservar logotipo, identidad, fotografías autorizadas y URLs/SEO del sitio de destino cuando se trate de un rediseño; mostrar riesgos y razones de los cambios. No sustituye capturas del baseline, QA móvil/escritorio ni aprobación explícita antes de producción.

**Caso Estaba en Lisboa:** la meta comercial es mejorar decisiones y clics cualificados hacia tours, entradas y actividades sin convertir el medio editorial en un marketplace inventado. Priorizar guías propias, contexto local, transparencia afiliada y destinos de reserva reales.

**Verificación:** al entregar, comprobar que las tres vistas describen el mismo diseño y que el usuario puede juzgar home, interior y móvil; si falta una, explicar la limitación en vez de prometer fidelidad no verificada.
