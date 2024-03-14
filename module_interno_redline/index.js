const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.question("Qual seu nome: ", (nome) =>{
//     console.log(nome);
//     readline.close();
// })

// dados vindo do console sempre seram string
readline.question("Para somar digite 1 numeros inteiros ", (a) =>{
    readline.question("Para somar digite 2 numeros inteiros ", (b) =>{
        console.log(parseInt(a) + parseInt(b));
        readline.close();
    });
});


