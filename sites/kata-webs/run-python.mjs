import {spawnSync} from 'node:child_process';
const candidates=process.env.KATA_PYTHON?[process.env.KATA_PYTHON]:['python3','python'];
for(const executable of candidates){
  const probe=spawnSync(executable,['--version'],{encoding:'utf8',windowsHide:true});
  if(probe.status===0&&/^Python 3\./.test(probe.stdout+probe.stderr)){
    const result=spawnSync(executable,process.argv.slice(2),{stdio:'inherit',windowsHide:true});
    process.exit(result.status??1);
  }
}
console.error('Python 3 is required. Install Python or set KATA_PYTHON to its executable.');process.exit(1);
