import{question} from 'readline-sync'
//23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
//recente.

function main(){
    const dia1 = get_number('Dia da data 1:   ')
    const mes1 = get_number('Mês da data 1:   ')
    const ano1 = get_number('Ano da data 1:   ')

    const dia2 = get_number('Dia da data 2:   ')
    const mes2 = get_number('Mês da data 2:   ')
    const ano2 = get_number('Ano da data 2:   ')

    const resultado = calcular_datas(dia1, mes1, ano1, dia2, mes2, ano2)
    console.log(`${resultado}`)

}

function calcular_datas(dia1, mes1, ano1, dia2, mes2, ano2){
    if (ano1 > ano2){
        return ' A data 1 é a mais recente'
    } else if (ano1 < ano2){
        return 'A data 2 é a mais recente'
    } else {
        if(mes1 > mes2){
            return 'A data 1 é a mais recente'
        } else if (mes1 < mes2){
            return 'A data 2 é a mais recente'
        } else {
            if (dia1 > dia2){
                return 'A data 1 é a mais recente'
            } else if ( dia1 < dia2){
                return 'A data 2 é a mais recente'
            } else {
                return 'As datas são iguais'
            }
        }
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()