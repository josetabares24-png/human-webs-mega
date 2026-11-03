# Portafolio personal — corrección de protocolo visual
**Fecha:** 2026-11-03
**Proyecto destino:** `josetabares24-png/Portfolio`
**Fuente:** feedback directo y reiterado del propietario en conversación.
**Estado:** preferencias confirmadas y trabajos rechazados; **ninguna estética aprobada todavía**.

## Alcance y separación de marcas
El portafolio es el sitio personal de un creador de páginas web para personas y negocios de **todo el mundo**. No es Estaba en Lisboa ni un proyecto turístico. Estaba en Lisboa y Mil Sabores solo pueden funcionar como trabajos reales si el propietario decide mostrarlos; **no** aportan automáticamente temas, fotos, tipografías, lenguaje ni colores al portafolio.

## Prioridad de trabajo
La prioridad actual es **dirección visual** (arquitectura compositiva, tipografía, identidad, proporciones, recursos gráficos, navegaciones, ritmo, estados de interfaces). El contenido, los precios y la argumentación comercial se decidirán después. Identidad comercial y logo definitivos, pendientes; usar el nombre personal solo como marcador sin inventar agencia.

## Preferencias directas y vetos confirmados
- El usuario rechaza repetidamente las propuestas genéricas con «apariencia IA», incluso si el HTML funciona.
- No quiere flechas decorativas repetidas, fotografías de Lisboa para ambientar, postales de turismo, ni marcas/clientes/retratos/testimonios inventados.
- La composición debe ser verdaderamente distinta entre alternativas; no diez versiones de hero + tarjeta + botón cambiando color y foto.
- La presentación **Brisa** se refiere a la posibilidad de juzgar home, interior y móvil coherentes: no es una marca, una paleta ni autorización para copiar sus rasgos.
- **Nueva instrucción específica de formato (2026-11-03):** cuando solicite «diez propuestas, cada una en una imagen de creación de imágenes», crear **diez imágenes originales independientes**, una por generación/propuesta, no un collage, mosaico, recorte de una imagen agrupada ni archivo JPG extraído de un mosaico. Esta preferencia tiene prioridad en ese encargo específico frente a D-010; si la herramienta no consigue imágenes individuales, comunicar límite y no fingir cumplimiento.
- Los prototipos de código no sustituyen un trabajo de dirección artística aprobado. No codificar ni desplegar alternativas estéticas sin la fase correspondiente.
- Evitar mostrar proyectos actuales de turismo y restauración como si fuesen clientes ajenos; aclarar siempre proyecto propio vs. web creada para tercero, cuando proceda.

## Error repetido: proceso y formato
Se generaron varias galerías de imágenes que repetían cafés, edificios de Lisboa, personas ficticias, fotografías cálidas y una estructura equivalente. El agente llamó «propuestas independientes» a recortes de una imagen de diez paneles. Eso **no** satisface la petición de diez generaciones originales. Tampoco se registró el autoprompt en GitHub en su momento ni se ejecutaron todas sus puertas antes de producir diseños.

## Autoprompt visual portable (sin asumir aprobación)
1. Definir el objetivo y alcance real: **portafolio global de creación web**, sin arrastrar la identidad de proyectos creados por el autor.
2. Leer `AGENTS.md`, `memory/INDEX.md`, `memory/DECISIONS.md`, `memory/ART-DIRECTION.md`, `memory/ERRORS.md`, `memory/QUALITY-GATES.md` y fuentes actuales pertinentes a **studios web independientes/portafolios**. No elevar investigaciones de restaurantes a preferencias de portafolio.
3. Seleccionar referencias originales verificadas, registrar fuente/fecha/característica aprovechable y lo que no debe copiarse. No declarar «cientos de repositorios auditados» porque existan muchos enlaces.
4. Proponer sistemas visuales con diferencias sustantivas de **composición, tipo, contraste, retícula, navegación y representación de trabajos**. Rechazar sistemas que solo cambian fondo, color o fotografía; documentar por qué son distintos.
5. En fase exclusiva de estética, utilizar textos breves de marcador, sin promesas, cifras ni clientes ficticios. Usar gráficos abstractos originales y tratamiento tipográfico si no hay materiales originales autorizados.
6. Cuando el usuario pida imágenes individuales, crear exactamente una imagen única por propuesta, **no una cuadrícula**; cada propuesta puede contener vistas coherentes de la misma web si el usuario así lo desea, nunca variantes múltiples en la misma imagen.
7. Marcar imágenes como **concepto, no captura real ni web implementada**. Esperar a que el usuario elija y reenvíe una; solo entonces definir código y QA, salvo encargo expreso distinto.
8. Crear baseline del repo de destino, diseño y verificación antes/después conforme a `ART-DIRECTION.md` si la propuesta elegida pasa a implementación. Evitar afirmar pruebas inexistentes.

## Criterio de aceptación visual
Cada propuesta debe funcionar como una identidad reconocible de estudio digital independiente, no como una publicidad genérica con laptop, flor, oficina y foto decorativa. Evaluar distintividad al ocultar el nombre: si cinco ideas siguen siendo intercambiables, investigar y rehacer.

## No confundir estado
**Confirmado:** separación de proyectos, prioridad visual, rechazo de propuestas pasadas, formato de imágenes independientes.
**No confirmado:** paleta, estilo editorial/brutalista/minimalista, tipografía, fotografía personal, nombre comercial y selección de proyecto mostrado.
**Rechazado:** mosaicos recortados presentados como imágenes generadas individualmente; marca Lisboa en el portafolio; clientes inventados.
