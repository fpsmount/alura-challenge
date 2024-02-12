
let listaDeNumerosSecretos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativa = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial()

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
   

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns, você acertou!!!');
        let palavraTentativa  = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor que o chute!');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior que o chute!');
    }
    tentativa++;
    limparCampo();
}

function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaDeNumerosSecretos.length;

    if(quantidadeDeElementosLista == numeroLimite){
        listaDeNumerosSecretos = [];
    }

    if (listaDeNumerosSecretos.includes (numeroEscolhido)){
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSecretos.push(numeroEscolhido);
        console.log(listaDeNumerosSecretos);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativa = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



