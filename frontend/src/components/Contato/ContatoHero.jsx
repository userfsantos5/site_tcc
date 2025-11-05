import React from 'react'
import styles from './Contato.module.scss'

const ContatoHero = () => {
  return (
    <section className={`secao ${styles.heroContato}`}>
      <div className="container">
        <div className={styles.conteudoHero}>
          <h1 className={styles.tituloHero}>Estamos aqui para ajudar</h1>
          <p className={styles.subtituloHero}>
            Envie sua mensagem ou dúvida. Nossa equipe está pronta para responder.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContatoHero