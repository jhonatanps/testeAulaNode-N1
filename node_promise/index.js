const minhaPromessa = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
        // simulando o erro, trocar o sucesso de false pra true;
        const sucesso = false;

        // se for verdadeiro entra em resolve se não entra no reject
        if (sucesso) {
            resolve("A operação foi concluída com sucesso!");
        } else {
            reject(new Error("A operação falhou."));
        }
    }, 2000);
});

minhaPromessa
    .then((resultado) => {
        console.log("Sucesso:", resultado);
    })
    .catch((erro) => {
        console.error("Erro:", erro.message);
    });