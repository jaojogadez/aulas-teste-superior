// routes/produtos.js
const express = require('express');
const router = express.Router();

// Definir a rota padrão para produtos
router.get('/', (req, res) =>{
  res.send('Rota Padrão de Produtos');  
});

// Definir a rota do produto 101 para produtos
router.get('/101', (req, res) => {
  res.send('Rota 101 de Produtos');
});

// Definir a rota do produto 102 para produtos
router.get('/102', (req, res) =>{
  res.send('Rota 102 de Produtos');
});

// Exportar o router
module.exports = router;