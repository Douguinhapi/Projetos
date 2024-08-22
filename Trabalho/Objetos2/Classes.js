class Salas{
    constructor(parametros){
        this.nome = parametros.nome;
        this.mesa = parametros.mesa || 1;
        this.porta = parametros.porta || 1;
        this.lampadas = parametros.lampadas || 1;
        this.luz_acesa = parametros.luz_acesa || false;
        this.extintor = parametros.extintor || 1; 
        this.ar_condionado = parametros.ar_condionado || false;
        this.projetor = parametros.projetor || false;
        this.tomada = parametros.tomada || 1;
        this.computador = parametros.computador || 1;
        this.janela = parametros.janela  || 2;
        this.alunos = parametros.alunos || 1;
    }
    toString = function(){
        return `a sala de aula ${this.nome}, está com ${this.alunos} alunos e a luz está ${this.luz_acesa === true?'acesa':'apagada'}`
    }
    acenderApagarLuz = function(){
        this.luz_acesa =! this.luz_acesa
        return
    }
    ligarDesligarArcondicionado = function(){
        this.ar_condionado =! this.ar_condionado
        return
    }
    ligarDesligarProjetor = function(){
        this.projetor =! this.projetor
        return
    }
}
var sala305 = new Salas({
    nome: '305',
    mesa: 25,
    lampadas: 16,
    tomada: 101,
    computador: 46
})

console.log(sala305.toString())
sala305.ligarDesligarArcondicionado
console.log(sala305.toString())
