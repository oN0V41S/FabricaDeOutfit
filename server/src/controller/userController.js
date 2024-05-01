// Importando Modelo
import User from "../model/user.js";

// Tratamento de requisição GET
async function getUsers(req, res){
  console.log("Buscando Usuários...")
  const users = await User.find();
  return res.send(users);
}

// Tratamento de requisição POST
async function postUser(req, res){
  console.log('Inserindo Usuário...')
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    itens_saved: req.body.itens_saved,
    itens_card: req.body.itens_card
  })
  await user.save();
  return res.send(user);
}

// Tratamento de requisição PUT
async function putUser(req, res){
  console.log("Atualizando Usuário...")
  const user = await User.findAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      itens_saved: req.body.itens_saved,
      itens_card: req.body.itens_card
    },
    {
      new: true,
    },
  )
}

// Tratamento de requisição DELETE
async function deleteUser(req, res){
  console.log("Deletendo Usuário...")
  const user = await User.findByIdAndDelete(req.params.id);
  return res.send(user);
}

export default {getUsers, postUser, deleteUser, putUser};