const openChatBtn = document.getElementById('openChatBtn');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatBtn = document.getElementById('closeChatBtn');
const inputUsuario = document.getElementById('entrada-usuario');
const botaoEnviar = document.getElementById('botao-enviar');
const mensagensContainer = document.getElementById('mensagens');

openChatBtn.addEventListener('click', () => {
    chatbotModal.style.display = 'flex';
    mensagemInicial();
});

closeChatBtn.addEventListener('click', () => {
    limparMensagens();
    chatbotModal.style.display = 'none';
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

    if (entrada.includes('planeta')) {
        return "Um planeta é um corpo celeste que orbita uma estrela e não produz sua própria luz.";
    } else if (entrada.includes('estrela')) {
        return "Uma estrela é uma esfera de plasma que gera luz e calor através de reações nucleares.";
    } else if (entrada.includes('galáxia')) {
        return "Uma galáxia é um sistema massivo que contém estrelas, planetas, poeira, e outros objetos astronômicos, ligados pela gravidade.";
    } else {
        return "Desculpe, não entendi. Pode reformular sua pergunta?";
    }
}

function mensagemInicial() {
    adicionarMensagem("Olá! Como posso ajudar você hoje?", 'mensagem-bot');
}

// Código do menu
const nav = document.querySelector("header nav")
const body = document.querySelector("body")
const botaoAbrirMenu = document.querySelector("header .menu")
botaoAbrirMenu.addEventListener("click", menuAbrir)

function menuAbrir(){
    nav.classList.add("abrir")
    body.classList.add("escurecer")
}

const botaoFecharMenu = document.querySelector("header nav button")
botaoFecharMenu.addEventListener("click", menuFechar)

function menuFechar(){
    nav.classList.remove("abrir")
    body.classList.remove("escurecer")
}

const botaoSaibaMais = document.querySelector("main button")
botaoSaibaMais.addEventListener("click", saibaMaisIr)

function saibaMaisIr(){
    window.location.href = "./pages/SAIBAMAIS/saibamais.html"
}

const botaoGalaxias = document.querySelector("header nav ul #galaxias")
botaoGalaxias.addEventListener("click", galaxiasIr)

function galaxiasIr(){
    window.location.href = "../../pages/galaxias/galaxia.html"
}

const botaoSatelite = document.querySelector("header nav ul #satelites")
botaoSatelite.addEventListener("click", satelitesIr)

function satelitesIr(){
    window.location.href = "../../pages/satelites/satelite.html"
}
