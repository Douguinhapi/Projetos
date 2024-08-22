import { useState } from "react"

export default function BuscarCep(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)

    const fetchEndereco = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json() 
            setEndereco(data)
        } 
        catch (error){
            console.error(error)
        }
    }
    return(
        <div className="content">
            <h1>Buscar endereço por CEP</h1>
            <input
                id="input"
                type="text"
                value={cep}
                placeholder="Digite Aqui Mano ou Mana"
                onChange={(e) => setCep(e.target.value)} 
            ></input>

            <br />
            <button id="botao" onClick={fetchEndereco}>Buscar</button>
            <br />
            <br />

            {endereco && (
                <div className="endereco">
                <p>Rua: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>UF: {endereco.uf}</p>
                </div>
            )}
        </div>
    )
}