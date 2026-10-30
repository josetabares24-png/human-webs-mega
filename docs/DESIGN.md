# Biblioteca implementada

El contrato de `prompts/bot.md`, `biblioteca.md` y el diario prevalece sobre las antiguas demos. El generador no copia imágenes, textos, logos ni fuentes propietarias de los sitios observados. Sin fotos reales aportadas, el diseño se apoya en texto y composición.

| Dirección | Composición y tipo | Tokens | Relación con la investigación |
|---|---|---|---|
| Cuaderno | Apertura 1:2.5 con nota al margen; Georgia en texto y títulos, Trebuchet/Arial en UI; CTA outline | Fondo #f0ece0; texto #353839; radio 0; sombra none | Reinterpreta la separación editorial de tipografía y UI. No usa el pill de cadenas como defecto. |
| Invitación | Índice vertical, cuerpo desplazado y títulos de 38–62px; Garamond/Palatino/Georgia; CTA de texto | Blanco; #222222; sin caja ni sombra | Aplica austeridad y CTA discreto del caso premium. Fallbacks instalados, sin afirmar que son las fuentes comerciales observadas. |
| Cartel | Nombre de gran formato 44–120px; franjas y lista HTML; Georgia + Trebuchet/Arial; CTA rectangular | #161d1b; #f6f0e6; acento #e6c38a; radio 0; sombra none | Variante original de composición tipográfica. Su paleta oscura es una decisión propia, no una medición de St. JOHN. |

`lib/design.ts` centraliza los tokens. `lib/render.ts` adapta las estructuras a 390px y admite reducción de movimiento, foco visible, enlace de salto y objetivos de toque de 44px. No hay tres tarjetas iguales, gradientes, fotos de stock presentadas como reales ni testimonios.

Para ampliar: añadir un caso con tokens y composición concretos, justificar el sector y comprobar todas sus rutas a 390px. Si se citan medidas de una web investigada, registrarlas primero en el diario con evidencia; no atribuir decisiones originales a una medición ajena.
