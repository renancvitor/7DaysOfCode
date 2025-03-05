let listaDeCompras = {};
let alimentoAtual = "";

document.getElementById("modalInicial").style.display = "flex";

function iniciarLista() {
    document.getElementById("modalInicial").style.display = "none";
    document.getElementById("modalAlimento").style.display = "flex";
}

function fecharAplicacao() {
    alert("Obrigado, até a próxima.");
    document.getElementById("modalInicial").style.display = "none";
}

function confirmarAlimento() {
    let input = document.getElementById("modalInputAlimento");
    alimentoAtual = input.value.trim();

    if (alimentoAtual === "") {
        alert("Digite um alimento!");
        return;
    }

    input.value = "";
    document.getElementById("modalAlimento").style.display = "none";
    document.getElementById("modalDepartamento").style.display = "flex";
}

function confirmarDepartamento() {
    let input = document.getElementById("modalInputDepartamento");
    let departamento = input.value.trim().toLowerCase();

    if (departamento === "") {
        alert("Digite um departamento!");
        return;
    }

    if (!listaDeCompras[departamento]) {
        listaDeCompras[departamento] = [];
    }

    listaDeCompras[departamento].push(alimentoAtual);

    alimentoAtual = "";
    input.value = "";
    document.getElementById("modalDepartamento").style.display = "none";
    atualizarLista();

    setTimeout(() => {
        document.getElementById("modalAdicionarMais").style.display = "flex";
    }, 300);
}

function adicionarMaisItem() {
    document.getElementById("modalAdicionarMais").style.display = "none";
    document.getElementById("modalAlimento").style.display = "flex";
}

function fecharModalAdicionarMais() {
    document.getElementById("modalAdicionarMais").style.display = "none";
}

function atualizarLista() {
    let listaDepartamentos = document.getElementById("listaDepartamentos");
    listaDepartamentos.innerHTML = "";

    for (const departamento in listaDeCompras) {
        let liDepartamento = document.createElement("li");
        liDepartamento.innerHTML = `<strong>${departamento.charAt(0).toUpperCase() + departamento.slice(1)}</strong>: ${listaDeCompras[departamento].join(", ")}`;
        listaDepartamentos.appendChild(liDepartamento);
    }
}