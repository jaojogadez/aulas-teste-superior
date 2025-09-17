// Criando arquivo index.js
const express = require("express");
const mongoose = require("mongoose");
const server = express();

// Importando as rotas
const usersRoute = require("./routes/users");
const produtosRoute = require("./routes/produtos");
const numerosRoute = require("./routes/numeros");
const pessoasRoute = require("./routes/pessoas");

// Configurar middleware ANTES das rotas
server.use(express.json());

// Usando as rotas
server.use("/users", usersRoute);
server.use("/produtos", produtosRoute);
server.use("/numeros", numerosRoute);
server.use("/pessoas", pessoasRoute);


// definindo a rota padrão
server.get("/", (req, res) => {
  res.send("<h1> Bem-vindo a rota Padrão</h1>");
});


// Rodando o servidor
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
