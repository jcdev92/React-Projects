//* Generics Type Intro
import { genericFunctionArrow } from "../generics/generics";
import { Hero, Villian } from "../interfaces";

// console.log(genericFunctionArrow(123));
// console.log(genericFunctionArrow(new Date()).getDate())
// console.log(genericFunctionArrow({a:1, b:2, c:3}).a)
// console.log(genericFunctionArrow([1,2,3,4,5,6,7,8,9,10]).reduce(
//     (a,b) => a + b
// ))
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase())

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel)