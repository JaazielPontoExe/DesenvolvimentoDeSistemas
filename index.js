import { group,half } from "./functions/strings.js";

// console.log(half('tads', 1)) // primeira metade: 'ta'
// console.log(half('tads', 2)) // segunda metade: 'ds'
// console.log(half('tads', 3)) // terceira metade: ''
// console.log(half('tads', 3) == '');


// // REGRA GERAL, numa divisão desbalanceada, a primeria metade deve ser sempre menor que a segunda

// console.log(half('tecno', 1)) // 'te'
// console.log(half('tecno', 2)) // 'cno'

// console.log(half('tecno')) // 'te'
// console.log(half()) // ''

// // half deve aceitar números, sempre tratando como inteiros
// console.log(half(24)) // 12
// console.log(half(25)) // 12
// console.log(half(25, 1)) // 12
// console.log(half(25, 2)) // 13
// // se sobrarem decimais, ficam na segunda parte
// console.log(half(25.5, 1)) // 12
// console.log(half(25.5, 2)) // 13.5
console.log(half(25.9, 2)) // 13.9

// // group é semelhante a half
// console.log(group('tecnologia', 3, 1)) // tec
// // dividir em três partes (tec nol ogia) e retornar apenas a primeira "tec"
// console.log(group('tecnologia', 3, 1) == 'tec')
// console.log(group('tecnologia', 3, 2) == 'nol')
// console.log(group('tecnologia', 3, 3) == 'ogia')
// // parâmetros inválidos devolvem string vazia
// console.log(group('tecnologia', 3, 4) == '')
// console.log(group('tecnologia', 3, -1) == '')
// console.log(group('tecnologia', -3, 1) == '')
// console.log(group('tecnologia', -3, 1) == '')
// // group não deve aceitar outro tipos além de string
// try {
//     console.log(group(234234, 3, 1))
// } catch (e) {
//     console.error(e)
// }

// // em 10 partes
// console.log(group('tecnologia', 10, 1) == 't')
// console.log(group('tecnologia', 10, 2) == 'e')
// console.log(group('tecnologia', 10, 10) == 'a')