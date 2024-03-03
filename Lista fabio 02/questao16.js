import{question} from 'readline-sync'

function main(){
    const nota1 = get_number('Nota 1:  ')
    const nota2 = get_number('Nota 2 :  ')

    const media = (nota1 + nota2) / 2
    
    let mediaPF = media
    if(media >= 7.0){
        console.log ('Aprovado!')
    } else {
        console.log('Vai para prova final!')
        console.log ('prova final!')
        const notaPF = get_number(' Nota PF:  ')
        const mediaPF = (media + notaPF) / 2
        if (mediaPF >= 5.0){
            console.log ('Aprovado por Prova Final!')
        } else {
            console.log('Reprovado!')
        }
    }



}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}
main()
