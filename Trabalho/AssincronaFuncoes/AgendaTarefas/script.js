const nomeTarefaInput = document.getElementById("nomeTarefa")
const tempoTarefaInput = document.getElementById("tempoTarefa")
const botaoAdicionar = document.getElementById("adicionarTarefa")
const mensagem = document.getElementById("mensagem")

//função assincrona pra concluir a tarefa
async function gerenciarTarefa(nome, tempo){
    mensagem.textContent = `A tarefa ${nome} está em andamento...`

    //espera a promessa
    await new Promise((resolve) => {
        setTimeout(resolve, tempo*1000)
    })

    mensagem.textContent = `Tarefa ${nome} concluida!!!`
}

botaoAdicionar.addEventListener("click", function(){

})