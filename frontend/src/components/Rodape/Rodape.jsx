import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Rodape.module.scss'

const Rodape = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className={styles.rodape}>
      <div className="container">
        <div className={styles.conteudoRodape}>
          <div className={styles.secaoRodape}>
            <div className={styles.logo}>
              <span className={styles.iconeLogo}></span>
              Apex
            </div>
            <p className={styles.descricaoRodape}>
              O ápice em segurança de dados. Projeto de utilidade pública criado por estudantes para proteger você no mundo digital.
            </p>
          </div>

          <div className={styles.secaoRodape}>
            <h4 className={styles.tituloRodape}>Navegação</h4>
            <div className={styles.linksRodape}>
              <Link to="/" className={styles.linkRodape}>Início</Link>
              <Link to="/sobre" className={styles.linkRodape}>Sobre Nós</Link>
              <Link to="/servicos" className={styles.linkRodape}>Serviços</Link>
              <Link to="/blog" className={styles.linkRodape}>Blog</Link>
              <Link to="/ferramentas" className={styles.linkRodape}>Ferramentas</Link>
              <Link to="/contato" className={styles.linkRodape}>Contato</Link>
            </div>
          </div>

          <div className={styles.secaoRodape}>
            <h4 className={styles.tituloRodape}>Recursos</h4>
            <div className={styles.linksRodape}>
              <a href="#" className={styles.linkRodape}>Guias Práticos</a>
              <a href="#" className={styles.linkRodape}>Tutoriais</a>
              <a href="#" className={styles.linkRodape}>E-Books</a>
              <a href="#" className={styles.linkRodape}>Notícias</a>
            </div>
          </div>

          <div className={styles.secaoRodape}>
            <h4 className={styles.tituloRodape}>Projeto</h4>
            <div className={styles.infoRodape}>
              <p>TCC - Técnico em Informática</p>
              <p>Sem fins lucrativos</p>
              <p>100% gratuito</p>
              <p>Utilidade pública</p>
            </div>
          </div>
        </div>

        <div className={styles.rodapeInferior}>
          <p className={styles.direitosAutorais}>
            © {anoAtual} Apex - O Ápice em Segurança. Projeto de utilidade pública.
          </p>
          <p className={styles.creditos}>
            Desenvolvido por estudantes de Técnico em Informática • Comprometidos com sua segurança digital
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Rodape