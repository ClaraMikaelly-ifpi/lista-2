import{question} from 'readline-sync'


function main(){

    const num = get_number('Digite um numero positivo:  ')
    if(par(num)){
        console.log('O numero é par')
    } else {
        console.log('O numero é impar')
    }

}

function par(num){
    return num % 2 === 0
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()