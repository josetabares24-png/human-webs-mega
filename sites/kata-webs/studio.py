"""Shared, server-rendered studio layout. No browser framework or runtime secrets."""
from pathlib import Path
from html import escape
from urllib.parse import quote, urlsplit
import json, os, re

HERE=Path(__file__).resolve().parent
SETTINGS=json.loads((HERE/'site.json').read_text(encoding='utf8'))
EMAIL=os.environ.get('KATA_CONTACT_EMAIL',SETTINGS.get('email'))
if EMAIL and not re.fullmatch(r'[A-Za-z0-9.!#$%&\x27*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}',EMAIL):
    raise ValueError('KATA_CONTACT_EMAIL must be a valid business email address')
ORIGIN=SETTINGS['origin'].rstrip('/')
if urlsplit(ORIGIN).scheme!='https': raise ValueError('site.json origin must use HTTPS')
NAV=[('Servicios','/web/servicios/'),('Restaurantes','/web/restaurantes/'),('Oficios','/web/oficios/'),('Dentistas','/web/dentistas/'),('Barberías','/web/barberias/'),('Cómo trabajamos','/web/como-trabajamos/'),('Preguntas','/web/preguntas/'),('Contacto','/web/contacto/')]
SECTORS=[('Restaurantes','restaurantes'),('Oficios','oficios'),('Clínicas','dentistas'),('Barberías','barberias')]

def contact_link():
    return 'mailto:'+EMAIL+'?subject='+quote(SETTINGS['contactSubject']) if EMAIL else '/web/contacto/'

def render(slug,title,description,body):
    path='/web/'+(slug+'/' if slug else '')
    links=''.join(f'<a href="{href}"'+(' class="btn b1 sm"' if label=='Contacto' else '')+(' aria-current="page"' if href==path else '')+'>'+label+'</a>' for label,href in NAV)
    header=f'<header class="top"><div class="w top-in"><a class="logo" href="/web/" aria-label="KATA WEBs, inicio">KATA <i>WEBs</i></a><button class="menu-btn" aria-controls="menu" aria-expanded="false" type="button">Menú</button><nav class="menu" id="menu" aria-label="Principal">{links}</nav></div></header>'
    footer='<footer class="foot"><div class="w studio-footer"><div><a class="logo" href="/web/" aria-label="KATA WEBs, inicio">KATA <i>WEBs</i></a><p>Diseño y desarrollo web para negocios.</p></div><nav aria-label="Pie de página">'+''.join(f'<a href="{href}">{label}</a>' for label,href in NAV if label in ('Servicios','Cómo trabajamos','Preguntas','Contacto'))+'</nav><nav aria-label="Sectores">'+''.join(f'<a href="/web/{s}/">{label}</a>' for label,s in SECTORS)+f'</nav><p class="foot-small">© {SETTINGS["year"]} KATA WEBs · Diseño y desarrollo web</p></div></footer>'
    schema={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':ORIGIN+'/web/#org','name':SETTINGS['name'],'url':ORIGIN+'/web/','logo':ORIGIN+'/web/assets/favicon.svg',**({'email':EMAIL} if EMAIL else {})},{'@type':'WebSite','@id':ORIGIN+'/web/#site','name':SETTINGS['name'],'url':ORIGIN+'/web/','inLanguage':'es','publisher':{'@id':ORIGIN+'/web/#org'}}]}
    head=f'''<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(title)}</title><meta name="description" content="{escape(description,quote=True)}"><meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#ffd60a"><link rel="canonical" href="{ORIGIN+path}"><link rel="icon" href="/web/assets/favicon.svg" type="image/svg+xml"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="KATA WEBs"><meta property="og:title" content="{escape(title,quote=True)}"><meta property="og:description" content="{escape(description,quote=True)}"><meta property="og:url" content="{ORIGIN+path}"><meta property="og:image" content="{ORIGIN}/web/assets/kata-preview.jpg"><meta name="twitter:card" content="summary_large_image"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&amp;family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&amp;display=swap"><link rel="stylesheet" href="/web/assets/style.css"><link rel="stylesheet" href="/web/assets/overrides.css"><script type="application/ld+json">{json.dumps(schema,ensure_ascii=False).replace('<','\\u003c')}</script>'''
    return '<!doctype html><html lang="es"><head>'+head+'</head><body><a class="skip" href="#main">Saltar al contenido</a>'+header+'<main id="main">'+body+'</main>'+footer+'<script src="/web/assets/site.js" defer></script></body></html>'

def intro(name,title,text):
    return f'<section class="hero hero-sm"><div class="w"><nav class="crumbs" aria-label="Migas de pan"><a href="/web/">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">{name}</span></nav><h1>{title}</h1><p class="lead">{text}</p></div></section>'

def write_studio(root):
    pages=json.loads((HERE/'content/pages.json').read_text(encoding='utf8'))
    for page in pages:
        slug=page['slug']; body=page['body']
        if slug=='contacto':
            if EMAIL:
                state='<p class="kick">Correo de contacto</p><a class="mail-big" href="'+escape(contact_link(),quote=True)+'">'+escape(EMAIL)+'</a><div class="cta"><a class="btn b1" href="'+escape(contact_link(),quote=True)+'">Escribir un correo</a></div>'
            else:
                state='<p class="kick">Correo de contacto</p><h2>Próximamente.</h2><p>Estamos preparando el correo comercial de KATA WEBs. Publicaremos aquí la dirección cuando esté disponible.</p>'
            body=intro('Contacto','Hablemos de tu web.','Una propuesta empieza por entender qué necesita tu negocio.')+'<section class="sec"><div class="w split"><div class="contact-state">'+state+'</div><div><h2>Qué conviene tener a mano.</h2><ul><li>Nombre del negocio y actividad.</li><li>Ciudad o zona donde trabajas.</li><li>Tu web actual, si existe, y el contenido disponible.</li><li>Qué necesitas: consultas, carta, catálogo, citas o información.</li></ul><a class="tlink" href="/web/servicios/">Qué incluye cada servicio</a></div></div></section>'
        body=body.replace('Con un email de dos líneas nos basta para empezar. Te contestamos con lo que haríamos y lo que costaría.','Consulta qué necesitamos para preparar una propuesta con alcance y precio claros.')
        body=body.replace('Mándanos el enlace de la que tienes, si tienes, y te decimos qué haríamos nosotros.','Revisamos lo que funciona en tu web actual y acordamos qué necesita cambiar.')
        body=body.replace('Lo cambias tú en un minuto. Con código QR para la mesa.','Carta legible en móvil. La edición y el código QR se definen según el proyecto.')
        body=body.replace('Reservas automáticas','Reservas, si las necesitas').replace('El cliente reserva solo y recibe la confirmación por email.','Podemos integrar un sistema de reservas. Su alcance y coste se acuerdan por separado.')
        body=body.replace('Lo que lleva la web de tu restaurante','Lo que puede llevar tu web').replace('Lo que lleva la web de tu barbería','Lo que puede llevar tu web')
        if slug=='servicios':
            body=body.replace('<section class="band">','<section class="sec scope-note"><div class="w"><h2>Cada partida, por separado.</h2><p>El presupuesto detalla diseño y desarrollo, dominio y alojamiento, y los opcionales. Reservas, pagos, edición de contenidos y mantenimiento se incluyen solo con el alcance y coste acordados.</p></div></section><section class="band">',1)
        body=body.replace('Sí. Nos mandas el cambio y lo hacemos. Si es algo pequeño, como el horario de verano, con un mensaje basta.','Sí. Acordamos qué podrás editar y qué cambios se harán por mantenimiento antes de empezar.')
        if not EMAIL:
            edits={
                'Dos líneas bastan: qué negocio tienes, en qué ciudad y si ya tienes web. Si la tienes, mándanos el enlace.':'Para empezar, ten a mano el nombre del negocio, la ciudad y el enlace de tu web actual, si existe.',
                'Escríbenos y te respondemos con las preguntas del paso dos.':'Consulta qué incluye cada servicio y prepara la información de tu negocio.',
                'Escríbenos con el nombre y la ciudad. Te decimos qué páginas tendría tu web.':'Tratamientos, primera visita y ubicación: el contenido se define según tu clínica.',
                'Tres trabajos. Si no sabes cuál es el tuyo, escríbenos y te lo decimos.':'Una web nueva, una revisión de la que tienes o mantenimiento. Aquí explicamos cada servicio.',
                'Respuestas cortas. Si falta algo, escríbenos.':'Respuestas cortas sobre precio, plazos y contenido.',
                'Escríbenos y te contestamos. Si se repite mucho, la ponemos aquí.':'El correo comercial estará disponible próximamente. Publicaremos la dirección en Contacto.',
            }
            for original,revised in edits.items():body=body.replace(original,revised)
        file=root/'web'/slug/'index.html';file.parent.mkdir(parents=True,exist_ok=True)
        file.write_text(render(slug,page['title'],page['description'],body),encoding='utf8')
