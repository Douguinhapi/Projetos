import { calculaAreaCirculo, calculaPerimetroCirculo, nomeCirculo } from "./circulo.js";
import { calculaAreaQuadrado,calculaPerimetroQuadrado, nomeQuadrado } from "./quadrado.js";

const botaoCalcular = document.getElementById("calcular-btn")
const campoLado1 = document.getElementById("lado1")
const campoRaio1 = document.getElementById("raio1")
const pagrafoResultado1 = document.getElementById("resultado1")
const pagrafoResultado2 = document.getElementById("resultado2")

botaoCalcular.addEventListener("click",()=>{
    const lado1 = parseFloat(campoLado1.value);
    const raio1 = parseFloat(campoRaio1.value);
    const perimetroQuadrado = calculaPerimetroQuadrado(lado1).toFixed(2)
    const AreaQuadrado = calculaAreaQuadrado(lado1).toFixed(2)
    pagrafoResultado1.innerText = `O ${nomeQuadrado} tem aprox. de perímetro igual a: ${perimetroQuadrado} e área igual a ${AreaQuadrado}`
    
    const perimetroCirculo = calculaPerimetroCirculo(raio1).toFixed(2)
    const AreaCirculo = calculaAreaCirculo(raio1).toFixed(2)
    pagrafoResultado2.innerText = `O ${nomeCirculo} tem aprox. de perímetro igual a: ${perimetroCirculo} e área igual a ${AreaCirculo}`
    
})