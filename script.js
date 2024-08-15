const abrirChatBtn = document.getElementById('abrirChatBtn');
const modalChatbot = document.getElementById('modalChatbot');
const fecharChatBtn = document.getElementById('fecharChatBtn');
const entradaUsuario = document.getElementById('entrada-usuario');
const botaoEnviar = document.getElementById('botao-enviar');
const mensagensContainer = document.getElementById('mensagens');

let emQuiz = false;
let perguntasQuiz = [
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        alternativas: {
            A: "Júpiter",
            B: "Saturno",
            C: "Terra",
            D: "Netuno"
        },
        resposta: "A"
    },
    {
        pergunta: "Quantas galáxias existem no universo observável?",
        alternativas: {
            A: "Um trilhão",
            B: "Dois trilhões",
            C: "Cinco trilhões",
            D: "Dez trilhões"
        },
        resposta: "B"
    },
    {
        pergunta: "Qual planeta é conhecido como o Planeta Vermelho?",
        alternativas: {
            A: "Marte",
            B: "Vênus",
            C: "Mercúrio",
            D: "Urano"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual é o nome da nossa galáxia?",
        alternativas: {
            A: "Via Láctea",
            B: "Andrômeda",
            C: "Galáxia de Messier 87",
            D: "Galáxia do Sombrero"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual é o astro mais próximo da Terra?",
        alternativas: {
            A: "Lua",
            B: "Sol",
            C: "Marte",
            D: "Vênus"
        },
        resposta: "B"
    },
    {
        pergunta: "Qual planeta é conhecido por ter anéis?",
        alternativas: {
            A: "Saturno",
            B: "Urano",
            C: "Netuno",
            D: "Júpiter"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual é a maior lua de Saturno?",
        alternativas: {
            A: "Titã",
            B: "Reia",
            C: "Encélado",
            D: "Mimas"
        },
        resposta: "A"
    },
    {
        pergunta: "Qual o satélite natural da Terra?",
        alternativas: {
            A: "Lua",
            B: "Marte",
            C: "Vênus",
            D: "Io"
        },
        resposta: "A"
    },
    {
        pergunta: "Quantos planetas existem no sistema solar?",
        alternativas: {
            A: "Sete",
            B: "Oito",
            C: "Nove",
            D: "Dez"
        },
        resposta: "B"
    },
    {
        pergunta: "Qual é a temperatura média da superfície da Terra?",
        alternativas: {
            A: "10 graus Celsius",
            B: "15 graus Celsius",
            C: "20 graus Celsius",
            D: "25 graus Celsius"
        },
        resposta: "B"
    }
];

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;

abrirChatBtn.addEventListener('click', () => {
    modalChatbot.style.display = 'flex';
    mensagemInicial();
});

fecharChatBtn.addEventListener('click', () => {
    limparMensagens();
    modalChatbot.style.display = 'none';
    emQuiz = false;
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
});

botaoEnviar.addEventListener('click', () => {
    const entradaUsuarioTexto = entradaUsuario.value.trim();
    if (entradaUsuarioTexto) {
        adicionarMensagem(entradaUsuarioTexto, 'mensagem-usuario');
        entradaUsuario.value = '';
        if (emQuiz) {
            verificarResposta(entradaUsuarioTexto);
        } else {
            respostaBot(entradaUsuarioTexto);
        }
    }
});

function limparMensagens() {
    mensagensContainer.innerHTML = '';
}

function adicionarMensagem(texto, classe) {
    if (texto.trim()) {
        const elementoMensagem = document.createElement('div');
        elementoMensagem.className = `mensagem ${classe}`;
        elementoMensagem.textContent = texto;
        mensagensContainer.appendChild(elementoMensagem);
        mensagensContainer.scrollTop = mensagensContainer.scrollHeight;
    }
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
    erros = 0;
    perguntasQuiz = embaralharPerguntas(perguntasQuiz);

    adicionarMensagem("Vamos iniciar o quiz. Responda as perguntas com a alternativa correta (A, B, C ou D) ou com o texto completo da resposta.", 'mensagem-bot');
    mostrarPerguntaAtual();
}

function mostrarPerguntaAtual() {
    const perguntaAtualQuiz = perguntasQuiz[perguntaAtual];
    adicionarMensagem(perguntaAtualQuiz.pergunta, 'mensagem-bot');

    const alternativas = Object.entries(perguntaAtualQuiz.alternativas)
        .map(([letra, texto]) => `${letra} - ${texto}`);

    alternativas.forEach((alternativa, index) => {
        setTimeout(() => {
            adicionarMensagem(alternativa, 'mensagem-bot');
        }, 500 * (index + 1));
    });
}

function verificarResposta(respostaUsuario) {
    const respostaUsuarioNormalizada = respostaUsuario.toLowerCase().trim();
    const perguntaAtualQuiz = perguntasQuiz[perguntaAtual];
    const respostaCorreta = perguntaAtualQuiz.resposta;
    const alternativas = perguntaAtualQuiz.alternativas;
    const respostaCorretaTexto = alternativas[respostaCorreta].toLowerCase().trim();

    if (["a", "b", "c", "d"].includes(respostaUsuarioNormalizada)) {
        if (respostaUsuarioNormalizada.toUpperCase() === respostaCorreta) {
            adicionarMensagem("Correto! Muito bem!", 'mensagem-bot');
            acertos++;
        } else {
            adicionarMensagem(`Errado! A resposta correta era: ${alternativas[respostaCorreta]}.`, 'mensagem-bot');
            erros++;
        }
    } else if (respostaUsuarioNormalizada === respostaCorretaTexto) {
        adicionarMensagem("Correto! Muito bem!", 'mensagem-bot');
        acertos++;
    } else {
        adicionarMensagem("Resposta aceita, mas lembre-se de responder com a escrita correta.", 'mensagem-bot');
        erros++;
    }

    perguntaAtual++;
    const perguntasRestantes = perguntasQuiz.length - perguntaAtual;
    if (perguntaAtual < perguntasQuiz.length) {
        setTimeout(() => {
            mostrarPerguntaAtual();
            adicionarMensagem(`Você ainda tem ${perguntasRestantes} questões restantes. Até agora, você acertou ${acertos} e errou ${erros}.`, 'mensagem-bot');
        }, 1000);
    } else {
        adicionarMensagem(`O quiz terminou! Você acertou ${acertos} de ${perguntasQuiz.length} questões e errou ${erros}. Se quiser jogar novamente, digite 'quiz'.`, 'mensagem-bot');
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
    adicionarMensagem("Oi! Meu nome é AstroGPT, me pergunte qualquer coisa relacionada à astronomia.", 'mensagem-bot');
}


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
