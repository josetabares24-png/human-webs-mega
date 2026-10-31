# Human Webs · Biblioteca selectiva de tipografía, CTA y microinteracciones
**Estado:** repertorio técnico evaluable, NO diseño universal aprobado. **Fecha:** 2026-10-31.

## Principio de uso
Esta memoria maestra es documentación, no un producto SaaS ni un paquete de componentes instalable por sí solo. Los estilos y fuentes se implementan en el repositorio del cliente, según su framework y licencia. No cargar diez fuentes ni agregar librerías de animación por defecto. Elegir después de ver marca, contenido, imágenes reales, sitio actual, tráfico móvil y objetivos.

**Caso piloto:** Estaba en Lisboa, código experimental aislado en `josetabares24-png/portugal-autentico-v2`, rama `preview/human-web-design-system-2026-10-31`, ruta `/human-web-system`. Tiene selector de tres parejas, botones accesibles y microinteracciones. No equiparar esta demo con una mejora aprobada ni pasar a producción sin contraste real.

## Referencias consultadas (no confundir principios con CSS verificado)
- [Airbnb Experiences: buenas prácticas](https://www.airbnb.com/e/experiences-best-practices) · **observado:** exige responder interés, diferenciación, actividades concretas, logística/coste; da prioridad a fotografía real y título claro. **Adaptación:** textos de CTA precisos y fichas con contexto, sin inventar disponibilidad.
- [Lonely Planet: Lisboa](https://www.lonelyplanet.com/articles/best-things-to-do-in-lisbon) · **observado:** guía narrativa con autor, foto y consejos concretos. **Adaptación:** titular con carácter editorial y sans legible para los detalles.
- [Time Out: Lisboa 2026](https://www.timeout.com/lisbon/things-to-do/the-best-things-to-do-in-lisbon) · **observado:** rutas, criterio local, separación de recomendación y reserva. **Adaptación:** selección útil de experiencias, sin presentar todo como venta.
- [Atlas Obscura: Lisboa](https://www.atlasobscura.com/things-to-do/lisbon-portugal/) · **observado:** descubrimiento por historias y lugares poco comunes. **Adaptación:** dar una voz propia a artículos y barrios.
- [Google Design: guía de tipografías web](https://design.google/library/choosing-web-fonts-beginners-guide) · tamaño, contraste de estilos y legibilidad.
- **Límite:** no se han medido ni verificado las familias tipográficas EXACTAS usadas en el CSS de esas marcas. No afirmarlas.

### Caso documentado de simplificación visual: Thisispaper (31/10/2026)
[Su documentación pública de sistema visual](https://www.thisispaper.com/design-system) declara una única familia tipográfica (Favorit, **propietaria** y **no instalable automáticamente**), tres pesos, énfasis por escala, animación mínima de color y casi ningún efecto sobre tarjetas. El hallazgo confirma que **coherencia de decisiones**, más que multiplicar fuentes/CTAs o añadir flechas, puede expresar una identidad. No copiar su CSS, tokens, fuentes, fotos o marca; medir con navegador antes de aplicar. Véase [16 ejemplos ampliados](SECTORS/turismo/16-REFERENCIAS-ADICIONALES-EDITORIALES-2026-10-31.md).

## Banco de tipografías abiertas y criterio
Todas las alternativas nuevas propuestas proceden de Google Fonts / Open Font License; verificar licencias concretas al instalar y mantener avisos cuando corresponda.

| Pareja | Uso recomendado | Motivo | Estado |
|---|---|---|---|
| **Newsreader + DM Sans** | Guía editorial + reservas con carácter | Newsreader añade personalidad al titular y DM Sans claridad en móvil | **Recomendada para probar en Lisboa, NO aprobada** |
| **Fraunces + Instrument Sans** | Cultural y experiencial, portada especial | Más expresiva, evitar excesos de volumen y de cajas | Alternativa |
| **Playfair Display + Plus Jakarta Sans** | Continuidad de marca con menos riesgo | Ya presentes localmente en el proyecto de Lisboa | Alternativa de continuidad |

La tercera pareja NO obliga a utilizar Playfair/Plus Jakarta en otros clientes; en Lisboa ya están disponibles desde `src/components/DocumentShell.tsx`. El resto se prueba con `next/font/google` autohospedado por ruta (no por todo el sitio). En producción cargar **una sola pareja**, con `display:swap`, subsets necesarios y fallback métricamente ajustado; no cargar familias de biblioteca en todas las páginas. [Next.js: fuentes](https://nextjs.org/docs/app/api-reference/components/font).

## Banco de botones reutilizables, no una plantilla de sectores
1. **Primario**: acción comercial real, por ejemplo «Ver actividades», «Consultar opciones». Fondo de alto contraste; hover discreto con cambio de color/borde, **sin flecha ni icono ornamental predeterminado**.
2. **Secundario**: lectura o comparación, borde y fondo calmado («Ver itinerarios»).
3. **Editorial**: enlace sin caja («Leer la guía»), con foco de teclado visible.
4. **Acción contextual**: solamente para promesa respaldada por datos («Consultar horarios» si existe enlace y disponibilidad real). No «Reservar ahora» cuando solo lleva a una guía.
5. **Chip/filtro**: controles semánticos button, `aria-pressed`, cambio de resultados y foco correcto; el primer render debe tener contenido útil también sin interacción.

**Accesibilidad**: zonas táctiles preferiblemente de 44–48px de alto; WCAG 2.2 AA pide mínimo 24×24px o espaciado equivalente como criterio técnico básico ([W3C SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)). Contraste AA, icono no como única etiqueta, foco visible y accionamiento por teclado.

## Motion: catálogo de microinteracciones
- Transición de botón: `transform:translateY(-2px)` + color, 180–240ms.
- CTA de texto primero: transición sutil de fondo, borde, subrayado o contraste (180–240ms); **no animar flechas decorativas**. La dirección se indica solo si la acción la requiere.
- Tarjetas: elevación ≤5px y foto escala ≤1.045; no reordenar ni simular clics.
- Entradas: opacidad y `translateY(16px)`, solo en primeras secciones, 600–800ms y sin ocultar contenido a Google o a usuarios sin JS.
- Reducir/desactivar para `prefers-reduced-motion:reduce` y ofrecer switch de movimiento en herramientas de demostración. No parallax continuo ni contenido que se desplace sin control.
- **Rendimiento:** animar `transform` y `opacity` preferentemente: [web.dev](https://web.dev/articles/animations-guide). [Motion](https://motion.dev/docs/react-accessibility) solo si el caso necesita estados complejos; no dependencia por moda.

**Preferencia aprobada (31/10/2026):** no usar flechas (→, ↗, iconos ArrowRight/ArrowUpRight) como decoración habitual; las capturas del piloto anterior no invalidan esta nueva regla. Ver [interacciones de texto primero](TEXT-FIRST-INTERACTIONS.md).

## AUTOPROMPT OPERATIVO (reutilizable por IA constructora)
> Actúa como un director de arte editorial y un ingeniero front-end senior. Primero identifica sector, público, acción principal, SEO actual, fotos/licencias y estilos existentes. Investiga 3 referencias reales, registra qué has observado y qué NO verificaste (no inventes familias CSS). Propón 3 parejas tipográficas contrastadas y explica cuál protegería mejor la identidad. Crea tokens compartidos, componentes CTA (primario, secundario, editorial, contextual) **sin flechas decorativas**, filtros accesibles y microinteracciones de rendimiento seguro. Si hay Next.js, usa `next/font` autoalojado o archivos locales con licencia correcta. Carga un máximo de 2 familias en la página final. Mantén imágenes, rutas, schema, canonical, afiliados y métricas existentes. Construye en rama aislada, con demo que permita comparar tipografía, hover y modo de movimiento reducido. Ejecuta typecheck, build, revisa visual en desktop/móvil, accesibilidad y LCP/CLS/INP. No inventes precios, puntuaciones, disponibilidad ni resultados de test. No publiques ni cambies producción sin aprobación. Entrega link verificado, diferencias respecto a la web previa y riesgos restantes.

## Requisitos de aceptación
- 3 alternativas evaluables; la ganadora no se declara aprobada sin feedback.
- Archivo de diseño reutilizable en código destino y enlaces de prueba confirmados.
- Legibilidad ES/PT, diacríticos, tamaños de 14–16px cuerpo y 44–48px controles.
- Foco, touch, reduced motion y ausencia de desplazamientos de layout.
- SEO intacto, ruta de demo noindex, sin contenido o cifras inventadas.
- Evidencia de compilación y de captura visual comparativa; si no puede verificarse, declarar limitación.
