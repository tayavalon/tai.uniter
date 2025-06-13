document.getElementById('botao').style.backgroundColor = 'lightblue';
const mensagemDiv = document.getElementById('mensagem');

document.getElementById('botao').addEventListener('click', function() {
    mensagemDiv.textContent = 'Muito obrigado por estar acessando o meu site! Você é uma pessoa incrível!';
    mensagemDiv.style.color = 'black';
    mensagemDiv.style.fontSize = '20px';
});