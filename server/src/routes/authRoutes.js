// Importando Pacotes
import Router from "express";

const authRouter = Router();

import loginController from "../controller/authController.js";
authRouter.post("/", loginController);

export default authRouter;
