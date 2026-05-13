const addMediaBtn = document.getElementById("addMedia")
const gallery = document.getElementById("gallery")

addMediaBtn.addEventListener("click", () => {
    const titulo = prompt("Digite o nome da mídia:")

    if (!titulo) {
        alert("Nome inválido.")
        return
    }

    const url = prompt("Digite URL da imagem:")

    if (!url) {
        alert("URL inválida.")
        return
    }

    criarCard(titulo, url)
});

function criarCard(titulo, url) {
    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = url
    img.alt = titulo

    const h3 = document.createElement("h3")
    h3.textContent = titulo

    const remover = document.createElement("button")
    remover.textContent = "Remover"

    remover.addEventListener("click", () => {
        card.remove()
        alert("Mídia removida.")
    })

    card.appendChild(img)
    card.appendChild(h3)
    card.appendChild(remover)

    gallery.appendChild(card)
}