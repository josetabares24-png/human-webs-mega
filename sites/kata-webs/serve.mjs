import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./_site/',import.meta.url));
const args=process.argv.slice(2),port=Number(args[args.indexOf('--port')+1])||4173;
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.json':'application/json'};
const server=createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');
  try{
    const route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(route==='/'){res.writeHead(302,{Location:'/web/'});return res.end();}
    const file=path.resolve(root,'.'+route+(route.endsWith('/')?'index.html':''));
    if(!file.startsWith(root)||!(await stat(file)).isFile())throw new Error('Not found');
    res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
    res.end(await readFile(file));
  }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end('<h1>Página no encontrada</h1><a href="/web/">Volver a KATA WEBs</a>');}
});
server.listen(port,'localhost',()=>console.log(`KATA preview http://localhost:${port}/`));
