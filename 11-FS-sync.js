// FILESYSTEM (FS) Module - síncrono (blocking)
// Acessar arquivos do sistema.
// é possível usar síncrona (blocking) e assincronamente (non-blocking).

// O modo síncrono é ruim para a funcionalidade, pois enquanto um usuário está usando, o outro não pode usar. É downtime.
console.log('start');

const { readFileSync, writeFileSync } = require('fs');

// Aliemntamos a função com o caminho do arquivo
const first = readFileSync('.\\content\\first.txt', 'utf8')
const second = readFileSync('.\\content\\second.txt', 'utf8')
console.log(first, second);
// A flag indica o método de escrita, se vai overwrite, se vai appendar.
// Sem a flag, o comportamento padrão é dar overwrite.
writeFileSync('.\\content\\result-sync.txt', `WE'RE ALL MAD HERE! \n${first}`, { flag: 'a' })
console.log('done');
console.log('starting next task');