import{question} from 'readline-sync'

function main(){
    const n1 = get_number('Numero do lado 1:  ')
    const n2 = get_number('Numero do lado 2:  ')
    const n3 = get_number('Numero do lado 3:  ')

    let medidas_lados = verificador_lados(n1, n2, n3) 
}

function verificador_lados(n1, n2, n3){
    if ((n1 + n2) > n3 && (n1 + n3) > n2 && (n2 + n3) > n1){
        if ( n1 === n2 && n1 === n3){
            console.log('Trângulo Equilátero')
        } else if (n1 === n2 || n1 === n3){
            console.log('Triângulo Isósceles')
        } else if ( n1 != n2 && n1 != n3){
            console.log(' Triângulo Escaleno')
        }
    } else {
        console.log(' Nao formam um triângulo')

    }

}


function get_number(mensagem){
    const numero = Number(question(mensagem))
    return numero
}
main()