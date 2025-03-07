let listaResultados = [];
let operacao = "";

document.getElementById("modalSaudacao").style.display = "flex";

function iniciarAplicacao() {
    document.getElementById("modalSaudacao").style.display = "none";
    document.getElementById("modalOperacao").style.display = "flex";
}

function fecharAplicacao() {
    alert("Obrigado, até a próxima.");
    document.getElementById("modalOperacao").style.display = "none";
    document.getElementById("modalSaudacao").style.display = "flex";
}

function confirmarOperacao() {
    let inputOperacao = document.getElementById("modalInputOperacao");
    operacao = inputOperacao.value.trim().toLowerCase(); // Converter para minúsculas para evitar erros de digitação

    if (operacao === "sair") {
        fecharAplicacao();
        return;
    }

    if (!['+', '-', '*', '/'].includes(operacao)) {
        alert("Digite uma operação válida (+, -, *, /) ou 'sair' para encerrar.");
        return;
    }

    document.getElementById("modalOperacao").style.display = "none";
    document.getElementById("modalNumeros").style.display = "flex";
    inputOperacao.value = "";
}

function confirmarNumeros() {
    let numeros = obterNumeros();
    if (!numeros) return;

    let resultado;
    switch (operacao) {
        case '+':
            resultado = soma();
            break;
        case '-':
            resultado = subtracao();
            break;
        case '*':
            resultado = multiplicacao();
            break;
        case '/':
            resultado = divisao();
            break;
        default:
            alert("Digite uma operação válida!");
            return;
    }

    adicionarResultado(operacao, resultado);

    document.getElementById("modalNumeros").style.display = "none";
    document.getElementById("modalOperacao").style.display = "flex";
}

function obterNumeros() {
    let primeiro = Number(document.getElementById("modalInputPrimeiroNumero").value);
    let segundo = Number(document.getElementById("modalInputSegundoNumero").value);

    if (isNaN(primeiro) || isNaN(segundo)) {
        alert("Digite números válidos!");
        return null;
    }

    return { primeiro, segundo };
}

function soma() {
    let numeros = obterNumeros();
    return numeros ? numeros.primeiro + numeros.segundo : null;
}

function subtracao() {
    let numeros = obterNumeros();
    return numeros ? numeros.primeiro - numeros.segundo : null;
}

function multiplicacao() {
    let numeros = obterNumeros();
    return numeros ? numeros.primeiro * numeros.segundo : null;
}

function divisao() {
    let numeros = obterNumeros();
    if (numeros && numeros.segundo === 0) {
        alert("Não é possível dividir por zero!");
        return null;
    }
    return numeros ? numeros.primeiro / numeros.segundo : null;
}

function adicionarResultado(operacao, resultado) {
    let lista = document.getElementById("listaResultados");
    let item = document.createElement("li");
    item.textContent = `Resultado da operação (${operacao}): ${resultado}`;
    lista.appendChild(item);
}
