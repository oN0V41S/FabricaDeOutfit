// Importando Pacotes
import Router from "express";

// Iniciando Roteador
const router = Router();

// Importando Controladores
import userController from "../controller/userController.js";

router.get("/", userController.getUsers);
router.post("/", userController.postUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.putUser);

export default router;
