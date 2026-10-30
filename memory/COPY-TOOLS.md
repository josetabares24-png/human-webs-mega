# Herramientas externas para mejorar textos: investigación y decisión

**Investigación:** 2026-10-30. El repositorio Human Webs no es una aplicación. Estos proyectos son **candidatos**, no dependencias instaladas ni servicios que estén corriendo.

## Comparación

| Proyecto | Qué sí hace | Limitación | Decisión |
|---|---|---|---|
| [LanguageTool](https://github.com/languagetool-org/languagetool) | Revisión ortográfica, gramatical y algunas sugerencias de estilo. Español y portugués (incluido Portugal). | No sabe si una historia comercial es real, ni si el tono corresponde a la marca. Infraestructura Java/API y privacidad de textos deben valorarse. Licencia principal LGPL-2.1+ indicada por el proyecto. | **Complemento futuro** para revisar texto final ES/PT-PT, si se autoriza usarlo localmente o una API. |
| [Vale](https://github.com/errata-ai/vale) | Linter de estilo basado en reglas propias; puede revisar documentación y copy Markdown de manera repetible. | Necesita instalar binario y mantener diccionarios; no genera frases humanas por sí solo. | **Muy útil** para escalar reglas editoriales cuando haya muchos clientes; no instalar aún. |
| [textlint](https://github.com/textlint/textlint) | Ecosistema de linters para lenguaje natural en archivos de proyecto, plugins y reglas propias. | Muchas reglas «write-good» están enfocadas en inglés; sin configurar no hay chequeos. Requiere Node 20+ según su documentación. | **Alternativa técnica** viable para un flujo editorial amplio. |
| [retext-repeated-words](https://github.com/retextjs/retext-repeated-words) | Detecta palabras duplicadas consecutivas, como «the the». | No detecta que todas las secciones repitan el mismo discurso de marketing; su integración exige revisar idioma/tokenizador. | Idea útil de detección específica, no solución integral. |
| [textlint-rule-write-good](https://github.com/textlint-rule/textlint-rule-write-good) | Reglas de estilo en **inglés**. | No apropiado como linter genérico para ES o PT-PT. | No usar como filtro principal. |
| [textlint-rule-wording](https://github.com/textlint-rule/textlint-rule-wording) | Motor de diccionarios, advertencias y sugerencias por idioma. | Según README consultado, todavía no publicado en npm; requiere Node 22+ y versión moderna de textlint. | Seguir como inspiración; no declarar que ya está instalado. |

## Decisión implementada ahora

Se incorpora un **revisor propio de Node sin dependencias**, en [tools/copy](../tools/copy/README.md). Analiza texto local y señala:
- clichés ES/PT/EN que podrían ser intercambiables entre negocios,
- palabras adyacentes duplicadas,
- secuencias de cuatro palabras repetidas en distintas líneas,
- encabezados Markdown que empiezan igual,
- uso excesivo de adjetivos habituales.

Las reglas se editan en tools/copy/phrases.json y tienen pruebas. **No hay autoremplazo, detección de IA, servicio en nube ni proceso que envíe textos**. No se ha instalado ninguno de los repositorios externos.

## Criterio para adoptar otra herramienta

Añadir una dependencia sólo cuando resuelva un problema de datos o calidad no cubierto por la herramienta actual, tenga licencia y mantenimiento revisados, y pueda integrarse con la versión de Node y pipeline del proyecto cliente. Para LanguageTool verificar primero el tratamiento de datos, costes, variante lingüística, conexión, límites del API y necesidad de alojar un servidor propio.

**Prioridad:** primero una voz de marca bien documentada y un editor que compruebe hechos; después un linter que encuentre errores frecuentes. Ningún porcentaje automático representa «humanidad».
