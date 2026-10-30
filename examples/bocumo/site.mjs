const photo = (name, alt, extra = "") =>
  `<img src="/images/${name}.webp" alt="${alt}" ${extra}>`;
const book = (label = "Reservar mesa", extra = "") =>
  `<button class="button" type="button" data-book ${extra}>${label}</button>`;
const link = (href, label, extra = "") =>
  `<a class="text-link" href="${href}" ${extra}>${label}<span aria-hidden="true">↗</span></a>`;

export const menu = [
  {
    id: "antipasti",
    name: "Para empezar",
    italian: "Antipasti",
    items: [
      [
        "Focaccia della casa",
        "Romero, aceite de oliva y sal en escamas. Para ir abriendo el vino.",
        "6,50",
      ],
      [
        "Burrata e pomodori",
        "Tomates de temporada, albahaca y pan tostado.",
        "14",
      ],
      [
        "Vitello tonnato",
        "Ternera, salsa de atún y alcaparras. Un clásico del Piamonte.",
        "15",
      ],
      [
        "Carciofi fritti",
        "Alcachofas crujientes, limón y una pizca de sal.",
        "12",
      ],
    ],
  },
  {
    id: "pasta",
    name: "La pasta, a mano",
    italian: "Primi piatti",
    items: [
      [
        "Rigatoni al pomodoro",
        "Tomate cocinado despacio, albahaca y pecorino.",
        "17",
      ],
      [
        "Pappardelle al ragù",
        "Pasta ancha y ragù de ternera que lleva su tiempo.",
        "21",
      ],
      [
        "Ravioli di ricotta",
        "Ricotta, espinacas, mantequilla tostada y salvia.",
        "19",
      ],
      [
        "Bucatini cacio e pepe",
        "Pecorino romano, pimienta negra y nada que sobre.",
        "18",
      ],
      ["Tagliatelle ai funghi", "Setas salteadas, parmesano y tomillo.", "20"],
    ],
  },
  {
    id: "dolci",
    name: "Un último bocado",
    italian: "Dolci",
    items: [
      ["Tiramisù", "Café, mascarpone y cacao. Dos cucharas, si quieres.", "8"],
      ["Panna cotta", "Vainilla y fruta de temporada.", "7"],
      ["Affogato", "Helado de vainilla y un espresso recién hecho.", "6"],
    ],
  },
  {
    id: "vino",
    name: "La copa también cuenta",
    italian: "Da bere",
    items: [
      [
        "Vino de la casa · tinto",
        "Una copa de Sangiovese para acompañar la pasta.",
        "5",
      ],
      [
        "Vino de la casa · blanco",
        "Una copa de Vermentino, fresco y sin complicaciones.",
        "5",
      ],
      ["Spritz", "Aperitivo italiano, burbujas y una rodaja de naranja.", "8"],
      ["Espresso", "Corto. Como debe ser.", "2,50"],
    ],
  },
];

const menuRows = (items) =>
  items
    .map(
      ([name, description, price]) =>
        `<li class="dish"><div><h3>${name}</h3><p>${description}</p></div><span class="price">${price}<span class="sr-only"> euros</span></span></li>`,
    )
    .join("");

function header(active) {
  return `<a class="skip-link" href="#main">Saltar al contenido</a>
  <div class="announcement"><span>PASTA FRESCA. VINO BUONO. BUONA COMPAGNIA.</span><span class="concept-label">UN RESTAURANTE IMAGINADO</span></div>
  <header class="site-header"><div class="nav-shell">
    <a href="/" class="wordmark" aria-label="Bocumo, inicio">bocumo<span>.</span></a>
    <nav id="primary-nav" class="primary-nav" aria-label="Navegación principal">
      ${[
        ["/", "Inicio"],
        ["/carta/", "La carta"],
        ["/la-casa/", "La casa"],
        ["/visita/", "Ven a vernos"],
      ]
        .map(
          ([href, label]) =>
            `<a href="${href}" ${active === href ? 'aria-current="page"' : ""}>${label}</a>`,
        )
        .join("")}
    </nav>
    <div class="header-actions">${book("Reservar mesa")}<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menú</button></div>
  </div></header>`;
}

function footer() {
  return `<section class="closing"><div class="wrap closing-inner"><div><p class="eyebrow">LAS BUENAS MESAS SE ALARGAN.</p><h2>Nos vemos<br><em>a tavola.</em></h2></div><div class="closing-action"><p>Dos personas, seis amigos<br>o cualquier excusa para volver.</p>${book("Hazle sitio a un buen rato")}</div></div></section>
  <footer class="site-footer wrap"><div class="footer-top"><a class="wordmark" href="/">bocumo<span>.</span></a><p>Cucina italiana.<br>De la mesa a la sobremesa.</p><div><a href="/carta/">La carta</a><a href="/la-casa/">La casa</a><a href="/visita/">Ven a vernos</a></div></div><div class="footer-bottom"><span>BOCUMO · CONCEPTO DE RESTAURANTE</span><span>Imágenes generadas y datos de ejemplo. No es un negocio operativo.</span><a href="/creditos/">Sobre esta previa</a></div></footer>`;
}

function reservation() {
  return `<dialog class="booking-dialog" aria-labelledby="booking-title"><div class="booking-inner"><button class="dialog-close" type="button" data-close aria-label="Cerrar reserva">×</button><p class="eyebrow">UN BUEN RATO EMPIEZA AQUÍ</p><h2 id="booking-title">Te guardamos<br><em>un sitio.</em></h2><p class="demo-note">Reserva de demostración. Puedes probar el recorrido; no se realiza ninguna reserva real.</p>
  <form id="booking-form"><div class="form-grid"><label>¿Qué día?<input type="date" name="date" required></label><label>¿Cuántos sois?<select name="guests"><option value="2">2 personas</option><option value="1">1 persona</option><option value="3">3 personas</option><option value="4">4 personas</option><option value="5">5 personas</option><option value="6">6 personas</option><option value="7">7 personas</option><option value="8">8 personas</option></select></label></div><label>¿A qué hora?<select name="time" required><option value="">Elige una hora</option><optgroup label="Comida"><option>13:30</option><option>14:00</option><option>14:30</option><option>15:00</option></optgroup><optgroup label="Cena"><option>20:30</option><option>21:00</option><option>21:30</option><option>22:00</option></optgroup></select></label><button class="button booking-submit" type="submit">Probar la reserva</button></form>
  <div id="booking-result" hidden role="status" aria-live="polite" tabindex="-1"><p class="eyebrow">ASÍ QUEDARÍA TU RESERVA</p><p class="reservation-summary"></p><p>La pasta pone la excusa.<br>La compañía, el resto.</p><p class="demo-note">Esto es una prueba. No se ha enviado ni guardado ningún dato.</p><button class="button" type="button" data-booking-reset>Probar otra fecha</button></div></div></dialog>`;
}

const home =
  () => `<section class="hero wrap"><div class="hero-copy"><p class="eyebrow">TRATTORIA ITALIANA · PASTA FATTA A MANO</p><h1>Pasta, vino<br>y un ratito<br><em>más.</em></h1><p class="hero-description">La pasta se hace a mano.<br>El vino se comparte.<br>Y de la mesa, nadie te echa.</p><div class="hero-actions">${book("Ven a la mesa")}${link("/carta/", "¿Qué se come?")}</div><p class="hero-footnote">POCAS COSAS. BIEN HECHAS.</p></div><figure class="hero-photo">${photo("pasta", "Rigatoni con tomate, albahaca y pecorino, imagen generada para Bocumo", 'width="1200" height="1500" fetchpriority="high"')}<figcaption><span>IL PIATTO DEL GIORNO</span><span>Rigatoni al pomodoro</span></figcaption></figure><div class="hero-seal" aria-label="Pasta fresca, hecha a mano"><span>PASTA</span><em>fresca</em><span>FATTA A MANO</span></div></section>
  <div class="table-band"><p>La receta es sencilla: <em>sentarse juntos.</em></p></div>
  <section class="story-section wrap"><figure class="story-photo">${photo("kitchen", "Manos preparando pasta fresca en una cocina imaginada para Bocumo", 'width="1500" height="1000" loading="lazy"')}<figcaption>HARINA, HUEVOS Y UN POCO DE PACIENCIA.</figcaption></figure><div class="story-copy"><p class="eyebrow">LA COCINA QUE NOS GUSTA</p><h2>Las manos<br>en la masa.<br><em>Y ya.</em></h2><p>Bocumo nace de una idea pequeña: comer pasta recién hecha sin tener que buscar una ocasión especial.</p><p>Una focaccia en medio. Una salsa que lleva desde la mañana al fuego. Otra copa, porque la conversación va bien.</p>${link("/la-casa/", "Esta es nuestra casa")}</div></section>
  <section class="menu-teaser"><div class="wrap menu-teaser-inner"><div><p class="eyebrow">NI MÁS, NI MENOS</p><h2>Una carta corta.<br>Una sobremesa<br><em>larga.</em></h2><p>Empezamos por aquí.<br>Luego ya vemos si cabe el tiramisù.</p>${link("/carta/", "La carta completa")}</div><ul class="dish-list">${menuRows([menu[0].items[0], menu[1].items[0], menu[1].items[1], menu[2].items[0]])}</ul></div></section>`;

const carta = () =>
  `<section class="page-intro wrap"><div><p class="eyebrow">LA CARTA · PARA LEER CON HAMBRE</p><h1>Un plato más.<br><em>Dos cucharas.</em></h1><p>Pasta a mano, algo para compartir<br>y siempre un hueco para el postre.</p></div><figure class="intro-photo">${photo("pasta", "Rigatoni al pomodoro, fotografía generada de prueba", 'width="1200" height="1500"')}</figure></section><section class="menu-content wrap"><div class="menu-toolbar"><div class="menu-filters" role="group" aria-label="Filtrar la carta"><button type="button" data-filter="all" aria-pressed="true">Toda la carta</button>${menu.map((category) => `<button type="button" data-filter="${category.id}" aria-pressed="false">${category.name}</button>`).join("")}</div><p>CARTA DE MUESTRA · PRECIOS EN € · IVA INCLUIDO</p></div><div class="menu-groups">${menu.map((category, i) => `<section class="menu-group" data-category="${category.id}" aria-labelledby="title-${category.id}"><div class="menu-group-heading"><span class="menu-number">0${i + 1}</span><div><p class="eyebrow">${category.italian}</p><h2 id="title-${category.id}">${category.name}</h2></div></div><ul class="dish-list">${menuRows(category.items)}</ul></section>`).join("")}</div><p class="allergen-note">Carta de ejemplo. Para una web real, ingredientes, precios y alérgenos se verificarían con la cocina antes de publicarlos.</p></section>`;

const casa = () =>
  `<section class="page-intro wrap no-photo"><p class="eyebrow">LA CASA · SIN GRANDES SECRETOS</p><h1>Una mesa.<br>Una buena pasta.<br><em>Lo demás, llega.</em></h1><p>No hace falta una ocasión especial.<br>Hace falta un poco de hambre y alguien con quien compartir.</p></section><figure class="wide-photo wrap">${photo("kitchen", "Preparación artesanal de pasta, escena generada para esta trattoria ficticia", 'width="1500" height="1000" fetchpriority="high"')}<figcaption>UNA COCINA IMAGINADA. UNA FORMA MUY CONCRETA DE ENTENDER LA MESA.</figcaption></figure><section class="house-copy wrap"><p class="eyebrow">EL ESPÍRITU BOCUMO</p><div><h2>La última copa<br><em>nunca tiene prisa.</em></h2><p>Imaginamos Bocumo como esa trattoria a la que vuelves un martes. La mesa de siempre, un plato de pasta, el pan para no dejar nada de salsa.</p><p>La cocina es italiana y la forma de estar, de casa. Preferimos una carta corta que apetezca repetir. Y creemos que pedir dos cucharas es casi siempre una buena idea.</p><p>Esta es una propuesta de restaurante: nombre, carta, imágenes y ambiente se han creado para probar una web con personalidad propia.</p>${link("/carta/", "Vamos a lo importante")}</div></section>`;

const visita = () =>
  `<section class="page-intro wrap no-photo"><p class="eyebrow">VEN A VERNOS · O QUÉDATE UN RATO</p><h1>Siempre cabe<br><em>alguien más.</em></h1><p>Un almuerzo que se alarga.<br>Una cena que empieza con «solo una copa».</p></section><section class="visit-grid wrap"><div class="visit-details"><p class="eyebrow">ASÍ IMAGINAMOS BOCUMO</p><h2>En el barrio.<br><em>Como en casa.</em></h2><p class="visit-location">Chamberí, Madrid</p><p>Ubicación conceptual. La dirección del restaurante<br>está por definir.</p><dl class="hours"><div><dt>De martes a jueves</dt><dd>13:00–16:00 · 20:00–23:00</dd></div><div><dt>Viernes y sábado</dt><dd>13:00–16:30 · 20:00–00:00</dd></div><div><dt>Domingo</dt><dd>13:00–17:00</dd></div><div><dt>Lunes</dt><dd>Descansamos</dd></div></dl><p class="demo-note">Horario de ejemplo para esta previa.</p></div><div class="visit-booking"><p class="eyebrow">LA MESA TE ESTÁ ESPERANDO</p><h2>Tú trae<br><em>el hambre.</em></h2><p>Elige día, hora y compañía.<br>Puedes probar la reserva sin introducir datos personales.</p>${book("Elegir mi mesa")}<p class="demo-note">Demostración sin reserva real.</p></div></section><section class="faq-section wrap"><p class="eyebrow">ANTES DE SENTARNOS</p><h2>Por si te lo preguntas.</h2><details><summary>¿Esta reserva es de verdad?</summary><p>No. Bocumo es un concepto de prueba. El formulario muestra cómo sería la experiencia y no realiza reservas ni envía datos.</p></details><details><summary>¿Hay opciones sin carne?</summary><p>La carta de muestra incluye pasta al pomodoro, ravioli de ricotta y tagliatelle con setas. En un restaurante real se confirmarían ingredientes y alérgenos con la cocina.</p></details><details><summary>¿Y para un grupo grande?</summary><p>La demostración permite elegir hasta ocho personas. Las condiciones para grupos se acordarían con el restaurante antes de activar reservas reales.</p></details></section>`;

const credits = () =>
  `<section class="page-intro wrap no-photo"><p class="eyebrow">SOBRE ESTA PREVIA</p><h1>Una trattoria<br><em>imaginada.</em></h1></section><section class="credits wrap"><p>Bocumo es una web de ejemplo escrita directamente en HTML, CSS y JavaScript. El nombre, la carta, los precios, los horarios y la ubicación conceptual son datos de demostración.</p><h2>Imágenes y tipografía</h2><p>Las dos imágenes se han generado con IA para esta prueba: rigatoni al pomodoro y preparación de pasta. No representan un restaurante existente.</p><p>Tipografía: Fraunces y DM Sans, distribuidas con sus licencias SIL Open Font License en los archivos de esta web.</p><h2>Referencias de diseño</h2><p>La biblioteca visual de Human Webs sirvió de apoyo para estudiar jerarquía, fotografía, composición, navegación y lectura móvil. Bocumo tiene su propia paleta, tipografía y composición.</p><h2>Reservas y privacidad</h2><p>La reserva funciona solo como demostración en el navegador. No hay envío, almacenamiento de datos personales, pagos ni disponibilidad real.</p>${link("/", "Volver a Bocumo")}</section>`;

export const pages = [
  {
    path: "/",
    title: "Bocumo — Pasta, vino y un ratito más",
    description:
      "Una trattoria italiana imaginada. Pasta hecha a mano, vino y una mesa que invita a quedarse.",
    body: home,
  },
  {
    path: "/carta/",
    title: "La carta — Bocumo",
    description:
      "Antipasti, pasta fresca, dolci y vino. La carta de ejemplo de Bocumo.",
    body: carta,
  },
  {
    path: "/la-casa/",
    title: "La casa — Bocumo",
    description:
      "Una mesa, una buena pasta y la sobremesa. Así imaginamos Bocumo.",
    body: casa,
  },
  {
    path: "/visita/",
    title: "Ven a vernos — Bocumo",
    description:
      "Conoce el concepto Bocumo y prueba una reserva de demostración.",
    body: visita,
  },
  {
    path: "/creditos/",
    title: "Sobre esta previa — Bocumo",
    description:
      "Imágenes generadas, fuentes abiertas y datos ficticios de esta web de ejemplo.",
    body: credits,
  },
];

export function renderPage(page) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#254537"><meta name="robots" content="noindex,nofollow"><title>${page.title}</title><meta name="description" content="${page.description}"><link rel="icon" href="data:,"><link rel="preload" href="/fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/dm-sans.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/styles.css"><script src="/app.js" defer></script></head><body>${header(page.path)}<main id="main">${page.body()}</main>${footer()}${reservation()}</body></html>`;
}
