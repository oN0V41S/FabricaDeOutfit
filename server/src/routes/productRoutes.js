// Importando Pacotes
import Router from "express";

// Iniciando Roteador
const routerProduct = Router();

// Importando funções
import productController from "../controller/productController.js";

// Tratamento de requisições
routerProduct.get("/", productController.getProduct);
routerProduct.post("/", productController.postProduct);
routerProduct.delete("/:id", productController.deleteProduct);
routerProduct.put("/:id", productController.putProduct);

export default routerProduct;
