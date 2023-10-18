(() => {
    // argumentos requeridos
    // estos argumentos son obligatorios, y deben ser colocados en el mismo orden en que se declararon en la funcion.
    // Typescript te va a recordar y a exigir que coloques el mismo tipo al argumento, que le estas indicando en el paramtro de la funcion.

    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }
    // const name = fullName('Juan', 55); //TypeScript Error: No se puede asignar un argumento de tipo "number" al parametro de tipo "string". En referencia al 55 del segundo parametro pasado.

    // const name = fullName(); // TypeScript Error: Se esperabana 2 argumentos pero se obtuvieron 0

    const name = fullName('Juan', 'Perez');
    console.log(name);
})()