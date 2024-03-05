import {question} from 'readline-sync'

function main(){
    const num1 = get_number('Digite a nota 1:  ')
    const num2 = get_number('Digite a nota 2:  ')
    
    const conceito = calcular_media(num1, num2)
    resultado(conceito, num1, num2)


}

function calcular_media( num1, num2){
    const media = (num1 + num2) / 2

    if (media >= 0 && media < 4){
        return 'Conceito E'
    } else if (media >= 4 && media < 6){
        return 'Conceito D'
    } else if (media >= 6 && media < 7.5){
        return 'Conceito C'
    } else if (media >= 7.5 && media < 9){
        return 'Conceito B'
    } else {
        return 'Conceito A'
    }
}

function resultado(conceito, num1, num2){
    console.log(`Nota 1: ${num1.toFixed(2)}`)
    console.log(`Nota 2: ${num2.toFixed(2)}`)
    console.log(`Média: ${((num1 + num2) / 2)}`)
    console.log(`Conceito: ${conceito}`)

    if (conceito === 'Comceito A' || conceito === 'Conceito B' || conceito === 'Conceito C' ){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()