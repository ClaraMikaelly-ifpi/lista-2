import{question} from 'readline-sync'

function main(){
    const letra = question('Digite uma letra:  ')
    console.log(verificar_letra(letra))
}

function verificar_letra(letra){
    if (letra.toUpperCase() === 'A' || letra.toUpperCase() === 'E' || letra.toUpperCase() === 'I' || letra.toUpperCase() === 'O' || letra.toUpperCase() === 'U' ){
        return 'Vogal'
    } else if (letra.toUpperCase() === 'a' || letra.toUpperCase() === 'e' || letra.toUpperCase() === 'i' || letra.toUpperCase() === 'u' || letra.toUpperCase() === 'u' ){
        return 'Vogal'
    } else {
        return 'Consoante'
    }
}
main()

