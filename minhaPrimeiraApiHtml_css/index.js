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


const checkAuth = function(req, res, next){
    req.checkAuth = true;   
    
    if(req.checkAuth){
        console.log('Está logado, pode continuar');
        res.sendFile(`${basePath}/index.html`)
        //next();
    }else{
        console.log('Não está logado, faça o login para continuar');
        res.sendFile(`${basePath}/nologin.html`)
    }
    
}

app.use(express.static('public'));
app.use(checkAuth);

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

