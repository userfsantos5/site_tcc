import conexao from "./connection.js";

const contatoRepository = {

  create: async (dados) => {
    try {
      const comando = `
        INSERT INTO contatos (nome, email, assunto, mensagem)
        VALUES (?, ?, ?, ?);
      `;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        dados.nome,
        dados.email,
        dados.assunto,
        dados.mensagem,
      ]);

      return resposta;
    } catch (error) {
      console.error("Erro ao cadastrar contato:", error);
      throw error;
    }
  },

  findAll: async () => {
    try {
      const comando = `
        SELECT id, nome, email, assunto, mensagem, data_envio
        FROM contatos 
        ORDER BY data_envio DESC;
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