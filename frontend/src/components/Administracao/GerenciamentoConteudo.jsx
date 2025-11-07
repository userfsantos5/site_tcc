import React, { useState } from 'react'
import styles from './Administracao.module.scss'

const GerenciamentoConteudo = () => {
  const [conteudos] = useState([
    { id: 1, titulo: 'Guia Completo de LGPD', tipo: 'artigo', status: 'publicado', visualizacoes: 1247, data: '2024-01-15' },
    { id: 2, titulo: 'Como Criar Senhas Seguras', tipo: 'tutorial', status: 'rascunho', visualizacoes: 0, data: '2024-01-14' },
    { id: 3, titulo: 'Checklist de Segurança', tipo: 'ferramenta', status: 'publicado', visualizacoes: 892, data: '2024-01-10' },
    { id: 4, titulo: 'Novas Ameaças Digitais 2024', tipo: 'artigo', status: 'publicado', visualizacoes: 1563, data: '2024-01-08' }
  ])

  const [novoConteudo, setNovoConteudo] = useState({
    titulo: '',
    tipo: 'artigo',
    categoria: 'seguranca'
  })

  return (
    <div className={styles.gerenciamentoConteudo}>
      <div className={styles.cabecalhoSecao}>
        <h1>Gerenciamento de Conteúdo</h1>
        <p>Crie e gerencie artigos, tutoriais e ferramentas</p>
      </div>

      <div className={styles.gridConteudo}>
        {/* Formulário de Novo Conteúdo */}
        <div className={styles.formularioNovoConteudo}>
          <h2>Adicionar Novo Conteúdo</h2>
          <form className={styles.formulario}>
            <div className={styles.grupoFormulario}>
              <label>Título</label>
              <input
                type="text"
                placeholder="Título do conteúdo..."
                value={novoConteudo.titulo}
                onChange={(e) => setNovoConteudo({...novoConteudo, titulo: e.target.value})}
              />
            </div>

            <div className={styles.linhaFormulario}>
              <div className={styles.grupoFormulario}>
                <label>Tipo</label>
                <select
                  value={novoConteudo.tipo}
                  onChange={(e) => setNovoConteudo({...novoConteudo, tipo: e.target.value})}
                >
                  <option value="artigo">Artigo</option>
                  <option value="tutorial">Tutorial</option>
                  <option value="ferramenta">Ferramenta</option>
                  <option value="guia">Guia</option>
                </select>
              </div>

              <div className={styles.grupoFormulario}>
                <label>Categoria</label>
                <select
                  value={novoConteudo.categoria}
                  onChange={(e) => setNovoConteudo({...novoConteudo, categoria: e.target.value})}
                >
                  <option value="seguranca">Segurança</option>
                  <option value="privacidade">Privacidade</option>
                  <option value="lgpd">LGPD</option>
                  <option value="ferramentas">Ferramentas</option>
                </select>
              </div>
            </div>

            <button type="submit" className={styles.botaoEnviar}>
              Criar Conteúdo
            </button>
          </form>
        </div>

        {/* Lista de Conteúdos */}
        <div className={styles.listaConteudos}>
          <h2>Conteúdos Existentes</h2>
          <div className={styles.itensConteudo}>
            {conteudos.map(conteudo => (
              <div key={conteudo.id} className={styles.itemConteudo}>
                <div className={styles.infoConteudo}>
                  <h3>{conteudo.titulo}</h3>
                  <div className={styles.metaConteudo}>
                    <span className={styles.tipoConteudo}>{conteudo.tipo}</span>
                    <span className={`${styles.status} ${styles[conteudo.status]}`}>
                      {conteudo.status}
                    </span>
                    <span className={styles.visualizacoes}>{conteudo.visualizacoes} visualizações</span>
                  </div>
                </div>
                <div className={styles.acoesConteudo}>
                  <button className={styles.botaoAcao}></button>
                  <button className={styles.botaoAcao}></button>
                  <button className={styles.botaoAcao}></button>
                  <button className={styles.botaoAcao}></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GerenciamentoConteudo