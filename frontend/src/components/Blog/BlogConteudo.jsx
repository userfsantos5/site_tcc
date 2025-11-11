import React, { useState } from 'react'
import styles from './Blog.module.scss'

const BlogConteudo = () => {
  const [termoBusca, setTermoBusca] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

  const categorias = ['Todos', 'E-Books', 'Artigos']
  
  const postsBlog = [
    {
      id: 1,
      titulo: "Tramontes",
      categoria: "Artigos",
      descricao: "Guia completo sobre proteção de dados pessoais",
      data: "2024-01-15"
    },
    {
      id: 2,
      titulo: "Venticulares de Força de Serviço",
      categoria: "E-Books",
      descricao: "Como criar senhas seguras e gerenciá-las",
      data: "2024-01-10"
    },
    
  ]

  const postsFiltrados = postsBlog.filter(post => {
    const correspondeBusca = post.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
                         post.descricao.toLowerCase().includes(termoBusca.toLowerCase())
    const correspondeCategoria = categoriaSelecionada === 'Todos' || post.categoria === categoriaSelecionada
    return correspondeBusca && correspondeCategoria
  })

  return (
    <section className={`secao ${styles.conteudoBlog}`}>
      <div className="container">
        {/* Barra de Pesquisa e Filtros */}
        <div className={styles.filtrosBlog}>
          <div className={styles.caixaBusca}>
            <input
              type="text"
              placeholder="Buscar conteúdo educativo..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className={styles.inputBusca}
            />
          </div>
          
          <div className={styles.abasFiltro}>
            <span className={styles.rotuloFiltro}>Recursos Educativos</span>
          </div>

          <div className={styles.filtroCategoria}>
            <span className={styles.rotuloCategoria}>Categoria:</span>
            <div className={styles.botoesCategoria}>
              {categorias.map(categoria => (
                <button
                  key={categoria}
                  className={`${styles.botaoCategoria} ${
                    categoriaSelecionada === categoria ? styles.botaoCategoriaAtivo : ''
                  }`}
                  onClick={() => setCategoriaSelecionada(categoria)}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contador de Resultados */}
        <div className={styles.infoResultados}>
          <p>{postsFiltrados.length} recursos encontrados</p>
        </div>

        {/* Grid de Posts */}
        <div className={styles.gridBlog}>
          {postsFiltrados.map(post => (
            <article key={post.id} className={styles.cardBlog}>
              <div className={styles.cabecalhoCardBlog}>
                <span className={styles.categoriaBlog}>{post.categoria}</span>
                <span className={styles.dataBlog}>
                  {new Date(post.data).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <h3 className={styles.tituloCardBlog}>{post.titulo}</h3>
              <p className={styles.descricaoCardBlog}>{post.descricao}</p>
              <button className={styles.botaoLerMais}>Ler Mais</button>
            </article>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {postsFiltrados.length === 0 && (
          <div className={styles.semResultados}>
            <p>Nenhum recurso encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogConteudo