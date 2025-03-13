// Pegando a rota acessada
const path = window.location.pathname;
console.log(path)
if (path !== "/index.html") {
    // Definindo o novo domínio
    const newDomain = "https://www.outro-site.com";
    window.location.href = `${newDomain}${path}`;
}