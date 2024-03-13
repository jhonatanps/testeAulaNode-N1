// Crie uma função que recebe um parâmetro do tipo number, usando o typeOf(), 
// escreva na tela usando console.log(), se aquele número é positivo ou negativo.

function tipoDado(dado = 0){
    if(typeof(dado) === 'number'){
        if(dado >= 0){
            console.log(`O numero ${dado} e positivo`);
        }else{
            console.log(`O numero ${dado} e negativo`);
        };
    };
};

tipoDado(-1);

