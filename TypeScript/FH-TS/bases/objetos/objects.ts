(() => {
    //* Object Literal
    //* Un objeto literal es una forma de crear un objeto en Typescript.

    // let flash = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['Super velocidad', 'Viajar en el tiempo']
    // }

    // flash = {
    //name2: "gabriel barry" //! Typescript no permite que crees una propiedad nueva por encima de las demas, aunque en javascript es permitido. De querer hacer esto, tenemos que indicarselo manualmente a typescirpt.
    // name: 50, //! el tipo 'number' no se puede asignar al tip 'string'
    // age: 'veinte', //! el tipo 'string' no se puede asignar al tipo 'number'
    // powers: [true, 90], //! el tipo 'boolean' no se puede asignar al tipo 'string', el tipo 'number' no se puede asignar al tipo 'string'
    // name: 'Clark Kent', //? ok
    // age: 30, //? ok
    // powers: ['volar'], //? ok
    // getName: () => {
    // return this.name; //! TypeScript Error:  El literal objeto solo puede especificar propiedades conocidas y 'getName' no exitse en el tipo {name: string; age: number; powers: string[];
    //  }
    // }

    // mas adelante veremos las reglas que debemos poner cuando creamos el objeto para que typescrip sepa que vamos a poder definir mas adelante.
    //* Fernando Herrera recomienda para el tipado de objetos, crear y usar un tipo Type o una Interfaz.

    // --------------------------------------- //

    //* Definiendo los tipos en la declaracion del objeto

    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    flash = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super velocidad'],
        //? getName es opcional, por lo que no es necesario que se defina.  
    }

})()    