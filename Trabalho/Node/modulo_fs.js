import { error } from "console";
import { writeFile, readFile, appendFile, readdir } from "fs";

// WriteFile('diretorio_arquivo', 'texto_para_enviar', 'codificação_de_caracteres', função anônima para trabalhar com o erro)
const texto = "Arquivo de Backup Banco de Dados\n1-Cadastro do usuário João dia 14/08/2024"
const funcaoEscrita = function(erro) {
    if(erro) {
        console.error(erro)
    }
    else {
        console.log(`Mensagem escrita`);
    }
}
// Adiciona o texto a pasta arquivo, no arquivo mensagem.txt:
//writeFile('arquivos/mensagem.txt', texto, 'utf8', funcaoEscrita)

// Função para ler o texto:
// const readText = (erro, mensagem) => {
//     if(erro) {
//         console.error(erro);
//     }
//     else {
//         console.log(mensagem);
//     }
// }
// readFile('diretorio_arquivos.txt', 'utf8', funçãoanônima__para_realizar_a_leitura):
// readFile('arquivos/mensagem.txt', 'utf8', readText)

const mensagem2 = "\nAdicionando um valor ao texto"
const reescrita = (erro) => {
    if(erro) {
        console.error(erro);
    }
    else {
        console.log(`Mensagem escrita com sucesso!`);
    }
}
appendFile('arquivos/mensagem.txt', mensagem2, 'utf8', reescrita)

// Lê o nome dos arquivos da pasta:
readdir('arquivos', (erro, nome_arquivos) => {
    if(erro) {
        console.error(erro);
    } 
    else {
        console.log(nome_arquivos);
    }
})