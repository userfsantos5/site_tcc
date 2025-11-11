// Ficheiro: frontend/src/components/Rodape/Rodape.jsx

import React from 'react';
// Importa o CSS Module com a formatação de colunas
import styles from './Rodape.module.scss'; 

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            {/* O "container" pode ser uma classe global se estiver em App.scss,
                ou pode ser adicionada ao Rodape.module.scss */}
            <div className="container"> 
                
                {/* 1. Área de Colunas (Layout Horizontal) */}
                <div className={styles.footerContent}>
                    
                    {/* Coluna 1: Logo e Descrição */}
                    <div className={styles.footerCol}>
                        <div className={styles.logoArea}>
                            {/* Você precisará importar e usar sua logo aqui (ainda um problema em aberto) */}
                            {/* Exemplo: <img src={logoApex} alt="APEX" className={styles.logoImg} /> */}
                            <h3>APEX</h3>
                            <p>O ápice em segurança de dados. Projeto de utilidade pública desenvolvido por estudantes para proteger você no mundo digital.</p>
                        </div>
                    </div>
                    
                    {/* Coluna 2: Navegação */}
                    <nav className={styles.footerCol}>
                        <h3>Navegação</h3>
                        <ul>
                            <li><a href="/">Início</a></li>
                            <li><a href="#sobre">Quem Somos</a></li>
                            <li><a href="#recursos">Recursos</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                    
                    {/* Coluna 3: Recursos */}
                    <nav className={styles.footerCol}>
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">Guias Práticos</a></li>
                            <li><a href="#">Tutoriais</a></li>
                            <li><a href="#">LGPD</a></li>
                            <li><a href="#">Checklists</a></li>
                        </ul>
                    </nav>
                    
                    {/* Coluna 4: Projeto */}
                    <nav className={styles.footerCol}>
                        <h3>Projeto</h3>
                        <ul>
                            <li><a href="#">TCC - Técnico em Informática</a></li>
                            <li><a href="#">Equipe</a></li>
                            <li><a href="#">GitHub</a></li>
                        </ul>
                    </nav>
                    
                </div> {/* Fim de footerContent */}

                {/* 2. Área de Direitos Autorais */}
                <div className={styles.footerBottom}>
                    <small>&copy; 2024 APEX - Segurança de Dados. Todos os direitos reservados.</small>
                </div>
            </div> {/* Fim de container */}
        </footer>
    );
};

export default Rodape;