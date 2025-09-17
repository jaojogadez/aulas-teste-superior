// routes/users.js
const express = require('express');
const router = express.Router();

// Definir a rota padrão para users
router.get('/', (req, res) => {
  res.send('Rota Padrão de Users');
});

// Definir a rota do usuario 101 para users
router.get('/101', (req, res) => {
  res.send('Rota 101 de Users');
});

// Definir a rota do usuario 102 para users
router.get('/102', (req, res) => {
  res.send('Rota 102 de Users');
});

// Exportar o router
module.exports = router;