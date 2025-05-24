// ENCADEAMENTO --> Uma função como parametro para outra
//              --> Ex.: mmc(min(a,b),max(a,b))

// ACOPLAMENTO -> Dependencia entre funções
//             -> Não desejável

// Empilhamento -> Uma função sendo usada dentro da outra
//              -> Gera Acoplamento

export function min() {
    let menor = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        if (menor > arguments[i]) menor = arguments[i]
    } return menor
} export function max() {
    let maior = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        if (maior < arguments[i]) maior = arguments[i]
    } return maior
} export function mmc(x,y) {
    let menor = min(x,y), maior = max(x,y)
    for (var i = menor; !(i % maior == 0);i += menor) {
    } return i
} export function mdc(x,y) {
    return (x*y)/mmc(x,y)
}