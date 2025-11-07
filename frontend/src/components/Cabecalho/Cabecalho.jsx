import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Cabecalho.module.scss'

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const localizacao = useLocation()

  const itensNavegacao = [
    { caminho: '/', rotulo: 'Início' },
    { caminho: '/sobre', rotulo: 'Sobre Nós' },
    { caminho: '/servicos', rotulo: 'Serviços' },
    { caminho: '/blog', rotulo: 'Blog' },
    { caminho: '/ferramentas', rotulo: 'Ferramentas' },
    { caminho: '/contato', rotulo: 'Contato' },
    { caminho: '/login', rotulo: 'Login' }
  ]

  return (
    <header className={styles.cabecalho}>
      <div className="container">
        <div className={styles.conteudoCabecalho}>
          <Link to="/" className={styles.logo}>
            <span className={styles.iconeLogo}></span>
            APEX
          </Link>

          <nav className={`${styles.navegacao} ${menuAberto ? styles.navegacaoAberta : ''}`}>
            {itensNavegacao.map(item => (
              <Link
                key={item.caminho}
                to={item.caminho}
                className={`${styles.linkNavegacao} ${
                  localizacao.pathname === item.caminho ? styles.linkNavegacaoAtivo : ''
                }`}
                onClick={() => setMenuAberto(false)}
              >
                {item.rotulo}
              </Link>
            ))}
          </nav>

          <button 
            className={styles.botaoMenu}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho