import React from 'react'
import styles from './Sobre.module.scss'

const SobreHero = () => {
  return (
    <section className={`secao ${styles.heroSobre}`}>
      <div className="container">
        <div className={styles.conteudoSobre}>
          <div className={styles.textoSobre}>
            <h1 className={styles.tituloSobre}>Sobre a Apex</h1>
            <p className={styles.subtituloSobre}>
              Um projeto de utilidade pública criado por estudantes comprometidos com a segurança digital de todos.
            </p>
            
            <div className={styles.secaoSobre}>
              <h2 className={styles.tituloSecao}>Nossa Origem</h2>
              <p className={styles.textoSecao}>
                A Apex nasceu como projeto de Trabalho de Conclusão de Curso do Técnico em informática, 
                mas com um propósito que vai muito além de uma nota ou diploma.
              </p>
              <p className={styles.textoSecao}>
                Percebemos que muitas pessoas não sabem como se proteger online, e isso não é culpa delas - 
                falta informação acessível e clara sobre segurança digital. Decidimos fazer algo a respeito.
              </p>
              <p className={styles.textoSecao}>
                Este é um projeto de utilidade pública, criado para servir a comunidade. Todo o conteúdo 
                é gratuito, verificado e pensado para ser compreendido por qualquer pessoa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreHero