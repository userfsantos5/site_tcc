import React from 'react'
import styles from './Missao.module.scss'

const Missao = () => {
  const itensMissao = [
    {
      titulo: "Utilidade Pública",
      descricao: "Projeto desenvolvido para servir a sociedade, sem fins lucrativos, por estudantes de TI."
    },
    {
      titulo: "Conhecimento Livre", 
      descricao: "Compartilhamos informações e ferramentas que todos têm direito de conhecer e usar."
    },
    {
      titulo: "Educação Contínua",
      descricao: "Conteúdo sempre atualizado sobre as melhores práticas de proteção de dados."
    }
  ]

  return (
    <section className={`secao ${styles.missao}`}>
      <div className="container">
        <div className={styles.cabecalhoMissao}>
          <h2 className={styles.tituloMissao}>Nossa Missão</h2>
          <p className={styles.descricaoMissao}>
            Tornar a segurança digital acessível para todos através da educação e ferramentas gratuitas.
          </p>
        </div>
        <div className={styles.gridMissao}>
          {itensMissao.map((item, index) => (
            <div key={index} className={`card card--destaque ${styles.cardMissao}`}>
              <h3 className={styles.tituloCardMissao}>{item.titulo}</h3>
              <p className={styles.textoCardMissao}>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Missao