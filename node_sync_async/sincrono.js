//1
const fs = require("fs");

//2
console.log("Inicio");

//3 criando o arquivo, e escrevendo oi nele
fs.writeFileSync("arquivo.txt", "oi");

//4 mostrando o fim do processo
console.log("Fim");


