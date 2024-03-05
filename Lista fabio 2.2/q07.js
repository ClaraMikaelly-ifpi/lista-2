import{question} from 'readline-sync'

function main(){
    const salario = get_number('Digite o Salario:  ')
    const reajuste = calcular_reajuste(salario)
    console.log(reajuste)
}

function calcular_reajuste(salario){
    let percenAumento, ValAumento, novoSalrio

    if (salario <= 280){
        percenAumento = 20
    } else if (salario <= 700){
        percenAumento = 15
    } else if (salario <= 1500){
        percenAumento = 10
    } else {
        percenAumento = 5
    }


    ValAumento = (salario * percenAumento) / 100
    novoSalrio = salario +ValAumento

    return `
    Salario antes do reajuste: R$${salario.toFixed(2)}
    Percentual de aumento aplicado: R$${percenAumento}%
    Valor do aumento: R$${ValAumento.toFixed(2)}
    Novo salario: R$${novoSalrio.toFixed(2)}`
} 

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()