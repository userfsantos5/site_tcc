import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.conteudoHero}>
          <h1 className={styles.tituloHero}>
            O Ápice em Segurança de Dados
          </h1>
          <p className={styles.subtituloHero}>
            Defendemos seus direitos digitais oferecendo ferramentas, informações e conhecimento gratuito para todos.
          </p>
          <div className={styles.botoesHero}>
            <Link to="/servicos" className="botao botao--primario botao--grande">
              Explorar Recursos
            </Link>
            <Link to="/sobre" className="botao botao--secundario botao--grande">
              Conhecer a Apex
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero