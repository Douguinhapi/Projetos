import './App.css'

async function enviarNumero(){
  const baseUrl = "https://rickandmortyapi.com/api";
  const personagem = document.getElementById("numero").value;
  const final= `${baseUrl}/character/${personagem}`
  const resposta = await fetch(final);

  const meuPersonagem = await resposta.json();
  
  const personagemHTML = JSON.stringify(meuPersonagem)

  const tudoHTML= `
  <div class = "personagens"
  <h2>Personagem: ${meuPersonagem.name}</h2><br>
  <img src="${meuPersonagem.image}" alt="${meuPersonagem.name}">
  <p>Status: ${meuPersonagem.status}</p>
  <p>Espécie: ${meuPersonagem.species}</p>
  <p>Gênero: ${meuPersonagem.gender}</p>
  <p>Origem: ${meuPersonagem.origin.name}</p>
  <p>Localização: ${meuPersonagem.location.name}</p>
  </div>
`;


console.log(meuPersonagem)
document.getElementById("respostas").innerHTML = tudoHTML

document.getElementById("numero").value = ""
document.getElementById("numero").focus 
}

  return (
    <>
      <body>
        <header>
          <h2>Site do RICK AND MORTY</h2>
          <img id='imgrick' src="https://wallpaper4k.com.br/wp-content/uploads/2022/07/wallpapers-do-rick-and-morty-4k-para-pc-e-celular-6-scaled.jpg" alt="imagem do rick" />
        </header>
        <div>
          <label htmlFor="numero"></label>
          <input type="text" id='numero'/>
          <button onClick={enviarNumero()}>Enviar</button>
        </div>
      </body>
    </>
  )

export default App
