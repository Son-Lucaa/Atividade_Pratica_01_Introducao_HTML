//LISTA DE ATIVIDADES DE REPETIÇÃO

//Primeira Questão - Numeros Multiplos de 3 até 30, usando for
console.log("Início da questão")

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


console.log("Fim da questão")
console.log("====================================================================================================")
console.log("Início da questão")


//Segunda Questão - Contagem Regressiva de Decolagem
for (let d = 10; d >= 0; d--) {
        console.log(d)
}
console.log("Decolagem autorizada!")


console.log("Fim da questão")
console.log("====================================================================================================")
console.log("Início da questão")



//Terceira Questão - Simulador de saque na conta bancária
let saldo = 500;
const saque = 65;
while (saldo >= saque) {
    let total = saldo - saque
    saldo = total
    console.log(`Saque efetuado: R$ 65.00 | Saldo restante: R$ ${saldo}.`)
}
console.log(`Saldo residual: R$ ${saldo.toFixed(2)}`);



console.log("Fim da questão")
console.log("====================================================================================================")
console.log("Início da questão")


// Quarta Questão - Contador de Pesos
const pesos = [89.5, 48.0, 109.5, 34.0, 77.0, 56.5];
for (let p = 0; p < pesos.length; p++) {
    if (pesos[p] < 50) {
    alert(`Abaixo do peso com ${pesos[p]}`);
}
}


console.log("Fim da questão")
console.log("====================================================================================================")
console.log("Início da questão")


//Quinta Questão - "Meu pé de laranja lima"
const frase = "Meu pé de laranja lima";
for (let f = 0; f < frase.length; f++) {
    console.log(frase[f]);
}