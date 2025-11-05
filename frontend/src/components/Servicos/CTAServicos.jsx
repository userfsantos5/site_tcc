import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Servicos.module.scss'

const CTAServicos = () => {
  return (
    <section className={`secao ${styles.secaoCTA}`}>
      <div className="container">
        <div className={styles.conteudoCTA}>
          <h2 className={styles.tituloCTA}>Pronto Para Começar?</h2>
          <p className={styles.textoCTA}>
            Explore nossos recursos e comece sua jornada para uma vida digital mais segura.
          </p>
          <Link to="/ferramentas" className="botao botao--primario botao--grande">
            Começar Agora
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTAServicos