import{question} from 'readline-sync'

function main(){
    const n1 = get_number('Numero 1:  ')
    const n2 = get_number('Numero 2:  ')

    if (n1%n2 == 1){
        console.log(` ${n1} + ${n2} + 1 = ${n1 + n2 + 1}`)
    } else if (n1%n2 == 2){
        const par1 = par_impar(n1)
        const par2 = par_impar(n2)
    
        if (par1){
        console.log(` O numero ${n1} é par`)
        } else {
        console.log(` O numero ${n1} é impar`)
        }
        if (par2){
        console.log(`O numero ${n2} é par`)
        } else {
        console.log(`O numero ${n2} é impar`)
       }

    } else if(n1%n2 == 3) {
    console.log(` (${n1} + ${n2} * ${n1} = ${(n1 + n2)*n1})`)

    } else if (n1%n2 == 4){
        console.log(`(${n1} + ${n2}) / ${n2} = ${(n1 + n2) / n2}`)
    } else {
        console.log(`O quadrado de ${n1} = ${n1**2}
        O quadrado de ${n2} = ${n2**2}`)
    }
}


function par_impar(num){
    if (num % 2 ==0){
        return true
    } else {
        return false
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()