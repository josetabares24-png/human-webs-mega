# Human Webs — memoria maestra de creación web

**Qué es:** una base de conocimiento versionada que las IA constructoras (Codex, ChatGPT y otras) consultan para crear páginas profesionales más rápido y reducir errores repetidos.

**Qué NO es:** ni un chatbot autónomo, ni una aplicación SaaS, ni un generador de webs que debamos construir. La web la programa la IA en el repositorio de destino; Human Webs le aporta criterios, referencias, fallos conocidos y controles de calidad.

## Empezar en 30 segundos
1. Abre [AGENTS.md](AGENTS.md) — Codex lo detecta automáticamente en este repositorio.
2. Abre [Índice de memoria](memory/INDEX.md) y lee solo los módulos necesarios para tu tarea.
3. Usa [Flujo de creación](memory/WORKFLOW.md) para construir y [Controles de calidad](memory/QUALITY-GATES.md) antes de entregar.
4. Incorpora nuevos aprendizajes mediante [Plantilla de registro](memory/RECORD-TEMPLATE.md).
5. Ejecuta `node tools/memory/check.mjs` para comprobar referencias y estructura de la memoria.

## Fuentes de conocimiento existentes
- [Principios de diseño](principles/pre-ai-web-design.md), [redacción humana](principles/human-copy.md) y [filtro de clichés](principles/anti-ai-checklist.md).
- [Biblioteca de restaurantes](examples/restaurants/biblioteca.md) y [registro de investigación](examples/restaurants/learning-log.md): observaciones útiles, no componentes copiables ni verdades universales.
- [Experiencias de usuario móvil](examples/mobile-ux-patterns.md).
- [Monetización](monetization.md): hipótesis comerciales, no ingresos ni conversiones demostradas.

## Otros desarrollos
La rama/PR experimental [Human Webs Builder #1](https://github.com/josetabares24-png/human-webs-mega/pull/1) contiene una aplicación independiente. Puede servir como laboratorio de pruebas, **pero no es la misión principal de este repositorio**. No se debe continuar construyendo una plataforma por defecto.

El README y contrato antiguos se conservan en [archivo histórico](archive/README-legacy-2026-10-30.md) y [prompt antiguo](archive/bot-contract-legacy-2026-10-30.md) para trazabilidad. No son instrucciones vigentes.

## Contribuir conocimiento
Toda recomendación debe distinguir observación, decisión y hipótesis; registrar fecha, fuente y nivel de evidencia; incorporar excepciones y, si procede, una prueba que detecte el error. No almacenar información privada.
