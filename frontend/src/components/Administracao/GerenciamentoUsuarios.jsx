import React, { useState } from 'react'
import styles from './Administracao.module.scss'

const GerenciamentoUsuarios = () => {
  const [usuarios] = useState([
    { id: 1, nome: 'João Silva', email: 'joao@email.com', tipo: 'usuario', status: 'ativo', dataCadastro: '2024-01-15' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', tipo: 'educador', status: 'ativo', dataCadastro: '2024-01-10' },
    { id: 3, nome: 'Pedro Costa', email: 'pedro@email.com', tipo: 'usuario', status: 'inativo', dataCadastro: '2024-01-08' },
    { id: 4, nome: 'Ana Oliveira', email: 'ana@email.com', tipo: 'pesquisador', status: 'ativo', dataCadastro: '2024-01-05' }
  ])

  const [termoBusca, setTermoBusca] = useState('')

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    usuario.email.toLowerCase().includes(termoBusca.toLowerCase())
  )

  return (
    <div className={styles.gerenciamentoUsuarios}>
      <div className={styles.cabecalhoSecao}>
        <h1>Gerenciamento de Usuários</h1>
        <p>Gerencie contas de usuários e permissões</p>
      </div>

      <div className={styles.ferramentasGerenciamento}>
        <div className={styles.caixaBusca}>
          <input
            type="text"
            placeholder="Buscar usuários..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            className={styles.inputBusca}
          />
        </div>
        <button className={styles.botaoAdicionar}>
          + Adicionar Usuário
        </button>
      </div>

      <div className={styles.tabelaUsuarios}>
        <div className={styles.cabecalhoTabela}>
          <div className={styles.celulaTabela}>Usuário</div>
          <div className={styles.celulaTabela}>Email</div>
          <div className={styles.celulaTabela}>Tipo</div>
          <div className={styles.celulaTabela}>Status</div>
          <div className={styles.celulaTabela}>Data</div>
          <div className={styles.celulaTabela}>Ações</div>
        </div>

        {usuariosFiltrados.map(usuario => (
          <div key={usuario.id} className={styles.linhaTabela}>
            <div className={styles.celulaTabela}>
              <div className={styles.infoUsuario}>
                <div className={styles.avatarUsuario}>
                  {usuario.nome.charAt(0)}
                </div>
                {usuario.nome}
              </div>
            </div>
            <div className={styles.celulaTabela}>{usuario.email}</div>
            <div className={styles.celulaTabela}>
              <span className={`${styles.tipoUsuario} ${styles[usuario.tipo]}`}>
                {usuario.tipo}
              </span>
            </div>
            <div className={styles.celulaTabela}>
              <span className={`${styles.status} ${styles[usuario.status]}`}>
                {usuario.status}
              </span>
            </div>
            <div className={styles.celulaTabela}>
              {new Date(usuario.dataCadastro).toLocaleDateString('pt-BR')}
            </div>
            <div className={styles.celulaTabela}>
              <div className={styles.botoesAcao}>
                <button className={styles.botaoAcao} title="Editar">
                  
                </button>
                <button className={styles.botaoAcao} title="Bloquear">
                  
                </button>
                <button className={styles.botaoAcao} title="Excluir">
                  
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.resumoEstatisticas}>
        <div className={styles.itemEstatistica}>
          <h3>Total de Usuários</h3>
          <p>{usuarios.length}</p>
        </div>
        <div className={styles.itemEstatistica}>
          <h3>Usuários Ativos</h3>
          <p>{usuarios.filter(u => u.status === 'ativo').length}</p>
        </div>
        <div className={styles.itemEstatistica}>
          <h3>Educadores</h3>
          <p>{usuarios.filter(u => u.tipo === 'educador').length}</p>
        </div>
      </div>
    </div>
  )
}

export default GerenciamentoUsuarios