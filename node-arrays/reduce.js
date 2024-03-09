
const numeros = [10,20,30,40,50];

console.log(numeros);

const totalNumeros = numeros.reduce((acumulador, elemento)=>{
    return acumulador + elemento;
},0);


console.log(totalNumeros);
