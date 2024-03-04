import{question} from 'readline-sync'
//27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
//nascimento e a data (dia, mês e ano) atual.

function main(){
    console.log('Data de nascimento')
    const dia_nascimento = get_number('Dia de nascimento: ')
    const mes_nascimento = get_number('Mês de nascimento: ')
    const ano_nascimento = get_number('Ano de nascimento: ')

    console.log('Data atual')
    const dia_atual = get_number('Dia atual:  ')
    const mes_atual = get_number('Mês atual:  ')
    const ano_atual = get_number('Ano atual:  ')

    const dia_nascimentoSoma = ano_nascimento * 365 + mes_nascimento * 30 + dia_nascimento
    const dia_atualSoma = ano_atual * 365 + mes_atual * 30 + dia_atual
    const datadias = dia_atualSoma - dia_nascimentoSoma
    const idade = diasamd

    console.log(`A sua idade é ${idade.anos} Anos, ${idade.meses} meses, ${idade.dias} dias`)
}

function diasamd(datadias){
    const anos = Math.floor(datadias/365)
    let resto = datadias%365
    const meses = Math.floor(resto/30)
    const dias = resto%30

    return {
        anos,
        meses,
        dias
    }
}