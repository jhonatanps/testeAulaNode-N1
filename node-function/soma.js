//declaração
//palareservada, nome da função                ,paramentros
function         somarSemParametros            (){
    console.log(1+1);
}

//chamada
//somarSemParametros();

//declaração
//com parametros
function somarComParametros(a,b){
    console.log(a+b);
}

//chamada
//somarComParametros(1,2);

//com retorno
function somarComRetorno(a,b){
    return a + b;
}

//guardando o valor
const total = somarComRetorno(5,5);

//mostro o valor da variavel
//console.log(total);

//mostando o valor, função
//console.log(somarComRetorno(6,6));


//função recebe paramentros e ve se o parametro esta vazio
//devo sempre iniciar minhas variaveis com forme as boas praticas
function somarSeNaoForVazio(a = null,b = null){
//validação
   if(a != null && b != null){
        //segunda validação
        if(typeof(a) === 'number' && typeof(b) === 'number'){
            console.log(a+b);
        }else{
            console.log("Você digitou um texto por favor digitar uma numero inteiro");
        }
   }else{
        console.log("Por favor insira dois numeros na função");
   }
}

somarSeNaoForVazio(1,2);




