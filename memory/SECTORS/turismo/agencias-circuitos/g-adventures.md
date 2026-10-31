# G Adventures — ficha de turismo

- **Tipo:** operador de circuitos y viajes con itinerarios
- **Web oficial:** https://www.gadventures.com/travel-styles/
- **Fecha de investigación:** 2026-10-31
- **Estado de preferencia:** **PENDIENTE**; el usuario no ha escogido este diseño.
- **Nivel de evidencia:** páginas web originales y recursos visuales atribuidos; **sin capturas propias actuales 390/1280 px, sin medición de CSS o conversiones**.

## Fuentes originales consultadas
- https://www.gadventures.com/travel-styles/
- https://www.gadventures.com/trips/best-of-spain-and-portugal/ESSP/
- https://developers.gadventures.com/docs/itinerary.html

## Evidencia visual y límites
Las páginas oficiales enumeran modalidades de viaje y publican itinerarios por día con lugares, actividades y mapa. Documentación pública de su API describe estructura de itinerarios, pero no autoriza integrar ni copiar datos automáticamente.

## Auditoría visual ampliada
**Idea visual principal:** El itinerario es información estructurada, no un bloque de prosa.

| Dimensión | Observación y alcance |
|---|---|
| Fondo y color | No se obtuvo captura completa fiable de su home en el estado actual. No atribuirle una paleta o tipografía exacta. La diferenciación está **verificada funcionalmente** en la presentación de días, mapa y componentes del tour. |
| Tipografía | Jerarquía de datos (día/ciudad/actividad/transporte), no familia tipográfica comprobada. |
| Fotografía y recursos | Fotografía apoya la ruta de cada día, mientras el mapa y los detalles explican movimiento del grupo. |
| Primer viewport | Tipos de viaje por intereses y destinos; segmenta exploración antes de ir a ficha de tour. |
| Composición interna | Itinerario día por día con actividades opcionales, comidas, transporte, imagen y punto de partida/final; itinerarios pueden tener variaciones temporales. |
| Navegación y CTA | Página de tour con recorrido y mapa. Su documentación oficial recalca que alojamientos indicados pueden ser representativos y variar según salida. |

**Lo distintivo:** Separar **confirmado / tentativo / opcional** es más útil que llenar una web de promesas.

## Principio reutilizable
Pequeña agencia: timeline día 1-2-3 y mapa real del recorrido, alojamiento indicado solo si se confirma, salidas fechadas y PDF accesible si hay uno autorizado.

### Boceto original para un negocio pequeño
Timeline vertical que se conecta a un mapa por jornada con inclusiones/condiciones; no construir un backend con APIs ajenas si es innecesario.

**Copy humano de ejemplo (hipotético; datos por confirmar):** ««Este es el recorrido previsto. Las paradas y el alojamiento definitivo se confirman en las condiciones de tu salida».»

## Qué no copiar
No inventar integraciones con su API, licencias o salidas; no reutilizar planes detallados, hoteles ni itinerarios sujetos a derechos.

## QA, móvil y aceptación
Timeline expandible, mapa opcional para no bloquear scroll, íconos/estados accesibles, detalles PDF comprensibles e identificación de cambios.

- **Disponibilidad, tarifas y condiciones:** pueden cambiar; consultar fuente del operador antes de publicar.
- **Autoría de medios:** no importar fotos, identidad, testimonios ni textos de terceros sin licencia.
- **Aprobación visual:** NO aprobada. Cuando el usuario comparta captura, registrar componente concreto y qué le gustó/rechazó.
- **Comprobación futura:** abrir en navegador real, verificar fotos y fuentes cargadas, capturas 390/1280 px y recorrido de enlaces/acciones; no afirmar que pasó sin hacerlo.

[Subcategoría](README.md) · [Playbook](../PLAYBOOK.md) · [Estándar de fichas](../ESTANDAR-DE-FICHAS.md).
