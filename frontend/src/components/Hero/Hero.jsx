import React from 'react';
import styles from './Hero.module.scss'; // Importe o seu CSS Module

// Ficheiro: Hero.jsx

// (Linhas 1-14, que são imports e a lógica do componente)
const Hero = () => {
    return (
        // Somente o JSX da seção Hero deve estar aqui
        <section className={styles.hero}> 
            <div className="container">
                {/* Conteúdo da Hero Section */}
            </div>
        </section>
    );
};

export default Hero; 
// NADA DEVE VIR DEPOIS DO 'export default Hero;'




<body>

    <header>
        <div class="container">
            <div class="header-content">
                                <div class="logo">
                    <a href="/">                         APEX
                    </a>
                </div>
                <div class="project-info">Projeto de equipe · Gratuito</div>
            </div>
        </div>
    </header>

        <section class="hero">
        <div class="container">
                        <h1>O Ápice em Segurança de Dados</h1>
            <h2>APEX</h2>             <p>Defendemos seus direitos digitais oferecendo ferramentas, informações e conhecimento gratuito para todos.</p>
            <div class="botoes">
                <a href="#recursos" class="botao primario">Explorar Recursos</a>
                <a href="#sobre" class="botao secundario">Conhecer a Apex</a>
            </div>
        </div>
    </section>


    <section class="missao">
        <div class="container">
            <h2>Nossa Missão</h2>
            <p>Tomar a segurança digital acessível para todos através da educação e ferramentas gratuitas.</p>
            <span class="utilidade">Utilidade Pública</span>
        </div>
    </section>

  
    <section class="quem-somos" id="sobre">
        <div class="container">
            <h2>Quem Somos</h2>
            <p>Somos um grupo de estudantes de Recursos de Informática que acredita que a segurança digital é um direito fundamental de todos. Este projeto vai além de um simples Trabalho de Conclusão de Curso - é uma ferramenta de utilização pública que ajuda pessoas a se protegerem no mundo digital.</p>
            
                        <h4>100% gratuito e acessível!</h4> 
            <ul>
                <li>Sem burocracias ou barreiras</li>
                <li>Foco em educação e prevenção</li>
                <li>Comprometidos com a comunidade</li>
            </ul>
        </div>
    </section>

  
    <section class="valores">
        <div class="container">
            <h2>Nossos Valores</h2>
            <div class="valores-grid">
                <div class="valor-card">
                                        <h4>Utilidade Pública</h4>
                    <p>Projeto desenvolvido para servir a sociedade, sem fins lucrativos, por estudantes de TI.</p>
                </div>
                <div class="valor-card">
                    <h4>Conhecimento Livre</h4>
                    <p>Compartilhamos informações e ferramentas que todos têm direito de conhecer e usar.</p>
                </div>
                <div class="valor-card">
                    <h4>Educação Contínua</h4>
                    <p>Conteúdo sempre atualizado sobre as melhores práticas de proteção de dados.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="recursos" id="recursos">
        <div class="container">
            <h2>Recursos Educativos Gratuitos</h2>
            <p>Guias práticos, tutoriais e materiais educativos sobre segurança digital, sempre gratuitos e acessíveis.</p>
            
            <div class="recursos-grid">
                <div class="recurso-card">
                                        <h3>Artigos e E-books</h3> 
                    <p>Material educativo completo para sua segurança digital</p>
                    <ul class="lista-check">
                        <li>Guias passo a passo</li>
                        <li>Tutoriais práticos</li>
                        <li>E-books e artigos</li>
                        <li>Linguagem simples e clara</li>
                    </ul>
                </div>
                <div class="recurso-card">
                    <h3>Notícias e Alertas</h3>
                    <p>Mantenha-se informado sobre as últimas ameaças digitais</p>
                    <ul class="lista-check">
                        <li>Alertas de segurança</li>
                        <li>Notícias do setor</li>
                        <li>Atualizações importantes</li>
                        <li>Casos educativos</li>
                    </ul>
                </div>
                <div class="recurso-card">
                    <h3>Orientacao e Dúvidas</h3>
                    <p>Tire suas dúvidas sobre segurança digital com nossa equipe</p>
                    <ul class="lista-check">
                        <li>Canal aberto de dúvidas</li>
                        <li>Orientações personalizadas</li>
                        <li>Sem custo algum</li>
                        <li>Resposta dedicada</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    <section class="especiais">
        <div class="container">
            <h2>Recursos Especiais</h2>
            
            <div class="especiais-grid">
                <div class="especial-card">
                                        <h3>LGPD Explicada</h3> 
                    <p>Entenda seus direitos sobre proteção de dados pessoais</p>
                    <ul class="lista-check">
                        <li>Direitos explicados</li>
                        <li>Linguagem acessível</li>
                        <li>Exemplos práticos</li>
                        <li>Sempre atualizado</li>
                    </ul>
                </div>
                <div class="especial-card">
                    <h3>Para Educadores</h3>
                    <p>Recursos para professores ensinarem segurança digital</p>
                    <ul class="lista-check">
                        <li>Material didático</li>
                        <li>Apresentações prontas</li>
                        <li>Atividades práticas</li>
                        <li>Uso livre</li>
                    </ul>
                </div>
                <div class="especial-card">
                    <h3>Checklist de Segurança</h3>
                    <p>Listas práticas para verificar sua proteção digital</p>
                    <ul class="lista-check">
                        <li>Checklists práticos</li>
                        <li>Fácil de seguir</li>
                        <li>Para diferentes níveis</li>
                        <li>Download gratuito</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

   
    <section class="porque-gratuito">
        <div class="container">
            <h2>Por Que Tudo é Gratuito?</h2>
            <p>Porque acreditamos que segurança digital é um direito de todos. Este projeto é desenvolvido sem fins lucrativos, por estudantes comprometidos em fazer a diferença na sociedade.</p>
        </div>
    </section>


    <section class="cta">
        <div class="container">
            <h2>Pronto Para Começar?</h2>
            <p>Explore nossos recursos e comece sua jornada para uma vida digital mais segura.</p>
            <a href="#recursos" class="botao">Começar Agora</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                                <div class="footer-col">
                    <h3>APEX</h3>
                    <p>O ápice em segurança de dados. Projeto de utilidade pública desenvolvido por estudantes para proteger você no mundo digital.</p>
                </div>
                <nav class="footer-col">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="#sobre">Quem Somos</a></li>
                        <li><a href="#recursos">Recursos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
                <nav class="footer-col">
                    <h3>Recursos</h3>
                    <ul>
                        <li><a href="#">Guias Práticos</a></li>
                        <li><a href="#">Tutoriais</a></li>
                        <li><a href="#">LGPD</a></li>
                        <li><a href="#">Checklists</a></li>
                    </ul>
                </nav>
                <nav class="footer-col">
                    <h3>Projeto</h3>
                    <ul>
                        <li><a href="#">TCC - Técnico em Informática</a></li>
                        <li><a href="#">Equipe</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-bottom">
                                <small>&copy; 2024 APEX - Segurança de Dados. Todos os direitos reservados.</small>
            </div>
        </div>
    </footer>
</body>
