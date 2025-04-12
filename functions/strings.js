import { contain } from "./contains.js";

export function count(string,char) {
    let counter = 0
    for (let i = 0; i < string.length; i++) {
        if (contain(string[i],char)) counter++
    } return counter
} 

export function remover(string,char) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        if (!(contain(string[i],char))) newString = newString + string[i]
    } return newString
} 

export function substring(string, init, size) {
    if (init < 0) throw "Index negativo: " + init
    else if (!size) size = string.length - init
    else if (size < 0) throw "Tamanho negativo: " + size
    
    let string2 = ''
    for (let i = init; i < init + size; i++) {
        string2 = string2 + string[i]
    } return string2
}

// Strings são imutáveis
// string[0] = 'T' [não existe]

// Variavel string nao guarda texto
    // Ela guarda a referencia da memoria do texto
    // Atribuição Indireta

// FAIL-SAFE: resiste à falhas (vai tentar seguir)
// FAIL-FAST: sensivel à falhas (vai parar)