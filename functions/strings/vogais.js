import { contain } from "../contains.js";

export function countChar(string,char) {
    let counter = 0
    for (let i = 0; i < string.length; i++) {
        if (contain(string[i],char)) counter++
    } return counter
} 