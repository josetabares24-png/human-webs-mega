#!/usr/bin/env python3
"""Offline smoke checks for KATA WEBs generators. No external images required."""
from pathlib import Path
from html.parser import HTMLParser
import subprocess,tempfile,shutil,sys
HERE=Path(__file__).resolve().parent
class Page(HTMLParser):
    def __init__(self):super().__init__();self.headings=[];self.links=[];self.forms=0;self.robots=0
    def handle_starttag(self,t,attrs):
        a=dict(attrs)
        if t=="h1":self.headings.append(1)
        if t=="a":self.links.append(a.get("href",""))
        if t=="form":self.forms+=1
        if t=="meta" and a.get("name")=="robots" and "noindex" in a.get("content",""):self.robots+=1
def check(file, min_links=2):
    text=file.read_text()
    page=Page();page.feed(text)
    assert len(page.headings)==1,(file,"h1",len(page.headings))
    assert len(page.links)>=min_links,(file,"links",len(page.links))
    assert page.robots>=1,(file,"missing noindex")
    assert 'lang="es"' in text,(file,"wrong language")
    assert 'href="/web/ejemplos/"' in text,(file,"portfolio return link")
    return page
with tempfile.TemporaryDirectory() as tmp:
    root=Path(tmp)
    (root/"web/assets").mkdir(parents=True)
    (root/"web/assets/style.css").write_text("body{margin:0}\n")
    (root/"web/index.html").write_text('''<!doctype html><html lang="es"><head><title>KATA WEBs</title><meta name="description" content="Estudio web"><link rel="stylesheet" href="/web/assets/style.css"><meta name="robots" content="noindex,nofollow"></head><body><header><a href="/web/ejemplos/">Ejemplos</a></header><main><section class="sec kt-showcase"><p>Demos antiguas</p></section></main><footer><a href="/web/contacto/">Contacto</a></footer></body></html>''')
    (root/"web/sitemap.xml").write_text('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>')
    subprocess.check_call([sys.executable,str(HERE/"build.py"),str(root)])
    for sector in ["taqueria","plumber","dentist","barber"]:
        assets=root/"ej"/sector/"assets";assets.mkdir(parents=True,exist_ok=True)
        shutil.copyfile(HERE/"new.css",assets/"new.css")
        shutil.copyfile(HERE/"new.js",assets/"new.js")
    shutil.copyfile(HERE/"kata-portfolio.css",root/"web/assets/kata-portfolio.css")
    subprocess.check_call([sys.executable,str(HERE/"portfolio.py"),str(root)])
    expected={
    "taqueria":["index.html","carta/index.html"],
    "plumber":["index.html","presupuesto/index.html"],
    "dentist":["index.html","primera-visita/index.html"],
    "barber":["index.html","reservar/index.html"],
    }
    count=0
    for sector,pages in expected.items():
        for sub in pages:
            file=root/"ej"/sector/sub
            page=check(file)
            count+=1
            assert (root/"ej"/sector/"assets/new.css").stat().st_size>5000
            assert (root/"ej"/sector/"assets/new.js").stat().st_size>1000
    assert count==8
    portfolio=check(root/"web/ejemplos/index.html")
    assert all("/ej/"+sector+"/" in portfolio.links for sector in expected)
    assert "Demos antiguas" not in (root/"web/index.html").read_text()
    assert 'kp-teasers' in (root/"web/index.html").read_text()
    assert "la milpa." in (root/"web/ejemplos/index.html").read_text()
    assert "FIRME" in (root/"web/ejemplos/index.html").read_text()
    assert "soma·" in (root/"web/ejemplos/index.html").read_text()
    assert "FILO" in (root/"web/ejemplos/index.html").read_text()
    print("OK: 8 static demo pages, 4 local flows, portfolio and home linked.")
