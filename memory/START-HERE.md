# Inicio portátil: utilizar Human Webs con Codex u otra IA constructora

**Importante:** este archivo es una entrada de instrucciones, NO un agente autónomo. Codex solo detecta AGENTS.md automáticamente dentro del árbol de trabajo al que pertenece. Si construye en otro repositorio, dale acceso de lectura a esta memoria. No presupongas que puede verla.

## Configuración rápida
Opción A: tener Human Webs como un segundo checkout local (solo lectura en tareas de cliente). Ejemplo, desde un workspace que contiene ambos repositorios:

```sh
git clone https://github.com/josetabares24-png/human-webs-mega.git
# En un proyecto de cliente ya abierto, usar la ruta a ese checkout al consultar los documentos.
```

Opción B: adjuntar en el contexto de la IA estos archivos, en este orden: `AGENTS.md`, `memory/INDEX.md`, `memory/DECISIONS.md`; después solo los módulos del encargo. Si el agente tiene integración GitHub con acceso al repo, puede leer directamente las rutas en main. No adjuntar todo el repositorio.

## Prompt de inicio (pegar en Codex/IA)
> Estás construyendo un sitio en el repositorio de **[REPO_CLIENTE]**. Usa **josetabares24-png/human-webs-mega** como MEMORIA MAESTRA de consulta, no como aplicación. Primero confirma que puedes acceder a sus archivos. Lee AGENTS.md, memory/INDEX.md y memory/DECISIONS.md desde la rama main, luego abre únicamente las guías relevantes para este encargo y memory/ERRORS.md + memory/QUALITY-GATES.md. Respeta las instrucciones específicas del repositorio del cliente. Construye el sitio real sin inventar contenido o resultados, prueba rutas, móvil, SEO, funcionalidad y build, y entrega evidencia. No alteres la memoria salvo que un aprendizaje verificado necesite registrarse; en ese caso propón el cambio separado. No publiques producción sin autorización.

## Lista de arranque verificable
- [ ] Nombre exacto del repositorio cliente y rama de trabajo.
- [ ] Vía de acceso real a Human Webs: checkout local o conector GitHub.
- [ ] Confirmación de que se leyeron **AGENTS.md + INDEX + DECISIONS** (no afirmarlo sin leer).
- [ ] Guías específicas seleccionadas, con rutas.
- [ ] Errores relevantes conocidos, restricciones del cliente y plan de pruebas.
- [ ] Al final: qué se creó, qué pruebas se ejecutaron y qué aprendizaje se propone guardar.

## Si no hay acceso
No inventar reglas de Human Webs ni afirmar haber consultado memoria. Solicitar enlace accesible, lectura del repositorio o adjuntar el índice. El agente aún puede ayudar con reglas generales, pero debe decir que la memoria no se consultó.

## Vigencia
Usar `main` para instrucciones estables. Una rama experimental puede tener nuevos datos útiles, pero no sustituye las decisiones canónicas sin revisión. El archivo de un proyecto de cliente sigue teniendo prioridad para sus requisitos específicos, dentro de los límites de seguridad.
