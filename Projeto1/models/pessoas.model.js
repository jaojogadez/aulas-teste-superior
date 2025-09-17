// models/pessoas.model.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definindo o schema de Pessoa
let PessoaSchema = new Schema({
  nome: {type: String, required: true, max: 200},
  cpf: {type: String, required: true, max: 14},
  email: {type: String, required: true,  max: 200}
});

// Exportar o modelo para a aplicação
module.exports = mongoose.model("Pessoa", PessoaSchema);