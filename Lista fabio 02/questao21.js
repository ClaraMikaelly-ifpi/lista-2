import{question} from 'readline-sync'
//21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
//maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
//contrario, é arredondado para o inteiro imediatamente inferior.

function main(){
    const n1 = get_number('Digíte um numero:  ')

    const n1_arrendondado = arrendondar(n1)
    console.log(`O numero ${n1} arrendondado é ${n1_arrendondado}`)

}

function arrendondar(n1){
    if (n1- Math.floor(n1) >= 0.5){
        return Math.ceil(n1)
    } else {
        return Math.floor(n1)
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()