const nome = window.prompt("Informe o seu nome")
let viajou = window.prompt("Você já visitou outra cidade, responda sim ou não.")

let cidades = "";
let contador = 0;

while (viajou === "sim") {
    let cidade = window.prompt("Informe o nome da cidade que você visitou")
    cidades += " - " + cidade + "\n"
    contador++
    viajou = window.prompt("Você já visitou mais alguma outra cidade, responda sim ou não.")
}

alert(
    "Turista: "+nome
    +"\nQuantidade de cidades visitadas: "+contador
    +"\nNome das cidades \n"+cidades
)




