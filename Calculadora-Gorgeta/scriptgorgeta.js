
const valorTotal = Number(prompt("Qual o valor total da conta?"));

const quantidadePorcentagem = Number(prompt("Qual a porcentagem da gorjeta que o grupo deseja deixar?"));

const valorPorcentagem = valorTotal * (quantidadePorcentagem / 100);

const quantidadePessoas = Number(prompt("Por fim, quantas pessoas vão dividir a conta?"));

const valorDividido = valorTotal + valorPorcentagem;

const valorPorPessoa = valorDividido / quantidadePessoas;

alert(
    "--- Resumo da Conta ---\n" +
    "Consumo: R$ " + valorTotal.toFixed(2) + "\n" +
    "Gorjeta: R$ " + valorPorcentagem.toFixed(2) + "\n" +
    "Total com Gorjeta: R$ " + valorDividido.toFixed(2) + "\n" +
    "Divisão por pessoa (" + quantidadePessoas + " pessoas): R$ " + valorPorPessoa.toFixed(2)
);
