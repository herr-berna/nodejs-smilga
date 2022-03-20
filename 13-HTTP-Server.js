// HTTP module!
// Com ele, podemos setar um webserver, e usar os métodos HTTP.
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Bem-vindo!</h1><a href="/about">Sobre nós</a>')
    console.log('Home page');
  }
  if (req.url === '/about') {
    res.end('<h1>Aqui está nossa história.</h1><a href="/">Início</a>')
    console.log('About page');
  }
  // Server dando vários bugs. C'est la vie
  // res.end('Erro!')
  // Foi só tirar essa linha que agora tá tudo smooth.
})

server.listen(3000)
