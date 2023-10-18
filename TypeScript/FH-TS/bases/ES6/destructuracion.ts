(() => {
    //* Destructurando Objetos 

    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123
    }

    //* destructurando objetos
    const { poder, vision } = avengers
    console.log(poder.toFixed(2), vision.toUpperCase())

    //* destructurando objeto como parametros de una funcion
    const printAvenger = ({ ironman, ...resto }: Avenger): void => {
        console.log(ironman, resto)
    }
    printAvenger(avengers)

    //* Destructurando Arrays
    // const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk']

    //? destructurando el segundo elemento del array
    // const [, ironman,] = avengersArr
    // console.log(ironman)

    const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.126]
    const [capitan, , fuerza] = avengersArr
    console.log(capitan, fuerza.toFixed(2))

})()