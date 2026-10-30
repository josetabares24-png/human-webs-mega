# Plantilla para guardar aprendizaje

Usar al investigar una web, corregir un fallo o recibir una observación. No guardar perfiles, claves, contraseñas, datos privados ni material sin derechos.

```md
### ERR-XXX — Nombre verificable del problema
- Fecha y proyecto/tipo:
- Fuente: enlace, archivo, captura autorizada o feedback explícito
- Alcance: sitio, componente, viewport, navegador y versión
- Estado: observado | reproducido | mitigado | resuelto | hipótesis
- Síntoma:
- Causa demostrada (o hipótesis marcada):
- Solución aplicada:
- Contraejemplos / cuándo NO aplicar:
- Prueba de no regresión: comando, captura o recorrido específico
- Revisión siguiente / fecha si es dato cambiante:
```

## Protocolo de incorporación
1. Clasificar **hecho observado**, **preferencia**, **hipótesis**, **norma** o **decisión**.
2. Aportar evidencia, procedencia y fecha. Si falta, no elevarlo a regla obligatoria.
3. Buscar una entrada anterior: actualizar la existente en vez de duplicarla.
4. Registrar una prevención aplicable y un criterio testable.
5. Si contradice un patrón anterior, marcarlo como superseded con enlace y actualizar los puntos de entrada; nunca dos fuentes «vigentes» opuestas.
6. Ejecutar `node tools/memory/check.mjs` y las pruebas del proyecto afectado.
7. No registrar como éxito comercial algo sin métricas reales.
