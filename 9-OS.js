// Módulos built-in!
// OS - PATH - FS - HTTP
// Módulo OS -> pegando o sistema operacional
const os = require('os')

// Informações sobre o host
const hostName = os.hostname()
console.log(hostName)

// Informações sobre o usuário
const user = os.userInfo()
console.log(user.username)

// system uptime
const upTime = os.uptime()
console.log(`O sistema está rodando há ${upTime} segundos`)

// OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)