const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const listaUsuarios = [
    { id: 1, nome: "Camilly", senha: "123" },
    { id: 2, nome: "Bruna", senha: "123" },
    { id: 3, nome: "Leonardo", senha: "123" }
];

function pegarUsuarios() {
    app.get('/api/usuarios', (req, res) => {
        res.send(listaUsuarios);
    });
};

function pegarUsuarioID() {
    app.get('/api/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const usuario = listaUsuarios.find(u => u.id == id);
        res.send(usuario);
    });
};

function adicionarUsuario(){
    app.post('/api/usuarios', (req, res) => {
        const usuario = req.body;
        usuario.id = listaUsuarios.length + 1;
        listaUsuarios.push(usuario);
        res.json(usuario);
    });
};

function editarUsuario(){
    app.put('/api/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const usuario = req.body;
        const index = listaUsuarios.findIndex(u => u.id == id);
        usuario.id = id;
        listaUsuarios[index] = usuario;
        res.json(usuario);
    });
};

function excluirUsuario(){
    app.delete('/api/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const index = listaUsuarios.findIndex(u => u.id == id);
        listaUsuarios.splice(index, 1);
        res.json(listaUsuarios);
    });
};

module.exports = router;

app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
});