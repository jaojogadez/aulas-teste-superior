// routes/numeros.js
const express = require("express");
const router = express.Router();

// Definir a rota padrão para numeros
router.get("/", (req, res) => {
  res.send("Rota Padrão de Numeros");
});

// Definir rota para processamento dos numeros
router.post("/processar", (req, res) => {
  // acessar os dados enviados no corpo da requisição
  const { numeros } = req.body;
  // verificar se os numero foram enviados
  if (!numeros || !Array.isArray(numeros) || numeros.some(isNaN)) {
    return res.status(400).json({
      erro: "A requisição deve contar uma lista de números.",
    });
  }
  // Calcular a soma dos numeros
  const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  // Calcular a media dos numeros
  const media = soma / numeros.length;

  // Enviar resposta em JSON

  
});

router.get("/clima/:cep", async (req, res) => {
  const { cep } = req.params;
  //console.log("CEP: ", cep);
  const cepResp = await axios.get(`https://opencep.com/v1/${cep}`);
  console.log("CEP: ", cepResp.data);
  
});

// Exportar o router
module.exports = router;
