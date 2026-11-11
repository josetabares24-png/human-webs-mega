"""Build a complete, portable KATA site from tracked sources and media."""
from pathlib import Path
import shutil, sys
from studio import HERE, ORIGIN, write_studio

def build(root):
    root=Path(root).resolve();root.mkdir(parents=True,exist_ok=True)
    shutil.copytree(HERE/'static',root,dirs_exist_ok=True)
    shutil.copytree(HERE/'assets',root/'web/assets',dirs_exist_ok=True)
    write_studio(root)
    routes=sorted('/'+p.relative_to(root).as_posix().removesuffix('index.html') for p in (root/'web').rglob('index.html'))
    (root/'web/sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+ORIGIN+r+'</loc></url>' for r in routes)+'</urlset>',encoding='utf8')
    (root/'robots.txt').write_text('User-agent: *\nDisallow: /\nSitemap: '+ORIGIN+'/web/sitemap.xml\n',encoding='utf8')
    (root/'index.html').write_text('<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta http-equiv="refresh" content="0;url=/web/"><title>KATA WEBs</title></head><body><a href="/web/">Entrar en KATA WEBs</a></body></html>',encoding='utf8')
    print(f'Built {len(routes)} studio pages; existing static routes preserved: {root}')

if __name__=='__main__':build(sys.argv[1] if len(sys.argv)>1 else HERE/'_site')
