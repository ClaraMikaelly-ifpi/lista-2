import {question} from 'readline-sync'


function main(){
    const angulo1 = get_positivo_number('Angulo 1:  ')
    const angulo2 = get_positivo_number('Angulo 2:  ')
    const angulo3 = get_positivo_number('Angulo 3:  ')

    const soma_angulos = angulo1 + angulo2 + angulo3

    if (soma_angulos === 180){
        console.log('É um triângulo')
        //Verificar categoria
        if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
            console.log('É ocutângulo')
        } else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
            console.log('É retângulo')
        } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
            console.log('É obtusângulo')
        }
    } else {
        console.log('Não é um triângulo')
    }
}
function get_positivo_number(mensagem){
    const numero = get_number(mensagem)

    if (numero <= 0){
        console.log('Valor Invalido')
        return get_positivo_number(mensagem)
    }

    return numero
}

function get_number(mensagem){
    return Number (question(mensagem))
}


main()