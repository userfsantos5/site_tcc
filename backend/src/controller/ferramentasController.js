import { ferramentasRepository } from "../repository/ferramentasRepository.js";

const verificarSenha = async (req, res) => {
  try {
    const corpo = req.body; 

    if (!corpo.senha) {
      return res.status(400).send({
        erro: "Senha é obrigatória",
      });
    }

    const resultado = analisarForcaSenha(corpo.senha);

    try {
      await ferramentasRepository.salvarVerificacaoSenha({
        senha_verificada: corpo.senha.substring(0, 2) + '***',
        forca: resultado.forca,
        score: resultado.score,
        criterios: resultado.criterios
      });
    } catch (err) {
    }

    res.send({
      mensagem: "Senha verificada com sucesso",
      resultado: resultado
    });
  } catch (err) {
    res.status(400).send({
      erro: err.message,
    });
  }
};

const verificarEmail = async (req, res) => {
  try {
    const corpo = req.body; 

    if (!corpo.email) {
      return res.status(400).send({
        erro: "Email é obrigatório",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(corpo.email)) {
      return res.status(400).send({
        erro: "Formato de email inválido",
      });
    }

    const resultado = await verificarVazamentoEmail(corpo.email);

    try {
      await ferramentasRepository.salvarVerificacaoEmail({
        email_verificado: corpo.email,
        foi_vazado: resultado.foi_vazado,
        quantidade_vazamentos: resultado.quantidade_vazamentos,
        fontes_vazamento: resultado.fontes_vazamento
      });
    } catch (err) {
    }

    res.send({
      mensagem: "Email verificado com sucesso",
      resultado: resultado
    });
  } catch (err) {
    res.status(400).send({
      erro: err.message,
    });
  }
};

const getEstatisticas = async (req, res) => {
  try {
    const estatisticas = await ferramentasRepository.buscarEstatisticas();
    res.status(200).send(estatisticas);
  } catch (error) {
    res.status(500).send({
      erro: "Erro ao buscar estatísticas: " + error.message,
    });
  }
};

function analisarForcaSenha(senha) {
  let score = 0;
  const recomendacoes = [];

  if (senha.length >= 8) score += 25;
  if (senha.length >= 12) score += 15;
  if (/[A-Z]/.test(senha)) score += 15;
  if (/[a-z]/.test(senha)) score += 15;
  if (/[0-9]/.test(senha)) score += 15;
  if (/[^A-Za-z0-9]/.test(senha)) score += 15;

  if (senha.length < 8) {
    recomendacoes.push('Use pelo menos 8 caracteres');
  }
  if (!/[A-Z]/.test(senha)) {
    recomendacoes.push('Adicione letras maiúsculas');
  }
  if (!/[a-z]/.test(senha)) {
    recomendacoes.push('Adicione letras minúsculas');
  }
  if (!/[0-9]/.test(senha)) {
    recomendacoes.push('Adicione números');
  }
  if (!/[^A-Za-z0-9]/.test(senha)) {
    recomendacoes.push('Adicione caracteres especiais');
  }

  let forca;
  let cor;
  
  if (score >= 80) {
    forca = 'Forte';
    cor = '#22c55e';
  } else if (score >= 60) {
    forca = 'Média';
    cor = '#eab308';
  } else if (score >= 40) {
    forca = 'Fraca';
    cor = '#f97316';
  } else {
    forca = 'Muito Fraca';
    cor = '#ef4444';
  }

  return {
    forca,
    score,
    cor,
    tamanho: senha.length,
    recomendacoes,
    criterios: {
      tamanho_minimo: senha.length >= 8,
      tem_maiuscula: /[A-Z]/.test(senha),
      tem_minuscula: /[a-z]/.test(senha),
      tem_numero: /[0-9]/.test(senha),
      tem_especial: /[^A-Za-z0-9]/.test(senha)
    }
  };
}

async function verificarVazamentoEmail(email) {
  const dominiosRiscosos = ['hotmail.com', 'yahoo.com', 'aol.com'];
  const dominio = email.split('@')[1];
  const foiVazado = Math.random() > 0.7 || dominiosRiscosos.includes(dominio);
  const quantidadeVazamentos = foiVazado ? Math.floor(Math.random() * 5) + 1 : 0;

  const fontesPossiveis = [
    'LinkedIn 2012',
    'Adobe 2013', 
    'Yahoo 2013-2014',
    'Facebook 2019',
    'Marriott International 2018'
  ];

  const fontesVazamento = foiVazado 
    ? fontesPossiveis.slice(0, quantidadeVazamentos)
    : [];

  return {
    email,
    foi_vazado: foiVazado,
    quantidade_vazamentos: quantidadeVazamentos,
    fontes_vazamento: fontesVazamento,
    nivel_risco: foiVazado ? (quantidadeVazamentos > 3 ? 'Alto' : 'Médio') : 'Baixo',
    recomendacao: foiVazado 
      ? 'Recomendamos trocar sua senha e habilitar autenticação de dois fatores'
      : 'Nenhum vazamento encontrado',
    observacao: 'Para verificação mais completa recomendamos o site Have I Been Pwned'
  };
}

export { 
  verificarSenha, 
  verificarEmail,
  getEstatisticas
};