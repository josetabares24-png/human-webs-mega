import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { runCli } from 'repomix';

const root = fileURLToPath(new URL('../../', import.meta.url));
const outputDirectory = resolve(root, '.codex-context');
await mkdir(outputDirectory, { recursive: true });
const config = resolve(root, 'repomix.config.json');
const benchmark = process.argv.includes('--benchmark');

async function pack(compress) {
  const result = await runCli(['.'], root, {
    config,
    compress,
    output: resolve(outputDirectory, compress ? 'human-webs.xml' : 'baseline.xml'),
    quiet: true,
  });
  const packed = result.packResult;
  if (!packed || !Number.isFinite(packed.totalTokens) || packed.totalFiles < 1) {
    throw new Error('Repomix no devolvió un recuento válido.');
  }
  if (packed.suspiciousFilesResults.length > 0) {
    throw new Error('La comprobación de secretos detectó archivos sospechosos; revisa el código antes de usar el contexto.');
  }
  if (Object.keys(packed.fileTokenCounts).some(path => /(^|[\\/])(?:\.env[^\\/]*|node_modules|\.next|test-results)([\\/]|$)|\.log$/i.test(path))) {
    throw new Error('El contexto contiene un archivo excluido. No debe utilizarse.');
  }
  return packed;
}

const baseline = benchmark ? await pack(false) : null;
const compressed = await pack(true);
if (baseline && JSON.stringify(Object.keys(baseline.fileTokenCounts).sort()) !== JSON.stringify(Object.keys(compressed.fileTokenCounts).sort())) {
  throw new Error('La comparación no contiene los mismos archivos.');
}
const report = {
  tool: 'repomix', version: '1.18.1', encoding: 'o200k_base', files: compressed.totalFiles,
  baselineTokens: baseline?.totalTokens ?? null,
  compressedTokens: compressed.totalTokens,
  savedPercent: baseline ? Number(((1 - compressed.totalTokens / baseline.totalTokens) * 100).toFixed(2)) : null,
  compressedCharacters: compressed.totalCharacters,
  note: 'Índice de orientación que omite implementación. No representa ahorro garantizado en la facturación total de Codex ni en llamadas del generador IA.',
};
await writeFile(resolve(outputDirectory, 'metrics.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
