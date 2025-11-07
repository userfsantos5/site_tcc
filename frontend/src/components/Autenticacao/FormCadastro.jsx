import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Autenticacao.module.scss'

const FormCadastro = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    tipoUsuario: 'usuario'
  })
  const [aceitarTermos, setAceitarTermos] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (dadosFormulario.senha !== dadosFormulario.confirmarSenha) {
      alert('As senhas não coincidem!')
      return
    }

    if (!aceitarTermos) {
      alert('Você deve aceitar os termos de uso!')
      return
    }

    // Simulação de cadastro
    console.log('Cadastro:', dadosFormulario)
    alert('Conta criada com sucesso!')
    navigate('/login')
  }

  return (
    <div className={styles.containerAutenticacao}>
      <div className={styles.cardAutenticacao}>
        <div className={styles.cabecalhoAutenticacao}>
          <div className={styles.logo}>
            <span className={styles.iconeLogo}></span>
            APEX
          </div>
          <h1 className={styles.tituloAutenticacao}>Crie sua Conta</h1>
          <p className={styles.subtituloAutenticacao}>
            Junte-se à comunidade de segurança digital
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.formularioAutenticacao}>
          <div className={styles.grupoFormulario}>
            <label htmlFor="nome" className={styles.rotuloFormulario}>Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={dadosFormulario.nome}
              onChange={handleChange}
              className={styles.inputFormulario}
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className={styles.grupoFormulario}>
            <label htmlFor="email" className={styles.rotuloFormulario}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={dadosFormulario.email}
              onChange={handleChange}
              className={styles.inputFormulario}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className={styles.grupoFormulario}>
            <label htmlFor="tipoUsuario" className={styles.rotuloFormulario}>Tipo de Conta</label>
            <select
              id="tipoUsuario"
              name="tipoUsuario"
              value={dadosFormulario.tipoUsuario}
              onChange={handleChange}
              className={styles.selectFormulario}
            >
              <option value="usuario">Usuário Padrão</option>
              <option value="educador">Educador</option>
              <option value="pesquisador">Pesquisador</option>
            </select>
          </div>

          <div className={styles.grupoFormulario}>
            <label htmlFor="senha" className={styles.rotuloFormulario}>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={dadosFormulario.senha}
              onChange={handleChange}
              className={styles.inputFormulario}
              placeholder="Mínimo 8 caracteres"
              required
              minLength="8"
            />
          </div>

          <div className={styles.grupoFormulario}>
            <label htmlFor="confirmarSenha" className={styles.rotuloFormulario}>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={dadosFormulario.confirmarSenha}
              onChange={handleChange}
              className={styles.inputFormulario}
              placeholder="Digite a senha novamente"
              required
            />
          </div>

          <div className={styles.grupoTermos}>
            <label className={styles.rotuloCheckbox}>
              <input
                type="checkbox"
                checked={aceitarTermos}
                onChange={(e) => setAceitarTermos(e.target.checked)}
                className={styles.checkbox}
                required
              />
              Eu concordo com os{' '}
              <Link to="/termos" className={styles.linkTermos}>
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link to="/privacidade" className={styles.linkTermos}>
                Política de Privacidade
              </Link>
            </label>
          </div>

          <button 
            type="submit" 
            className={styles.botaoEnviar}
            disabled={!aceitarTermos}
          >
            Criar Conta Gratuita
          </button>

          <div className={styles.rodapeAutenticacao}>
            <p>
              Já tem uma conta?{' '}
              <Link to="/login" className={styles.linkAutenticacao}>
                Faça login aqui
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormCadastro