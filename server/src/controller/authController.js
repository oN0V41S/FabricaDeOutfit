import authService from "../services/authService.js";

const loginController = async (req, res) => {
    // obtendo os dados do corpo da requisição
    const body = req.body;
    try{
        // chamando o serviço de autenticação para realizar o login e obter um token
        const token = await authService.signin(body);
        // retorna o token  
        return res.send(token)

    } catch (err) {
        return res.status(401).send(err.message);
    }
};

const signupController = async (req,res) => {
  // obtendo os dados do corpo da requisição
  const body = req.body;
  
  try{
      // chamando a função signup do authService
      const resService = await authService.signup(body);
        // respondendo a requisição
      return res.status(201).send(resService);

  } catch (err) {
      return res.status(409).send(err.message);
  }
}

export default loginController;
