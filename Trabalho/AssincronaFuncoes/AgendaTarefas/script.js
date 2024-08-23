const nomeTarefaInput = document.getElementById("nomeTarefa");
const tempoTarefaInput = document.getElementById("tempoTarefa");
const mensagem = document.getElementById("mensagem");
const botaoAdicionar = document.getElementById("adicionarTarefa");

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
    const nomeTarefa = nomeTarefaInput.value
    const tempoTarefa = Number(tempoTarefaInput.value)

    if(nomeTarefa.trim() !== ""){
        gerenciarTarefa(nomeTarefa, tempoTarefa)
        nomeTarefaInput.value = ""
        tempoTarefaInput.value = ""
    }
    else{
        mensagem.textContent = "`por favor, preencha todos os campos corretamente!"
    }
})