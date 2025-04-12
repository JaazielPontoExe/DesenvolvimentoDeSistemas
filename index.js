import { substring } from "./functions/strings.js";

var string = 'O jorge nao sabe do que ta falando'

try {
    console.log(substring(string, 12));
} catch (erro) {
    console.log("Erro!!!",erro);
}