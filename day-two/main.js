let nome = prompt("Qual o seu nome");
let idade = prompt("Quantos anos você tem?");
let linguagemProgramacao = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`);

let resposta = Number(prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÂO.`));

if (resposta === 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}