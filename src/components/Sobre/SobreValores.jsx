import React from 'react'
import styles from './Sobre.module.scss'

const SobreValores = () => {
  const valores = [
    {
      titulo: "Transparência",
      descricao: "Projeto educacional aberto e sem fins lucrativos"
    },
    {
      titulo: "Educação", 
      descricao: "Foco em ensinar e empoderar as pessoas"
    },
    {
      titulo: "Comunidade",
      descricao: "Feito por estudantes, para a sociedade"
    }
  ]

  return (
    <section className={`secao ${styles.sobreValores}`}>
      <div className="container">
        <div className={styles.gridValores}>
          {valores.map((valor, index) => (
            <div key={index} className={styles.cardValor}>
              <h3 className={styles.tituloValor}>{valor.titulo}</h3>
              <p className={styles.descricaoValor}>{valor.descricao}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.secaoMissao}>
          <h2 className={styles.tituloMissao}>Nossa Missão</h2>
          <p className={styles.textoMissao}>
            Tornar a segurança digital acessível para todos, independente de idade, conhecimento técnico ou condição financeira.
          </p>
          <p className={styles.textoMissao}>
            Acreditamos que proteção de dados é um direito básico no mundo digital. Por isso, criamos conteúdo claro, 
            prático e sempre gratuito sobre como se proteger online.
          </p>
          <p className={styles.destaqueMissao}>
            Nosso objetivo não é só informar mas empoderar. Queremos que cada pessoa que acesse nosso site 
            saia mais preparado e confiante para navegar no mundo digital.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SobreValores