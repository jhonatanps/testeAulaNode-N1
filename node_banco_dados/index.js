const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

//configurando conexão com o banco
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'nodedb'
});

connection.connect((err) => {
    if(err){
        console.error("Erro ao conectar ao banco", err);
        return;
    }
    console.log("Conexão bem-sucedido ao banco de dados!");
});
//busca todos os produtos
app.get('/produtos', async (req, res) =>{
    try {
        const results = await new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM produtos', (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
        console.log(results);
        res.json(results);
    } catch (error) {
        console.error('Erro ao executar uma consulta: ', error);
        res.status(500).json({error: 'Erro ao executar consulta'});
    }
})

// pesquisa por id produto
app.get('/produtos/:id', async (req, res) => {
    const id = req.params.id;

    try {
        // Execute a consulta SQL com os parâmetros substituídos usando async/await
        const results = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM produtos WHERE id = ?', [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log('Resultados da consulta:', results);
        res.json(results); // Retorna os resultados da consulta como JSON
    } catch (error) {
        console.error('Erro ao executar consulta:', error);
        res.status(500).json({ error: 'Erro ao executar consulta' });
    }
});


//inserir
app.post('/produtos/save/:nome/:price', async (req, res) => {
    const nome = req.params.nome;
    const price = req.params.price;

    try {
        await new Promise((resolve, reject) => {
            connection.query('INSERT INTO produtos (nome, price) VALUE(?,?)',[nome, price]
            ,(err, result) => {
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
        console.log('Produto inserido com sucesso:');
        res.status(200).json({message: 'Produto inserido com sucesso'});
    } catch (error) {
        console.error('Erro ao inserir produto:', error);
        res.status(500).json({error: 'Erro ao inserir produto'});
    }

});

//atualiza
app.patch('/produtos/atualiza/:id/:nome/:price', async (req, res) => {
    const id = req.params.id;
    const nome = req.params.nome;
    const price = req.params.price;

    try {

        const results = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM produtos WHERE id = ?', [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        if (results.length === 0) {
            console.error('Produto não encontrado');
            return res.status(404).json({ error: 'Produto não encontrado' });
        } else {

            await new Promise((resolve, reject) => {
                connection.query('UPDATE produtos SET nome = ?, price = ? WHERE id = ?',
                 [nome, price, id], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            console.log('Produto atualizado com sucesso:', { id });
            res.status(200).json({ message: 'Produto atualizado com sucesso' });
        }

    } catch (error) {
        console.error('Erro ao atualizado produto:', error);
        res.status(500).json({ error: 'Erro ao atualizado produto' });
    }

});

//delete
app.delete('/produtos/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {

        const results = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM produtos WHERE id = ?', [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        if (results.length === 0) {
            console.error('Produto não encontrado');
            return res.status(404).json({ error: 'Produto não encontrado' });
        } else {
            await new Promise((resolve, reject) => {
                connection.query('DELETE FROM produtos WHERE id = ?', [id], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            console.log('Produto deletado com sucesso:', { id });
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        }

    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }

});




app.listen(8080, () =>{
    console.log("Esta rodando!!!");
})



