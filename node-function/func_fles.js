//declara um arrow function
// sem parametros
const olaArrow = () => "Olá Arrow Function";
//console.log(olaArrow());

// com um parametro
const numeroParImpar = numero => numero % 2;

//console.log("Retorno da função com numero impar " + numeroParImpar(1));
//console.log("Retorno da função com numero par " + numeroParImpar(2));

const numeroParOuImpar = numero => {

    const retornoNumeroParImpar = numeroParImpar(numero);

    if(retornoNumeroParImpar === 1){
        console.log("Esse numero e impar");
    }else{
        console.log("Esse numero e par ");
    }
}

//
numeroParOuImpar(2);