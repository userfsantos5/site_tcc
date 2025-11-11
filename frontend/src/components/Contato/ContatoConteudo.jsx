import React, { useState } from 'react'
import styles from './Contato.module.scss'

const ContatoConteudo = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  const [enviando, setEnviando] = useState(false)

  const handleChange = (e) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)

    try {
      const contatoResponse = await fetch('http://localhost:3000/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: dadosFormulario.nome,
          email: dadosFormulario.email,
          assunto: dadosFormulario.assunto,
          mensagem: dadosFormulario.mensagem
        }),
      })

      if (contatoResponse.ok) {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.')
        setDadosFormulario({ nome: '', email: '', assunto: '', mensagem: '' })
      } else {
        const erro = await contatoResponse.json()
        throw new Error(erro.erro || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert(error.message || 'Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  const informacoesContato = [
    {
      icone: '📧',
      titulo: 'Email',
      detalhes: [
        'contact@apex.org',
        'suporte@apex.org'
      ]
    },
    {
      icone: '📞',
      titulo: 'Telefone',
      detalhes: [
        '(11) 9999-9999'
      ]
    },
    {
      icone: '📍',
      titulo: 'Endereço',
      detalhes: [
        'Av. Coronel Octaviano de Freitas Costa, 463 - Socorro',
        'São Paulo - SP',
        '01510-100'
      ]
    }
  ]

  return (
    <section className={`secao ${styles.conteudoContato}`}>
      <div className="container">
        <div className={styles.gridContato}>
          {/* Informações de Contato */}
          <div className={styles.infoContato}>
            <h2 className={styles.tituloInfoContato}>Informações de Contato</h2>
            <p className={styles.descricaoInfoContato}>
              Entre em contato conosco através dos canais abaixo. Respondemos o mais rápido possível.
            </p>
            
            <div className={styles.itensContato}>
              {informacoesContato.map((item, index) => (
                <div key={index} className={styles.itemContato}>
                  <div className={styles.iconeContato}>{item.icone}</div>
                  <div className={styles.detalhesContato}>
                    <h3 className={styles.tituloItemContato}>{item.titulo}</h3>
                    {item.detalhes.map((detalhe, detailIndex) => (
                      <p key={detailIndex} className={styles.detalheContato}>{detalhe}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Horário de Atendimento */}
            <div className={styles.horarioAtendimento}>
              <h3 className={styles.tituloHorarioAtendimento}>Horário de Atendimento</h3>
              <div className={styles.listaHorarios}>
                <div className={styles.itemHorario}>
                  <span>Segunda a Sexta</span>
                  <span>9h às 18h</span>
                </div>
                <div className={styles.itemHorario}>
                  <span>Sábado</span>
                  <span>9h às 12h</span>
                </div>
                <div className={styles.itemHorario}>
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className={styles.secaoFormularioContato}>
            <h2 className={styles.tituloFormulario}>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className={styles.formularioContato}>
              <div className={styles.grupoFormulario}>
                <label htmlFor="nome" className={styles.rotuloFormulario}>Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={dadosFormulario.nome}
                  onChange={handleChange}
                  className={styles.inputFormulario}
                  required
                  disabled={enviando}
                />
              </div>

              <div className={styles.grupoFormulario}>
                <label htmlFor="email" className={styles.rotuloFormulario}>Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={dadosFormulario.email}
                  onChange={handleChange}
                  className={styles.inputFormulario}
                  required
                  disabled={enviando}
                />
              </div>

              <div className={styles.grupoFormulario}>
                <label htmlFor="assunto" className={styles.rotuloFormulario}>Assunto:</label>
                <select
                  id="assunto"
                  name="assunto"
                  value={dadosFormulario.assunto}
                  onChange={handleChange}
                  className={styles.selectFormulario}
                  required
                  disabled={enviando}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Dúvida sobre segurança">Dúvida sobre segurança</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Problema técnico">Problema técnico</option>
                  <option value="Proposta de parceria">Proposta de parceria</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className={styles.grupoFormulario}>
                <label htmlFor="mensagem" className={styles.rotuloFormulario}>Mensagem:</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={dadosFormulario.mensagem}
                  onChange={handleChange}
                  rows="6"
                  className={styles.textareaFormulario}
                  required
                  disabled={enviando}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`botao botao--primario ${styles.botaoEnviar}`}
                disabled={enviando}
              >
                {enviando ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className={styles.secaoFAQ}>
          <h2 className={styles.tituloFAQ}>Perguntas Frequentes</h2>
          <div className={styles.gridFAQ}>
            <div className={styles.itemFAQ}>
              <h3>Quanto tempo leva para receber uma resposta?</h3>
              <p>Respondemos todos os emails em até 24 horas durante dias úteis.</p>
            </div>
            <div className={styles.itemFAQ}>
              <h3>Vocês oferecem suporte técnico?</h3>
              <p>Sim, oferecemos orientação sobre segurança digital e uso de nossas ferramentas.</p>
            </div>
            <div className={styles.itemFAQ}>
              <h3>Posso sugerir novos conteúdos?</h3>
              <p>Claro! Adoramos receber sugestões da comunidade para melhorar nosso conteúdo.</p>
            </div>
            <div className={styles.itemFAQ}>
              <h3>Os serviços são realmente gratuitos?</h3>
              <p>Sim, todos nossos recursos e ferramentas são 100% gratuitos, sem custos ocultos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContatoConteudo