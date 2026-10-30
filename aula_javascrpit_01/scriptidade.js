const nome = prompt("Qual é o seu nome?");
const anoNascimento = prompt("Em que ano você nasceu?");
const idade = 2026 - Number(anoNascimento);
alert(`Olá, ${nome}! Em 2026 você tem (ou fará) ${idade} anos.`);
