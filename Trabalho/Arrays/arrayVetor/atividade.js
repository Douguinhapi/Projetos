let numeros = []

function verificaNome(){
    let digitado = document.getElementById('nome').value
    if(alunos.includes(digitado)){
        alert(digitado + " Existe no array")
    }
    else{
        alert(digitado + " Não existe")
    }
}