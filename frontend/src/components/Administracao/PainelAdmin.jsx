import React from 'react'
import styles from './Administracao.module.scss'

const PainelAdmin = () => {
  const estatisticas = [
    { rotulo: 'Usuários Totais', valor: '1,247', variacao: '+12%', icone: '' },
    { rotulo: 'Artigos Publicados', valor: '89', variacao: '+5%', icone: '' },
    { rotulo: 'Ferramentas Ativas', valor: '15', variacao: '+2%', icone: '' },
    { rotulo: 'Acessos Hoje', valor: '324', variacao: '+8%', icone: '' }
  ]

  const atividadesRecentes = [
    { usuario: 'João Silva', acao: 'cadastrou-se', tempo: '2 min atrás' },
    { usuario: 'Maria Santos', acao: 'baixou guia LGPD', tempo: '15 min atrás' },
    { usuario: 'Pedro Costa', acao: 'usou verificador de senha', tempo: '1 hora atrás' },
    { usuario: 'Ana Oliveira', acao: 'comentou no blog', tempo: '2 horas atrás' }
  ]

  return (
    <div className={styles.painelAdmin}>
      <div className={styles.cabecalhoPainel}>
        <h1>Painel Administrativo</h1>
        <p>Visão geral da plataforma Apex</p>
      </div>

      {/* Estatísticas */}
      <div className={styles.gridEstatisticas}>
        {estatisticas.map((estatistica, index) => (
          <div key={index} className={styles.cardEstatistica}>
            <div className={styles.iconeEstatistica}>{estatistica.icone}</div>
            <div className={styles.infoEstatistica}>
              <h3 className={styles.valorEstatistica}>{estatistica.valor}</h3>
              <p className={styles.rotuloEstatistica}>{estatistica.rotulo}</p>
              <span className={styles.variacaoEstatistica}>{estatistica.variacao}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.conteudoPainel}>
        {/* Atividades Recentes */}
        <div className={styles.secaoAtividades}>
          <h2>Atividades Recentes</h2>
          <div className={styles.listaAtividades}>
            {atividadesRecentes.map((atividade, index) => (
              <div key={index} className={styles.itemAtividade}>
                <div className={styles.avatarAtividade}>
                  {atividade.usuario.charAt(0)}
                </div>
                <div className={styles.detalhesAtividade}>
                  <p>
                    <strong>{atividade.usuario}</strong> {atividade.acao}
                  </p>
                  <span className={styles.tempoAtividade}>{atividade.tempo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className={styles.acoesRapidas}>
          <h2>Ações Rápidas</h2>
          <div className={styles.gridAcoes}>
            <button className={styles.botaoAcao}>
              <span className={styles.iconeAcao}></span>
              Novo Artigo
            </button>
            <button className={styles.botaoAcao}>
              <span className={styles.iconeAcao}></span>
              Nova Ferramenta
            </button>
            <button className={styles.botaoAcao}>
              <span className={styles.iconeAcao}></span>
              Gerenciar Usuários
            </button>
            <button className={styles.botaoAcao}>
              <span className={styles.iconeAcao}></span>
              Ver Relatórios
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PainelAdmin