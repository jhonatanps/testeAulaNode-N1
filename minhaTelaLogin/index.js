// importe do express
const express = require('express');

// importe path
const path = require('path');

// pega o caminho do arquivo html
const basePath = path.join(__dirname,'templates');

// inicia metodos do meu express
const app = express();

//ciando uma porta
const port = 3000;

//console.log('Meu caminho' + basePath);


app.use(
    express.urlencoded({
        extended: true
    })
)

//converte o json 
app.use(express.json());


const checkAuth = function(req, res, next){
    req.checkAuth = true;   
    
    if(req.checkAuth){
        console.log('Está logado, pode continuar');
        res.sendFile(`${basePath}/index.html`)
        next();
    }else{
        console.log('Não está logado, faça o login para continuar');
        res.sendFile(`${basePath}/nologin.html`)
    }
    
}

app.use(express.static('public'));
// app.use(checkAuth);

app.post('/users/login', (req, res) => {
    const login = req.body.login;
    const senha = req.body.senha;
    // console.log(senha, login);
    if(login === "eu" && senha === "123"){
        res.sendFile(`${basePath}/home.html`)
    }else{
        res.sendFile(`${basePath}/nologin.html`)
    }
})

app.get('/users/:id', (req, res) => {
    const resposta = req.params;
    res.send(resposta)
})

app.get('/ola', (req, res) => {
    res.send('Olá novamente node');
})


//criando a rota
//localhost:3000/
app.get('/',(req, res) => {
// passando o caminho do arquivo index.html
//C:\Users\Pc\Desktop\Aulas\projetos\minhaPrimeiraApiHtml\templates/idenx.html
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})

