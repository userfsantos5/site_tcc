import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import Inicio from './pages/Inicio'
import SobreNos from './pages/SobreNos'
import Servicos from './pages/Servicos'
import Blog from './pages/Blog'
import Ferramentas from './pages/Ferramentas'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Administracao from './pages/Administracao'
import './App.scss';


function App() {
  return (
    <div className="app">
      <Cabecalho />
      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/admin" element={<Administracao />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  )
}

export default App