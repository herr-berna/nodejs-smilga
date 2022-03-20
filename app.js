// NPM - Node Package Manager
// npm - global command, comes with node
// nom --version

// local dependency -> usar apenas nesse projeto
// npm i <packageName>

// global dependency -> usar em qualquer projeto
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac(e linux?))

// package.json -> arquivo-manifesto. Guarda informações importantes sobre o projeto/pacote.
// É possível criar o package.json manualmente, criar suas propriedades e etc, mas se usa mesmo é o npm init.
// npm init -> passo a passo
// npm init -y -> cria com tudo default

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);