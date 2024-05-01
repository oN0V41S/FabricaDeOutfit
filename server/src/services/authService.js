// Importando módulos
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../model/user');
require('dotenv').config()

// Função para gerar Token por Id
function generateToken(id){
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });
}

// Validando email e senha do usuário
const loginService = async ({ email, password }) => {
  console.log(email)
  const user = await User.find({email: `${email}`});
  if(!user) throw new Error ("Email inválido");
  console.log(user);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid) throw new Error("Senha Inválida");

  const token = generateToken(user.id);
  return token;
}

module.exports = { loginService, generateToken };