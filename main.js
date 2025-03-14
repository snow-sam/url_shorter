import "./components/short-link/index.js";
import { SHORT_API } from "./constants.js"

const shortDiv = document.querySelector('.external-div')

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    shortDiv.innerHTML = ''

    const data = new FormData(e.target);
    const url = data.get('ogUrl')

    let newLink = ""
    // Enviar o link e pegar o novo agora
    try {
        const resp = await fetch(SHORT_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });
        if (!resp.ok) throw new Error("Erro ao encurtar o link");
        const result = await resp.json();
        newLink = SHORT_API + result.hashValue
    } catch (error) {
        console.error("Erro:", error);
    }


    const shortLink = document.createElement("short-link")
    shortLink.setAttribute('url', link)

    shortDiv.appendChild(shortLink)
})
