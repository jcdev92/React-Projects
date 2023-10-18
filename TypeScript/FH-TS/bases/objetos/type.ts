(() => {
    // tipos especificos
    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    //! tipado de objeto literal al momento de declararla
    // let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['Super velocidad', 'Viajar en el tiempo'],
    //     getName() {
    //         return this.name;
    //     }
    // }
    // let superman: { name: string, age: number, powers: string[], getName?: () => string } = {
    //     name: 'Calrk Kent',
    //     age: 30,
    //     powers: ['Volar', 'Rayos'],
    //     getName() {
    //         return this.name;
    //     }
    // }

    //* VS
    
    //? Tipado de objeto literal usando el type Hero
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    let superman: Hero = {
        name: 'Calrk Kent',
        age: 30,
        powers: ['Volar', 'Rayos'],
        getName() {
            return this.name;
        }
    }

    // --------------------------------------- //

})()