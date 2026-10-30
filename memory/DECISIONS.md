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

## D-007 · Aplicación Builder separada
**Estado:** experimental / no es núcleo · **Registro:** en PR #1 existe desarrollo de una aplicación Builder. Es un laboratorio opcional; no se continuará como producto por defecto, ni se eliminará sin una decisión explícita.
