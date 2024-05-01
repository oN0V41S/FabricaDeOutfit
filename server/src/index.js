import express from "express";
import dotenv from "dotenv";

// Iniciando Variável da Aplicação
const app = express();

// Formatando resposta para JSON
app.use(express.json());

// Rota Principal
app.get("/", (req, res) => {
  console.log("buscando rota inicial...")
  return res.send(
    `<h1 style="font-family: Arial,sans serif;font-size:20px;">Bem Vindo a API...</h1>`,
  );
});

// Importando Roteadores
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Definindo Rotas
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

// Configurando Aplicação
const port = 3001;
import server from './server.js'

// Executa aplicação
app.listen(port, server);
