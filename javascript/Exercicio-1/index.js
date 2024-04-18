nome = window.prompt("Informe o seu nome: ")
sobrenome = window.prompt("Informe o seu sobrenome: ")
campoEstudo = window.prompt("Informe o seu campo de estudo: ")
anoNascimento = window.prompt("Informe o seu ano de nascimento: ")

idade=2024-parseFloat(anoNascimento)

window.alert("Nome do recruta:"+nome+" "+sobrenome+
            "\nCampo de estudo:"+campoEstudo+
            "\nIdade:"+idade
        )