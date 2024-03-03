import{question} from 'readline-sync'

function main(){
    const n1 = get_number('Digite um numero:   ')
    const n2 = get_number('Digite um numero:   ')
    const n3 = get_number('Digite um numero:   ')
    const n4 = get_number('Digite um numero:   ')
    const n5 = get_number('Digite um numero:   ')


    const media_numeros = calcular_media(n1, n2, n3, n4, n5)
    console.log(` A media dos numeros é: ${media_numeros}`)
    const maiores = verificar_maior(n1, n2, n3, n4, n5)
    console.log(`O(s) numero(s) maior(s) que a media é: ${maiores}`)
}

function calcular_media(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n3 + n5) / 5
}

function verificar_maior(media, n1, n2, n3, n4, n5){
    let maiores = ''
    if (n1 > media){
            maiores = `${n1}; `
    } 
    if (n2 > media){
        maiores = maiores + `${n2}; `
    }
    if( n3 > media){
        maiores = maiores + `${n3}; `
    }
    if (n4 > media){
        maiores = maiores + `${n4}; `
    }
    if (n5 > media){
        maiores = maiores + `${n5}; `
    }
    return maiores
 }


function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()