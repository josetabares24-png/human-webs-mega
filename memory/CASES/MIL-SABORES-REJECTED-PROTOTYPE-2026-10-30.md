# Caso real: Mil Sabores — prototipo rechazado, web existente preferida

**Fecha del feedback:** 2026-10-30  
**Proyectos examinados:** `josetabares24-png/human-webs-mega` (memoria), `josetabares24-png/milsabores` (sitio existente).  
**Referencia pública:** https://www.milsaboresbrunch.com/  
**Resultado:** **RECHAZADO COMO REDISEÑO**. El usuario compara el prototipo de tres direcciones propuesto por la IA con su web publicada y afirma: **«Es mil veces mejor la mía»**. Es un juicio del usuario (preferencia explícita); no significa que se haya medido una diferencia de conversión o rendimiento.

## Qué se observó o verificó

1. El proyecto existente tiene `brand/BRAND-MEMORY.md` y `brand/DECISIONS.md` con decisiones `LOCKED`: logo oficial, identidad azul pastel `#A8C5D9`, Quicksand/Pacifico y usos específicos. El sitio ya ofrece navegación multipágina, localización, menú, reserva e idiomas. No es correcto tratarlo como una landing genérica desde cero.
2. El código existente contiene archivos reales de producto en `public/images/Mil Sabores/`: platos, bebidas y fotos relacionadas con el negocio. En la demostración anterior, las fotografías enlazadas remotamente no llegaron a cargarse en las capturas. **Una demo de restaurante con huecos de fotografía no permite juzgar el diseño**. Fue presentada sin imágenes verificadas.
3. El prototipo apostó por nuevas composiciones y paletas, pero **no acreditó que el conjunto superase al sitio actual**. La dirección «Baixa Fresca» fue recomendada antes de una comparación visual completa con imágenes, páginas internas y acciones funcionales.
4. Lo que el usuario ha expresado de forma inequívoca es **que prefiere su web actual** frente al prototipo. Cualquier explicación adicional de *por qué* visualmente lo prefiere es hipótesis hasta que se valide con feedback concreto.

## Error de proceso

La memoria exigía tres direcciones visuales distintas, pero no había una **puerta de calidad relativa al sitio actual**. Distinto no es necesariamente mejor. Se empezó por proponer alternativas en vez de exigir una comparación justa con la referencia que el cliente ya había aprobado y con sus activos de marca reales.

## Lecciones que deben aplicarse

- **Baseline obligatorio para rediseños:** registrar antes de diseñar qué funciona del sitio existente: identidad, densidad de contenido, calidad de fotos, jerarquía, navegación, CTA, funcionalidad, contenido, accesibilidad, idiomas y SEO. Separar hechos verificados de preferencias del usuario.
- **Respetar lo `LOCKED`:** antes de tocar tipografías, logo o paleta, leer los documentos de marca y señalar qué se conserva. Una alternativa que los contradiga no puede recomendarse como mejora sin aprobación.
- **Prototipo visual completo:** usar fotos reales autorizadas como archivos locales o URLs con carga verificada; comprobar que realmente se renderizan en las capturas finales. Si falta la imagen principal o el logo, la demo es incompleta y **no debe presentarse como comparación estética concluyente**.
- **Comparación a igual condiciones:** mismo viewport, imágenes cargadas, rutas equivalentes y objetivos comparables. Evaluar *antes vs. después* y anotar mejoras verificables, regresiones y dudas.
- **No preferir la novedad al acabado:** no recomendar un diseño solo porque sea diferente, «editorial», más atrevido o pase tres rutas de dirección artística. Evaluar calidad concreta y usabilidad, no contar propuestas.
- **Fallback sensato:** si las alternativas no mejoran al sitio existente de manera defendible, **conservar el diseño actual**, proponer mejoras puntuales y presentarlas sin presión para un rediseño.
- **Feedback como evidencia:** este resultado queda en la categoría `rechazado_por_usuario`, no `diseño_exitoso`. No convertirlo en plantilla ni ejemplo de calidad aprobada.

## Qué habría sido una entrega válida

1. Capturas de la web real actual en 390 px y 1280 px, con imágenes, logo y tipografía cargados.
2. Diagnóstico que preserve los activos `LOCKED` y enumere oportunidades *específicas y comprobadas* en `Hero.tsx`, `Navigation.tsx`, menú, reservas y componentes internos.
3. Uno o más prototipos funcionales **completos**, cargados con fotos autorizadas desde el propio repo, sin placeholders ni imágenes rotas, en una preview aislada.
4. Comparativa visual real de iguales pantallas + lista de mejoras y regresiones, incluyendo móvil, tiempos de carga y acciones principales.
5. Si no se demuestra una mejora o al usuario no le gusta, **no tocar producción ni argumentar que la IA sabe más**. Registrar el rechazo y conservar el original.

## Prueba de no regresión para la próxima web existente

Antes de decir «esta versión es mejor», el agente debe poder responder con evidencia:
- ¿Leí las decisiones de marca del repositorio y marqué las reglas `LOCKED`?
- ¿Tengo capturas verificables **antes/después** con las imágenes realmente cargadas?
- ¿Conservé funcionalidades, idioma y navegación existentes sin regresión?
- ¿Qué **tres mejoras específicas** se observan, además de ser visualmente diferente?
- ¿Qué aspectos de la versión anterior podrían seguir siendo superiores?
- ¿La recomendación de rediseñar sigue justificada? Si no: mejora incremental, no reemplazo.

**Estado del caso:** feedback guardado; la propuesta fue rechazada. La causa exacta de la preferencia estética del usuario no fue desglosada; no se afirma validación de un diseño sustituto. El sitio Mil Sabores no se modifica en esta actualización.
