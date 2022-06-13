const express = require("express");
const { pegarPessoaID } = require("./pessoas");
const { listaBoletosPessoa } = require("./pessoas");
const { pegarUsuarioID } = require("./usuarios");
const { listaBoletosUsuario } = require("./usuarios");
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

function pegarBoletosIDPessoa(id){
    listaBoletos.forEach(e => {
        if(e.id_pessoa == id){
            listaBoletosPessoa.push(e);
        };
    });

    return listaBoletosPessoa;
};

function pegarBoletosIDUsuario(id){
    listaBoletos.forEach(e => {
        if(e.id_usuario == id){
            listaBoletosUsuario.push(e);
        };
    });

    return listaBoletosUsuario;
}

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

router.get("/pessoas/:id", (req, res) => {
    res.json(pegarBoletosIDPessoa(req.params.id));
});

router.get("/usuarios/:id", (req, res) => {
    res.json(pegarBoletosIDUsuario(req.params.id));
});

router.post("/", (req, res) => {
    const boleto = req.body;
    const pessoa = pegarPessoaID(boleto.id_pessoa);
    const usuario = pegarUsuarioID(boleto.id_usuario);
    if (pessoa == null || pessoa == "" || usuario == null || usuario == "") {
        res.status(400).send("Pessoa e/ou usuário inválido!");
    } else {
        if(boleto.valor == null || boleto.valor == "" || boleto.valor == 0){
            res.status(400).send("Valor inválido!")
        } else{
            res.json(adicionarBoleto(boleto));
        };
    };
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