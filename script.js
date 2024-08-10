const openChatBtn = document.getElementById('openChatBtn');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatBtn = document.getElementById('closeChatBtn');
const inputUsuario = document.getElementById('entrada-usuario');
const botaoEnviar = document.getElementById('botao-enviar');
const mensagensContainer = document.getElementById('mensagens');

let emQuiz = false; 
let perguntasQuiz = [
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        resposta: "júpiter"
    },
    {
        pergunta: "Quantas galáxias existem no universo observável?",
        resposta: "dois trilhões"
    },
    {
        pergunta: "Qual planeta é conhecido como o Planeta Vermelho?",
        resposta: "marte"
    },
    {
        pergunta: "Qual é o nome da nossa galáxia?",
        resposta: "via láctea"
    },
    {
        pergunta: "Qual é o astro mais próximo da Terra?",
        resposta: "sol"
    },
    {
        pergunta: "Qual planeta é conhecido por ter anéis?",
        resposta: "saturno"
    },
    {
        pergunta: "Qual é a maior lua de Saturno?",
        resposta: "titã"
    },
    {
        pergunta: "Qual o satélite natural da terra?",
        resposta: "lua"
    },
    {
        pergunta: "Quantos planetas existem no sistema solar?",
        resposta: "oito"
    },
    {
        pergunta: "Qual é a temperatura média da superfície da Terra?",
        resposta: "15 graus celsius"
    }
];

let perguntaAtual = 0;
let acertos = 0; 

openChatBtn.addEventListener('click', () => {
    chatbotModal.style.display = 'flex';
    mensagemInicial();
});

closeChatBtn.addEventListener('click', () => {
    limparMensagens();
    chatbotModal.style.display = 'none';
    emQuiz = false; 
    perguntaAtual = 0; 
    acertos = 0; 
});

botaoEnviar.addEventListener('click', () => {
    const entradaUsuario = inputUsuario.value.trim();
    if (entradaUsuario) {
        adicionarMensagem(entradaUsuario, 'mensagem-usuario'); 
        inputUsuario.value = ''; 
        if (emQuiz) {
            verificarResposta(entradaUsuario); 
        } else {
            respostaBot(entradaUsuario); 
        }
    }
});

function limparMensagens() {
    mensagensContainer.innerHTML = '';
}

function adicionarMensagem(texto, classe) {
    const elementoMensagem = document.createElement('div');
    elementoMensagem.className = `mensagem ${classe}`;
    elementoMensagem.textContent = texto;
    mensagensContainer.appendChild(elementoMensagem);
    mensagensContainer.scrollTop = mensagensContainer.scrollHeight; 
}

function respostaBot(entrada) {
    const resposta = obterRespostaBot(entrada);
    setTimeout(() => {
        adicionarMensagem(resposta, 'mensagem-bot');
    }, 500);
}

function obterRespostaBot(entrada) {
    entrada = entrada.toLowerCase();

    if (entrada.includes('quiz')) {
        iniciarQuiz(); 
        return; 
    } else if (entrada.includes('planeta')) {
        return "Um planeta é um corpo celeste que orbita uma estrela e não produz sua própria luz.";
    } else if (entrada.includes('estrela')) {
        return "Uma estrela é uma esfera de plasma que gera luz e calor através de reações nucleares.";
    } else if (entrada.includes('galáxia')) {
        return "Uma galáxia é um sistema massivo que contém estrelas, planetas, poeira, e outros objetos astronômicos, ligados pela gravidade.";
    } else if (entrada.includes('sol')) {
        return "O Sol é a estrela central do nosso sistema solar e é fundamental para a vida na Terra.";
    } else if (entrada.includes('lua')) {
        return "A Lua é o único satélite natural da Terra e influencia as marés do nosso planeta.";
    } else if (entrada.includes('buraco negro')) {
        return "Um buraco negro é uma região do espaço onde a gravidade é tão forte que nada pode escapar dela, nem mesmo a luz.";
    } else if (entrada.includes('asteroide')) {
        return "Um asteroide é um pequeno corpo rochoso que orbita o Sol, principalmente entre Marte e Júpiter.";
    } else if (entrada.includes('cometa')) {
        return "Um cometa é um corpo celeste composto de gelo, poeira e rochas que se forma em órbita ao redor do Sol.";
    } else if (entrada.includes('satélite')) {
        return "Um satélite é um corpo celeste que orbita um planeta, como a nossa Lua que orbita a Terra.";
    } else if (entrada.includes('vida em marte')) {
        return "Ainda não encontramos vida em Marte, mas diversas missões estão em andamento para investigar a possibilidade.";
    } else if (entrada.includes('atmosfera da terra')) {
        return "A atmosfera da Terra é composta principalmente de nitrogênio (78%) e oxigênio (21%), além de outros gases em pequenas quantidades.";
    } else if (entrada.includes('idade da terra')) {
        return "A Terra tem aproximadamente 4,5 bilhões de anos.";
    } else if (entrada.includes('camada mais externa da terra')) {
        return "A camada mais externa da Terra é a crosta, que é composta de rochas e solos.";
    } else if (entrada.includes('quantos continentes existem na terra')) {
        return "Existem sete continentes na Terra: Ásia, África, América do Norte, América do Sul, Antártica, Europa e Oceania.";
    } else if (entrada.includes('terra')) {
        return "É a nossa casa, o planeta em qual habitamos. Com aproximadamente 7 Bilhões de pessoas.";
    } else if (entrada.includes('vai tomar no cu')) {
        return "Vai você.";
    } else if (entrada.includes('filho da puta')) {
        return "Teu pai.";
    } else if (entrada.includes('estações do ano')) {
        return "As estações do ano são causadas pela inclinação do eixo da Terra em relação ao Sol, o que afeta a quantidade de luz solar que diferentes partes da Terra recebem.";
    } else if (entrada.includes('ponto mais alto da terra')) {
        return "O ponto mais alto da Terra é o Monte Everest, que tem uma altitude de 8.848 metros.";
    } else if (entrada.includes('importância da água')) {
        return "A água é essencial para a vida na Terra, pois é fundamental para processos biológicos, clima e ecossistemas.";
    } else {
        return "Desculpe, não entendi. Pode reformular sua pergunta?";
    }
}

function iniciarQuiz() {
    emQuiz = true;
    perguntaAtual = 0;
    acertos = 0;
    perguntasQuiz = embaralharPerguntas(perguntasQuiz);

    
    adicionarMensagem("Vamos iniciar o quiz. Responda as perguntas com a resposta correta baseadas no que aprendeu com o site.", 'mensagem-bot');
    
    
    setTimeout(() => {
        adicionarMensagem(perguntasQuiz[perguntaAtual].pergunta, 'mensagem-bot');
    }, 2000); 
}

function verificarResposta(respostaUsuario) {
    const respostaCorreta = perguntasQuiz[perguntaAtual].resposta;
    if (respostaUsuario.toLowerCase() === respostaCorreta) {
        adicionarMensagem("Correto! Muito bem!", 'mensagem-bot');
        acertos++; 
    } else {
        adicionarMensagem(`Errado! A resposta correta era: ${respostaCorreta}.`, 'mensagem-bot');
    }

    perguntaAtual++; 
    const perguntasRestantes = perguntasQuiz.length - perguntaAtual; 
    if (perguntaAtual < perguntasQuiz.length) {
        setTimeout(() => {
            adicionarMensagem(perguntasQuiz[perguntaAtual].pergunta, 'mensagem-bot');
            adicionarMensagem(`Você ainda tem ${perguntasRestantes} questões restantes.`, 'mensagem-bot'); 
        }, 1000);
    } else {
        adicionarMensagem(`O quiz terminou! Você acertou ${acertos} de ${perguntasQuiz.length} questões. Se quiser jogar novamente, digite 'quiz'.`, 'mensagem-bot');
        emQuiz = false; 
    }
}

function embaralharPerguntas(perguntas) {
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
    return perguntas;
}

function mensagemInicial() {
    adicionarMensagem("Oi! Meu nome é AstroGPT, me pergunte qualquer coisa relacionada á astronomia.", 'mensagem-bot');
}

// Menu e navegação
const nav = document.querySelector("header nav");
const body = document.querySelector("body");
const botaoAbrirMenu = document.querySelector("header .menu");
botaoAbrirMenu.addEventListener("click", menuAbrir);

function menuAbrir() {
    nav.classList.add("abrir");
    body.classList.add("escurecer");
}

const botaoFecharMenu = document.querySelector("header nav button");
botaoFecharMenu.addEventListener("click", menuFechar);

function menuFechar() {
    nav.classList.remove("abrir");
    body.classList.remove("escurecer");
}

const botaoSaibaMais = document.querySelector("main button");
botaoSaibaMais.addEventListener("click", saibaMaisIr);

function saibaMaisIr() {
    window.location.href = "./pages/SAIBAMAIS/saibamais.html";
}

const botaoGalaxias = document.querySelector("header nav ul #galaxias");
botaoGalaxias.addEventListener("click", galaxiasIr);

function galaxiasIr() {
    window.location.href = "../../pages/galaxias/galaxia.html";
}

const botaoSatelite = document.querySelector("header nav ul #satelites");
botaoSatelite.addEventListener("click", satelitesIr);

function satelitesIr() {
    window.location.href = "../../pages/satelites/satelite.html";
}
