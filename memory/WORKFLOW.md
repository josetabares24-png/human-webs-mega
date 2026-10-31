# Flujo rápido de construcción utilizando la memoria

## A. Entender el encargo (sin asumir)
1. Descubre el repo de destino y el objetivo comercial: qué tiene que lograr el usuario en la web. **Para un rediseño:** compara primero el sitio existente con capturas completas y memorias de marca. Registra lo que funciona; no presupongas que hay que empezar desde cero.
2. Brief mínimo: tipo de negocio, localización, audiencia, servicio, diferencial, idioma, identidad, assets, acciones principales, páginas, requisitos legales, contacto, plazo. Desconocido ≠ permiso para inventar.
3. Clasifica: web nueva, rediseño, corrección visual, SEO técnico, componente, integración **y sector**. Entra a [biblioteca por sector](SECTORS/README.md). Si es turismo, elige [destinos/tours/agencias/hoteles](SECTORS/turismo/README.md) y consulta [su playbook](SECTORS/turismo/PLAYBOOK.md). Si es servicio, elige [hogar/belleza/profesionales/inmobiliaria](SECTORS/servicios/README.md), lee el [playbook](SECTORS/servicios/PLAYBOOK.md) y decide si la acción real es contacto, consulta, presupuesto o reserva; no son equivalentes.
4. Para web nueva/rediseño con libertad de diseño, sigue [ART-DIRECTION](ART-DIRECTION.md): investiga fuentes reales (del sector y de un sector transversal), compara **tres direcciones de arte diferentes**, documenta selección y alternativas rechazadas. No clones una web ajena.

## B. Preparar antes del código
1. Lee `AGENTS.md`, `memory/INDEX.md` y solo los módulos relevantes.
2. Revisa `memory/ERRORS.md`; haz una lista de riesgos concretos.
3. Inspecciona código y tests existentes del repo de destino; respeta componentes, tokens, estructura y estilo vigentes.
4. Antes de codificar copy final, prepara el mapa de voz (marca, público, idioma, hechos, CTA) y sigue [VOICE-AND-COPY](VOICE-AND-COPY.md). Revisa cada sección contra las demás y evita titulares intercambiables. No inventes datos para mejorar estilo.
5. Diseña primero contenido y sitemap/flujo; después plantea tres propuestas de estilo sustancialmente distintas. Rechaza el terracota y la composición habitual como valores por defecto. Elige una opción con criterio documentado en [ficha de dirección](DESIGN-DIRECTION-TEMPLATE.md).

## C. Construir
1. Cambios pequeños, reutilizables y fáciles de revisar; crea/usa rama de trabajo.
2. Prefiere soluciones simples y dependencias mínimas; investiga licencias y compatibilidad antes de añadir paquetes.
3. Usa assets reales autorizados; deja pendientes visibles si faltan datos.
4. No generes reseñas, precios, fotografías o certificaciones falsas.
5. Implementa funcionalidad completa para el alcance, no solo un hero.

## D. Verificar y aprender
1. Ejecuta herramientas del proyecto (instalación, lint, typecheck, test, build según existan).
2. Navega en móvil y escritorio con capturas **después de comprobar que las imágenes, fuentes y logo han cargado**; comprueba todas las rutas y acciones principales. En rediseños, usa el mismo viewport que el baseline y registra mejoras y regresiones.
3. Para páginas con copy nuevo, revisar titulares/CTA entre rutas y, si corresponde, ejecutar [linter local](../tools/copy/README.md) en borradores .md/.txt de forma consultiva. No borrar keywords ni hacer sustituciones automáticas.
4. Verifica contenido, enlaces, contacto, SEO, seguridad y accesibilidad; revisa `QUALITY-GATES.md`. Para código web, aplica opcionalmente [auditoría de flechas](../tools/design-audit/README.md) y revisa cada aviso sin borrar iconos direccionales funcionales.
5. Si la web necesitó ideas externas al sector, registra los principios extraídos del [puente de bibliotecas](CROSS-SECTOR-IDEAS.md) y evidencia de adaptación propia.
6. Cuando haya un fallo repetible: registra síntoma, causa, solución y test en `ERRORS.md` con el [formato](RECORD-TEMPLATE.md).
7. Deja commit/PR, evidencia y limitaciones; despliegue productivo solo autorizado.

## Entrega mínima al cliente
- Qué se creó, con enlace a preview o explicación honesta si no existe.
- Qué se verificó y cómo (incluye fallos y pendientes).
- Qué información debe confirmar el cliente.
- Qué instrucciones nuevas se incorporaron a la memoria y por qué, cuando corresponda.
