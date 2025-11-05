import { useState, useEffect } from 'react'

export const useAutenticacao = () => {
  const [usuario, setUsuario] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    // Verificar se há usuário logado no localStorage
    const usuarioSalvo = localStorage.getItem('usuarioApex')
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo))
    }
    setCarregando(false)
  }, [])

  const login = (dadosLogin) => {
    return new Promise((resolve, reject) => {
      setCarregando(true)
      
      // Simulação de autenticação
      setTimeout(() => {
        if (dadosLogin.email && dadosLogin.senha) {
          const usuarioLogado = {
            id: 1,
            nome: dadosLogin.email.includes('admin') ? 'Administrador' : 'Usuário',
            email: dadosLogin.email,
            tipo: dadosLogin.email.includes('admin') ? 'admin' : 'usuario',
            dataCadastro: new Date().toISOString()
          }
          
          setUsuario(usuarioLogado)
          localStorage.setItem('usuarioApex', JSON.stringify(usuarioLogado))
          resolve(usuarioLogado)
        } else {
          reject(new Error('Email e senha são obrigatórios'))
        }
        setCarregando(false)
      }, 1000)
    })
  }

  const cadastrar = (dadosCadastro) => {
    return new Promise((resolve, reject) => {
      setCarregando(true)
      
      // Simulação de cadastro
      setTimeout(() => {
        if (dadosCadastro.nome && dadosCadastro.email && dadosCadastro.senha) {
          if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
            setCarregando(false)
            reject(new Error('As senhas não coincidem'))
            return
          }

          const novoUsuario = {
            id: Date.now(),
            nome: dadosCadastro.nome,
            email: dadosCadastro.email,
            tipo: dadosCadastro.tipoUsuario || 'usuario',
            dataCadastro: new Date().toISOString()
          }
          
          setUsuario(novoUsuario)
          localStorage.setItem('usuarioApex', JSON.stringify(novoUsuario))
          resolve(novoUsuario)
        } else {
          reject(new Error('Todos os campos são obrigatórios'))
        }
        setCarregando(false)
      }, 1500)
    })
  }

  const logout = () => {
    setUsuario(null)
    localStorage.removeItem('usuarioApex')
  }

  const isAdmin = () => {
    return usuario?.tipo === 'admin'
  }

  const isAuthenticated = () => {
    return usuario !== null
  }

  return {
    usuario,
    carregando,
    login,
    cadastrar,
    logout,
    isAdmin,
    isAuthenticated
  }
}