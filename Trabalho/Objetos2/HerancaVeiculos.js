class Veiculos{
    constructor(velocidade = 0, cor, modelo, passageiros = 0){
        this.velocidade = velocidade;
        this.cor = cor;
        this.modelo = modelo;
        this.passageiros = passageiros;
    }
    toString = function(){
        return `O modelo do veiculo é ${modelo} e a velocidade é ${velocidade}`
    }
    acelerar = function(){
        this.velocidade += 10
        return
    }
    freiar = function(){
        this.velocidade -= 10
        return
    }
}
var Carro = new Veiculos(
    velocidade = 15,
    cor = 'vermelho',
    modelo = 'Celta',
    passageiros = 5
)
module.exports = Veiculos;