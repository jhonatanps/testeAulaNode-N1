//1
const fs = require("fs");

//2
console.log("Inicio");

//3 criando o arquivo e fazendo ele demorar 1 segundo para ser criado
fs.writeFile("arquivo.txt", "oi", function(err){
    // função que faz o aquivo ficar em mode de espera po 1 segundo
    setTimeout(function(){
        console.log("Arquivo criado!");
    }, 1000);
});

console.log("Fim");




