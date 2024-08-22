// let nomes = new Array()
// nomes.push("Douglas")
// nomes.push("Kevin")
// nomes.push("Silva")
// nomes.push("Caio")
// nomes.push("Marquinhos")
// nomes.push("Pierri")
// nomes.push("Tavares"
// console.log(nomes.sort())
// let nomes = []
// for(let i = 0; let <= 4; i++){
//     prompt("Digite um nome: ")
// }
// nomes.push = prompt("Digite um nome: ")
// nomes.push = prompt("Digite um nome: ")
// nomes.push = prompt("Digite um nome: ")
// nomes.push = prompt("Digite um nome: ")
// alert(nomes.sort())

let nomes = new Array()

function insereNomes(){
    let nomeDigitado = document.getElementById("nomes").value
    nomes.push(nomeDigitado)
    document.getElementById("nomes").value = ''
    document.getElementById("nomes").focus()

}

function ordenaNomes(){
    alert(nomes.sort())
}
