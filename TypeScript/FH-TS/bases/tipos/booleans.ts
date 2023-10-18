(() => {
    //booleanos

    // let isSuperman = true; // implicit or infered type declaration
    // isSuperman = undefined; // el tipo undefined no es asignable a boolean, typescript infered the boolean type
    // let isSuperman: boolean;
    // console.log(isSuperman) // la variables isSuperman se usa antes de asignarla
    let isSuperman: boolean = true; // explicit type declaration, good way, if you can, avoid implicit or infered types.
    let isBatman: boolean = false;
    // console.log(isSuperman) // true
    // console.log(isBatman) // false
    isSuperman = true && false;
    console.log({ isSuperman })

})()