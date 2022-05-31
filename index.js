const express = require("express");
const app = express.Router();
const port = 3000;

const pessoas = require("./api/listaPessoas");
const usuarios = require("./api/listaUsuarios");
const boletos = require("./api/listaBoletos");

app.use("/api/pessoas", pessoas);
app.use("/api/usuarios", usuarios);;
app.use("/api/boletos", boletos);



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});