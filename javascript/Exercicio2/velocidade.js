const velocidade1 = parseFloat(window.prompt("Insira um valor de velocidade"))
const velocidade2 = parseFloat(window.prompt("Insira outro valor de velocidade"))

if (velocidade1 == velocidade2) {
    alert("A velocidade "+velocidade1+" é igual a velocidade "+velocidade2)
}else if (velocidade1 > velocidade2){
    alert("A velocidade "+velocidade1+" é maior que a velocidade "+velocidade2)
}else{
    alert("A velocidade "+velocidade1+" é menor que a velocidade "+velocidade2)
}