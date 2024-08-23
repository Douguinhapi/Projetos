import os from 'os' 

const hostName = os.hostname()
console.log(`Nome do meu computador: ${hostName}`);

const cpus = os.cpus()
console.log(`\nModelo da minha cpu: ${cpus[0].model}`);
console.log(`Objeto cpu: ${JSON.stringify(cpus[0])}`);

const mem = os.totalmem()
console.log(`\nMemória total do computador: ${mem}`);
console.log(`Memória livre: ${os.freemem()}`);

const versao = os.version()
const sistOper = os.type()
console.log(`\nVersão do windows: ${versao} e sistema operacional: ${sistOper}`);

const tempoLigado = os.uptime()
console.log(`\nTempo do computador ligado: ${tempoLigado}`);

console.log(`\nInformações da placa de rede`);
console.log(os.networkInterfaces());
// Dois modos para chamar o objeot:
console.log(`\nInformações do address:`);
console.log(os.networkInterfaces()['Ethernet'][0].address);
console.log(os.networkInterfaces().Ethernet[0].address);