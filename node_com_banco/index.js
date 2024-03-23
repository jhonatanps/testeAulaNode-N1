//1 criar uma rota de get e dar um send "Olá mundo"
//2 criar uma rota de post receber um params "/:nome" e diga Olá "nome recebido"
//3 criar uma rota de post recebe um body "login" e "senha" e verificar se pode logar ou não

const express = require('express');

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.listen(8080,()=>{
    console.log("Servidor esta rodando");
})