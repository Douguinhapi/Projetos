function enviarEmail(aluno){
    return aluno.nota >= 7 ? enviarEmailAprovado(aluno) : enviarEmailReprovado(aluno)
}
function enviarEmailAprovado(aluno){
    console.log(`Aluno: ${aluno.nome}, parabéns você foi aprovado!!!`)
}
function enviarEmailReprovado(aluno){
    console.log(`Aluno: ${aluno.nome}, lamento você foi reprovado!!!`)
}
var alunos = [
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
    enviarEmail(alunos[i])
}