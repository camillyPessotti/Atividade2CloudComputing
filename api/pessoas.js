const express = require("express");
const router = express.Router();

const listaPessoas = [
    { id: 1, nome: "Camilly", cpf: "114.726.019-20" },
    { id: 2, nome: "Bruna", cpf: "110.560.989-88" },
    { id: 3, nome: "Leonardo", cpf: "123.456.789.10" }
];

function pegarPessoas() {
    return listaPessoas;
};

function pegarPessoaID(id) {
    const pessoa = listaPessoas.find(p => p.id == id);
    return pessoa;
};

function adicionarPessoa(pessoa) {
    console.log(pessoa);
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    return pessoa;
};

function editarPessoa(pessoa, id) {
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
};

function excluirPessoa(index) {
    listaPessoas.splice(index, 1);
};


router.get("/", (req, res) => {
    res.json(pegarPessoas());
});

router.get("/:id", (req, res) => {
    res.json(pegarPessoaID(req.params.id));
});

router.post("/", (req, res) => {
    console.log(req.body);
    const pessoa = req.body;
    res.json(adicionarPessoa(pessoa));
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    editarPessoa(pessoa, id);
    res.json(listaPessoas);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    excluirPessoa(index);
    res.json(listaPessoas);
});


module.exports = {
    router,
    pegarPessoas,
    pegarPessoaID,
    adicionarPessoa,
    editarPessoa,
    excluirPessoa
};