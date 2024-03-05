import{question} from 'readline-sync'

function main(){
    const numero = get_number('Digite um numero:  ')

    if (inteiro(numero)){
        console.log(`O numero é inteiro`)
    } else {
        console.log(`O numero é decimal`)
    }
}

function inteiro(numero){
    return Math.floor(numero) === numero
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()