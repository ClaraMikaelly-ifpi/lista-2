import { question } from 'readline-sync'

//25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
//uma mensagem de permissão de acesso ou não.

function main(){
    const senha = 1234
    const valor = get_number('Digite a senha:  ')

    const entrar = verificar_senha(senha, valor)
    console.log(entrar)

}

function verificar_senha(senha, valor){
    if (valor === senha){
        return 'Acesso autorizado'
    } else {
        return 'Acesso negado'
    }
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()