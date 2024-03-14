
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args.nome;

if(nome === "Jhonatan"){
    console.log('Olá ' + nome);
}else{
    console.log('Não sei quem e você');
}