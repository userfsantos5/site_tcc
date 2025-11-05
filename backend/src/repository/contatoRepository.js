import conexao from "./connection.js";

const contatoRepository = {
  // 🔹 Cadastrar novo contato
  create: async (dados) => {
    try {
      const comando = `
        INSERT INTO contatos (id_usuario, assunto, mensagem)
        VALUES (?, ?, ?);
      `;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        dados.id_usuario,
        dados.assunto,
        dados.mensagem,
      ]);

      return resposta;
    } catch (error) {
      console.error("Erro ao cadastrar contato:", error);
      throw error;
    }
  },

  // 🔹 Listar todos os contatos
  findAll: async () => {
    try {
      const comando = `
        SELECT c.id, u.nome, u.email, c.assunto, c.mensagem, c.data_envio
        FROM contatos c
        INNER JOIN usuarios u ON u.id = c.id_usuario
        ORDER BY c.data_envio DESC;
      `;

      const connection = await conexao;
      const [linhas] = await connection.query(comando);
      return linhas;
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
      throw error;
    }
  },
};

export { contatoRepository };
