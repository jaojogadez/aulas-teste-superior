// routes/pessoas.js
const express = require("express");
const router = express.Router();

// Adicionar controller de pessoas
const pessoasController = require("../controllers/pessoas.controller");

// Rota de teste
router.get("/teste", pessoasController.teste);

// Rota para exibir pessoas
router.get("/exibir", pessoasController.exibir);

module.exports = router;
