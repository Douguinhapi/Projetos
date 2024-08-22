var button, quebra_linha, jogada = 1, vencedor = 0;
var tabuleiro = new Array(3);
for (var i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(3);
}

for (var i = 0; i < tabuleiro.length; i++) {
    quebra_linha = document.createElement("br");
    document.body.append(quebra_linha);
    for (var j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "bt" + i + "" + j);
        button.setAttribute("class", "btJogo" + i);
        button.setAttribute("onclick", "marca(" + i + ',' + j + ')');
        button.append(document.createTextNode(""));
        document.body.append(button);
    }
}

function marcaCasa(nomeBotao) {
    if (jogada % 2 == 0) {
        document.getElementById(nomeBotao).innerText = "O";
        document.getElementById(nomeBotao).style.color = "red";
    } else {
        document.getElementById(nomeBotao).innerText = "X";
        document.getElementById(nomeBotao).style.color = "black";
    }
    document.getElementById(nomeBotao).disabled = true;
    jogada++;
    if (jogada >= 5) {
        encerrarjogo();
    }
    if (jogada > 9 && vencedor == 0) {
        alert("Deu velha!!");
    }
}

function marca(linha, coluna) {
    marcaCasa("bt" + linha + "" + coluna);
}

function encerrarjogo() {
    var winningCombinations = [
        ["bt00", "bt01", "bt02"],
        ["bt10", "bt11", "bt12"],
        ["bt20", "bt21", "bt22"],
        ["bt00", "bt10", "bt20"],
        ["bt01", "bt11", "bt21"],
        ["bt02", "bt12", "bt22"],
        ["bt00", "bt11", "bt22"],
        ["bt02", "bt11", "bt20"]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (document.getElementById(a).innerText === document.getElementById(b).innerText &&
            document.getElementById(b).innerText === document.getElementById(c).innerText &&
            document.getElementById(a).innerText !== "") {
            alert("Jogo finalizado!\nVencedor: " + document.getElementById(a).innerText);
            vencedor++;
            disableAllButtons();
            break;
        }
    }
}

function disableAllButtons() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.getElementById("bt" + i + "" + j).disabled = true;
        }
    }
}