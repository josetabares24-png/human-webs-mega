# Protocolo obligatorio de dirección artística — evitar webs gemelas

**Para:** toda web nueva, rediseño importante o cambio visual global; no para un parche técnico que deba respetar estética existente.

## 0. Romper la inercia
El usuario ha observado fondos terracota repetidos. **No empezar con terracota, beige cálido, arcilla, serif + tres tarjetas, hero centrado con imagen superpuesta ni otra combinación que la IA repita por costumbre.** Si la marca real usa terracota, sí puede ser correcto, pero documentar evidencia y diferenciación. Tampoco convertir el azul, negro o verde en nuevos valores por defecto.

## 1. Baseline antes de proponer un rediseño
**Puerta de bloqueo, no consejo opcional:** antes de crear HTML/React o desplegar cualquier rediseño, registrar capturas verificables del sitio actual a 390 y 1280px **y** un contrato de continuidad visual/funcional. Si faltan, detener la reconstrucción y limitarse a diagnóstico o ajustes puntuales. Un deploy READY no es una revisión visual. Aprendizaje de [Atlántico rechazado](CASES/ESTABA-EN-LISBOA-ATLANTICO-REJECTED-2026-10-31.md): reetiquetar un hero 50/50 con menta/turquesa, serif, sellos, barras de accesos, tarjetas y mapa tampoco es una dirección original.
Si existe una web actual, primero obtener capturas auténticas (desktop y móvil) **con imágenes, fuentes y logotipo cargados** y documentar qué funciona. Respetar `LOCKED` en memoria de marca. Comparar calidad, conversiones y funciones cuando haya métricas; **novedad no implica mejora**. Si las alternativas no mejoran al original, quedarse con el original y ofrecer refinamientos. Aprendizaje: [Mil Sabores rechazado](CASES/MIL-SABORES-REJECTED-PROTOTYPE-2026-10-30.md).

## 2. Diagnóstico de marca
Antes de buscar webs visualmente atractivas, identificar la [biblioteca del sector](SECTORS/README.md). Un negocio de servicios requiere confianza, cobertura, personal y acción distinta (presupuesto/cita) a una carta de restaurante. Las fichas **investigadas** son pistas, no diseños validados por el usuario.
Antes de componer: ¿qué negocio es?, ¿para quién?, ¿qué producto/servicio destaca?, ¿qué quiere lograr el visitante?, ¿qué tono corresponde?, ¿qué fotos reales y logo existen?, ¿qué páginas y acciones necesita?, ¿qué restricciones de tiempo/accesibilidad/hospedaje hay? Si hay una web existente, preservar identidad válida y componentes salvo petición de cambio.

## 3. Inspiración investigada, no imaginada
- Buscar **al menos 3 referencias reales** cuando haya navegación: 2 de su industria/mercado y 1 de otro sector por una idea transferible. Comenzar en [fuentes de inspiración](INSPIRATION-SOURCES.md), la [biblioteca visual](../design-library/README.md) o resultados de búsqueda actualizados, y **abrir la web original**.
- Para cada referencia anotar URL, fecha, sector, 1 patrón útil (jerarquía, navegación, foto, tipografía o composición), viewport observado, **un aspecto que NO copiar** y una limitación. La galería no sustituye inspeccionar la fuente.
- Tomar ideas de **principios** y mezclarlas de forma original. No reproducir fotografías, textos, identidad, logo, composición casi idéntica ni tipografías sin permiso.
- Si no hay navegador: declarar la limitación. Usar 2–3 fichas verificadas de la biblioteca o recursos entregados, sin afirmar inspección nueva. Si hay urgencia, investigación compacta pero honesta.

## 4. Tres propuestas de sistema visual
**Antes de pasar al código**, usa un briefing local basado en [tools/design-preflight](../tools/design-preflight/README.md) si el encargo es una nueva web o rediseño importante. El verificador alerta cuando composición/tipografía/imagen/navegación/interacción/contenido son casi iguales y solo cambia la paleta, o cuando un rediseño no documenta cuatro capturas del original. **No confundas pasar este test con aprobación estética o una comparación visual real.** Ver [seis mockups rechazados](CASES/ESTABA-LISBOA-SIX-BRANDED-MOCKUPS-REJECTED-2026-10-31.md).
Antes de codificar se redactan **3 direcciones sustancialmente diferentes**, no tres variaciones del mismo CSS. Cada una define:
- Identidad narrativa en una frase específica del negocio.
- Fondo dominante y motivo, acentos y contraste comprobable.
- Pareja tipográfica o sistema tipográfico con licencias/fallbacks.
- Estructura del primer viewport, navegación, ritmo y secciones internas.
- Fotos/ilustraciones autorizadas o enfoque sin imagen.
- CTA principal y microinteracciones pertinentes.
- Riesgo de accesibilidad/performance y esfuerzo real.

**Prueba de diferencia:** las tres deben separarse en al menos **tres dimensiones sustantivas** (composición, jerarquía tipográfica, imagen, navegación, CTA, estructura/ritmo), **además** de cambiar color. Si una opción solo altera paleta, es la misma opción: rehacerla.

No imponer las tres al usuario si pidió ejecución. El agente las compara internamente y elige con razones.

### Control de patrones visuales repetidos
Eliminar flechas decorativas de botones, enlaces y tarjetas por defecto; no compensarlo con iconos o sellos innecesarios. Usar componentes de texto con affordance claro. Ver [interacciones](TEXT-FIRST-INTERACTIONS.md). Si el sector necesita una idea ajena, consultar [puente entre bibliotecas](CROSS-SECTOR-IDEAS.md) solo para extraer un mecanismo transferible sin copiar la estructura.

## 5. Elección informada
- Evaluar ajuste a marca, reconocimiento, legibilidad, claridad de acción, calidad del contenido y viabilidad en móvil. No confundir «distinto» con decorativo o complicado.
- Comparar con **las últimas webs del usuario si están disponibles**: fondo dominante, hero, tipo, distribución, CTA y tratamiento de foto. Si repite una fórmula sin causa de marca, descartar.
- Registrar cuál se eligió, cuáles se descartaron y por qué mediante [ficha breve](DESIGN-DIRECTION-TEMPLATE.md). Si se ha elegido terracota, **describir evidencia real que lo justifique**, nunca «se ve moderno».

## 6. Construir, mostrar y revisar
1. Construir todo el sitio con tokens coherentes en vez de arreglar solo un hero. Para rediseño, aplicar las reglas de marca, reutilizar medios reales autorizados y conservar funciones ya aprobadas.
2. Capturar desktop (p. ej. 1280 px) y móvil (p. ej. 390 px); revisar navegación, lectura, imágenes **realmente cargadas**, foco y todas las plantillas afectadas. Para rediseño, presentar comparación de iguales condiciones con el original.
3. Preguntas obligatorias: ¿se podría cambiar el logo y usar este sitio para otro negocio? ¿El layout se parece sospechosamente al anterior? ¿Predomina un color por pereza? ¿Las fotos, tono, secciones y CTA son específicos?
4. Si resulta genérico o copia una referencia: volver al paso 3 y revisar **estructura**, no solo sustituir hex.
5. Cerrar [controles de entrega](QUALITY-GATES.md); informar de las referencias realmente visitadas, decisiones, resultados y pendientes. **No recomendar como superior un diseño que no supera el baseline; rechazar y mejorar por partes.**

## Casos límite
- **Marca ya definida:** respetar sus colores y tipografías autorizadas; probar tres composiciones compatibles sin rediseñar injustificadamente.
- **Solo corrección técnica:** no cambiar el aspecto salvo petición expresa.
- **Cliente sin fotos:** crear una propuesta sólida basada en texto y layout, o solicitar activos. No inventar local, personas ni testimonios.
- **Tiempo muy limitado:** tres direcciones pueden ser esquemas breves; no omitir comparación, pruebas ni verdad de la fuente.
