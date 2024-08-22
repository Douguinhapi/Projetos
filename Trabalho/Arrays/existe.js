function verificaLetra(){
    let riscos = []
    let palavra = document.getElementById("palavra").value
    for(let i = 0; i < palavra.lentgh; i++){
        riscos.push(' __ ')
    }
    document.getElementById('riscos').innerHTML = riscos
    let letra = document.getElementById("letra").value
    if(palavra.includes(letra)){
        alert(`A letra ${letra} está inclusa na palavra secreta! `)
        let posicao = palavra.indexOf(letra)
        alert(riscos[posicao])
        // riscos = riscos.replace(riscos[riscos.charAt(posicao)], letra)
        // document.getElementById('riscos').innerHTML = riscos
        alert(riscos)
    }
    else{
        alert(`A palavra não possui a letra ${letra}`)
    }
}