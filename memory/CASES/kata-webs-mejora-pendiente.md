# KATA WEBs: pulido de la web existente

## Actualización — 2026-11-11

**Estado:** trabajo retomado por petición del usuario. Alcance corregido explícitamente: «estas haciendo ejemplos? yo queria que solo pulieras la web». El usuario también indicó: «solo correo y aun no lo creo».

- Pulir las nueve páginas actuales de `/web/`, conservando logo, amarillo/negro, Bricolage Grotesque, DM Sans y composición existente.
- No crear ni integrar ejemplos nuevos. El PR histórico #18 queda separado. Las cuatro demos antiguas solo se recuperan sin cambios para conservar rutas, medios y créditos.
- Contacto comercial por email, dirección pendiente. No usar el correo ni las redes personales como sustituto; mostrar un estado honesto hasta disponer de dirección aprobada.
- Fuente completa y build repetible en [sites/kata-webs](../../sites/kata-webs/README.md). QA de nueve rutas, cuatro tamaños, enlaces, contacto y comparación visual en [design-qa](../../sites/kata-webs/design-qa.md).
- El 404 del conector de Vercel no equivalía a pérdida del proyecto: la CLI oficial autenticada encontró `estabaenlisboa/kata-webs-prototipos` con su ID original. No crear otro proyecto por ese error; usar la sesión que tenga acceso normal.
- Preview y rama separadas; no fusionar ni promocionar a producción automáticamente.

## Contexto histórico — 2026-11-08

Fecha: 2026-11-08. Estado: en pausa por decisión de José ("no tocaré la web temporalmente").

## Qué pidió José
- Pasar de una sola página a una web de varias páginas.
- Textos más naturales; los actuales suenan a IA.
- Mejoras estéticas.
- Hablar como "KATA WEBs" (nosotros); no nombrar a José ni Lisboa.
- No mostrar trabajos ni ejemplos por ahora; solo hablar y ofrecer servicios.
- SEO al máximo, revisado con las guías de human-webs-mega.

## Estado al pausar
- Web actual (una página): https://kata-webs-prototipos.vercel.app/1/ (noindex).
- Borrador a medias de la versión de varias páginas, sin revisar ni publicar: /workspace/kata/web/ en el ordenador de los bots (inicio, servicios, restaurantes, oficios, dentistas, cómo trabajamos, preguntas, contacto, sitemap.xml).

## Ideas de mejora para retomar
- Quitar "mantenemos tus direcciones para no perder Google" si no se puede garantizar.
- En cada servicio: para quién es, qué incluye, qué no incluye y cómo se presupuesta.
- Datos estructurados Organization/Service sin dirección inventada; FAQPage solo con preguntas reales.
- Arreglar el contorno de foco, que no se ve sobre fondo negro.
- Botones de 44-50 px, máximo dos familias tipográficas, cada CTA hace lo que dice.

## Decisiones que solo puede tomar José
- Idioma de la web (español o inglés).
- Precio y moneda.
- Dominio, email e Instagram de KATA WEBs.
- Si se muestra la frase de respuesta en 24 h (José confirmó que puede responder en ese plazo).
