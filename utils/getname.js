export async function getName() {
    const token = localStorage.getItem("token")

    if(!token) {
        return
    }

    const response = await fetch("https://vercel.com/carvalho-joga-pros-ds-projects/backend/DaDDXWoua8ktmHGgbcAr6m48kUu4/getname", {
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