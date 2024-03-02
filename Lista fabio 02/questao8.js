import{question} from 'readline-sync'

function main(){
    const dia_nasc = get_number_init('Dia de nascimento:  ')
    const mes_nasc = get_number_init('Mês de nascimento:  ')
    const ano_nasc = get_number_init('Ano de nascimento:  ')

    const dia_atual = get_number_init('Dia atual:  ')
    const mes_atual = get_number('Mês atual:  ')
    const ano_atual = get_number_init('Ano atual:  ')

    if(validar_datas(dia_nasc, mes_nasc, ano_nasc, dia_atual, mes_atual, ano_atual)){

        const idade = calcular_idade(dia_nasc, mes_nasc, ano_nasc, dia_atual, mes_atual, ano_atual)

        console.log(` Nascido em: ${dia_nasc}/${mes_nasc}/${ano_nasc}
         Sua idade é: ${idade}`)

    } else {
        console.log('Data invalida!')
    }

}

function validar_datas(dia, mes, ano, dia_atual, mes_atual, ano_atual){
    return ano_atual - ano > 0 || dia > 31 || mes > 12 || dia_atual > 31 || mes_atual > 12
}


function dife_anos(ano_nasc, ano_atual){
    return ano_atual- ano_nasc
}

function calcular_idade(dia_nasc, mes_nasc, ano_nasc, dia_atual, mes_atual, ano_atual){

    let idade = Number()

    if(mes_nasc > mes_atual){
        idade = dife_anos(ano_nasc, ano_atual) - 1
    } else if (mes_nasc === mes_atual && dia_atual < dia_nasc){
        idade = dife_anos(ano_nasc, ano_atual) - 1
    } else {
        idade = dife_anos(ano_nasc, ano_atual)
    }
    return idade
    
}



function get_number_init(numero){

    return Number.parseInt(question(numero))
}

function get_number(numero){
    return Number(question(numero))
}

main()