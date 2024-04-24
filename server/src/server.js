// Importando suporte a conf de var de ambiente com ".env"
require('dotenv').config();

// Importando pacotes
const mongoose = require("mongoose");

function App() {
  // String de Conexão com Banco
  mongoose.connect(
    `mongodb+srv://rafaelaugustonnovais:gyqUlIy0Pq8IP9Ps@grupo-novais.xi2iqza.mongodb.net/`,
  );
  console.log("Executando API na porta 3001");
}

module.exports = App;
