import {question} from 'readline-sync'


function main(){
    const preco1 = get_number('Valor do produto 1:  ')
    const preco2 = get_number('Valor do produto 2:  ')
    const preco3 = get_number('Valor do produto 3:  ')

    console.log(verificar_preco(preco1, preco2, preco3))
}

function verificar_preco(preco1, preco2, preco3){
    if (preco1 < preco2 && preco1 < preco3){
        return `O produto 1 é mais barato. R$${preco1.toFixed(2)}`
    } else if ( preco2 < preco1 && preco2 < preco3){
    return `O produto 2 é mais barato. R$${preco2.toFixed(2)}`
    } else {
        return `O produto 3 é mais barato. R$${preco3.toFixed(2)}`
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()