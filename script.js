// Criando uma função que faz a comparação de numeros

function compara(num1, num2) {
    let soma = num1 + num2

    if (num1 === num2) {
        if (soma < 10 && soma < 20) {
            return console.log('Os números ' + num1 + ' e ' + num2 + ' são iguais. Sua soma é ' + soma + ', que é menor que 10 e menor que 20.')
        } else if (soma > 10 && soma < 20) {
            return console.log('Os números ' + num1 + ' e ' + num2 + ' são iguais. Sua soma é ' + soma + ', que é maior que 10 e menor que 20.')
        } else if (soma > 10 && soma > 20) {
            return console.log('Os números ' + num1 + ' e ' + num2 + ' são iguais. Sua soma é ' + soma + ', que é maior que 10 e maior que 20.')
        } else {
            return console.log('Números inválidos, tente novamente')
        }        
    }else{
        if (soma < 10 && soma < 20) {
            return console.log('Os números ' + num1 + ' e ' + num2 + ' não são iguais. Sua soma é ' + soma + ', que é menor que 10 e menor que 20.')
        } else if (soma > 10 && soma < 20) {
            return console.log('Os números ' + num1 + ' e ' + num2 + ' não são iguais. Sua soma é ' + soma + ', que é maior que 10 e menor que 20.')
        } else if (soma > 10 && soma > 20) {
            return console.log('Os números ' + num1 + ' e ' + num2 + ' não são iguais. Sua soma é ' + soma + ', que é maior que 10 e maior que 20.')
        } else {
            return console.log('Números inválidos, tente novamente')
        }  
    }
}

compara(1,2)
