import conexao from "./connection.js";

const ferramentasRepository = {
  salvarVerificacaoSenha: async (corpo) => {
    try {
      const comando = `INSERT INTO verificacoes_senha(
                      senha_verificada,
                      forca,
                      score,
                      criterios
                    )
                     VALUES (?, ?, ?, ?);`;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        corpo.senha_verificada,
        corpo.forca,
        corpo.score,
        JSON.stringify(corpo.criterios)
      ]);

      return resposta;
    } catch (error) {
      throw error;
    }
  },

  salvarVerificacaoEmail: async (corpo) => {
    try {
      const comando = `INSERT INTO verificacoes_email(
                      email_verificado,
                      foi_vazado,
                      quantidade_vazamentos,
                      fontes_vazamento
                    )
                     VALUES (?, ?, ?, ?);`;

      const connection = await conexao;
      const [resposta] = await connection.query(comando, [
        corpo.email_verificado,
        corpo.foi_vazado,
        corpo.quantidade_vazamentos,
        JSON.stringify(corpo.fontes_vazamento)
      ]);

      return resposta;
    } catch (error) {
      throw error;
    }
  },

  buscarEstatisticas: async () => {
    try {
      const comando = `SELECT 
        (SELECT COUNT(*) FROM verificacoes_senha) as total_senhas,
        (SELECT COUNT(*) FROM verificacoes_email) as total_emails,
        (SELECT COUNT(*) FROM postagens) as total_postagens,
        (SELECT COUNT(*) FROM usuarios) as total_usuarios;`;

      const connection = await conexao;
      const [resposta] = await connection.query(comando);
      return resposta[0];
    } catch (error) {
      throw error;
    }
  }
};

export { ferramentasRepository };