async function register() {
    const name = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const password = document.getElementById("senha").value
    const passwordConfirmation = document.getElementById("csenha").value

    if(name === "" || email === "" || password === "" || passwordConfirmation === ""){
        alert("Preencha todas as informações!")
        return
    }

    if(password !== passwordConfirmation) {
        alert("As senhas não conferem. Digite as senhas novamente!")
        document.getElementById("password").value = ""
        document.getElementById("passwordConfirmation").value = ""
        return
    }

    const user = {
        name,
        email,
        password
    }

    const response = await fetch("https://backend-mauve-one.vercel.app/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)

    if(response.userExists) {
        window.location.reload()
        return
    }

    window.location.href = "../login/login.html"
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    register()
})


