import React from 'react'
import styles from './Blog.module.scss'

const BlogHero = () => {
  return (
    <section className={`secao ${styles.heroBlog}`}>
      <div className="container">
        <div className={styles.conteudoHero}>
          <h1 className={styles.tituloHero}>Blog & Educação em Segurança Digital</h1>
          <p className={styles.subtituloHero}>
            Aprenda a proteger seus dados com nossos recursos educativos, tutoriais, e-books e 
            mantenha-se atualizado com as últimas notícias.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogHero