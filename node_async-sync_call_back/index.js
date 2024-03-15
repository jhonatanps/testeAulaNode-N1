//chamada do modulo
const fs = require('fs');

//fs.readFile função que le o arquivo
//readFile recebe como parametro um caminho de arquivo
//tipo de escrita do dado
//uma função de callback que recebe dois parametros
fs.readFile('arquivo.txt', 'utf-8', (erro, dados) => {
    if(erro){
        console.error('Erro na leitura do aquivo', erro);
        return;
    }
    console.log('Conteúdo do arquivo: ', dados);
})