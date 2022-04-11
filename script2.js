// Aplicando os conhecimentos passado na aula
function comparaNumeros(num1, num2) {
    if (num1 === null || num1 === undefined && num2 === null || num2 === undefined) {
       console.log('Digite números válidos!')
    }else{
        const frase1 = criaFrase1(num1, num2)
        const frase2 = criaFrase2(num1, num2)
    
        return `${frase1} ${frase2}`
    }
}

function criaFrase1(num1, num2) {
    let iguais = ""

    if (num1 !== num2) {
        iguais = "não"
    }

    return `Os números ${num1} e ${num2}${iguais} são iguais.`
}

function criaFrase2(num1, num2) {
    const soma = num1 + num2
    let result10 = "menor que"
    let result20 = "menor que"

    if (soma > 10) {
        result10 = "maior que"
    } else if (soma === 10) {
        result10 = "igual a"
    }

    if (soma > 20) {
        result20 = "maior que"
    } else if (soma === 20) {
        result20 = "igual a"
    }

    return `Sua soma é ${soma}, que é ${result10} 10 e ${result20} 20.`
}

console.log(comparaNumeros(0,1))