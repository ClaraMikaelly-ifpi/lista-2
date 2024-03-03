import{question} from 'readline-sync'

function main(){
    const altura = get_number('Altura(M):  ')
    const peso = get_number('Peso(kg):  ')

    const imcr = imc(altura, peso)
    const indice = verificar_peso(imcr)

    console.log(` O IMC é: ${imcr.toFixed(2)}`)
    console.log(`O resultado é: ${indice}`)

}

function imc(altura, peso){
    return peso / (altura**2)
    
    
}

function verificar_peso(imc){
    if(imc < 25){
        return 'Peso normal'

    } else if (imc >= 25 && imc <= 30) {
        return 'Obeso'

    } else {
        return 'Obesidade mórbida'
    }
    
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()