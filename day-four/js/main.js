let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial() {
    exibeTextoTela('h1', `Jogo do número secreto.`);
    exibeTextoTela('p', `Escolha um número entre 1 e ${numeroLimite}.`);
}

exibirMsgInicial();

function verificarpalpite() {
    let palpite = document.querySelector('input').value;

    if (palpite == numeroSecreto) {
        exibeTextoTela('h1', `Acertou!`);

        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;

        exibeTextoTela('p', mensagemTentativas);

        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (palpite > numeroSecreto) {
            exibeTextoTela('p', `O número secreto é menor do que o palpite.`);
        } else {
            if (palpite < numeroSecreto) {
                exibeTextoTela('p', `O número secreto é maior do que o palpite.`);
            }
        }
        tentativas++;
        limparCampo();
    }
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdeElementosLista = listaNumerosSorteados.length;

    if (qtdeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    palpite = document.querySelector('input');
    palpite.value = ``;
}
