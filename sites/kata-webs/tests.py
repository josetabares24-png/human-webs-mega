"""Verify the actual studio build, not a fabricated skeleton or new demo generator."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin,urlsplit,unquote
import hashlib,json,os,subprocess,sys,tempfile

HERE=Path(__file__).resolve().parent
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.ids=set();self.links=[];self.assets=[];self.h1=0;self.lang=None;self.noindex=False;self.canonical=[];self.schema=[];self.feed(text)
    def handle_starttag(self,t,attrs):
        a=dict(attrs)
        if a.get('id'):assert a['id'] not in self.ids,('duplicate ID',a['id']);self.ids.add(a['id'])
        if t=='html':self.lang=a.get('lang')
        if t=='h1':self.h1+=1
        if t=='a':self.links.append(a.get('href',''))
        if t in ('img','script') and a.get('src'):self.assets.append(a['src'])
        if t=='link' and a.get('rel') in ('stylesheet','icon'):self.assets.append(a.get('href',''))
        if t=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if t=='meta' and a.get('name')=='robots':self.noindex='noindex' in a.get('content','')

def invoke(root,email=None):
    env=dict(os.environ);env.pop('KATA_CONTACT_EMAIL',None)
    if email:env['KATA_CONTACT_EMAIL']=email
    subprocess.run([sys.executable,str(HERE/'generate.py'),str(root)],check=True,env=env,stdout=subprocess.DEVNULL)

def digest(root):
    return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob('*') if p.is_file()}

with tempfile.TemporaryDirectory() as tmp:
    root=Path(tmp)/'site';invoke(root)
    first=digest(root);invoke(root);assert first==digest(root),'Build changes on second run'
    pages={}
    for file in (root/'web').rglob('index.html'):
        route='/'+file.relative_to(root).as_posix().removesuffix('index.html')
        text=file.read_text(encoding='utf8');page=Page(text);pages[route]=page
        assert page.lang=='es' and page.h1==1 and page.noindex,(route,'semantics')
        assert page.canonical==['https://kata-webs-prototipos.vercel.app'+route],(route,'canonical')
        assert not any(x.startswith(('mailto:','tel:','https://wa.me')) for x in page.links),(route,'unconfigured contact')
        assert 'josetabares24@' not in text and 'instagram.com' not in text,(route,'personal contact leak')
        assert '/web/ejemplos/' not in page.links and '/ej/' not in ''.join(page.links),(route,'out of scope demo link')
        schemas=__import__('re').findall(r'<script type="application/ld\+json">(.*?)</script>',text)
        for schema in schemas:json.loads(schema)
    assert len(pages)==9,('unexpected studio pages',len(pages))
    for route,page in pages.items():
        for ref in page.links+page.assets:
            u=urlsplit(urljoin('https://kata-webs-prototipos.vercel.app'+route,ref))
            if u.netloc!='kata-webs-prototipos.vercel.app':continue
            target=root/unquote(u.path).lstrip('/')
            if u.path.endswith('/'):target=target/'index.html'
            assert target.is_file(),(route,'missing destination',ref)
            if u.fragment and target.suffix=='.html':assert u.fragment in Page(target.read_text(encoding='utf8')).ids,(route,'missing anchor',ref)
    # Archived routes and their photos/credits must remain byte-identical.
    for source in (HERE/'static').rglob('*'):
        if source.is_file():assert source.read_bytes()==(root/source.relative_to(HERE/'static')).read_bytes(),('changed existing route',source)
    contact=(root/'web/contacto/index.html').read_text(encoding='utf8')
    assert 'Próximamente.' in contact and '<form' not in contact
    assert 'La Milpa' not in (root/'web/index.html').read_text(encoding='utf8')
    assert not (root/'ej/taqueria/carta/index.html').exists(),'Created a new demo page'
    with_email=Path(tmp)/'configured';invoke(with_email,'qa@example.org')
    configured=(with_email/'web/contacto/index.html').read_text(encoding='utf8')
    assert 'mailto:qa@example.org?subject=' in configured and 'Próximamente.' not in configured
    print('PASS: 9 studio routes, links/assets/anchors, metadata, honest email states, repeatable build and unchanged archived demos.')
