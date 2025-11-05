import React from 'react'
import styles from './Servicos.module.scss'

const ServicosRecursos = () => {
  const recursos = [
    {
      titulo: "Recursos Educativos Gratuitos",
      descricao: "Guias práticos, tutoriais e materiais educativas sobre segurança digital, sempre gratuitas e acessíveis.",
      itens: [
        "Guias passo a passo",
        "Tutoriais práticos", 
        "E-books e artigos",
        "Linguagem simples e clara"
      ]
    },
    {
      titulo: "Notícias e Alertas",
      descricao: "Mantenha-se informado sobre as últimas ameaças e atualizações importantes de segurança digital.",
      itens: [
        "Alertas de segurança",
        "Notícias do setor",
        "Atualizações importantes",
        "Casos educativos"
      ]
    },
    {
      titulo: "Orientação e Dúvidas",
      descricao: "Tire suas dúvidas sobre segurança digital. Estamos aqui para ajudar você a se proteger.",
      itens: [
        "Canal aberto de dúvidas",
        "Orientações personalizadas",
        "Sem custo algum",
        "Resposta dedicada"
      ]
    }
  ]

  const recursosEspeciais = [
    {
      titulo: "Informações sobre LGPD",
      descricao: "Entenda seus direitos sobre proteção de dados pessoais e como exercê-los.",
      caracteristicas: [
        "Direitos explicados",
        "Linguagem acessível", 
        "Exemplos práticos",
        "Sempre atualizado"
      ]
    },
    {
      titulo: "Materiais para Educadores",
      descricao: "Recursos para professores e educadores que querem ensinar segurança digital.",
      caracteristicas: [
        "Material didático",
        "Apresentações prontas",
        "Atividades práticas", 
        "Uso livre"
      ]
    },
    {
      titulo: "Checklist de Segurança",
      descricao: "Listas práticas para você verificar se está protegido em diferentes situações.",
      caracteristicas: [
        "Checklists práticos",
        "Fácil de seguir",
        "Para diferentes níveis",
        "Download gratuito"
      ]
    }
  ]

  return (
    <section className={`secao ${styles.recursosServicos}`}>
      <div className="container">
        <div className={styles.gridRecursos}>
          {recursos.map((recurso, index) => (
            <div key={index} className={styles.cardRecurso}>
              <h3 className={styles.tituloRecurso}>{recurso.titulo}</h3>
              <p className={styles.descricaoRecurso}>{recurso.descricao}</p>
              <ul className={styles.listaRecurso}>
                {recurso.itens.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.itemListaRecurso}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.secaoRecursosEspeciais}>
          <h2 className={styles.tituloRecursosEspeciais}>Recursos Especiais</h2>
          
          <div className={styles.gridRecursosEspeciais}>
            {recursosEspeciais.map((recurso, index) => (
              <div key={index} className={styles.cardRecursoEspecial}>
                <h3 className={styles.tituloRecursoEspecial}>{recurso.titulo}</h3>
                <p className={styles.descricaoRecursoEspecial}>{recurso.descricao}</p>
                <ul className={styles.caracteristicasRecurso}>
                  {recurso.caracteristicas.map((caracteristica, featureIndex) => (
                    <li key={featureIndex} className={styles.caracteristicaRecurso}>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.secaoPorqueGratuito}>
          <h3 className={styles.tituloPorqueGratuito}>Por Que Tudo é Gratuito?</h3>
          <p className={styles.textoPorqueGratuito}>
            Porque acreditamos que segurança digital é um direito de todos. Este é um projeto de 
            utilidade pública, criado por estudantes comprometidos em fazer a diferença na sociedade.
          </p>
          
          <div className={styles.caracteristicasGratuitas}>
            <div className={styles.caracteristicaGratuita}>
              <h4>Sem Fins Lucrativos</h4>
              <p>Projeto educacional sem interesse comercial</p>
            </div>
            <div className={styles.caracteristicaGratuita}>
              <h4>Para a Comunidade</h4>
              <p>Feito por estudantes, para todas as pessoas</p>
            </div>
            <div className={styles.caracteristicaGratuita}>
              <h4>Conhecimento Livre</h4>
              <p>Informação que todos têm direito de ver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicosRecursos