const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault() // garante que o 'sumbit' seja validado 

    const email = document.getElementById("email").value.trim()
    const senha = document.getElementById("senha").value.trim()


    if (email === "" || senha === "") {
        alert("Preencha todos os campos.")
        return
    }

    if (senha.length < 8) {
        alert("Digite uma senha mais segura")
        return
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.")
        return
    }
    
    alert("Login realizado com sucesso!")

    window.location.href = "biblioteca.html"
})