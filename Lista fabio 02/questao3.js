import { question } from 'readline-sync'

function main(){
    print('.... Numeros ....')

    const N1 = get_number('Primeiro numero:  ')
    const N2 = get_number('Segundo numero:   ')
    const N3 = get_number('Terceiro numero:  ')

    let maior = verificar_maior(N1, N2, N3)

    print(' O maior numero é '  + maior  )
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

function print(texto){
    return console.log(texto)
}

function verificar_maior(N1, N2, N3){
    let maior = 0

    if (N1 > N2 && N1> N3){
        maior = N1
    } else if (N2 > N1 && N2 > N3){
        maior = N2
    }else {
        maior = N3
    }
    return maior
}

main()