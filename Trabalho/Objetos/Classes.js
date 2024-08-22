class Veiculo{
    constructor(modelo, tipo, cor, velocidade = 0){
        this.modelo = modelo;
        this.tipo = tipo;
        this.velocidade = velocidade;
        this.cor = cor;
    }
    acelerar(){
        this.velocidade += 10;
    }
    freiar(){
        if (this.velocidade > 0){
            this.velocidade -= 5;
        }
    }
    toString(){
        return `${this.modelo} esta a ${this.velocidade} km/hr`
    }
}

const carro = new Veiculo('Veloster', 'Carro', 'Preto');
console.log(carro.toString())
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(carro.toString())
