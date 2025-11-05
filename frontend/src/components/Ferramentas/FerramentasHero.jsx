import React from 'react'
import styles from './Ferramentas.module.scss'

const FerramentasHero = () => {
  return (
    <section className={`secao ${styles.heroFerramentas}`}>
      <div className="container">
        <div className={styles.conteudoHero}>
          <h1 className={styles.tituloHero}>Ferramentas Práticas e Gratuitas</h1>
          <p className={styles.subtituloHero}>
            Proteja sua vida digital com nossas ferramentas recomendadas e recursos de segurança.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FerramentasHero