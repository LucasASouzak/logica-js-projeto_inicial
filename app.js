//implementando função para manupular texto no HTML.

let segredo = numeroRandom();


function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibiTextoNaTela('h1','Jogo do Número Secreto');
exibiTextoNaTela('p','Escolha um número entre 1 e 10');

//Implementando numero aleatório, teste okay.
function numeroRandom (){
    return parseInt(Math.random() * 10 + 1);
}



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == segredo) {
        exibiTextoNaTela('h1', 'Acertou!');
            exibiTextoNaTela('p', 'Você descobriu o número secreto!');
        } else {
            if (chute > segredo) {
                exibiTextoNaTela('p', 'O número secreto é menor');
                    exibiTextoNaTela('h1', 'Tente de novo.');
                } else {
                    exibiTextoNaTela('p', 'O número secreto é maior');
                        exibiTextoNaTela('h1', 'Tente de novo.');
                }
        }
}

