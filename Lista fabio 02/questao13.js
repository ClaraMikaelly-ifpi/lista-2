import{question} from 'readline-sync'

function main(){
    const num1 = get_number('Digite um numero:  ')
    const num2 = get_number('Digite um numero:  ')
    const num3 = get_number('Digite um numero:  ')
    const num4 = get_number('Digite um numero:  ')
    const num5 = get_number('Digite um numero:  ')

    const maior = verificar_maior(num1, num2, num3, num4, num5)
    const menor = verificar_menor(num1, num2, num3, num4, num5)

    console.log(` O maior numero é:  ${maior}`)
    console.log(` O menor numero é:  ${menor}`)
    
}

function verificar_maior(num1, num2, num3, num4, num5){
    let maior = num1

    if(num2 > maior){
        maior = num2
    }
    if (num3 > maior){
        maior = num3
    }
    if(num4 > maior){
        maior = num4
    }
    if(num5 > maior){
        maior = num5
    }

    return maior
}


function verificar_menor(num1, num2, num3, num4, num5){
    let menor = num1

    if(num2 < menor){
        menor = num2
    }
    if(num3 < menor){
        menor = num3
    }
    if(num4 < menor){
        menor = num4
    }
    if(num5 < menor){
        menor = num5
    } 

    return menor

}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()