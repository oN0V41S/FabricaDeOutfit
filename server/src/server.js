// Importando suporte a conf de var de ambiente com ".env"
import dotenv from 'dotenv';

// Importando pacotes
import mongoose from "mongoose";

function App() {
  // String de Conexão com Banco
  mongoose.connect(
    `mongodb+srv://rafaelaugustonnovais:gyqUlIy0Pq8IP9Ps@grupo-novais.xi2iqza.mongodb.net/`,
  );
  console.log("Executando API na porta 3001");
}

export default App;
