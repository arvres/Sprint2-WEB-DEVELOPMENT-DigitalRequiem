
const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    alert(`Seja bem vindo ${nome} !`);
})