
const numero = [1,2,3,4,5,6,7,8,9];

console.log(numero);

const numerosVezDois = numero.map((e) => {
   return e * 2;
})

console.log(numerosVezDois);

const nomes = ['jhonatan','ysadora','isabella','priscilla'];

const nomesCaixaA = nomes.map((e)=>{
    return e.toUpperCase();
});

console.log(nomesCaixaA);