import{question} from 'readline-sync'


function main(){
    const opcao = get_number('Escolha uma das Opçoes(1, 2 ou 3):   ')
    const num1 = get_number('Numero 1:  ')
    const num2 = get_number('Numero 2:  ')
    const num3 = get_number('Numero 3:   ')

    const escolha_valor = verificar_opcao(opcao, num1, num2, num3)
    if (escolha_valor !== undefined){
        console.log(` O valor escolhido é: ${escolha_valor}`)
    }
}

function verificar_opcao(opcao, num1, num2, num3){
    if(opcao === 1){
        return num1
    } else if (opcao === 2){
        return num2
    } else if (opcao === 3){
        return num3
    } else {
        console.log('Opcao invalida!')
    }
}
function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()