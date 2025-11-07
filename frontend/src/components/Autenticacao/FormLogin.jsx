import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Autenticacao.module.scss'

const FormLogin = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    email: '',
    senha: ''
  })
  const [lembrarDeMim, setLembrarDeMim] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de login
    console.log('Tentativa de login:', { ...dadosFormulario, lembrarDeMim })
    
    // Redirecionar para dashboard ou admin baseado no email
    if (dadosFormulario.email.includes('admin')) {
      navigate('/admin')
    } else {
      navigate('/')
    }
  }

  return (
    <div className={styles.containerAutenticacao}>
      <div className={styles.cardAutenticacao}>
        <div className={styles.cabecalhoAutenticacao}>
          <div className={styles.logo}>
            <span className={styles.iconeLogo}></span>
            APEX
          </div>
          <h1 className={styles.tituloAutenticacao}>Acesse sua Conta</h1>
          <p className={styles.subtituloAutenticacao}>
            Entre para gerenciar seus recursos de segurança
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.formularioAutenticacao}>
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
            <label htmlFor="senha" className={styles.rotuloFormulario}>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={dadosFormulario.senha}
              onChange={handleChange}
              className={styles.inputFormulario}
              placeholder="Sua senha"
              required
            />
          </div>

          <div className={styles.opcoesFormulario}>
            <label className={styles.rotuloCheckbox}>
              <input
                type="checkbox"
                checked={lembrarDeMim}
                onChange={(e) => setLembrarDeMim(e.target.checked)}
                className={styles.checkbox}
              />
              Lembrar de mim
            </label>
            <Link to="/esqueci-senha" className={styles.linkEsqueciSenha}>
              Esqueceu a senha?
            </Link>
          </div>

          <button type="submit" className={styles.botaoEnviar}>
            Entrar na Conta
          </button>

          <div className={styles.rodapeAutenticacao}>
            <p>
              Não tem uma conta?{' '}
              <Link to="/cadastro" className={styles.linkAutenticacao}>
                Cadastre-se gratuitamente
              </Link>
            </p>
          </div>
        </form>

        <div className={styles.contasDemonstracao}>
          <h3>Contas de Demonstração:</h3>
          <div className={styles.contaDemo}>
            <strong>Usuário:</strong> usuario@exemplo.com / senha123
          </div>
          <div className={styles.contaDemo}>
            <strong>Admin:</strong> admin@apex.org / admin123
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormLogin