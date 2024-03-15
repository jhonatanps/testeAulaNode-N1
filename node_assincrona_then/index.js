const fs = require('fs/promises');

fs.readFile('arquivo.txt', 'utf-8').then((dados) =>{
    console.log('Conteúdo do aquivo: ', dados);
}).catch((erro) =>{
    console.error('Erro na leitura do aquivo: ', erro);
});