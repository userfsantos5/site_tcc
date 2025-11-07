import React, { useState } from 'react'
import styles from './Ferramentas.module.scss'

const FerramentasGrid = () => {
  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')

  const ferramentasSeguranca = [
    {
      nome: "Verificador de Senha",
      descricao: "Verifique a força da sua senha",
      categoria: "Segurança",
      icone: "",
      componente: (
        <div className={styles.componenteFerramenta}>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.inputFerramenta}
          />
          <div className={styles.forcaSenha}>
            <div className={styles.barraForca}></div>
            <span className={styles.textoForca}>Força da senha: Média</span>
          </div>
          <button className={styles.botaoFerramenta}>Verificar Senha</button>
        </div>
      )
    },
    {
      nome: "Vazamento de Dados",
      descricao: "Verifique se seu email foi vazado",
      categoria: "Monitoramento",
      icone: "📧",
      componente: (
        <div className={styles.componenteFerramenta}>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputFerramenta}
          />
          <div className={styles.notaFerramenta}>
            <strong>Nota:</strong> Para verificação mais completa recomendamos o site{' '}
            <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer">
              Have I Been Pwned
            </a>
          </div>
          <button className={styles.botaoFerramenta}>Verificar Email</button>
        </div>
      )
    },
    {
      nome: "Virus Total",
      descricao: "Analisar arquivos e URLs",
      categoria: "Análise",
      icone: "🛡️",
      componente: (
        <div className={styles.componenteFerramenta}>
          <input
            type="text"
            placeholder="Cole URL ou faça upload de arquivo"
            className={styles.inputFerramenta}
          />
          <button className={styles.botaoFerramenta}>Analisar</button>
        </div>
      )
    },
    {
      nome: "Privacy Badger",
      descricao: "Bloqueador de rastreadores",
      categoria: "Privacidade",
      icone: "🦡",
      componente: (
        <div className={styles.componenteFerramenta}>
          <p className={styles.descricaoFerramenta}>
            Extensão para navegador que bloqueia rastreadores invisíveis.
          </p>
          <button className={styles.botaoFerramenta}>Instalar Extensão</button>
        </div>
      )
    },
    {
      nome: "Bitwarden",
      descricao: "Gerenciador de senhas",
      categoria: "Senhas",
      icone: "🗝️",
      componente: (
        <div className={styles.componenteFerramenta}>
          <p className={styles.descricaoFerramenta}>
            Gerenciador de senhas gratuito e de código aberto.
          </p>
          <button className={styles.botaoFerramenta}>Baixar Bitwarden</button>
        </div>
      )
    },
    {
      nome: "Analisador de Privacidade",
      descricao: "Analise sua privacidade no navegador",
      categoria: "Privacidade",
      icone: "🔍",
      componente: (
        <div className={styles.componenteFerramenta}>
          <p className={styles.descricaoFerramenta}>
            Verifique quais informações seu navegador está compartilhando.
          </p>
          <button className={styles.botaoFerramenta}>Iniciar Análise</button>
        </div>
      )
    }
  ]

  const ferramentasRecomendadas = [
    {
      nome: "Ferramentas Externas",
      descricao: "Ferramentas recomendadas para segurança",
      ferramentas: [
        "Have I Been Pwned - Verificar vazamentos",
        "VirusTotal - Análise de arquivos",
        "Privacy Badger - Bloqueador de rastreadores",
        "Bitwarden - Gerenciador de senhas"
      ]
    }
  ]

  return (
    <section className={`secao ${styles.gridFerramentas}`}>
      <div className="container">
        {/* Ferramentas Principais */}
        <div className={styles.secaoFerramentas}>
          <h2 className={styles.tituloSecao}>Nossas Ferramentas</h2>
          <div className={styles.containerFerramentas}>
            {ferramentasSeguranca.map((ferramenta, index) => (
              <div key={index} className={styles.cardFerramenta}>
                <div className={styles.cabecalhoFerramenta}>
                  <span className={styles.iconeFerramenta}>{ferramenta.icone}</span>
                  <div>
                    <h3 className={styles.nomeFerramenta}>{ferramenta.nome}</h3>
                    <p className={styles.descricaoFerramenta}>{ferramenta.descricao}</p>
                    <span className={styles.categoriaFerramenta}>{ferramenta.categoria}</span>
                  </div>
                </div>
                {ferramenta.componente}
              </div>
            ))}
          </div>
        </div>

        {/* Ferramentas Recomendadas */}
        <div className={styles.secaoRecomendadas}>
          <h2 className={styles.tituloSecao}>Ferramentas Recomendadas</h2>
          <div className={styles.gridRecomendadas}>
            {ferramentasRecomendadas.map((secao, index) => (
              <div key={index} className={styles.cardRecomendada}>
                <h3 className={styles.tituloRecomendada}>{secao.nome}</h3>
                <p className={styles.descricaoRecomendada}>{secao.descricao}</p>
                <ul className={styles.listaRecomendada}>
                  {secao.ferramentas.map((ferramenta, toolIndex) => (
                    <li key={toolIndex} className={styles.itemRecomendada}>
                      {ferramenta}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Informação do Projeto */}
        <div className={styles.infoProjeto}>
          <h3>Projeto TCC 2024/2025</h3>
          <p>
            Desenvolvido como Trabalho de Conclusão de Curso em Técnico de Informática. 
            Todas as ferramentas são gratuitas e de código aberto.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FerramentasGrid