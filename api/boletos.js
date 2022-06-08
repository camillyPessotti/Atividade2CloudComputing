const express = require("express");
const router = express.Router();

const listaBoletos = [
    { id: 1, id_usuario: 1, id_pessoa: 1, nome_pessoa: "Camilly", status: "Pendente", valor: 190.90 },
    { id: 2, id_usuario: 1, id_pessoa: 1, nome_pessoa: "Camilly", status: "Pago", valor: 48.99 },
    { id: 3, id_usuario: 1, id_pessoa: 1, nome_pessoa: "Camilly", status: "Em processamento", valor: 75.50 }
];

function pegarBoletos() {
    return listaBoletos;
};

function pegarBoletoID() {
    const id = req.params.id;
    const boleto = listaBoletos.find(b => b.id == id);
    return boleto;
};

function adicionarBoleto() {
    app.post('/api/boletos', (req, res) => {
        const boleto = req.body;
        boleto.id = listaBoletos.length + 1;
        if(boleto.valor > 0){
            listaBoletos.push(boleto);
        }
        res.json(boleto);
    });
};

function editarBoleto() {
    listaBoletos[index] = boleto;
};

function excluirBoleto(boleto) {
    listaBoletos.splice(boleto, 1);
};

router.get("/", (req, res) => {
    res.json(pegarBoletos());
})

router.get("/:id", (req, res) => {
    res.json(pegarBoletoID(req));
})

router.post("/", (req, res) => {
    const boleto = adicionarBoleto(req.body);
    res.json(boleto);
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const boleto = req.body;
    const index = listaBoletos.findIndex(b => b.id == id);
    boleto.id = id;
    editarBoleto(boleto, index);
    res.json(listaBoletos);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const boleto = listaBoletos.findIndex(b => b.id == id)
    excluirBoleto(boleto);
    res.json(listaBoletos);
})

module.exports = {
    router,
    pegarBoletos,
    pegarBoletoID,
    adicionarBoleto,
    editarBoleto,
    excluirBoleto
}