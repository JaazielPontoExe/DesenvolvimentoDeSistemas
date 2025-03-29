import {mmc} from './mmcMdc.js'

let a = 3, b = 5
console.log(mmc(a,b));

// Encadeamento --> Uma função como parametro para outra

console.log(mmc(a,mmc(a,b)));