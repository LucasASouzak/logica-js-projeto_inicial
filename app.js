//implementando função para manupular texto no HTML.

let numeroSecreto = 100;
let segredo = criaNumeroRandom();


function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibiTextoNaTela('h1','Jogo do Número Secreto');
exibiTextoNaTela('p','Escolha um número entre 1 e 100');

//Implementando numero aleatório, teste okay.
function verificarChute() {
   console.log(segredo);
}

function criaNumeroRandom (){
    return parseInt(Math.random() * numeroSecreto + 1);
}