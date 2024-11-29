export async function verifyToken(url) {
    const token = localStorage.getItem("token")

    if(!token) {
        window.location.href = url
        return
    }

    const response = await fetch("https://vercel.com/carvalho-joga-pros-ds-projects/backend/DaDDXWoua8ktmHGgbcAr6m48kUu4/verify", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    if(!response.ok) {
        alert(response.message)

        window.location.href = url
    }
}