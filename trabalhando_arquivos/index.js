// fs -> vem instalado
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log(data);
    }


})