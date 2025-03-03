alert("Seja bem-vindo ao nosso jogo!");

function pedirEscolha(mensagem, opcoesValidas) {
    let escolha;
    while (true) {
        escolha = Number(prompt(mensagem));
        if (opcoesValidas.includes(escolha)) {
            return escolha;
        }
        alert("Opção inválida. Tente novamente.");
    }
}

let area = pedirEscolha("Qual área de desenvolvimento de softwares você quer seguir? Digite 1 para Front-End e 2 para Back-End.", [1, 2]);

let tecnologiaDaArea;

if (area === 1) {
    tecnologiaDaArea = pedirEscolha("Qual tecnologia você gostaria de aprender? Digite 1 para React e 2 para Vue.", [1, 2]);
    if (tecnologiaDaArea === 1) {
        tecnologiaDaArea = "React";
    } else if (tecnologiaDaArea === 2) {
        tecnologiaDaArea = "Vue";
    }
} else if (area === 2) {
    tecnologiaDaArea = pedirEscolha("Qual tecnologia você gostaria de aprender? Digite 1 para C# e 2 para Java.", [1, 2]);
    if (tecnologiaDaArea === 1) {
        tecnologiaDaArea = "C#";
    } else if (tecnologiaDaArea === 2) {
        tecnologiaDaArea = "Java";
    }
}

alert(`Você escolheu aprender ${tecnologiaDaArea}`);

if (area === 1) {
    area = "Front-End";
} else if (area === 2) {
    area = "Back-End";
}

let especializacao = pedirEscolha(`Você gostaria de se especializar como ${area} ou se tornar um desenvolverdor Fullstack? Digite 1 para especialização em ${area} e 2 para Fullstack.`, [1, 2]);

if (especializacao === 1) {
    alert(`Você escolheu ser especialista em ${area} com a tecnologia ${tecnologiaDaArea}.`);
} else if (especializacao === 2) {
    alert(`Você escolheu se tornar um desenvolvedor Fullstack.`);
}

let tecnologias = [];

while (true) {
    let tecnologia = prompt("Digite quais tecnologias gostaria de se especializar ou de conhecer (ou digite 'sair' para encerrar):");

    if (tecnologia.toLowerCase() === "sair") {
        break;
    }

    tecnologias.push(tecnologia);
    alert(`Tecnologia ${tecnologia} adicionada à lista!`);
}

alert(`Tecnologias escolhidas: ${tecnologias.join(", ")}`);
