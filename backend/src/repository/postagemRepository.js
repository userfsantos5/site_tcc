import conexao from "./connection.js";

const postagemRepository = {
  create: async (corpo) => {
    try {
      const comando = `INSERT INTO postagens(
                      titulo,
                      conteudo,
                      resumo,
                      tipo,
                      imagem_url,
                      autor_id,
                      publicado,
                      data_publicacao,
                      slug
                    )
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        corpo.titulo,
        corpo.conteudo,
        corpo.resumo,
        corpo.tipo,
        corpo.imagem_url,
        corpo.autor_id,
        corpo.publicado,
        corpo.data_publicacao,
        corpo.slug,
      ]);

      return resposta;
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    try {
      const comando = `SELECT * FROM postagens ORDER BY created_at DESC;`;
      const connection = await conexao;
      const [resposta] = await connection.query(comando);
      return resposta;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const comando = `SELECT * FROM postagens WHERE id = ?;`;
      const connection = await conexao;
      const [resposta] = await connection.query(comando, [id]);
      return resposta[0];
    } catch (error) {
      throw error;
    }
  },

  update: async (id, corpo) => {
    try {
      const comando = `UPDATE postagens 
                      SET titulo = ?,
                          conteudo = ?,
                          resumo = ?,
                          tipo = ?,
                          imagem_url = ?,
                          publicado = ?,
                          data_publicacao = ?,
                          slug = ?
                      WHERE id = ?;`;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        corpo.titulo,
        corpo.conteudo,
        corpo.resumo,
        corpo.tipo,
        corpo.imagem_url,
        corpo.publicado,
        corpo.data_publicacao,
        corpo.slug,
        id
      ]);

      return resposta;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const comando = `DELETE FROM postagens WHERE id = ?;`;
      const connection = await conexao;
      const [resposta] = await connection.query(comando, [id]);
      return resposta;
    } catch (error) {
      throw error;
    }
  },

  findPublicadas: async () => {
    try {
      const comando = `SELECT * FROM postagens WHERE publicado = true ORDER BY data_publicacao DESC;`;
      const connection = await conexao;
      const [resposta] = await connection.query(comando);
      return resposta;
    } catch (error) {
      throw error;
    }
  },

  findByTipo: async (tipo) => {
    try {
      const comando = `SELECT * FROM postagens WHERE tipo = ? AND publicado = true ORDER BY data_publicacao DESC;`;
      const connection = await conexao;
      const [resposta] = await connection.query(comando, [tipo]);
      return resposta;
    } catch (error) {
      throw error;
    }
  },

  findBySlug: async (slug) => {
    try {
      const comando = `SELECT * FROM postagens WHERE slug = ? AND publicado = true;`;
      const connection = await conexao;
      const [resposta] = await connection.query(comando, [slug]);
      return resposta[0];
    } catch (error) {
      throw error;
    }
  }
};

export { postagemRepository };