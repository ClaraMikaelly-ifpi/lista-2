import{question} from 'readline-sync'


function main(){
    console.log('.... Numeros Ordem Crescente ....')

    const N1 = get_number('Numero 1:  ')
    const N2 = get_number('Numero 2:   ')
    const N3 = get_number('Numero 3:   ')
    
    let maior, menor, meio
    
    if(N1 > N2 && N1 > N3){
        maior = N1
        // entre N2 e N3
        if (N2 < N3){
            menor = N2
            meio = N3  
        } else{
            menor = N3
            meio = N2
        }
    } else if(N1 < N2 && N1 < N3){
        menor = N1
        // entre N2 e N3
        if (N2 > N3){
            maior = N2
            meio = N3  
        } else{
            maior = N3
            meio = N2
        }
    } else {
        meio = N1
        // entre N2 e N3
        if (N2 > N3){
            maior = N2
            menor = N3  
        } else{
            maior = N3
            menor = N2
        }
    }

    console.log('Menor:', + menor)
    console.log('Meio:', + meio)
    console.log('Maior:', + maior)
}


function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()