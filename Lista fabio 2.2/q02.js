import { question} from 'readline-sync'

function main(){
    const letra = question('Escolha uma letra (F ou M):  ')
    console.log(verificar_letra(letra))
}

function verificar_letra(letra){
    if (letra.toUpperCase() === 'M'){
        return '(M) Masculino'
    } else if (letra.toUpperCase() === 'F'){
        return '(F) Feminino'
    } else 'Sexo Indefinido'
}