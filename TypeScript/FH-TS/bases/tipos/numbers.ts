// funcion auto invocada para evitar conflictos de alcance glopal
// (() => {})()

(() => {
    //TYPE NUMBER
    // WRONG WAY:

    // let avengers; // undefined
    // console.log(avengers)

    // const villians = 20; // infered type
    // const villians: number = 20; // type number explicit type annotation

    // if (avengers < villians) {  
    // ERROR: avengers es posiblemente undefined
    //     console.log('Estamos en problemas')
    // } else {
    //     console.log('Nos salvamos')
    // }

    // RIGHT WAY:

    let avengers: number = 10; // defined and explicit type annotation
    const villans: number = 20; // suggested type annotation
    if (avengers < villans) {
        console.log('Estamos en problemas')
    } else {
        console.log('Nos salvamos')
    }


    // TypeScript will not save you always sometimes like this you will have to do it manually.

    avengers = Number('55'); // 55
    console.log({ avengers }) // the value of avengers is a number type infered but the Number constructor accept any type and if you put a string for example:
    avengers = Number('55A'); // NaN
    console.log({ avengers }) // you will get a NaN (Not a Number) that is considered as a number and could make some issues before...
    // You can handle this error doing logic for example:
    if (isNaN(avengers)) {
        avengers = 0;
    }

    console.log({ avengers }) // 0

})()