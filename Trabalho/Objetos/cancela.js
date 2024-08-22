function recebeVeiculo(carroMoto){
    return carroMoto.tipo == 'Carro' ? multaCarro(carroMoto) : casoMoto(carroMoto)
}
function multaCarro(carroMoto){
    console.log(`Carro: ${carroMoto.modelo}, Ano: ${carroMoto.ano} e Cor: ${carroMoto.cor} foi MULTADO`)
}
function casoMoto(carroMoto){
    console.log(`Moto: ${carroMoto.modelo}, Ano: ${carroMoto.ano} e Cor: ${carroMoto.cor} foi AUTORIZADO a passagem`)
}
var carros = [
    {
        
        tipo: 'Carro',
        ano: 2007,
        modelo: 'Celta',
        cor: 'Vermelho',
        potencia: 115,
    },
    {
        tipo: 'Carro',
        ano: 2015,
        modelo: 'Camaro',
        cor: 'Amarelo',
        potencia: 1121,
    },
    {
        tipo: 'Carro',
        ano: 2024,
        modelo: 'Cronos',
        cor: 'Branco',
        potencia: 1500,
    },
    {
        tipo: 'Moto',
        ano: 2022,
        modelo: 'Crosser',
        cor: 'Azul',
        potencia: 1000,
    },
]
for(i = 0; i < carros.length; i++){
    recebeVeiculo(carros[i])
}