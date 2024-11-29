function pegarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()


import { verifyToken } from "../../utils/verifytoken.js"
import { getName } from "../../utils/getname.js"

const url = "../login/login.html"

verifyToken(url)
getName()