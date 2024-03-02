import {question} from 'readline-sync'


function main(){
    const num = get_number('Digite um numero entre 0 e 100:   ')

    if(num >= 0 && num <= 100){
        if(verificar_num(num)){
            console.log(num   +   'é numero primo')
        } else {
            console.log(num   +   'Não é numero primo')
        }
    } else {
        console.log('Numero nao permitido')
    }
}

function verificar_num(num){
    if (num <= 1){
        return false
    } 
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}
function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()