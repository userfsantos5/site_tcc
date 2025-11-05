import React from 'react'
import styles from './Servicos.module.scss'

const ServicosHero = () => {
  return (
    <section className={`secao ${styles.heroServicos}`}>
      <div className="container">
        <div className={styles.conteudoHero}>
          <h1 className={styles.tituloHero}>O Que Oferecemos</h1>
          <p className={styles.subtituloHero}>
            Tudo que você precisa saber sobre segurança digital, de forma gratuita e acessível.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicosHero