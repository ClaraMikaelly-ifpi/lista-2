import{question} from 'readline-sync'
//26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

function main(){
    const n1 = get_number('Digite um numero:  ')
    const n2 = get_number('Digite um numero:  ')
    const n3 = get_number('Digite um numero:  ')

    let {hipotenusa, cateto1, cateto2} = verificar_triangulo(n1, n2, n3)

    if (hipotenusa !== null && cateto1 !== null && cateto2 !== null){
        console.log(`Hipotenusa: ${hipotenusa}`)
        console.log(`Cateto 1: ${cateto1}`)
        console.log(`Cateto 2: ${cateto2}`)
    } else {
        console.log('Nao formam um triângulo')
    }
    
}

function verificar_triangulo(n1, n2, n3){
    let hipotenusa, cateto1, cateto2

    if (n1 >= n2 && n1 >= n3){
        hipotenusa = n1
        cateto1 = n2
        cateto2 = n3
    } else if (n2 >= n1 && n2 >= n3){
        hipotenusa = n2
        cateto1 = n1
        cateto2 = n3
    } else {
        hipotenusa = n3
        cateto1= n1
        cateto2 = n2
    }
    if (Math.pow(cateto1,2) + Math.pow(cateto2,2) === Math.pow(hipotenusa,2)){
        return { hipotenusa, cateto1, cateto2}
    } else {
        return { hipotenusa: null, cateto1: null, cateto2: null}
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()