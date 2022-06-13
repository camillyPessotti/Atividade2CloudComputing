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

function pegarUsuarioID(id) {
    const usuario = listaUsuarios.find(u => u.id == id);
    return usuario;
};

function adicionarUsuario(usuario) {
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
    return usuario;
};

function editarUsuario(usuario, id) {
    const index = listaUsuarios.findIndex(u => u.id == id);
    usuario.id = id;
    listaUsuarios[index] = usuario;
};

function excluirUsuario(index) {
    listaUsuarios.splice(index, 1);
};


router.get("/", (req, res) => {
    res.json(pegarUsuarios());
});

router.get("/:id", (req, res) => {
    res.json(pegarUsuarioID(req.params.id));
});

router.post("/", (req, res) => {
    const usuario = req.body
    usuario = adicionarUsuario(usuario);
    res.json(usuario);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    editarUsuario(usuario, id);
    res.json(listaUsuarios);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(u => u.id == id);
    excluirUsuario(index);
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