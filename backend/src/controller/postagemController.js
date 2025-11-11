import { postagemRepository } from "../repository/postagemRepository.js";

const gerarSlug = (titulo) => {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-')
    + '-' + Date.now();
};

const createPostagem = async (req, res) => {
  try {
    const corpo = req.body; 

    if (!corpo.titulo || !corpo.conteudo || !corpo.autor_id) {
      return res.status(400).send({
        erro: "Título, conteúdo e autor são obrigatórios",
      });
    }

    const slug = gerarSlug(corpo.titulo);

    const postagemData = {
      titulo: corpo.titulo,
      conteudo: corpo.conteudo,
      resumo: corpo.resumo || null,
      tipo: corpo.tipo || 'blog',
      imagem_url: corpo.imagem_url || null,
      autor_id: corpo.autor_id,
      publicado: corpo.publicado || false,
      data_publicacao: corpo.publicado ? new Date() : null,
      slug: slug
    };

    let postagem = await postagemRepository.create(postagemData);

    res.send({
      mensagem: "Postagem criada com sucesso",
      id: postagem.insertId,
    });
  } catch (err) {
    res.status(400).send({
      erro: err.message,
    });
  }
};

const findAllPostagens = async (req, res) => {
  try {
    const postagens = await postagemRepository.findAll();

    if (!postagens || postagens.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhuma postagem encontrada",
      });
    }

    res.status(200).send(postagens);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar postagens: " + error.message,
    });
  }
};

const findPostagemById = async (req, res) => {
  try {
    const { id } = req.params;
    const postagem = await postagemRepository.findById(id);

    if (!postagem) {
      return res.status(404).send({
        mensagem: "Postagem não encontrada",
      });
    }

    res.status(200).send(postagem);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar postagem: " + error.message,
    });
  }
};

const updatePostagem = async (req, res) => {
  try {
    const { id } = req.params;
    const corpo = req.body;

    if (!corpo.titulo || !corpo.conteudo) {
      return res.status(400).send({
        erro: "Título e conteúdo são obrigatórios",
      });
    }

    const postagemExistente = await postagemRepository.findById(id);
    if (!postagemExistente) {
      return res.status(404).send({
        mensagem: "Postagem não encontrada",
      });
    }

    let slug = postagemExistente.slug;
    if (corpo.titulo !== postagemExistente.titulo) {
      slug = gerarSlug(corpo.titulo);
    }

    let data_publicacao = postagemExistente.data_publicacao;
    if (corpo.publicado && !postagemExistente.publicado) {
      data_publicacao = new Date();
    }

    const postagemData = {
      titulo: corpo.titulo,
      conteudo: corpo.conteudo,
      resumo: corpo.resumo || null,
      tipo: corpo.tipo || 'blog',
      imagem_url: corpo.imagem_url || null,
      publicado: corpo.publicado || false,
      data_publicacao: data_publicacao,
      slug: slug
    };

    await postagemRepository.update(id, postagemData);

    res.send({
      mensagem: "Postagem atualizada com sucesso",
    });
  } catch (err) {
    res.status(400).send({
      erro: err.message,
    });
  }
};

const deletePostagem = async (req, res) => {
  try {
    const { id } = req.params;

    const postagemExistente = await postagemRepository.findById(id);
    if (!postagemExistente) {
      return res.status(404).send({
        mensagem: "Postagem não encontrada",
      });
    }

    await postagemRepository.delete(id);

    res.send({
      mensagem: "Postagem excluída com sucesso",
    });
  } catch (err) {
    res.status(400).send({
      erro: err.message,
    });
  }
};

const findPostagensPublicas = async (req, res) => {
  try {
    const postagens = await postagemRepository.findPublicadas();

    if (!postagens || postagens.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhuma postagem pública encontrada",
      });
    }

    res.status(200).send(postagens);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar postagens públicas: " + error.message,
    });
  }
};

const findEbooks = async (req, res) => {
  try {
    const ebooks = await postagemRepository.findByTipo('ebook');

    if (!ebooks || ebooks.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhum ebook encontrado",
      });
    }

    res.status(200).send(ebooks);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar ebooks: " + error.message,
    });
  }
};

const findArtigos = async (req, res) => {
  try {
    const artigos = await postagemRepository.findByTipo('artigo');

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

const findBlogPosts = async (req, res) => {
  try {
    const posts = await postagemRepository.findByTipo('blog');

    if (!posts || posts.length === 0) {
      return res.status(404).send({
        mensagem: "Nenhum post do blog encontrado",
      });
    }

    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar posts do blog: " + error.message,
    });
  }
};

const findPostagemBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const postagem = await postagemRepository.findBySlug(slug);

    if (!postagem) {
      return res.status(404).send({
        mensagem: "Postagem não encontrada",
      });
    }

    res.status(200).send(postagem);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar postagem: " + error.message,
    });
  }
};

export { 
  createPostagem, 
  findAllPostagens, 
  findPostagemById, 
  updatePostagem, 
  deletePostagem,
  findPostagensPublicas,
  findEbooks,
  findArtigos,
  findBlogPosts,
  findPostagemBySlug
};