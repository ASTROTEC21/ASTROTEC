// Menu de navegação
const nav = document.querySelector("header nav.menu");
const body = document.querySelector("body");
const botaoAbrirMenu = document.querySelector("header button.menu");
const botaoFecharMenu = document.querySelector("header nav.menu button");

// Abrir o menu
botaoAbrirMenu.addEventListener("click", () => {
    nav.classList.add("abrir");
    body.classList.add("escurecer");
});

// Fechar o menu
botaoFecharMenu.addEventListener("click", () => {
    nav.classList.remove("abrir");
    body.classList.remove("escurecer");
});

// Redirecionar para a página inicial
const botaoLogo = document.querySelector("header button.logo");
botaoLogo.addEventListener("click", () => {
    window.location.href = "../../index.html";
});

// Redirecionar para a página de Galáxias
const botaoGalaxias = document.querySelector("header nav ul #galaxias");
botaoGalaxias.addEventListener("click", () => {
    window.location.href = "../galaxias/galaxia.html";
});

// Redirecionar para a página de Satélites
const botaoSatelite = document.querySelector("header nav ul #satelites");
botaoSatelite.addEventListener("click", () => {
    window.location.href = "../satelites/satelite.html";
});

const planetas = document.querySelectorAll('.planeta');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');
let indiceAtual = 0;

function esconderPlaneta(index, direcao) {
    planetas[index].style.transition = 'transform 0.6s ease';
    planetas[index].style.transform = `translateX(${direcao === 'direita' ? '-100%' : '100%'})`;
}

function mostrarPlaneta(index, direcao) {
    planetas[index].style.transition = 'none';
    planetas[index].style.transform = `translateX(${direcao === 'direita' ? '100%' : '-100%'})`;
    
    setTimeout(() => {
        planetas[index].style.transition = 'transform 0.6s ease';
        planetas[index].style.transform = 'translateX(0)';
    }, 20);
}

setaEsquerda.addEventListener('click', () => {
    const planetaAnterior = indiceAtual;
    indiceAtual = (indiceAtual === 0) ? planetas.length - 1 : indiceAtual - 1;
    esconderPlaneta(planetaAnterior, 'direita');
    mostrarPlaneta(indiceAtual, 'esquerda');
});

setaDireita.addEventListener('click', () => {
    const planetaAnterior = indiceAtual;
    indiceAtual = (indiceAtual === planetas.length - 1) ? 0 : indiceAtual + 1;
    esconderPlaneta(planetaAnterior, 'esquerda');
    mostrarPlaneta(indiceAtual, 'direita');
});

planetas.forEach((planeta, index) => {
    planeta.style.transform = (index === 0) ? 'translateX(0)' : 'translateX(100%)';
});
