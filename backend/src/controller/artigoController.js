import { artigoRepository } from "../repository/artigoRepository.js";

// 🔹 Criar artigo
const createArtigo = async (req, res) => {
  try {
    const corpo = req.body;

    if (
      !corpo.id_usuario ||
      !corpo.titulo ||
      !corpo.descricao
    ) {
      return res.status(400).send({
        erro: "Campos obrigatórios: id_usuario, titulo e descricao",
      });
    }

    const resultado = await artigoRepository.create(corpo);

    res.status(201).send({
      mensagem: "Artigo publicado com sucesso!",
      id: resultado.insertId,
    });
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao publicar artigo: " + error.message,
    });
  }
};

// 🔹 Listar artigos
const findAllArtigos = async (req, res) => {
  try {
    const artigos = await artigoRepository.findAll();

    if (!artigos || artigos.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhum artigo encontrado",
      });
    }

    res.status(200).send(artigos);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar artigos: " + error.message,
    });
  }
};

export { createArtigo, findAllArtigos };
