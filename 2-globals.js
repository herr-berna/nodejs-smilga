// Globals de node - não tem objeto window nem outras coisas de browser.

// __dirname  - caminho para o diretório atual
// __filename - nome do arquivo
// require    - function para usar módulos (commonJS)
// module     - informação sobre o módulo atual (arquivo)
// process    - info sobre o ambiente em que o programa está sendo executado

console.log(__filename);

setInterval(() => {
  console.log(`Hello world!`);
}, 1000);