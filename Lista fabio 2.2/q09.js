import{question} from 'readline-sync'

function main(){
    const num = get_number('Digite um numero (1 a 7):  ')
    console.log(verificar_numero(num))


}

function verificar_numero(num){
    if (n === 1){
        return `Domingo (1)`
    } else if (n === 2){
        return `Segunda (2)`
    } else if (n === 3){
        return `Terça (3)`
    } else if (n === 4){
        return `Quarta (4)`
    } else if (n === 5){
        return `Quinta (5)`
    } else if (n === 6){
        return `Sexta (6)`
    } else if (n === 7){
        return `Sábado (7)`
    } else {
        return `Numero Inválido`
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()