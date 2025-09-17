// controllers/pessoas.controller.js
var Pessoa = require("../models/pessoas.model");

// Teste
exports.teste = function (req, res){
  res.send("Controller Funcionando");
};

// Exibir Pessoas
exports.exibir = function (req, res) {
  let pessoa = new Pessoa({
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email
  });
  console.log("Pessoa: ", pessoa);
};