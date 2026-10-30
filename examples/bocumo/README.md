# Bocumo · una trattoria imaginada

Web de ejemplo escrita directamente con código. La biblioteca de Human Webs se usa como referencia de diseño; esta web no llama al bot, al motor de `builder/` ni a un proveedor de IA durante su ejecución.

```powershell
npm --prefix examples/bocumo run dev
```

Abre `http://127.0.0.1:3435/`. Requiere Node 22 o posterior; no hay dependencias que instalar. `npm --prefix examples/bocumo run build` produce una web estática en `dist/`.

## Páginas y experiencia

- Inicio: identidad editorial, fotografía de pasta y cocina, carta breve y reserva.
- La carta: contenido HTML y filtros para antipasti, pasta, dolci y bebidas.
- La casa: concepto e historia de la trattoria ficticia.
- Visita: ubicación conceptual, horario de muestra, preguntas y reserva de demostración.
- Créditos: procedencia de imágenes, tipografía y alcance de la prueba.

La reserva usa un diálogo nativo accesible, valida fecha y hora y muestra un resumen local. No envía ni guarda datos ni representa disponibilidad real. No hay pagos, mapas con una dirección inventada, analítica ni servicios de terceros.

## Código

- `site.mjs`: contenido y componentes HTML compartidos, escritos para Bocumo.
- `public/styles.css`: tokens de la identidad y composición responsive.
- `public/app.js`: navegación móvil, filtros y diálogo de reserva.
- `build.mjs`: compila las cinco páginas estáticas, sin generación con IA.
- `server.mjs`: servidor local de previa, enlazado solo a loopback.

Los cambios de código se reflejan ejecutando `npm --prefix examples/bocumo run build` y recargando el navegador. Los archivos de `dist/` están ignorados por Git.

## Dirección visual y assets

Adaptación original de la dirección expresiva estudiada en Bon Bouquet: tipo de mucho peso, una familia de formas y fotografía protagonista. Bocumo adopta su propia combinación de verde botella, marfil, rojo tomate y rosa cálido, con lectura editorial y una silueta de arco para las fotos. No es una réplica ni mezcla automáticamente piezas de los dos casos.

Fraunces y DM Sans se sirven localmente. Las licencias OFL y URLs oficiales están en `public/fonts/`. Son elecciones originales para esta web, no las fuentes medidas en los sitios de referencia.

Las dos fotos se generaron con la herramienta de imágenes de Codex para esta prueba. Los originales permanecen en la carpeta de imágenes generadas de Codex; las versiones WebP locales mantienen el encuadre y reducen el peso. No son fotos de un restaurante real. Procedencia en `public/images/sources.json`.

Nombre, ubicación conceptual, carta, precios y horarios son de demostración. Las capturas y comprobaciones realizadas se documentan en `VERIFICATION.md`.
