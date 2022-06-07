const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const listaBoletos = [
    { id: 1, id_usuario: 1, id_pessoa: 1, nome_pessoa: "Camilly", status: "Pendente", valor: 190.90 },
    { id: 2, id_usuario: 1, id_pessoa: 1, nome_pessoa: "Camilly", status: "Pago", valor: 48.99 },
    { id: 3, id_usuario: 1, id_pessoa: 1, nome_pessoa: "Camilly", status: "Em processamento", valor: 75.50 }
];

function pegarBoletos() {
    app.get('/api/boletos', (req, res) => {
        res.send(listaBoletos);
    });
};

function pegarBoletoID() {
    app.get('/api/boletos/:id', (req, res) => {
        const id = req.params.id;
        const boleto = listaBoletos.find(b => b.id == id);
        res.send(boleto);
    });
};

function adicionarBoleto(){
    app.post('/api/boletos', (req, res) => {
        const boleto = req.body;
        boleto.id = listaBoletos.length + 1;
        listaBoletos.push(boleto);
        res.json(boleto);
    });
};

function editarBoleto(){
    app.put('/api/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const boleto = req.body;
        const index = listaBoletos.findIndex(b => b.id == id);
        boleto.id = id;
        listaBoletos[index] = boleto;
        res.json(boleto);
    });
};

function excluirBoleto(){
    app.delete('/api/boletos/:id', (req, res) => {
        const id = req.params.id;
        const index = listaBoletos.findIndex(b => b.id == id);
        listaBoletos.splice(index, 1);
        res.json(listaBoletos);
    });
};

module.exports = router;

app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
});