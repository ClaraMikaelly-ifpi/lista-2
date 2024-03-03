import {question} from 'readline-sync'

function main(){
    console.log('Professor 1')
    const horas_aulas1 = get_number('Quantidade de horas aulas dadas:  ')
    const preco_hora1 = get_number('Preço por hora:  ')

    console.log('Professor 2')
    const horas_aulas2 = get_number('Quantidade de horas aulas dadas:  ')
    const preco_hora2 = get_number('Preço por hora:  ')

    const salario1 = horas_aulas1 * preco_hora1
    const salario2 = horas_aulas2 * preco_hora2


    if(salario1 > salario2){
        console.log(` O professor 1 recebe o maior salário de: ${salario1.toFixed(2)}`)
    } else if(salario2 > salario1){
        console.log(` O professor 2 recebe o maior salário de: ${salario2.toFixed(2)}`)
    } else {
        console.log(` Os dois professores recebem o mesmo salário de: ${salario1}`)
    }

}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()