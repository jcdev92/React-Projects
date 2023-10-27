import { printObject } from "./generics/generics";

console.log(printObject(123));
console.log(printObject(new Date()).getDate())
console.log(printObject({a:1, b:2, c:3}).a)
console.log(printObject([1,2,3,4,5,6,7,8,9,10]).reduce(
    (a,b) => a + b
))
console.log(printObject('Hola Mundo').toUpperCase())