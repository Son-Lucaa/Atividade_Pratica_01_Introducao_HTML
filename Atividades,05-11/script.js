const nota1 = 7.5
const nota2 = 8.0
const nota3 = 6.5

const mediaFinal = (nota1+nota2+nota3) / 3

console.log (mediaFinal.toFixed(2))

const valorA = 10
const valorB = "10"

valorA === valorB ? console.log("São iguais") : console.log("São diferentes");

valorA == valorB ? console.log("São iguais") : console.log("São diferentes");


console.log("========================================")

const pontuacao = 85;

if (pontuacao >= 90) 
{
    console.log("Classificação A");
} 

else if (pontuacao >=70) 
{
    console.log("Classificação B");
}  

else 
{
	console.log("Classificação: Precisa melhorar")
} 


console.log("========================================")

const idade = prompt("Quantos anos você tem?");
const altura = prompt("Qual sua altura em metros?")
let podeEntrar = false

if (idade >= 16 && altura >= 1.60)
{
    podeEntrar = true
}
else 
{
    podeEntrar = false
}

if (podeEntrar)
{
    console.log("Está apto ao brinquedo")
}

else 
{
    console.log("Não está apto ao brinquedo")
}


console.log("========================================")
