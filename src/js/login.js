const form = document.getElementById("loginForm");

form.addEventListener("submit", () => {
    event.preventDefault() // garante que o 'sumbit' seja validado 

    const email = document.getElementById("email").value.trim()
    const senha = document.getElementById("senha").value.trim()

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.")
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.")
        return;
    }
})