(() => {
    // funcion que tiene solo un argumento obligatorio, y todos los demas opcionales y que reciba cualquier cantidad de argumentos.
    // entonces se usan los rest arguments
    // los rest arguments son los argumentos que no son obligatorios, y se pueden pasar cualquier cantidad de argumentos.
    // los rest arguments se pueden pasar como un arreglo, y se pueden acceder a ellos con el operador spread.
    // por ejemplo, si se quiere pasar un arreglo como argumento, se puede hacer asi:
    const fullName = (firstName: string, ...restNames: string[]): string => {
        return `${firstName} ${restNames.join(' ')}`
    }

    const superman: string = fullName('Clark', 'Joseph', 'Kent')

    console.log({ superman })
})()