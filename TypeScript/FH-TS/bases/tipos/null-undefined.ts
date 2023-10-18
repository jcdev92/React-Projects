(() => {
    // En las ultimas versiones de typescript no puedes asignarle undefined o null a un tipo de dato como por ejmplo number, bool, etc

    // let nada: number = undefined // TypeScript Error: el tipo de dato 'undefined' no puede ser asogando al tipo 'number'

    // en caso de que quieras o necesites asignarle undefined a un tipo de dato como por ejemplo number, bool, etc puedes hacerlo de la siguiente manera:

    let nada: number | undefined = undefined

    // o tambien desactivando el strictNullChecks en el tsconfig.json, de true a false. (evitar en lo posible desactivar esto, o en general hacer menos restringido a typscript)

    // En teoria en javascript se puede asignar a un booleano: true, false, undefined y null. Pero en typescript con esta restrcioon de strictNullCheks ya no puedes, al menos te va a avisar marcando el error. 

})()