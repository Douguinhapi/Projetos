function imprimirMensagem(numeroMensagem){
    console.log(`imprimir mensagem número ${numeroMensagem}`)
}

async function executarMensagem(){
    imprimirMensagem(1)
    
    await new Promise((resolve) => {
        setTimeout(() => {imprimirMensagem(2);resolve()}, 2000)
    })

    await new Promise((resolve) => {
        setTimeout(() => {imprimirMensagem(2);resolve()}, 1000)
    })

    imprimirMensagem(4)
}

executarMensagem()