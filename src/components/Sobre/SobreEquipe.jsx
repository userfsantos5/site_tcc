import React from 'react'
import styles from './Sobre.module.scss'

const SobreEquipe = () => {
  const estatisticasEquipe = [
    {
      titulo: "Projeto TCC",
      descricao: "Desenvolvido como Trabalho de Conclusão de Curso em Técnico de Informática"
    },
    {
      titulo: "Projeto Real", 
      descricao: "Vai além da sala de aula - criado para servir a comunidade"
    },
    {
      titulo: "Utilidade Pública",
      descricao: "Todo gratuito e acessível para toda a sociedade"
    }
  ]

  const compromissos = [
    {
      titulo: "Sempre Gratuito",
      descricao: "Nunca cobraremos por informações ou recursos"
    },
    {
      titulo: "Sempre Atualizado", 
      descricao: "Conteúdo revisado e mantido constantemente"
    },
    {
      titulo: "Sempre Para Todas",
      descricao: "Acessível e compreensível para qualquer pessoa"
    }
  ]

  return (
    <section className={`secao ${styles.sobreEquipe}`}>
      <div className="container">
        <div className={styles.cabecalhoEquipe}>
          <h2 className={styles.tituloEquipe}>Quem Está Por Trás</h2>
          <p className={styles.subtituloEquipe}>
            Somos um grupo de estudantes do curso Técnico em informática que decidiu usar nosso 
            conhecimento para fazer diferença.
          </p>
          <p className={styles.textoEquipe}>
            Este projeto representa nosso compromisso com a sociedade: aplicar o que aprendemos 
            para criar algo que realmente ajude as pessoas no dia a dia.
          </p>
        </div>

        <div className={styles.gridEstatisticas}>
          {estatisticasEquipe.map((estatistica, index) => (
            <div key={index} className={styles.cardEstatistica}>
              <h3 className={styles.tituloEstatistica}>{estatistica.titulo}</h3>
              <p className={styles.descricaoEstatistica}>{estatistica.descricao}</p>
            </div>
          ))}
        </div>

        <div className={styles.secaoCompromisso}>
          <h2 className={styles.tituloCompromisso}>Nosso Compromisso</h2>
          <p className={styles.textoCompromisso}>
            Continuaremos atualizando e expandindo nosso conteúdo para manter você sempre protegido. 
            Este é apenas o começo de uma jornada para tornar a internet um lugar mais seguro para todos.
          </p>
          
          <div className={styles.gridCompromissos}>
            {compromissos.map((compromisso, index) => (
              <div key={index} className={styles.cardCompromisso}>
                <h3 className={styles.tituloCardCompromisso}>{compromisso.titulo}</h3>
                <p className={styles.textoCardCompromisso}>{compromisso.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreEquipe