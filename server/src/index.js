// Importando var de ambientes
require("dotenv").config();

// Importando pacotes
const express = require("express");

// Iniciando Variável da Aplicação
const app = express();

// Formatando resposta para JSON
app.use(express.json());

// Rota Principal
app.get("/", (req, res) => {
  return res.send(
    `<h1 style="font-family: Arial,sans serif;font-size:20px;">Bem Vindo a API...</h1>`,
  );
});

// Definindo Rotas
app.use("/products", require("./routes/productRoutes.js"));
app.use("/users", require("./routes/userRoutes.js"));
app.use("/auth", require("./routes/authRoutes.js"));

// Configurando Aplicação
const port = 3001;
const server = require("./server.js");

// Executa aplicação
app.listen(port, server);
