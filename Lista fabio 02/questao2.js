import{question} from 'readline-sync'


function main(){
    print('.... Numero ....')

    const N1 = get_number('Primeiro numero:   ')
    const N2 = get_number('Segundo numero:    ')

    let maior = verificar_maior(N1, N2)
    let menor = verificar_menor(N1, N2)

    print('.... O maior numero é ' + maior + ' e o numero menor é ' + menor)

}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

function print(texto){
    return console.log(texto)
}

function verificar_maior(N1, N2){
    let maior = 0

    if (N1 > N2){
        maior = N1
    } else {
        maior = N2
    }
    return maior
}

function verificar_menor(N1, N2){
    let menor = 0

    if (N1 < N2){
        menor = N1
    } else {
        maior = N2
    }
    return menor

}
main()