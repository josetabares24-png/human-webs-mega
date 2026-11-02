# Human Webs — puente de ideas entre sectores y repositorios
**Estado:** método propuesto y consulta local, no aprobación estética ni copia de componentes · 2026-10-31.

## Objetivo
Aprovechar ideas de restaurantes, turismo y servicios **solo cuando solucionen el problema del proyecto**, sin introducir otra plantilla repetitiva. Separar el **mecanismo transferible** del aspecto, contenido, fotografía, stack y modelo comercial de su referencia.

## Dos fuentes que se complementan
1. `memory/SECTORS/catalog.json`: fichas sectoriales y nivel de evidencia (investigadas, no aprobadas). No presumir capturas actuales o CSS medido.
2. `design-library/index.json`: referencias con capturas/medidas de investigación (actualmente Carbone y Bon Bouquet). Una receta original no es una plantilla ni una licencia de copia.

Una tercera fuente complementaria puede ser un repositorio externo de herramientas (p. ej., Playwright o axe-core), **solo para implementar una capacidad específica** después de verificar estado, licencia y coste. No fusionar código ajeno a ciegas ni instalar librerías por moda.

## Cuándo mezclar ideas
- Definir primero tarea del usuario, sector, marca, activos reales, métricas y partes del sitio ya aprobadas.
- Elegir 1–2 referencias de su sector y **solo una referencia transversal** cuando aporte solución a un problema concreto.
- Para cada transferencia documentar: **origen con enlace y fecha**, observación con nivel de evidencia, problema a resolver, principio aprovechable, adaptación original, **qué NO se copiará**, riesgo de UX/SEO y prueba de aceptación.
- En rediseños el contrato de continuidad manda. Si la transferencia amenaza identidad, navegación o conversión de la web existente, descartarla.
- No transferir precios, reseñas, testimonios, datos de disponibilidad, imágenes protegidas, CSS, marcas o estructuras completas.
- Evitar patrones que el usuario ya rechazó: flechas decorativas, hero intercambiable, tres tarjetas obligatorias, terracota por defecto, textos genéricos.
- Registrar el resultado de una prueba visual real; **una coincidencia de etiquetas en el buscador no prueba calidad**.

## Ejemplos de combinación, siempre hipótesis a probar
| Destino | Idea de otro sector | Principio a explorar | No copiar |
|---|---|---|---|
| Guía turística | Menú HTML de Carbone (restaurante) | Navegación legible y acceso directo a información | Carta gastronómica, marca, tipografía propietaria |
| Turismo: reservar actividad | Claridad del flujo de Housekeep (servicios) | Mostrar condiciones y siguiente paso real | Simular disponibilidad y reserva |
| Servicios profesionales | Presentación editorial de The Hoxton (alojamiento) | Mostrar equipo/espacios auténticos para generar confianza | Fotos de huéspedes o lenguaje hotelero |
| Restaurante | Narrativa de TRANSIT (editorial turístico) | Secciones informativas con ritmo y fotografía documentada | Copiar portada/retícula y convertir la carta en reportaje |
| Servicios: consulta o presupuesto | Información previa de GetYourGuide (actividades) | Explicar condiciones antes de actuar | Calendario/inventario y modelo de marketplace |

## Herramienta de consulta local
```sh
node tools/inspiration/bridge.mjs turismo conversion
node tools/inspiration/bridge.mjs restaurantes relato
node tools/inspiration/bridge.mjs servicios confianza
node tools/inspiration/bridge.mjs --check
```
El resultado identifica fuentes principales, puente opcional, limitaciones y estado. **No genera diseño ni inspecciona la web original**. Si la necesidad no figura, investigar sin inventar coincidencias y documentar un nuevo puente.

## Cuándo pedir ayuda a otros repositorios GitHub
Para **pruebas**, consultar [herramientas 2027](TOOLS-2027.md): Playwright inspecciona browser y capturas, axe-core accesibilidad, Lighthouse CI rendimiento. Se instalan en el proyecto cliente que necesita la prueba, no en Human Webs. El agente conserva decisión y revisión final.

## Retroalimentación
Registrar qué combinación se probó, evidencia de antes/después, qué funcionó, qué se rechazó y por qué. Solo promover a memoria estable cuando existan pruebas, no por el atractivo de un screenshot.
