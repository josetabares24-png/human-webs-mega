import { TokenCounter } from 'repomix';
import { createSite } from '../../builder/lib/engine';
import { initialBrief } from '../../builder/lib/schema';
import { buildGenerationRequest, buildPageEditRequest } from '../../builder/lib/server/ai';

const site = createSite({ ...initialBrief, name: 'Negocio de prueba', sector: 'Barbería', city: 'Lisboa', description: 'Descripción confirmada del negocio de prueba. '.repeat(8), services: 'Servicio de prueba | Precio confirmado\n'.repeat(12), story: 'Historia del negocio usada como fixture del benchmark. '.repeat(15) });
for (const page of site.pages) page.body = 'Contenido de prueba ya revisado para esta página del sitio. '.repeat(20);
const instruction = 'Haz el titular más directo sin cambiar los hechos.';
const counter = new TokenCounter('o200k_base');
await counter.init();
const full = await counter.countTokens(JSON.stringify(buildGenerationRequest(site, instruction)));
const scoped = await counter.countTokens(JSON.stringify(buildPageEditRequest(site, instruction, 'servicios')));
counter.free();
console.log(JSON.stringify({ encoding: 'o200k_base', fullGenerationRequestTokens: full, pageEditRequestTokens: scoped, reductionPercent: Number(((1 - scoped/full) * 100).toFixed(2)), note: 'Fixture local de cuatro páginas. Recuento de JSON del cuerpo de petición; no es facturación del proveedor ni una prueba de calidad del modelo. No se hacen llamadas de IA.' }, null, 2));
