import{question} from 'readline-sync'

function main(){
    const n1 = get_number('Digite um numero:  ')
    console.log(verificar_numero(n1))
}

function verificar_numero(n1){
    if (n1 >= 0){
        return `${n1} é positivo`
    } else {
        return `${n1} é negativo`
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()

