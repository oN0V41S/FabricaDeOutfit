// Importando módulos
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import authRepository from'../repository/authRepository.js';

// Schema de usuário
import User from '../model/user.js';


// Função para gerar Token por Id
function generateToken(id){
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });
}

// Validando email e senha do usuário
async function loginService ({ email, password }){
  const user = await authRepository.findByEmail(email);
  if(!user) throw new Error ("Email inválido");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid) throw new Error("Senha Inválida");

  const token = generateToken(user.id);
  return token;
}

// função assíncrona para fazer login
async function signin(body){
    // verifica se o usuário com o email fornecido existe no banco de dados
    const userExists = await authRepository.findByEmail(body.email);
    if(!userExists) throw new Error("Email ou Senha incorreto");
    // verifica se a senha fornecida corresponde à senha armazenada no banco de dados
    if(body.password != userExists.password){throw new Error("Email ou Senha incorreto")}

    // retorna o token de autenticação para o usuário logado
    return authRepository.generateToken(userExists._id);
}

// função assíncrona para registrar um novo usuário
async function signup(body) {
    // hash da senha fornecida pelo usuário
    const hasPassword = bcrypt.hashSync(body.password, 10);
  
    // verifica se o usuário já existe no banco de dados
    const userExists = await authRepository.findByEmail(body.email);
    if (userExists) throw new Error("User already exists!");
    
    // retorna os dados do usuário após a criação
    return await authRepository.create({ ...body, password: hasPassword });
}

// função assíncrona para obter detalhes do usuário logado
async function userLogged(id){
    // busca o usuário no banco de dados pelo ID
    const user = await authRepository.findById(id);
    if(!user) throw new Error ("Usuário não encontrado");
    return user;
}

export default { loginService, generateToken, signin, signup, userLogged };