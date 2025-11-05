import conexao from "./connection.js";

const userRepository = {
  create: async (corpo) => {
    try {
      const comando = `insert into usuarios(
                      nome,
                      email,
                      senha,
                      nivel_acesso
                    )
                     values (?, ?, ?, ?);`;

      const connection = await conexao;

      const [resposta] = await connection.query(comando, [
        corpo.nome,
        corpo.email,
        corpo.senha,
        corpo.nivel_acesso,
      ]);

      return resposta;
    } catch (error) {
      console.log(error);
    }
  },

  findAll: async () => {
    try {
      const comando = ` select 
       nome,
       email,
       senha,
       nivel_acesso
       from usuarios;`;

      const connection = await conexao;

      const [resposta] = await connection.query(comando);

      return resposta;
    } catch (error) {
      console.log(error);
    }
  },
};

export { userRepository };
