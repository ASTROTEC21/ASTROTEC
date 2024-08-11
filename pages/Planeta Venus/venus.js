
const nav = document.querySelector("header nav.menu");
const body = document.querySelector("body");
const botaoAbrirMenu = document.querySelector("header button.menu");
const botaoFecharMenu = document.querySelector("header nav.menu button");


botaoAbrirMenu.addEventListener("click", () => {
    nav.classList.add("abrir");
    body.classList.add("escurecer");
});


botaoFecharMenu.addEventListener("click", () => {
    nav.classList.remove("abrir");
    body.classList.remove("escurecer");
});


const botaoLogo = document.querySelector("header button.logo");
botaoLogo.addEventListener("click", () => {
    window.location.href = "../../index.html";
});


const botaoGalaxias = document.querySelector("header nav ul #galaxias");
botaoGalaxias.addEventListener("click", () => {
    window.location.href = "../galaxias/galaxia.html";
});


const botaoSatelite = document.querySelector("header nav ul #satelites");
botaoSatelite.addEventListener("click", () => {
    window.location.href = "../satelites/satelite.html";
});


const slider = document.getElementById('slider');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;


function updateSliderPosition() {
    const slideWidth = slider.children[0].offsetWidth;
    const newTransformValue = -currentIndex * slideWidth + 'px';
    slider.style.transform = `translateX(${newTransformValue})`;
}


leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});


rightArrow.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});
