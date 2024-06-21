//implementando função para manupular texto no HTML.

function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibiTextoNaTela('h1''Jogo do Número Secreto');
exibiTextoNaTela('p''Escolha um número entre 1 e 100');

function verificarChute() {
   console.log('Botão acionado');
}