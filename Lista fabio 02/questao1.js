import { question } from 'readline-sync'

function main(){
    print('....Numeros....')

    const N1 = get_number('Primeiro numero:    ')
    const N2 = get_number('Segundo numero:     ')
    const N3 = get_number('Terceiro numero:    ')

    let total_iguais = verificar_iguais(N1, N2, N3)

    print( 'O total de numeros iguais é:  ' + total_iguais +'')
}

function verificar_iguais(N1, N2, N3){
    let total_iguais = 0

    if (N1 === N2){
        total_iguais = 2
        if (N1 === N3){
            total_iguais = 3 

        }
    } else if (N1 === N3){
        total_iguais = 2
    } else if (N2 === N3){
        total_iguais = 2
    } else {
        total_iguais = 0
    }
    
    return total_iguais
}

function get_number(mensagem){
    return Number(question(mensagem))
}

function print(mensagem){
    return console.log(mensagem)
}


main()