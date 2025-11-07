import React, { useState } from 'react'
import PainelAdmin from '../components/Administracao/PainelAdmin'
import GerenciamentoUsuarios from '../components/Administracao/GerenciamentoUsuarios'
import GerenciamentoConteudo from '../components/Administracao/GerenciamentoConteudo'

const Administracao = () => {
  const [abaAtiva, setAbaAtiva] = useState('painel')

  const abas = [
    { id: 'painel', rotulo: 'Painel', icone: '' },
    { id: 'usuarios', rotulo: 'Usuários', icone: '' },
    { id: 'conteudo', rotulo: 'Conteúdo', icone: '' },
    { id: 'ferramentas', rotulo: 'Ferramentas', icone: '' },
    { id: 'analytics', rotulo: 'Analytics', icone: '' }
  ]

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case 'painel':
        return <PainelAdmin />
      case 'usuarios':
        return <GerenciamentoUsuarios />
      case 'conteudo':
        return <GerenciamentoConteudo />
      case 'ferramentas':
        return <div>Gerenciamento de Ferramentas</div>
      case 'analytics':
        return <div>Analytics e Relatórios</div>
      default:
        return <PainelAdmin />
    }
  }

  return (
    <div className="pagina-admin">
      <div className="cabecalho-admin">
        <div className="container">
          <div className="conteudo-cabecalho-admin">
            <div className="logo-admin">
              <span className="icone-logo"></span>
              <span>APEX Admin</span>
            </div>
            <nav className="navegacao-admin">
              {abas.map(aba => (
                <button
                  key={aba.id}
                  className={`item-navegacao-admin ${abaAtiva === aba.id ? 'ativo' : ''}`}
                  onClick={() => setAbaAtiva(aba.id)}
                >
                  <span className="icone-navegacao">{aba.icone}</span>
                  {aba.rotulo}
                </button>
              ))}
            </nav>
            <div className="acoes-admin">
              <button className="botao botao--secundario">Sair</button>
            </div>
          </div>
        </div>
      </div>

      <div className="conteudo-admin">
        <div className="container">
          {renderizarConteudo()}
        </div>
      </div>
    </div>
  )
}

export default Administracao



