// Importando *serviço* de login
const { loginService } = require("../services/authService");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await loginService(email, password);
    return res.send(token);
  } catch (e) {
    return res.status(401).send(e.message);
  }
};

module.exports = loginController;
