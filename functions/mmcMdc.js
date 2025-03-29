import { min,max } from "./maxMin.js";

// ACOPLAMENTO -> Dependencia entre funções
//             -> Não desejável

// Empilhamento -> Uma função sendo usada dentro da outra
//              -> Gera Acoplamento

export function mmc(x,y) {
    let menor = min(x,y), maior = max(x,y)
    for (var i = menor; !(i % maior == 0);i += menor) {
    } return i
} export function mdc(x,y) {
    return (x*y)/mmc(x,y)
}