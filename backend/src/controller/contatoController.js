import { contatoRepository } from "../repository/contatoRepository.js";

const createContato = async (req, res) => {
  try {
    const corpo = req.body;

    if (!corpo.id_usuario || !corpo.assunto || !corpo.mensagem) {
      return res.status(400).send({
        erro: "Campos obrigatórios: id_usuario, assunto e mensagem",
      });
    }

    const resultado = await contatoRepository.create(corpo);

    res.status(201).send({
      mensagem: "Mensagem enviada com sucesso!",
      id: resultado.insertId,
    });
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao enviar mensagem: " + error.message,
    });
  }
};

const findAllContatos = async (req, res) => {
  try {
    const contatos = await contatoRepository.findAll();

    if (!contatos || contatos.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhuma mensagem encontrada",
      });
    }

    res.status(200).send(contatos);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar mensagens: " + error.message,
    });
  }
};

export { createContato, findAllContatos };
