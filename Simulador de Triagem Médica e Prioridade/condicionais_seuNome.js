const corPulseira = prompt("Qual a cor da pulseira?").toLowerCase();
const idadePaciente = Number(prompt("Qual a idade do paciente?"));
const gestante = prompt("O paciente é gestante? (sim/não)").toLowerCase() === "sim";

if (corPulseira === "vermelha") 
{
    console.log("Atendimento de Emergência: Sala de trauma imediata"); 
}

else if (corPulseira === "amarela") 
{
    if (idadePaciente >= 60 || gestante === true) 
    {
        console.log("Atendimento Urgente: Prioridade Especial Preferencial");
    }
    else
    {
        console.log ("Atendimento Urgente: Fila padrão amarela");
    }
}

else if (corPulseira === "verde")
{
    idadePaciente < 12 ? console.log("Encaminhar para Pediatria") : console.log("Encaminhar para Clínica Geral");
}

else 
{
    alert("Código de cor desconhecido!");
}