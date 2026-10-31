# Human Webs — interacciones claras sin flechas decorativas
**Estado:** preferencia explícita del usuario · 2026-10-31. Aplica a nuevas propuestas y rediseños con libertad visual. No altera por sí sola sitios existentes.

## Regla visual
- **No introducir flechas por defecto** (→, ↗, ›, chevron, `ArrowRight`, `ArrowUpRight`, iconos redondos con flecha, líneas con punta) en CTAs, tarjetas, enlaces editoriales ni cabeceras. No añadirlas para dar una apariencia de «web premium», «moderna» o «más interactiva».
- El texto y el affordance del control deben explicar la acción. Buenos ejemplos: «Ver paseos», «Consultar horarios», «Leer guía», «Solicitar presupuesto». Un botón puede comunicar interacción con tipografía, contraste, borde, espaciado, posición y estados.
- No sustituir las flechas por otro adorno universal (destellos, estrellas, sellos, círculos, emojis, degradados o pastillas idénticas en todas las webs). Cada marca requiere personalidad propia.
- No añadir un icono solo porque el repositorio de componentes lo ofrece. No usar iconos para simular una funcionalidad inexistente.
- **Excepción funcional:** controles anterior/siguiente de un carrusel, breadcrumbs, desplegables o direcciones reales pueden necesitar orientación; verificar reconocibilidad y alternativas accesibles. No eliminar iconografía funcional ya aprobada de una web existente sin prueba.
- En propuestas de diseño, entregar opciones **sin flechas decorativas**; excepciones se justifican con tarea y evidencia, no por gusto del agente.

## Semántica y accesibilidad
- Navegar a una URL: usar enlace (`<a>`). Ejecutar acción local o enviar formulario: usar botón (`<button>`).
- Etiqueta visible específica, foco visible, objetivos táctiles adecuados y contraste comprobado. Las acciones que abren algo externo deben decirlo cuando sea relevante; **una flecha no sustituye información**.
- Mostrar hover con variación sutil de fondo, subrayado o borde; no crear movimiento gratuito. Evitar layout shift; respetar `prefers-reduced-motion`.
- Si se decide mantener un icono funcional, documentar el porqué y comprobar que la etiqueta no depende del icono.

## Inspección antes de entregar
1. Revisar home, páginas interiores, navegación, tarjetas y CTA en 390px y 1280px, no solo el hero.
2. Buscar flechas visibles y componentes `ArrowRight/ArrowUpRight/ChevronRight` y clasificar cada uso: funcional, decoración no justificada o navegación propia de la marca.
3. Quitar decoración innecesaria; conservar controles de dirección necesarios.
4. Comparar contra la web original y comprobar que la eliminación no daña la comprensión ni la accesibilidad.
5. Documentar excepciones. **No afirmar haber realizado un barrido automático del código si solo se revisó la maqueta.**

## Laboratorios históricos
La rama `preview/human-web-design-system-2026-10-31` de Estaba en Lisboa y la preview de conversión contienen flechas; son **experimentos anteriores**, no referencias visuales aprobadas. No trasladar esas flechas a proyectos nuevos. Cualquier corrección de dichas ramas requiere pruebas sobre su propio repositorio.

## Referencias externas de criterio (sin copiar diseño)
- [Scottish Government Design System: botones](https://designsystem.gov.scot/components/button) — evita iconos decorativos, pide que correspondan a la acción.
- [GOV.UK Design System: enlaces](https://design-system.service.gov.uk/styles/links/) — prioriza enlaces legibles y contexto.
- [Nielsen Norman Group: icon usability](https://www.nngroup.com/articles/icon-usability/) — el texto y la comprensión importan más que el ornamento.
