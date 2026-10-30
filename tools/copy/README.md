# Human Webs — revisor de textos local

Revisa borradores en español, portugués de Portugal y otros registros portugueses, e inglés. **No detecta autoría IA**, no sustituye al editor, no corrige gramática, no envía datos a terceros y **no reescribe automáticamente**.

## Usarlo

```sh
node tools/copy/lint.mjs --lang es tools/copy/fixtures/bad-es.md
node tools/copy/lint.mjs --lang pt-PT --strict tools/copy/fixtures/good-pt.md
node tools/copy/lint.mjs --lang es --json mi-copy.md
node tools/copy/lint.mjs --lang es --allow 'hecho con amor' mi-copy.md
node --test tools/copy/lint.test.mjs
```

Analiza frases genéricas editables en `phrases.json`, palabras consecutivas duplicadas, secuencias de cuatro palabras repetidas en distintas líneas, encabezados Markdown que arrancan igual y exceso de algunos adjetivos.

Por defecto devuelve advertencias y **exit 0**. Con `--strict`, advierte y devuelve **exit 1**. Activar strict **solo sobre un copy final revisado**, no sobre documentos del repo ni código. Los fragmentos de direcciones con nombres propios se excluyen en los casos reconocibles, pero los falsos positivos siguen siendo posibles: marcas, direcciones, keywords SEO y eslóganes autorizados pueden requerir repetición. `--allow` registra excepciones puntuales al ejecutar el comando.

## Límites

El motor usa reglas simples sin análisis morfológico o semántico profundo: no resuelve conjugaciones, no comprueba veracidad ni detecta todos los clichés. Un resultado sin avisos NO significa que el texto sea natural, aprobado, accesible o correcto. Para gramática multilingüe usar [LanguageTool](https://github.com/languagetool-org/languagetool) por separado si se necesita, y seguir [guía editorial](../../memory/VOICE-AND-COPY.md).

Los datos de clientes deben permanecer en el proyecto autorizado; nunca agregarlos a los ejemplos de la memoria maestra.
