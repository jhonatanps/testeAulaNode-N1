// Crie três variáveis “notaUm”, “notaDois” e “notaTres” do tipo const, 
// agora crie uma do tipo let totalMedia, receba 3 notas uma em cada variável, 
// na totalMedia inicie ela com 0, some as 3 notas e divida pela quantidade de 
// variáveis de nota e guarde o valor em totalMedia e faça um teste usando ifelse se a 
// média é maior que 7 ou menor que 4, se for mair mostre na tela usando console.log(), 
// aprovado se não mostre na tela usando console.log() reprovado.

const notaUm = 0;
const notaDois = 6.5;
const notaTres = 5;
let totalMedia = 0;

totalMedia = (notaUm + notaDois + notaTres) / 3;


if(totalMedia >= 7){
    console.log("Aprovado");
}else if(totalMedia <= 4){
    console.log("Reprovado");
}else{
    console.log("Recuperação");
}