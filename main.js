import "./components/short-link/index.js";

const shortDiv = document.querySelector('.external-div')

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    shortDiv.innerHTML = ''

    const data = new FormData(e.target);
    const ogUrl = data.get('ogUrl')

    // Enviar o link e pegar o novo agora
    fetch("")

    const shortLink = document.createElement("short-link")
    shortLink.setAttribute('url', ogUrl)

    shortDiv.appendChild(shortLink)
})
