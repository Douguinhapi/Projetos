const array = [64, 34, 25, 12, 22, 11, 90, 30, 48, 2];

function buscaSimples(elementoBusca){
    for(let i = 0; i < array.length; i++){
        if(array[i] === elementoBusca){
            return `Elemento encontrado na posição ${i}`;
        }
    }
        return `Elemento não encontrado`;
}