# Ingeniería y despliegue sin suposiciones

## Elegir arquitectura
No imponer Next.js, Astro, WordPress, Tailwind ni Vercel universalmente. Primero inspeccionar repositorio, hosting, habilidades del cliente, presupuesto, edición futura y necesidades reales. Escoger la menor complejidad suficiente.

## Integridad y seguridad
- Instalar y fijar dependencias compatibles, verificar licencias, lint, typecheck, tests y build.
- Escapar entrada del usuario, validar en servidor, proteger datos privados y accesos, gestionar secretos fuera del control de versiones.
- Formularios: endpoint real, estados de éxito/error, antispam razonable, prueba end-to-end de recepción y política de privacidad aplicable.
- Integraciones: credenciales de alcance mínimo, control de costes, idempotencia cuando hay acciones repetibles y logs sin secretos.
- No inventar nombre de API, endpoint, env var o comportamiento de un servicio: leer documentación actual y comprobar en entorno disponible.

## Publicación
- Preparar rama y preview aislados; confirmar destino y permisos.
- Revisar dominio, DNS, canonical, robots, sitemap, redirects, certificados, formularios, analítica consentida y visualización móvil.
- Publicación y cambios irreversibles solo aprobados. Verificar que la URL real responde con la versión esperada.
- Conservar rollback (commit/tag/backup) y registrar qué fue realmente desplegado.

## Performance
- Medir antes y después cuando haya contexto; optimizar imágenes, fuentes, CSS/JS y caché sin romper contenido.
- No declarar «web rápida» por una captura o un build correcto. Aportar Lighthouse/CWV con entorno y fecha cuando se hayan medido.
