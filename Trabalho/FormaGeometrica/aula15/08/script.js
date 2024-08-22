const monitor = document.getElementById("tela")
const botoes = document.querySelectorAll(".botoes button")

botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
        const value = this.value
        if (value === "=") {
            monitor.innerText = eval(monitor.innerHTML)

        }
        else if (value === "c") {
            monitor.innerText = ""
        }
        else {
            if (monitor.innerText === "null") {
                monitor.innerText = ""

            }
            else {
                monitor.innerText = monitor.innerText + value;
            }
        }
    })
    
})