//sintaxe
//usaremos uma promisse para funcionar de forma correta
function primeiraFuncao(){
    return new Promise((resolve) => {
        //faz a promisse demorar para retornar o dado
        setTimeout(()=>{
            console.log("Esperou isso aqui!")
            // Indica que a Promise foi resolvida com sucesso
            resolve();
        },1000);
    });
};

//sem await a função não espera
async function segundaFuncao(){
    console.log("Iniciou");
    //espera
    await primeiraFuncao();
    console.log("Terminou");
}

segundaFuncao();

