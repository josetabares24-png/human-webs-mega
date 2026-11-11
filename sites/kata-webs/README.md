# KATA WEBs — pulido de la web existente

Alcance confirmado el 11/11/2026: pulir las nueve páginas del estudio. Mantener amarillo/negro, logotipo, Bricolage Grotesque, DM Sans y composición existente. No crear ni integrar ejemplos nuevos. El PR histórico #18 queda separado de este trabajo.

## Desarrollo

Requiere Node 20+ y Python 3. No necesita instalar paquetes.

```sh
npm run build
npm test
npm run dev -- --port 4173
```

Si Python no está en PATH, configurar `KATA_PYTHON` con la ruta a su ejecutable. La web está en `http://localhost:4173/web/`. La raíz redirige al estudio.

## Fuente completa

- `content/pages.json`: contenido de las nueve rutas recuperado de la web pública y depurado.
- `studio.py`: cabecera/pie/metadatos compartidos y estado de contacto.
- `assets/`: estilos, script, favicon y captura real para vista previa social.
- `static/ej/`: copia sin cambios de las cuatro demos antiguas, fotografías y créditos. Solo se preservan las rutas que ya existían; no se generan ejemplos.
- `generate.py`: escribe `_site/`, ignorado por Git. El build es determinista y las pruebas comprueban dos ejecuciones consecutivas.

## Correo pendiente

El usuario ha indicado que solo quiere correo y que todavía no lo ha creado. `site.json` mantiene `email: null`: no se publica la dirección personal, Instagram ni un formulario que finja enviar mensajes. Contacto muestra «Próximamente» y la información necesaria para preparar una propuesta.

Cuando exista una dirección comercial aprobada, establecer `email` en `site.json` o `KATA_CONTACT_EMAIL` en el entorno y volver a compilar. La prueba usa una dirección ficticia aislada; nunca se envía correo. Un enlace mailto abre el cliente de correo del visitante y no acredita recepción.

## Preview

`vercel.json` configura la salida estática `_site/`, redirección de entrada y noindex. Configurar el directorio raíz de Vercel como `sites/kata-webs`. No promocionar automáticamente a producción.

La cuenta conectada no localizó el proyecto anterior de Kata, aunque su URL pública sí estaba accesible. No se ha cambiado su configuración, dominio ni protección.
