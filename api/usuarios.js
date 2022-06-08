const express = require("express");
const router = express.Router();

const listaUsuarios = [
    { id: 1, nome: "Camilly", senha: "123" },
    { id: 2, nome: "Bruna", senha: "123" },
    { id: 3, nome: "Leonardo", senha: "123" }
];


function pegarUsuarios() {
    return listaUsuarios;
};

function pegarUsuarioID() {
    const id = req.params.id;
    const usuario = listaUsuarios.find(u => u.id == id);
    return usuario;
};

function adicionarUsuario(usuario) {
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
        return usuario;
};

function editarUsuario(usuario) {
    listaUsuarios[index] = usuario;
};

function excluirUsuario(usuario) {
    listaUsuarios.splice(usuario, 1);
};




router.get("/", (req, res) => {
    res.json(pegarUsuarios());
});

router.get("/:id", (req, res) => {
    res.json(pegarUsuarioID(req));
});

router.post("/", (req, res) => {
    const usuario = adicionarUsuario(req.body);
    res.json(usuario);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    const index = listaUsuarios.findIndex(u => u.id == id);
    usuario.id = id;
    editarPessoa(usuario, index);
    res.json(listaUsuarios);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const usuario = listaUsuarios.findIndex(u => u.id == id);
    excluirBoleto(usuario);
    res.json(listaUsuarios);
});


module.exports = {
    router,
    pegarUsuarios,
    pegarUsuarioID,
    adicionarUsuario,
    editarUsuario,
    excluirUsuario
};