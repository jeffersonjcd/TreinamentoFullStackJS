const primeiroNumero = window.prompt("Informe um numero")
const segundoNumero = window.prompt("Informe outro numero")

const soma = parseFloat(primeiroNumero)+parseFloat(segundoNumero)
const subtracao = primeiroNumero-segundoNumero
const multiplicacao = primeiroNumero*segundoNumero
const divisao = primeiroNumero/segundoNumero

alert("As quatro operações com os dois números são: \n"
    +"\nsoma="+soma+
    "\nsubtracao="+subtracao+
    "\nmultiplicacao="+multiplicacao+
    "\ndivisao="+divisao
)