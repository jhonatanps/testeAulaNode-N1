// Declare uma variável e receba um array vazio nela, const meuArray = [], 
// usando a função de array push, crie um loop for que insira 0 a 10 nesse array, 
// quando acabar o loop mostre usando o console.log(), o resultado. 
//exp: [0,1,2,3,4,5,6,7,8,9,10].

const meuArray = [];

for(let i = 0; i <= 10; i++ ){
    meuArray.push(i);
}

console.log(meuArray);