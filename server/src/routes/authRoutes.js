// Importando Pacotes
const Router = require("express");

const authRouter = Router();

const loginController = require("../controller/authController");
authRouter.post("/", loginController);

module.exports = authRouter;
