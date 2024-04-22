medida = parseFloat(window.prompt("Digite um valor de medida"))
unidade = parseFloat(window.prompt("Esclha uma unidade de medida para realiza a conversão \n" +
"\n1. milímetro (mm)"
+"\n2. centímetro (cm)"
+"\n3. decímetro (dm)"
+"\n4. decâmetro (dam)"
+"\n5. hectômetro (hm)"
+"\n6. quilômetro (km)"
))

switch (unidade) {
    case 1:
        alert("O valor da medida "+medida+" convertida em milímetros é: "+medida * 1000+"mm")
        break
    case 2:
        alert("O valor da medida "+medida+" convertida em centímetro é: "+medida * 100+"cm")
        break
    case 3:
        alert("O valor da medida "+medida+" convertida em decímetro é: "+medida * 10+"dm")
        break
    case 4:
        alert("O valor da medida "+medida+" convertida em decâmetro é: "+medida / 10+"dam")
        break
    case 5:
        alert("O valor da medida "+medida+" convertida em hectômetro é: "+medida / 100+"hm")
        break
    case 6:
        alert("O valor da medida "+medida+" convertida em quilômetro é: "+medida / 1000+"km")
        break
    default:
        alert("Opção inválida")
}