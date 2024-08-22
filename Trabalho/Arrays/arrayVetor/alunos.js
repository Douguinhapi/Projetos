let alunos = ['Douglas', 'Mazanza', 'Dieguinho', 'Kevin', 'o cris']

//.sort() deixa em ordem alfabética
//.length mostra quantos arays tem 

/*for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}*/

alunos.pop() //exclui o primeiro nome
alunos.shift() //exclui o ultimo nome
alunos.push("Ana")
alunos.unshift("Nathalia")

function verificaNome(){
    let digitado = document.getElementById('nome').value
    if(alunos.includes(digitado)){
        alert(digitado + " Existe no array")
    }
    else{
        alert(digitado + " Não existe")
    }
}

/*for(let i of alunos){
    console.log(i)
}*/