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