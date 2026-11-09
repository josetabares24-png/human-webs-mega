# KATA WEBs — Código de demostraciones sectoriales

Versión editorial y funcional del portafolio comercial (9 de noviembre de 2026).

## Contenido

- build.py: genera 8 páginas HTML estáticas, dos por sector, con identidades y contenidos propios.
- new.css: cuatro sistemas de diseño separados (milpa, firme, soma, filo) con reglas responsivas y accesibilidad básica.
- new.js: interacciones locales para simuladores de reservas, cita y presupuesto; no envía ni guarda información.
- portfolio.py: adapta la portada de KATA y crea una página de casos editoriales con capturas escritorio/móvil.

El código vive en sites/kata-webs/ de la rama work/kata-webs-complete-demos-2026-11-09 de human-webs-mega. Se versiona aquí mientras se habilita un repositorio dedicado a KATA; el conector de GitHub disponible no ofrece crear un repositorio nuevo.

## Generar

Se necesita una copia del despliegue de KATA en una carpeta site-root/ (incluidas las fotografías y créditos originales en ej/{taqueria,plumber,dentist,barber}/).

Ejecutar: python3 sites/kata-webs/build.py /ruta/site-root

Copiar también new.css y new.js en la carpeta assets/ de cada una de las cuatro demos. A continuación, ejecutar portfolio.py después de capturar nuevas vistas de escritorio y móvil.

## Rutas
- La Milpa: /ej/taqueria/ y /ej/taqueria/carta/
- FIRME: /ej/plumber/ y /ej/plumber/presupuesto/
- SOMA: /ej/dentist/ y /ej/dentist/primera-visita/
- FILO: /ej/barber/ y /ej/barber/reservar/
- Estudio: /web/ejemplos/

## Reglas

1. Demos ficticias siempre identificadas; no inventar clientes ni reservas reales.
2. No pedir datos personales o de salud ni aceptar pagos en demos.
3. Mantener créditos/licencias de fotografías.
4. Mantener noindex en prototipos hasta tener dominio y datos comerciales definitivos.
5. No promocionar automáticamente un despliegue a producción. Verificar rutas y medios.
6. No reutilizar exactamente las mismas composiciones para sectores diferentes.

## Persistencia

Este código puede regenerar las demos. Los assets originales y sus licencias permanecen en el despliegue previo y requieren copia al repositorio definitivo. Las capturas del portafolio se generan a partir de páginas reales.
