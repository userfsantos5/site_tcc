import { loginRepository } from "../repository/loginRepository.js";

const createUser = async (req, res) => {
  try {
    const corpo = req.body; 

  
    if (!corpo.nome || !corpo.email || !corpo.senha || !corpo.nivel_acesso) {
      return res.status(400).send({
        erro: "Todos os campos são obrigatórios",
      });
    }

    let usuario = await loginRepository.create(corpo);

    res.send({
      mensagem: "Usuário cadastrado com sucesso",
      id: usuario.insertId,
    });
  } catch (err) {
    res.status(400).send({
      erro: err.message,
    });
  }
};

const findAll = async (req, res) => {
  try {
    const usuarios = await loginRepository.findAll();

    if (!usuarios || usuarios.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhum usuário encontrado",
      });
    }

    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar usuários: " + error.message,
    });
  }
};

export { createUser, findAll };
