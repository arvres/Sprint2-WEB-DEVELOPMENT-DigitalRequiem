
const botao = document.getElementById('botao')
botao.addEventListener('click', () => {
    event.preventDefault() // garante que o 'sumbit' seja validado 
    const nome = document.getElementById('nome').value.trim()
    if (nome === "") {
        alert("Digite seu nome antes de continuar.");
        return
    }

    localStorage.setItem("nomeUsuario", nome)
    // localStorage.getItem('nome'); para pegar o nome novamente ou
    // apenas 'nome' por conta da variável criada
    alert(`Olá, ${nome}! Redirecionando para login...`)

    window.location.href = "paginas/login.html"
})

// ARRAY DE IMAGENS DO SLIDESHOW
const imagens = [
    "src/imgs/slide1.jpg",
    "src/imgs/slide2.jpg",
    "src/imgs/slide3.jpg",
    "src/imgs/slide4.jpg"
]

let indice = 0
const slide = document.getElementById("slide")

// TROCA AUTOMÁTICA DE IMAGENS
setInterval(() => {
    indice++

    if (indice >= imagens.length) {
        indice = 0
    }

    slide.src = imagens[indice]
}, 3000)