import conexao from "./connection.js";

const artigoRepository = {
  // 🔹 Criar novo artigo
  create: async (dados) => {
    try {
      const comando = `
        INSERT INTO artigos (
          id_usuario, titulo, descricao, imagem_url, categoria, nivel, tipo
        )
        VALUES (?, ?, ?, ?, ?, ?, ?);
      `;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        dados.id_usuario,
        dados.titulo,
        dados.descricao,
        dados.imagem_url,
        dados.categoria,
        dados.nivel,
        dados.tipo,
      ]);

      return resposta;
    } catch (error) {
      console.error("Erro ao cadastrar artigo:", error);
      throw error;
    }
  },

  // 🔹 Buscar todos os artigos
  findAll: async () => {
    try {
      const comando = `
        SELECT 
          a.id,
          u.nome AS autor,
          a.titulo,
          a.descricao,
          a.imagem_url,
          a.categoria,
          a.nivel,
          a.tipo,
          a.data_publicacao
        FROM artigos a
        INNER JOIN usuarios u ON u.id = a.id_usuario
        ORDER BY a.data_publicacao DESC;
      `;

      const connection = await conexao;
      const [linhas] = await connection.query(comando);
      return linhas;
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
      throw error;
    }
  },
};

export { artigoRepository };
