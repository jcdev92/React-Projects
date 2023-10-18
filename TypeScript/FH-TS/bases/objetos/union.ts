(() => {
    //* Union Types

    // tipo personalizado Hero
    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string

    }

    //? union de tipos
    let myCustomVaribale: string | number | Hero = 'Fernando';
    console.log(typeof myCustomVaribale); //? in JS: type string

    myCustomVaribale = 20;
    console.log(typeof myCustomVaribale); //? in JS: type number

    myCustomVaribale = {
        name: 'Bruce',
        age: 43,
        powers: ['Super fuerza']
    }
    console.log(typeof myCustomVaribale); //? in JS: type object

})()