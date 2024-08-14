const nav = document.querySelector("header nav.menu")
const body = document.querySelector("body")
const botaoAbrirMenu = document.querySelector("header button.menu")
botaoAbrirMenu.addEventListener("click", menuAbrir)

function menuAbrir(){
    nav.classList.add("abrir")
    body.classList.add("escurecer")
}

const botaoFecharMenu = document.querySelector("header nav.menu button")
botaoFecharMenu.addEventListener("click", menuFechar)

function menuFechar(){
    nav.classList.remove("abrir")
    body.classList.remove("escurecer")
}

const botaoLogo = document.querySelector("header button")
botaoLogo.addEventListener("click", paginaInicial)

function paginaInicial(){
    window.location.href = "../../index.html"
}

const botaoGalaxias = document.querySelector("header nav ul #galaxias")
botaoGalaxias.addEventListener("click", galaxiasIr)

function galaxiasIr(){
    window.location.href = "../galaxias/galaxia.html"
}

const botaoSatelite = document.querySelector("header nav ul #satelites")
botaoSatelite.addEventListener("click", satelitesIr)

function satelitesIr(){
    window.location.href = "../satelites/satelite.html"
}

const esquerda = document.querySelector(".left")
const direita = document.querySelector(".right")
esquerda.addEventListener("click", esquerdaIr)
direita.addEventListener("click", direitaIr)

function esquerdaIr () {
    window.location.href = "../goes satelite/goes.html"
}

function direitaIr () {
    window.location.href = "../feedback/feedback.html"
}