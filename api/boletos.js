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

function pegarBoletoID(id) {
    const boleto = listaBoletos.find(b => b.id == id);
    return boleto;
};

function adicionarBoleto(boleto) {
    boleto.id = listaBoletos.length + 1;
    listaBoletos.push(boleto);
    return boleto;
};

function editarBoleto(boleto, id) {
    const index = listaBoletos.findIndex(b => b.id == id);
    boleto.id = id;
    listaBoletos[index] = boleto;
};

function excluirBoleto(index) {
    listaBoletos.splice(index, 1);
};


router.get("/", (req, res) => {
    res.json(pegarBoletos());
});

router.get("/:id", (req, res) => {
    res.json(pegarBoletoID(req.params.id));
});

router.post("/", (req, res) => {
    const boleto = req.body
    boleto = adicionarBoleto(boleto);
    res.json(boleto);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const boleto = req.body;
    editarBoleto(boleto, id);
    res.json(listaBoletos);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = listaBoletos.findIndex(b => b.id == id);
    excluirBoleto(index);
    res.json(listaBoletos);
});


module.exports = {
    router,
    pegarBoletos,
    pegarBoletoID,
    adicionarBoleto,
    editarBoleto,
    excluirBoleto
};