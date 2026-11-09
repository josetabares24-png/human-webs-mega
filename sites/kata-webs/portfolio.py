#!/usr/bin/env python3
"""Integrate distinct KATA WEBs case studies into existing public site.
No screenshots of old demos are used; every case links to the complete new demo.
"""
from pathlib import Path
import re, json, html, sys
root = Path(sys.argv[1]).resolve()
web = root / "web"
home = web / "index.html"
s = home.read_text(encoding="utf8")
def add_styles(h):
    marker='<link rel="stylesheet" href="/web/assets/style.css">'
    if marker in h and 'kata-portfolio.css' not in h:
        h=h.replace(marker,marker+'\n<link rel="stylesheet" href="/web/assets/kata-portfolio.css">',1)
    return h
def fix_nav(h):
    return h.replace('>Ejemplos</a>','>Proyectos</a>')
s=fix_nav(add_styles(s))
featured='''<section class="kp-teasers" id="trabajos" aria-labelledby="kp-teasers-title"><div class="kp-container"><div class="kp-kicker">PORTAFOLIO · KATA WEBs</div><div class="kp-teaser-heading"><h2 id="kp-teasers-title">No hacemos<br>una web para <em>todos.</em></h2><div><p>Un restaurante necesita una carta que se pueda leer. Una barbería, mostrar sus cortes. Cada proyecto empieza por entender a quién sirve.</p><a href="/web/ejemplos/">Conoce los cuatro proyectos</a></div></div><div class="kp-teaser-grid">
<a class="kp-teaser kp-teaser--milpa" href="/ej/taqueria/"><div class="kp-teaser-media"><img src="/ej/taqueria/photo-1.webp" alt="Fotografía de tacos de la demo La Milpa" loading="lazy" width="1800" height="1200"><div class="kp-teaser-word kp-milpa-word">la milpa.</div></div><div class="kp-teaser-bottom"><span>01 / RESTAURANTE</span><p>Una carta de verdad, no un PDF escondido.</p><strong>Explorar La Milpa</strong></div></a>
<a class="kp-teaser kp-teaser--filo" href="/ej/barber/"><div class="kp-teaser-media"><img src="/ej/barber/photo-1.webp" alt="Fotografía de barbería utilizada en la demo FILO" loading="lazy" width="1800" height="1200"><div class="kp-teaser-word kp-filo-word">FILO//</div></div><div class="kp-teaser-bottom"><span>02 / BARBERÍA</span><p>El trabajo primero. La agenda a un toque.</p><strong>Explorar FILO</strong></div></a>
</div><p class="kp-teaser-note">Los cuatro negocios que mostramos son ficticios y sus funciones son demostraciones sin reserva ni pagos reales. <a href="/web/ejemplos/">Ver también oficios y clínicas.</a></p></div></section>'''
start=s.find('<section class="sec kt-showcase"')
if start>=0:
    end=s.find('</section>',start)
    if end<0:raise RuntimeError("Portfolio section not closed")
    s=s[:start]+featured+s[end+len('</section>'):]
else:
    end=s.rfind('</main>')
    if end<0:raise RuntimeError("Home has no main")
    s=s[:end]+featured+s[end:]
home.write_text(s,encoding='utf8')
# Build portfolio from actual site header/footer (keeping its established visual language).
head=re.search(r'<head\b[^>]*>[\s\S]*?</head>',s,re.I)
header=re.search(r'<header\b[^>]*>[\s\S]*?</header>',s,re.I)
footer=re.search(r'<footer\b[^>]*>[\s\S]*?</footer>',s,re.I)
if not all((head,header,footer)):raise RuntimeError("Original KATA layout incomplete")
h=head.group(0)
h=re.sub(r'<title>[\s\S]*?</title>','<title>Portafolio de diseño web · KATA WEBs</title>',h,count=1)
desc='Cuatro proyectos web con diseño y funciones propios: restaurante, oficio, clínica y barbería. Explora ocho páginas navegables y ejemplos reales de trabajos publicados.'
h=re.sub(r'(<meta name="description" content=")[^"]*(")',lambda m:m.group(1)+html.escape(desc,quote=True)+m.group(2),h)
h=re.sub(r'(<meta property="og:description" content=")[^"]*(")',lambda m:m.group(1)+html.escape(desc,quote=True)+m.group(2),h)
h=re.sub(r'(<meta name="twitter:description" content=")[^"]*(")',lambda m:m.group(1)+html.escape(desc,quote=True)+m.group(2),h)
h=re.sub(r'(<link rel="canonical" href=")[^"]*(")',lambda m:m.group(1)+'https://kata-webs-prototipos.vercel.app/web/ejemplos/'+m.group(2),h)
h=re.sub(r'(<meta property="og:url" content=")[^"]*(")',lambda m:m.group(1)+'https://kata-webs-prototipos.vercel.app/web/ejemplos/'+m.group(2),h)
h=re.sub(r'(<meta property="og:title" content=")[^"]*(")',lambda m:m.group(1)+'Portafolio KATA WEBs'+m.group(2),h)
h=re.sub(r'<script type="application/ld\+json">[\s\S]*?</script>', '', h)
if 'kata-portfolio.css' not in h:h=add_styles(h)
cases=[
    dict(n='01', sector='RESTAURANTES',brand='la milpa.',slug='taqueria',sub='carta',sublabel='Abrir la carta',theme='milpa',pitch='El menú es parte de la experiencia.',subheading='Una carta que se consulta sin hacer zoom.',problem='Una persona quiere decidir qué comer, consultar precios y reservar en pocos segundos.',solution='Una identidad cálida, una carta digital completa y una simulación de reserva visible.',note='Comida, identidad y reservas de ejemplo.',visual='MAÍZ Y FUEGO',image='photo-1.webp',imagealt='Tacos mexicanos fotografiados para el concepto de restaurante'),
    dict(n='02', sector='OFICIOS',brand='FIRME',slug='plumber',sub='presupuesto',sublabel='Probar el presupuesto',theme='firme',pitch='Cuando algo falla, primero claridad.',subheading='Que sepan qué reparas y dónde trabajas.',problem='Al buscar ayuda importa el servicio concreto, la zona y cómo enviar una consulta.',solution='Una web industrial, servicios fáciles de leer y un presupuesto que genera un resumen sin enviar datos.',note='Servicios, zonas y presupuesto.',visual='SIN RODEOS.',image='photo-1.webp',imagealt='Trabajo de fontanería, fotografía ilustrativa'),
    dict(n='03', sector='CLÍNICAS',brand='soma·',slug='dentist',sub='primera-visita',sublabel='Ver primera visita',theme='soma',pitch='Explicar sin asustar ni prometer.',subheading='La tranquilidad empieza antes de entrar.',problem='Una persona puede tener dudas sobre tratamientos y sobre cómo será la primera visita.',solution='Tono sereno, tratamientos explicados con prudencia y selector de cita sin pedir datos médicos.',note='Información sanitaria responsable y primera visita.',visual='ESCUCHAR.',image='photo-1.webp',imagealt='Espacio de clínica dental de ejemplo'),
    dict(n='04', sector='BARBERÍAS',brand='FILO//',slug='barber',sub='reservar',sublabel='Probar agenda',theme='filo',pitch='Que hable el corte.',subheading='El trabajo, los precios y la agenda.',problem='Un cliente quiere ver el estilo del local, comparar cortes y elegir su turno.',solution='Dirección gráfica contundente, galería de trabajos de referencia y agenda interactiva de muestra.',note='Fotografía, precios y turnos de ejemplo.',visual='EL CORTE.',image='photo-1.webp',imagealt='Fotografía de barbería ilustrativa')
]
def case(d):
    url='/ej/'+d['slug']+'/'
    return f'''<article class="kp-case kp-{d["theme"]}" id="{d["theme"]}"><div class="kp-container"><div class="kp-case-heading"><div><span>{d["n"]} / {d["sector"]}</span><h2>{d["brand"]}</h2></div><p>{d["pitch"]}</p></div><div class="kp-case-grid">
<div class="kp-case-copy"><h3>{d["subheading"]}</h3><dl><dt>La necesidad</dt><dd>{d["problem"]}</dd><dt>La respuesta</dt><dd>{d["solution"]}</dd></dl><p class="kp-case-delivery">{d["note"]}</p><div class="kp-links"><a class="kp-visit" href="{url}">Abrir la web completa</a><a class="kp-sub" href="{url+d["sub"]}/">{d["sublabel"]}</a></div></div>
<a class="kp-art" href="{url}" aria-label="Abrir la demostración {d["brand"]}"><img src="{url+d["image"]}" alt="{d["imagealt"]}" width="1800" height="1200" loading="lazy"><div class="kp-art-type"><small>{d["sector"]} / CONCEPTO</small><strong>{d["visual"]}</strong></div></a></div></div></article>'''
body='''<main id="main"><section class="kp-portfolio-hero"><div class="kp-container"><div class="kp-meta"><span>PORTAFOLIO / KATA WEBs</span><span>IDENTIDAD, CONTENIDO Y EXPERIENCIA</span></div><h1>Ningún negocio<br>es igual a otro.<br><em>Su web tampoco.</em></h1><div class="kp-hero-desc"><p>Cuatro ideas construidas para cuatro necesidades muy distintas. Ocho páginas que puedes recorrer, con detalles y funciones de ejemplo.</p><a href="#conceptos">Explorar proyectos</a></div><p class="kp-note">Todos los negocios de esta sección son ficticios. Los botones de citas, presupuestos y reservas no envían información ni realizan pagos.</p></div></section><div id="conceptos" class="kp-case-list">'''+''.join(case(d) for d in cases)+'''</div><section class="kp-real"><div class="kp-container"><span>TRABAJOS PUBLICADOS / SIN SIMULACIONES</span><div class="kp-real-head"><h2>También hay<br>webs <em>de verdad.</em></h2><p>Estas páginas están publicadas y puedes visitarlas. No atribuimos testimonios ni resultados numéricos que no podamos comprobar.</p></div><div class="kp-real-grid"><a href="https://www.milsaboresbrunch.com/" target="_blank" rel="noopener noreferrer"><span>01 / RESTAURACIÓN</span><h3>Mil Sabores Brunch</h3><p>Un restaurante real en Lisboa.</p><strong>Visitar proyecto</strong></a><a href="https://estabaenlisboa.com/" target="_blank" rel="noopener noreferrer"><span>02 / GUÍA EDITORIAL</span><h3>Estaba en Lisboa</h3><p>Una web de contenidos y guías sobre Lisboa.</p><strong>Visitar proyecto</strong></a></div></div></section><section class="kp-outro"><div class="kp-container"><small>EL SIGUIENTE PROYECTO</small><h2>No queremos copiar estas webs.<br>Queremos entender <em>la tuya.</em></h2><p>Qué vendes, en qué ciudad trabajas y qué tiene que encontrar tu cliente.</p><a class="kp-outro-btn" href="/web/contacto/">Cuéntanos qué negocio tienes</a></div></section></main>'''
page='<!doctype html><html lang="es">'+h+'<body><a class="skip" href="#main">Saltar al contenido</a>'+header.group(0)+body+footer.group(0)+'<script src="/web/assets/site.js" defer></script></body></html>'
write = web / "ejemplos/index.html"
write.parent.mkdir(exist_ok=True)
write.write_text(page,encoding='utf8')
sitemap=web/"sitemap.xml"
if sitemap.exists():
    text=sitemap.read_text(encoding='utf8')
    if '/web/ejemplos/' not in text:
        text=text.replace('</urlset>','<url><loc>https://kata-webs-prototipos.vercel.app/web/ejemplos/</loc></url></urlset>')
        sitemap.write_text(text,encoding='utf8')
print('updated',home,len(s),'portfolio',len(page))
