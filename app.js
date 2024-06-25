//implementando função para manupular texto no HTML.

let segredo = numeroRandom();
let tentativas = 1;

function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibeSaudacao(){
    exibiTextoNaTela('h1','Jogo do Número Secreto');
    exibiTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibeSaudacao();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == segredo) {
        exibiTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
            exibiTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > segredo) {
                exibiTextoNaTela('p', 'O número secreto é menor');
                    exibiTextoNaTela('h1', 'Tente de novo.');
                } else {
                    exibiTextoNaTela('p', 'O número secreto é maior');
                        exibiTextoNaTela('h1', 'Tente de novo.');
                }
                tentativas ++;
                limpaTela();
        }
}

function numeroRandom (){
    return parseInt(Math.random() * 10 + 1);
}

function limpaTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    segredo = numeroRandom();
    limpaTela();
    tentativas = 1;
    exibeSaudacao();
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}