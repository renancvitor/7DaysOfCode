alert("Jogo de adivinhar qual é o número!");

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarpalpite() {
    let palpite = Number(prompt(`Escolha um número entre 0 e ${numeroLimite}.`));
    
    if (palpite === numeroSecreto) {
        alert("Acertou!");
        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
        alert(`Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`);

        numeroSecreto = gerarNumeroAleatorio();
        tentativas = 1;
        verificarpalpite();
    } else {
        if (tentativas < 3) {
            if (palpite > numeroSecreto) {
                alert("O número secreto é menor do que o palpite.");
            } else {
                alert("O número secreto é maior do que o palpite.");
            }
            tentativas++;
            verificarpalpite();
        } else {
            alert("Fim de jogo!");
            alert(`O número secreto era ${numeroSecreto}.`);

            numeroSecreto = gerarNumeroAleatorio();
            tentativas = 1;
            verificarpalpite();
        }
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * (numeroLimite + 1));
    let qtdeElementosLista = listaNumerosSorteados.length;

    if (qtdeElementosLista === numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

verificarpalpite();
