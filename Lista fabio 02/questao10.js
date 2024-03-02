import{question} from 'readline-sync'

function main(){
    const dia = get_number('Dia:   ')
    const mes = get_number('Mês:   ')
    const ano = get_number('Ano:   ')


    if(verificar_data(dia, mes, ano)){
        console.log('Data valida!')
    } else {
        console.log('Data invalida!')
    }
}

function verificar_data(dia, mes, ano){
    if(ano < 1900 || ano > 2900){
        return false
    }
    if(mes < 1 || mes > 12){
        return false
    }

    const dias_mes = new Date(ano, mes, 0).getDate()
    if (dia < 1 || dia > dias_mes){
        return false
    }

    return true
}
 
function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()