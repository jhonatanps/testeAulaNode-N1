
const numeros = [1,2,3,4,5,6,7,8,9];

console.log(numeros)

const numerosPares = numeros.filter((elemento) => {
    return elemento % 2 === 0;
})

const numerosImpares = numeros.filter((elemento) => {
    return elemento % 2 != 0;
})

console.log(numerosPares);
console.log(numerosImpares);