# Verificación del taller — 30 octubre 2026

Historia comprobada: idea y datos del negocio → generación local o adaptador IA → previa aislada navegable → edición → versión persistida → restauración → exportación y preparación de entrega con aprobación.

## Evidencia local

Windows, Node 24.16.0, npm 11.13.0, Next 15.5.28, React 19.3.1; Chromium 156 mediante Playwright 1.64.1. Pruebas contra `next start` del build de producción en loopback.

| Comprobación | Resultado |
|---|---|
| Instalación | Dependencias fijadas y package-lock; instalación sin alertas tras corregir PostCSS |
| `npm run lint` | Correcto, ESLint 10 y reglas Next/TypeScript |
| `npm run typecheck` | Correcto |
| `npm test` | 22 pruebas correctas de motor, seguridad, persistencia, ZIP y contratos externos |
| `npm run build` | Correcto: `/`, 404 y cuatro rutas API; 148 kB First Load JS del taller |
| `npm run format:check` | Correcto |
| `npm audit` | 0 vulnerabilidades conocidas en la ejecución registrada |
| `npm run test:e2e` | 9 recorridos correctos, sin omitidos ni flaky en la última suite completa |
| Primera previa local | Última suite completa: **346 ms desde clic hasta encabezado visible**, con la app ya cargada; otra muestra: 133 ms |

El tiempo no incluye abrir el navegador, cargar la app por primera vez, instalar o compilar. No mide IA remota. No se garantiza esa cifra en otro equipo ni se afirma un SLA. La UI distingue el tiempo de generación del tiempo hasta cargar la previa; las versiones manuales sin medición dicen «Duración no medida».

[Resumen de la ejecución](local-test-results.json). Las capturas de `previews/` muestran el producto real y un negocio **de prueba**, no una web publicada de un cliente: [editor](previews/studio-desktop.png), [panel móvil](previews/studio-mobile.png), [cuaderno](previews/generated-editorial-desktop.png), [invitación](previews/generated-minimal-desktop.png), [cartel](previews/generated-bold-desktop.png).

## Recorridos del navegador

1. Crear barbería premium en Lisboa, navegar dentro de la previa, editar titular, restaurar, recargar y abrir el proyecto guardado, alternar móvil, descargar ZIP y comprobar bloqueo de publicación.
2. Importar JSON como proyectos independientes; detectar almacenamiento corrupto sin sobrescribirlo.
3. IA, GitHub y Vercel con respuestas controladas: no hay solicitud de publicación antes de aprobación, no aparece URL verificada en BUILDING, sí tras READY. Aprobación separada para GitHub. No se contacta a proveedores reales.
4. Formulario exportado: validación nativa y consentimiento; comprobar POST y campos recibidos por un endpoint de prueba interceptado. No acredita entrega de correo real.
5. Panel a 390px: sin scroll horizontal y sin infracciones detectadas por las reglas automáticas seleccionadas.
6–8. Las cuatro rutas de cada una de las tres direcciones visuales: navegación real entre archivos, un H1 por página, sin overflow a 390px y sin infracciones detectadas por axe para WCAG 2 A/AA y 2.1 AA.
9. API: rechazar operaciones sin clave, origen ajeno, publicación sin aprobación y generación con IA no configurada.

La revisión automatizada del panel excluye el iframe de origen opaco de la comprobación `frame-tested`; sus contenidos se comprueban por separado como HTML exportado. Hay además una comprobación que confirma que la previa no puede leer el documento padre. No se ha certificado WCAG completa, probado dispositivos físicos, Safari o Firefox, ni medido Core Web Vitals de producción. Hace falta revisión manual de teclado/lector de pantalla y de contenido con cada negocio.

## Fallos detectados y corregidos

- MVP sin lint, lockfile, pruebas ni gitignore; metadatos truncados después de escapar y CTA de contacto vacío: corregidos y guardados en `41d83f8` antes de ampliar funciones.
- PostCSS transitivo vulnerable: override 8.5.32. ESLint 9 informó fin de soporte; se sustituyó por ESLint 10 compatible y validado.
- Windows bloqueó una creación de carpeta en `.next` con EPERM: la repetición del build con acceso normal al host terminó correctamente. No se ocultó el error ni se trató como un build superado.
- Navegación de fragmentos en `srcDoc` y Blob con sandbox sin scripts: Chromium la bloqueó. La solución conserva origen opaco y añade exclusivamente un script fijo de navegación autorizado por hash CSP. El hash se prueba; las webs exportadas no lo necesitan.
- Nombre accesible del selector de página ambiguo: etiqueta explícita. Los tabs también tienen navegación de teclado.
- Actualización de datos podía dejar SEO y textos predeterminados antiguos: se sincronizan preservando titulares personalizados.
- Comandos como `Titular: Un corte elegante` podían confundirse con cambios de estilo: las instrucciones explícitas tienen prioridad y hay regresión cubierta.
- Las versiones manuales tenían un cero como ausencia de duración: la UI ya no lo presenta como una medición de velocidad.

## Estado por fases y trabajo pendiente

| Fase | Entrega y límite |
|---|---|
| 1. Reparar MVP | Implementada y comprobada localmente; correcciones base guardadas en GitHub. |
| 2. Aplicación local | Implementada y comprobada: panel, tres composiciones, cuatro páginas, edición, previa y exportación. |
| 3. IA | Adaptador, JSON Schema, validación, errores y alternativa local implementados y probados con respuestas controladas. **Falta prueba con modelo y credencial reales**. |
| 4. Persistencia y entrega | Proyectos/versiones locales, copias, CI y conectores protegidos implementados. **Falta verificar publicación/guardado remoto con cuentas del operador**. No hay sincronización ni cuentas de clientes. |
| 5. Rendimiento y extensibilidad | Peso local medido, fuentes sin red, motores separados, esquema versionado y plan de transición a SaaS documentados. **Pendientes CWV de campo, más casos sectoriales, usuarios y facturación**. |

No se declaran cerradas las fases de integración remota ni monetización. No se han publicado webs de clientes, gastado créditos de IA ni fusionado el PR con main. Los resultados anteriores son locales.

GitHub rechazó el primer push de la ampliación porque la credencial OAuth disponible no tiene alcance `workflow`. Para guardar el resto sin ampliar permisos, el workflow preparado se conserva en `docs/ci/builder.workflow.yml`, fuera del directorio activo de Actions. No se afirma que esa CI se haya ejecutado. Activación pendiente: un mantenedor con permiso para workflows debe copiar ese archivo a `.github/workflows/builder.yml` y comprobar el resultado del PR. La plantilla solo comprueba código y no despliega. Los dos commits locales iniciales se conservaron en una rama de respaldo antes de reorganizar los commits no publicados.

Antes de vender una web concreta: completar hechos reales, revisar copy y datos legales, configurar contacto/recepción si corresponde, probar esa web y aprobar su versión. El modo local ya permite generar, modificar, conservar y descargar código utilizable sin esas credenciales.
