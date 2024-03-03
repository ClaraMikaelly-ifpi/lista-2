import{question} from 'readline-sync'


function main(){
    const n1 = get_number('Numero 1:  ')
    const n2 = get_number('Numero 2:  ')

    const opc = get_number('Qual operaçao desejada?  ')

    const  resul = verificar_operacao(n1, n2, opc)

    console.log(`O resultado é:  ${resul}`)


}

function verificar_operacao(n1, n2, opc){
    
    if (opc === 1){
         console.log(`A soma é: ${n1 + n2}`)
    } else if (opc === 2){
        console.log(`A subtração é: ${n1 - n2}`)
    } else if (opc === 3) {
        console.log(`A multiplicação é: ${n1 * n2}`)
    } else if (opc === 4){
        console.log(`A divisão é: ${n1 / n2}`)
    } else {
        console.log( 'operação inválida')
    }
    

}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main ()