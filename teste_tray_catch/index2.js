try {
    const resultado = dividir(10,0);
    console.log(resultado);
} catch (error) {
    console.error('Ocorreu um erro: ', error.message );
}

function dividir(dividendo, divisor){
    if(divisor === 0){
        throw new Error('Divisão por zero não e permitida.')
    }
    return dividendo / divisor;
}