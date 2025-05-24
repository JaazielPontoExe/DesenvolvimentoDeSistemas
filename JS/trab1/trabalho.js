export function substring(str, ini = 0, tam) {
    
    if (typeof (str) != 'string') throw 'O primeiro parâmetro deve ser uma string'
    if (ini < 0) throw 'Início não pode ser negativo: ' + ini
    if (tam == undefined) tam = str.length - ini

    var nova = ''
    for (var i = ini; i < ini + tam && i < str.length; i++)  nova += str[i]
    return nova
    
} export function leftTrim(texto) {
    if (typeof (texto) != 'string') throw 'O parâmetro deve ser uma string'

    for (var i = 0; i < texto.length && texto[i] == ' '; i++);
    
    return substring(texto, i)
    
} export function rightTrim(texto) {
    if (typeof (texto) != 'string') throw 'O parâmetro deve ser uma string'

    for (var i = texto.length; i > 0 && texto[i-1] == ' '; i--);
    
    return substring(texto, 0, i)

} export function trim(texto) {
    if (typeof (texto) != 'string') throw 'O parâmetro deve ser uma string'

    return rightTrim(leftTrim(texto))

} export function group(texto, divisao, parte) {
    if (typeof (texto) != 'string') throw 'O parâmetro deve ser uma string'
    if (parte > divisao || parte < 0) return ''

    let tamanho = texto.length/divisao | 0,
    inicio = tamanho*(parte - 1)

    return substring(texto, inicio, (divisao == parte) ? undefined : tamanho);

} function halfNumber(number, parte) {
    let inteiro = number| 0 ,div = inteiro / 2, output = div | 0

    if (parte == 1) return output
    else return output + 2*(div - output) + number - inteiro

} export function half(texto, parte = 1) {
    if (typeof(texto) == 'number') return halfNumber(texto,parte)
    else if (typeof(texto) == 'string') return group(texto,2,parte)
    else return ''

}