import { question } from 'readline-sync'

function main(){
    print('.... Dezena e Unidade ....')

    const numero = get_number('Digites dois numeros:  ')

    if (Math.floor(numero / 10) == (numero % 10)){
        print(' O algarismo da dezena é igual a unidade')
    } else {
        print('O algarismo da dezena é diferente da unidade')
    }
}

function print(texto){
    return console.log(texto)
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()