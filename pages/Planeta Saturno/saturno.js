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


const botaoMais = document.querySelector("main .principal div button")
botaoMais.addEventListener("click", abrirMais)

function abrirMais() {
    const main = document.querySelector("main")
    const setaL = document.querySelector(".left")
    const setaR = document.querySelector(".right")
    const body = document.querySelector("body")
    const curiosidades = document.querySelector(".curiosidades")
    setaL.classList.add("ds-n")
    setaR.classList.add("ds-n")
    main.classList.add("ds-n")
    body.classList.add("bodycuriosidades", "escurecer")
    curiosidades.classList.add("ds-f")

    const botaoVoltar = document.querySelector(".curiosidades .conteudo button")
    botaoVoltar.addEventListener("click", fecharMais)

    function fecharMais() {
        setaL.classList.remove("ds-n")
        setaR.classList.remove("ds-n")
        main.classList.remove("ds-n")
        body.classList.remove("bodycuriosidades", "escurecer")
        curiosidades.classList.remove("ds-f")
    }
}

const esquerda = document.querySelector(".left")
const direita = document.querySelector(".right")
esquerda.addEventListener("click", esquerdaIr)
direita.addEventListener("click", direitaIr)

function esquerdaIr () {
    window.location.href = "../Planeta jupiter/jupter.html"
}

function direitaIr () {
    window.location.href = "../Planeta urano/urano.html"
}