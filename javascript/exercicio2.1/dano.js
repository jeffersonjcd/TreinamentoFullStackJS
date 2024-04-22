const nome = window.prompt("Insira o nome de um personagem de RPG")
const poderAtaque = parseFloat(window.prompt("Insira o poder de ataque do personagem"))

const nome2 = window.prompt("Insira o nome de outro personagem")
pontosVida = parseFloat(window.prompt("Insira a quantidade de pontos de vida do personagem"))
const poderDefesa = parseFloat(window.prompt("Insira o poder de defesa do persoangem"))
const possuiEscudo = window.prompt("Informe sim para atribuir um escudo para o personagem ou não para não atribuir")

danoCausado=0


if (poderAtaque > poderDefesa && possuiEscudo == "não") {
    danoCausado = poderAtaque - poderDefesa
    pontosVida = pontosVida - danoCausado
    console.log("Aqui")
} else if (poderAtaque > poderDefesa && possuiEscudo == "sim") {
    danoCausado = (poderAtaque - poderDefesa)/2
    pontosVida = pontosVida - danoCausado
}else if (poderAtaque < poderDefesa) {
    danoCausado = 0;
}

alert("Os dados do personagem A são: "+
     "\nNome:"+nome+
     "\nPoder de ataque: "+poderAtaque+

     "\nOs dados do personagem B são: "+
     "\nNome2:"+nome2+
     "\nPontos de vida: "+pontosVida+
     "\nPossui escudo: "+possuiEscudo
)
