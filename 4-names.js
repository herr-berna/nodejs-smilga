// local
const pessoa3Segredo = 'Pancho Villa'

// compartilhada
const pessoa1 = 'Bilbo'
const pessoa2 = 'Leila'


// console.log(module);
// Quando olhamos o objeto module, é possível ver um atributo chamado 'exports: {}', que contém as variáveis que queremos exportar desse módulo
module.exports = { pessoa1, pessoa2 }
// console.log(module.exports)