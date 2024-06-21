//implementando função para manupular texto no HTML.

let numeroSecreto = 10;
let segredo = criaNumeroRandom();


function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibiTextoNaTela('h1','Jogo do Número Secreto');
exibiTextoNaTela('p','Escolha um número entre 1 e 10');

//Implementando numero aleatório, teste okay.
function verificarChute() {
   let chute = document.querySelector('input').value 
   console.log(chute == numeroSecreto);
}

function criaNumeroRandom (){
    return parseInt(Math.random() * numeroSecreto + 1);
}