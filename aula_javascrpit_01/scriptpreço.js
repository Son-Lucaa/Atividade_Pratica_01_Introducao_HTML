const valorTotal = prompt("Qual o valor total da conta?");

const quantidadePessoas = prompt("Quantas pessoas dividirão a conta?");

const valorDividido =  (valorTotal / quantidadePessoas) .toFixed(2); 

alert(`--- Resumo da Conta --- \n Consumo: R$: ${valorTotal}\n Divisão por pessoa (${quantidadePessoas} pessoas): ${valorDividido}`);