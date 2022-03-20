// Modules
// Todo arquivo no Node é um módulo que pode ser importado - código encapsulado.
// Quando usamos require, o que retorna é o que foi definido no module.exports de 4-names.js
const names = require('./4-names.js');
const bomDia = require('./5-utils.js');
// Quando só usamos o require, rodamos o código todo
require('./7-mind-grenade.js')
// bomDia(names.pessoa1)