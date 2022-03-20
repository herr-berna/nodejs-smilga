// FILESYSTEM (FS) Module - assíncrono
// O módo assíncrono (non-blocking) do módulo FS executa funções callback ao encerrar o passo anterior.
const { readFile, writeFile } = require('fs');

// Se não especificar o encoding, vai sair uma sequência de buffer
console.log('start');
readFile('.\\content\\first.txt', 'utf8', (err, result) => {
  if (err) {
    // Se der erro, loga o erro
    console.log(err);
    return
  }
  // O resultado vai ser atribuído a essa variável
  const first = result;
  console.log(first);
  // Callback dentro do callback. Assim que começa o inferno.

  readFile('.\\content\\second.txt', 'utf8', (err, result) => {
    if (err) {
      // Se der erro, loga o erro
      console.log(err);
      return
    }
    const second = result;
    console.log(second);
    writeFile('.\\content\\result-async.txt', `WE'RE ALL MAD HERE!\n${first}, ${second}`, (err, result) => {
      if (err) {
        // Se der erro, loga o erro
        console.log(err);
        return
      }
      console.log(`Arquivo salvo com sucesso`);
      console.log(`done`);
    })
  })
})
console.log(`starting next task`);

// Rode esse script no node e veja a diferença entre o sync e o async!
// Esse aqui começa a próxima task enquanto roda a task inicial. Ele não para de executar!!!
// Isso garante que o programa continue rodando.

// DESAFIO PARA O FUTURO: Refatorar esse código aqui com promises e async/await.