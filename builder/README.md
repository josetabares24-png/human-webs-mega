# Human Webs Builder — MVP

Aplicación Next.js autónoma en `builder/`. Genera una página HTML estática a partir de datos reales del negocio, con tres direcciones visuales, vista previa responsive y descarga local.

## Ejecutar

```bash
cd builder
npm install
npm run dev
```

Abrir http://localhost:3000. Para desplegar en Vercel, configurar **Root Directory** como `builder`.

## Límites actuales

- No utiliza un modelo de IA: generación determinista, inmediata y sin costes de API.
- No guarda proyectos ni publica sitios automáticamente.
- No hay autenticación, facturación, editor visual ni formularios con servidor.
- La vista previa usa `iframe sandbox` sin permisos; revisar la página antes de publicarla.
- No incluir testimonios, horarios, precios ni fotografías inventados.

## Próximos hitos

1. Persistencia y autenticación por usuario.
2. Motor de IA que produzca datos validados (no HTML arbitrario) y biblioteca de patrones por sector.
3. Pruebas automáticas de accesibilidad, enlaces, móvil y SEO.
4. Publicación a Vercel bajo aprobación explícita y aislamiento de credenciales por cliente.
5. Historial de versiones, edición y facturación.
