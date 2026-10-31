# GetYourGuide — ficha de turismo

- **Tipo:** marketplace de actividades y entradas
- **Web oficial:** https://www.getyourguide.com/lisbon-l42/
- **Fecha de investigación:** 2026-10-31
- **Estado de preferencia:** **PENDIENTE**; el usuario no ha escogido este diseño.
- **Nivel de evidencia:** páginas web originales y recursos visuales atribuidos; **sin capturas propias actuales 390/1280 px, sin medición de CSS o conversiones**.

## Fuentes originales consultadas
- https://www.getyourguide.com/lisbon-l42/
- https://thunderbit.com/template/getyourguide-scraper

## Evidencia visual y límites
El portal oficial muestra categorías y atracciones; una captura de terceros publicada en 2025 presenta una ficha de tour con mosaico de fotos y widget de precio/disponibilidad. La captura no demuestra el estado actual ni las condiciones de cada actividad.

## Auditoría visual ampliada
**Idea visual principal:** Comparar y reservar con la decisión a la vista.

| Dimensión | Observación y alcance |
|---|---|
| Fondo y color | Captura de 2025: fondo blanco, títulos azul marino, fotografías de actividad en mosaico, botón primario azul y módulo de precio/reserva. Son rasgos **solo de esa captura**. |
| Tipografía | Sans funcional, peso fuerte para título y precio, etiquetas pequeñas para datos críticos; no se verificó font-family ni tamaño computado. |
| Fotografía y recursos | La foto debe mostrar qué incluye la actividad (monumento, paseo, guía, entorno) y no prometer una escena que no se visitará. |
| Primer viewport | Título buscable, galería y CTA de disponibilidad cercano; el visitante llega con una intención más concreta que «conocer Lisboa». |
| Composición interna | Categorías de experiencias y páginas de atracción, valoraciones del proveedor (no transferibles), información de duración, idioma, inclusión y cancelación cuando se ofrece. |
| Navegación y CTA | Fichas de tours y enlaces hacia proceso de disponibilidad/reserva; no se comprobaron fechas libres ni checkout end-to-end. |

**Lo distintivo:** Eliminar dudas **antes** del botón de reserva: duración, precio, punto de encuentro, idioma, cancelación y qué incluye.

## Principio reutilizable
Web de un operador pequeño: ficha única por tour, 4–8 fotos autorizadas, dos recorridos diferenciados, mapa del embarque, duración, inclusiones y enlace real a su motor de reservas; sin comparador masivo.

### Boceto original para un negocio pequeño
Portada narrativa con dos excursiones reales y una ficha de detalles muy fácil de explorar; CTA de reserva consistente con el proveedor real.

**Copy humano de ejemplo (hipotético; datos por confirmar):** ««Salida desde [muelle confirmado], recorrido de [duración verificada] y enlace directo para consultar plazas».»

## Qué no copiar
No mostrar ratings, reviews, precios o botones de «últimas plazas» tomados de otra actividad; no añadir carrito ni checkout inexistentes.

## QA, móvil y aceptación
Ficha de tour con información antes de reservar; CTA útil sin tapar lectura, enlace externo identificado, resumen de condiciones y mapa del punto real.

- **Disponibilidad, tarifas y condiciones:** pueden cambiar; consultar fuente del operador antes de publicar.
- **Autoría de medios:** no importar fotos, identidad, testimonios ni textos de terceros sin licencia.
- **Aprobación visual:** NO aprobada. Cuando el usuario comparta captura, registrar componente concreto y qué le gustó/rechazó.
- **Comprobación futura:** abrir en navegador real, verificar fotos y fuentes cargadas, capturas 390/1280 px y recorrido de enlaces/acciones; no afirmar que pasó sin hacerlo.

[Subcategoría](README.md) · [Playbook](../PLAYBOOK.md) · [Estándar de fichas](../ESTANDAR-DE-FICHAS.md).
