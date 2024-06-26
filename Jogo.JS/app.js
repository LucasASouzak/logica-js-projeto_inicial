//implementando função para manupular texto no HTML.
let listaDeNumerosSorteados = [];
let limitador = 3;
let segredo = numeroRandom ();
let tentativas = 1;

function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibeSaudacao(){
    exibiTextoNaTela('h1','Jogo do Número Secreto');
    exibiTextoNaTela('p',`Escolha um número entre 1 e ${limitador} `);
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
    let numeroEscolhido = parseInt(Math.random() * limitador + 1);
    let numerosJaSorteados = listaDeNumerosSorteados.length;

    if (numerosJaSorteados == limitador){
        listaDeNumerosSorteados = [];

    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroRandom();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
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