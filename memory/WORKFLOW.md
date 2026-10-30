# Flujo rápido de construcción utilizando la memoria

## A. Entender el encargo (sin asumir)
1. Descubre el repo de destino y el objetivo comercial: qué tiene que lograr el usuario en la web.
2. Brief mínimo: tipo de negocio, localización, audiencia, servicio, diferencial, idioma, identidad, assets, acciones principales, páginas, requisitos legales, contacto, plazo. Desconocido ≠ permiso para inventar.
3. Clasifica: web nueva, rediseño, corrección visual, SEO técnico, componente, integración.
4. Selecciona 1–2 referencias **del mismo tipo**, revisa evidencia y señala diferencias. No copies una web ajena.

## B. Preparar antes del código
1. Lee `AGENTS.md`, `memory/INDEX.md` y solo los módulos relevantes.
2. Revisa `memory/ERRORS.md`; haz una lista de riesgos concretos.
3. Inspecciona código y tests existentes del repo de destino; respeta componentes, tokens, estructura y estilo vigentes.
4. Diseña primero contenido y sitemap/flujo; después tipografía, composición, sistema de componentes y estados.

## C. Construir
1. Cambios pequeños, reutilizables y fáciles de revisar; crea/usa rama de trabajo.
2. Prefiere soluciones simples y dependencias mínimas; investiga licencias y compatibilidad antes de añadir paquetes.
3. Usa assets reales autorizados; deja pendientes visibles si faltan datos.
4. No generes reseñas, precios, fotografías o certificaciones falsas.
5. Implementa funcionalidad completa para el alcance, no solo un hero.

## D. Verificar y aprender
1. Ejecuta herramientas del proyecto (instalación, lint, typecheck, test, build según existan).
2. Navega en móvil y escritorio con capturas; comprueba todas las rutas y acciones principales.
3. Verifica contenido, enlaces, contacto, SEO, seguridad y accesibilidad; revisa `QUALITY-GATES.md`.
4. Cuando haya un fallo repetible: registra síntoma, causa, solución y test en `ERRORS.md` con el [formato](RECORD-TEMPLATE.md).
5. Deja commit/PR, evidencia y limitaciones; despliegue productivo solo autorizado.

## Entrega mínima al cliente
- Qué se creó, con enlace a preview o explicación honesta si no existe.
- Qué se verificó y cómo (incluye fallos y pendientes).
- Qué información debe confirmar el cliente.
- Qué instrucciones nuevas se incorporaron a la memoria y por qué, cuando corresponda.
