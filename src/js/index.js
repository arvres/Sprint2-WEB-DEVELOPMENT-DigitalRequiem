
const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome);
    // localStorage.getItem('nome'); para pegar o nome novamente ou
    // apenas 'nome' por conta da variável criada
    alert(`Seja bem vindo ${nome} !`);
})