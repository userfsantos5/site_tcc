import React from 'react'
import Hero from '../components/Hero/Hero'
import Missao from '../components/Missao/Missao'
import ServicosRecursos from '../components/Servicos/ServicosRecursos'
import CTAServicos from '../components/Servicos/CTAServicos'

const Inicio = () => {
  return (
    <>
      <Hero />
      <Missao />
      <ServicosRecursos />
      <CTAServicos />
    </>
  )
}

export default Inicio