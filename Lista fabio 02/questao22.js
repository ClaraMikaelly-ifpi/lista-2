import{question} from 'readline-sync'
//22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
//hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
//máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
//seguinte.

function main(){
    let hora_inicio = get_number('Hora Início:  ')
    let minuto_inicio = get_number('Minuto Início:  ')
    let hora_fim = get_number('Hora Fim:   ')
    let minuto_fim = get_number('Minuto Fim:   ')

    let duracao_jogo = calcular_jogo(hora_inicio, minuto_inicio, hora_fim, minuto_fim)
    console.log(`Duração horas ${duracao_jogo} horas e ${duracao_jogo} minutos`)


}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

function calcular_jogo(hora_inicio, minuto_inicio, hora_fim, minuto_fim){
    let totalminutosInicio = hora_inicio * 60 + minuto_inicio
    let totalminutosFim = hora_fim * 60 + minuto_fim

    if(totalminutosFim < totalminutosInicio){
        totalminutosFim += 24 * 60
    }

    let duracaominutosTotal = totalminutosFim - totalminutosInicio;
    
    let horasDuracao = Math.floor(duracaominutosTotal / 60)
    let minutosDuracao = duracaominutosTotal % 60

    return { horas: horasDuracao, minutos: minutosDuracao}
}

main()