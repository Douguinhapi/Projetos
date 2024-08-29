const abrirMenu = () => {
    // Seleciona o botão pela classe
    const botaoMenu = document.getElementsByClassName('BotaoExpandir')[0];
    
    // Seleciona a barra de menu pela classe
    const menuBar = document.getElementsByClassName('MenuLateral')[0];
    
    // Adiciona um evento de clique ao botão
    botaoMenu.addEventListener('click', () => {
        menuBar.classList.toggle('open');
      });
    };
    
abrirMenu();

const levarPara = () => {
  window.location.href = "https://docs.google.com/document/d/1AZJAcyNFljH3Fj85q8Wzgnr2Y6HNEpT2gaoWWQ0L7c4/edit?usp=sharing";
}