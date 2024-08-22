const par = require('./index')

test('teste para verificação de num pares', () => {
    const entrada = 2
    const saida_esperada = true
    expect(par(entrada)).toEqual(saida_esperada)
})

test('teste para verificação de num  e falha', () => {
    const entrada = 1
    const saida_esperada = true
    expect(par(entrada)).toEqual(saida_esperada)
})