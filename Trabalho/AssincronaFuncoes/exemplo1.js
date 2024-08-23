function imprimirMensagem(numeroMensagem){
    console.log(`imprimir mensagem número ${numeroMensagem}`)
}

imprimirMensagem(1)
imprimirMensagem(2)
imprimirMensagem(3)
imprimirMensagem(4)

console.log("\n")

imprimirMensagem(1)
setTimeout(() => {imprimirMensagem(2)}, 1000)
setTimeout(() => {imprimirMensagem(3)}, 500)
setTimeout(() => {imprimirMensagem(4)}, 200)