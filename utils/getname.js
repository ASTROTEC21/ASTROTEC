export async function getName() {
    const token = localStorage.getItem("token")

    if(!token) {
        return
    }

    const response = await fetch("http://localhost:3000/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    const nameP = document.querySelector("header nav .userName .nome")
    
    nameP.innerText = `${response.name}`

    const sairUser = document.querySelector("header nav .sairUser")

    sairUser.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.reload()
    })
}