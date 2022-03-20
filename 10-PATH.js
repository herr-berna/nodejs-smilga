// Módulo PATH
const path = require('path')

// Separador de caminhos padrão do sistema
console.log(path.sep);

// console.log(path.join());
// Se colocar separadores extras, serão demovidos na compilação
// o método join reúne as strings passadas, formando um filepath
const filePath = path.join('\\content\\', '\\subfolder', 'test.txt')
console.log(filePath);

// Acessando o nome do arquivo a partir do caminho
const base = path.basename(filePath)
console.log(base)

// Retorna um caminho absoluto
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);