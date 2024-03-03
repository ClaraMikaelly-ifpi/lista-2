import{question} from 'readline-sync'
// 20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
//quarto) em que o ângulo se localiza.

function main(){
    const angulo = get_number('ANGULO(0 a 360):  ')
    const quad = quadrante(angulo)

    console.log(` O angulo é: ${angulo} e esta no quadrante ${quad}`)


}

function quadrante(angulo){
    if (angulo <= 90){
        return Number(1)
    } else if(angulo <= 180) {
        return Number(2)

    } else if( angulo <= 270) {
        return Number(3)
    } else if (angulo <= 360){
        return Number(4)
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()