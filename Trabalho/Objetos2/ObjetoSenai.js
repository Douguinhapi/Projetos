var Senai = {
    qntAluno: 351,
    nome: 'Senai',
    possuiCursos: true,
    tresAlunos: ['Douglas', 'Paulo', 'Wagner'],
    endereco:{
        rua: 'lado do shopping',
        numero: 154
    },
    apresentaName: function(){
        const mensagem = `Olá my name is ${this.nome}`
        return mensagem
    },
    aumentaQtd: function(){
        this.qntAluno += 2
        return true
    },
    diminuiQtd: function(){
        this.qntAluno -= 2
        return true
    },
    cnpj: null,
    erroForcado: undefined
}

