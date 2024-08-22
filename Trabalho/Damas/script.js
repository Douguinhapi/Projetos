let casa, quebraLinha, pintar = 0
let tabuleiro = new Array(8)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
} 

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement("br")
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        //console.log(`tab ${i} ${j}`)
        casa = document.createElement("button")
        casa.setAttribute("id", "cs" + i + "" + j)
        document.body.append(casa) //body é onde vai ser inserido o button no html e o append ele inserir
        //pintar % 2 == 0 ? casa.style.backgroundColor = "green" : ""
        if(pintar % 2 == 0){
            casa.style.backgroundColor = "green"
            if(i < 3){
                casa.style.color = "black"
                casa.innerText = "X"
            }
            if(i > 4){
                casa.style.color = "white"
                casa.innerText = "0"
            }
        }
        pintar++
    } 
    pintar++
} 