const { Router } = require("express");
const express = require("express");
const rout = express.Router();

const listaPessoas = [
    { id: 1, nome: "Camilly", cpf: "114.726.019-20" },
    { id: 2, nome: "Bruna", cpf: "110.560.989-88" },
    { id: 3, nome: "Leonardo", cpf: "123.456.789.10" }
];

function buscarPessoas() {
    return listaPessoas;
};

Router.get("/", (req, res) => {
    res.send(buscarPessoas());
});

module.exports = router;