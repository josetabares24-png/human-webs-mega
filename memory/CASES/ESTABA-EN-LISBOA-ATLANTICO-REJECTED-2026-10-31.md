# Caso real: Estaba en Lisboa — Atlántico, rediseño rechazado por genérico

**Fecha de feedback:** 2026-10-31  
**Web que debía respetarse:** https://estabaenlisboa.com/ (repositorio `josetabares24-png/portugal-autentico-v2`)  
**Prototipo descartado:** "Estaba en Lisboa — Atlántico", proyecto separado de Vercel `estaba-en-lisboa-atlantico`. **No es una referencia aprobada ni un rediseño recomendado.**  
**Respuesta textual del usuario:** «Terriblemente IA fuera de sí nada que ver con lo que venimos hablando».

## Resultado y límites del feedback

**RECHAZADO POR EL USUARIO.** La frase anterior expresa rechazo inequívoco y desconexión con el trabajo previo en Human Webs. El usuario **no detalló una lista precisa de causas**, por lo que los motivos a continuación son **diagnóstico del propio agente**, no preferencias atribuidas al usuario. No se infiere que el usuario rechace siempre el azul, el verde, la tipografía serif, las fotografías o los mapas.

## Qué ocurrió (evidencia del intento)

1. Se revisó el código existente: `src/app/[locale]/page.tsx`, `src/app/globals.css`, rutas reales, fotografía y logo del repositorio. La web original ya usaba una portada editorial, navegación de planificación, guías de barrio, contenidos actuales, enlaces de afiliación y componentes existentes.
2. Sin capturas comparables verificadas **antes/después** ni validación de identidad visual existente, el agente generó una landing separada con HTML/CSS/JS y estilos nuevos: fondo blanco/menta, azul verdoso, tipografía serif de gran tamaño, hero partido entre texto/foto, accesos en columnas, selector de días, tarjetas editoriales, mapa y sección comercial.
3. Se usaron fotos reales y logotipo del repositorio, pero **tener imágenes reales no es suficiente** para respetar el sistema editorial del proyecto ni acreditar que un rediseño es mejor.
4. Se desplegó en un proyecto independiente de Vercel y se comprobó que el despliegue estaba en estado READY; **no se completó una inspección visual real del sitio desplegado en escritorio/móvil**. No hubo captura validada para confrontarlo con el sitio actual.
5. La versión nueva sustituía la dirección creativa por otra inventada y presentaba patrones genéricos de composición, a pesar de existir reglas en `ART-DIRECTION.md` y el caso rechazado de Mil Sabores.
6. Algunas acciones enlazaban a la web original y el mapa embebido mostraba solo una ubicación de referencia, no un mapa interactivo con los tres puntos enlazados a su lado. No atribuir validación completa de UX a una landing HTML solo porque el deploy esté READY.

## Diagnóstico editorial y visual del agente (no expresado como motivos del usuario)

- **Hero cliché:** «Lisboa, con las cosas claras» es un titular genérico, sin identidad local distintiva; «una guía escrita desde aquí» no basta para producir un tono verdaderamente personal.
- **Plantilla disfrazada:** estructura hero mitad texto/mitad imagen + 4 accesos + selector + sección de tarjetas + mapa + autor. Cambiar paleta no elimina el molde.
- **Sistema ajeno al sitio:** paleta turquesa/menta y serif genérica decididas sin una justificación basada en el branding, y sin conservar el equilibrio visual aprobado de `Estaba en Lisboa`.
- **Decoración redundante:** círculos, sello editorial y numeraciones como ornamentos no necesariamente basados en referencias a la ciudad o contenidos reales.
- **Insuficiente comparación:** no había baseline con screenshot de 390px y 1280px, análisis de funciones/estilo de páginas internas ni demostración de mejora sustancial.
- **Simulación parcial de utilidad:** tener un iframe de mapa y enlaces no demuestra una cartografía útil; en turismo, la ubicación y el recorrido deben corresponder a datos reales y acciones probadas.

## Error de proceso comprobado

**Se ejecutó la implementación antes de pasar el bloqueo de identidad/baseline y se presentó una landing como propuesta de reconstrucción.** Human Webs ya contenía instrucciones contra esa práctica: redactarlas no basta si no se verifican antes del código. También se omitió una revisión visual final, por lo que no había evidencia de superioridad ni de acabado.

## Nueva regla aplicable a cualquier web existente

**No generar ni desplegar una alternativa de rediseño antes de superar cuatro puertas:**

1. **Original en pantalla:** capturas reales de la portada y una plantilla interior, tanto móvil como escritorio, con imágenes/logo/fuentes cargados. Si no hay capacidad para obtenerlas, indicar limitación y proponer una auditoría conceptual o cambios puntuales, **no** afirmar reconstrucción superior.
2. **Contrato de continuidad:** dejar por escrito qué tipografía, logo, paleta, componentes, fotografías, voz, navegación, contenido, ingresos, SEO y funciones son parte de la identidad a conservar, qué se puede mejorar y qué requeriría autorización expresa.
3. **Dirección creativa específica y diferente:** justificar estructura, lenguaje y decisiones con elementos del proyecto real y fuentes; comparar contra otras propuestas y contra **el sitio actual**, no solo contra maquetas de la IA. La solución debe ser realmente distinta del patrón de los dos últimos prototipos.
4. **Inspección y decisión:** capturas comparativas a 390/1280px del original y propuesta, links y funcionalidades verificadas, y una lista explícita de ganancias y regresiones. Si el prototipo no parece claramente mejor o el usuario lo rechaza, **no promocionarlo**, no modificar producción y no defenderlo como «mejor».

## Prohibiciones operativas concretas para rediseños turísticos

- No recomendar automáticamente hero partido 50/50, serif gigante, círculos/sellos, bandas de cuatro accesos, tarjetas y «mapa + CTA» como receta reutilizable.
- No cambiar terracota a menta/teal u otro color **solo** para cumplir una regla antiterracota.
- No sustituir un editor/medio de viajes personal por una marca genérica de «travel lifestyle».
- No inventar mapas funcionales, rutas, horarios, disponibilidad o click-throughs; probarlos.
- No pasar de inmediato a otro prototipo con nuevas fuentes o colores para responder a un rechazo. Primero actualizar las condiciones de diseño y pedir/comprobar evidencia cuando falte.

## Prueba de no regresión — criterio de aceptación de la próxima propuesta

Un reviewer debe poder mostrar: capturas comparables del sitio real, un contrato de continuidad, qué elementos concretos del usuario se mantienen, un diseño no intercambiable con otras webs, textos realmente específicos, rutas y mapa probados, y evidencia de que la nueva opción gana frente al sitio existente. La prueba no es puramente automatizable; requiere juicio editorial y del usuario.

**Estado:** rechazado y documentado. El sitio original de Estaba en Lisboa permanece sin cambios. El despliegue aislado de demostración no debe volver a presentarse como propuesta aceptada ni usarse como plantilla de la memoria.
