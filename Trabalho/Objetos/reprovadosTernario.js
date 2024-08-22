function recebeLista(aluno){
    return aluno.nota >= 7 ? recebeAprovados(aluno) : console.log("Foi reprovado")
}

let aprovados = [
    
]

function recebeAprovados(aluno){
    aprovados.push(aluno.nome)
}

let alunos = [
    {
        nome: 'Douglas Pierri Beccari',
        nota: 8,
    },
    {
        nome: 'Tavares Romantico',
        nota: 4,
    },
    {
        nome: 'Michael Duarte',
        nota: 6,
    },
]

for(i = 0; i < alunos.length; i++){
    recebeLista(alunos[i])
}
console.log(aprovados)