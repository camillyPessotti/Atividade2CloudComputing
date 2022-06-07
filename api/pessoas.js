const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const listaPessoas = [
    { id: 1, nome: "Camilly", cpf: "114.726.019-20" },
    { id: 2, nome: "Bruna", cpf: "110.560.989-88" },
    { id: 3, nome: "Leonardo", cpf: "123.456.789.10" }
];

function pegarPessoas() {
    app.get('/api/pessoas', (req, res) => {
        res.send(listaPessoas);
    });
};

function pegarPessoaID() {
    app.get('/api/pessoas/:id', (req, res) => {
        const id = req.params.id;
        const pessoa = listaPessoas.find(p => p.id == id);
        res.send(pessoa);
    });
};

function adicionarPessoa(){
    app.post('/api/pessoas', (req, res) => {
        const pessoa = req.body;
        pessoa.id = listaPessoas.length + 1;
        listaPessoas.push(pessoa);
        res.json(pessoa);
    });
};

function editarPessoa(){
    app.put('/api/pessoas/:id', (req, res) => {
        const id = req.params.id;
        const pessoa = req.body;
        const index = listaPessoas.findIndex(p => p.id == id);
        pessoa.id = id;
        listaPessoas[index] = pessoa;
        res.json(pessoa);
    });
};

function excluirPessoa(){
    app.delete('/api/pessoas/:id', (req, res) => {
        const id = req.params.id;
        const index = listaPessoas.findIndex(p => p.id == id);
        listaPessoas.splice(index, 1);
        res.json(listaPessoas);
    });
};

module.exports = router;

app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
});