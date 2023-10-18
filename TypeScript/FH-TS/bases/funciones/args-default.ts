(() => {
    // const fullName = (firstName: string, lastName?: string, upper:boolean): string => {
    //     return `${firstName} ${lastName}`;
    // }  // TypeScript Error: Un parametro obligatorio no puede seguir a un porametro opcional
    // los parametros opcionales deben ir al final, y los obligatorios al principio
    // Una forma de solucionarlo es agregar un valor por defecto al parametro "upper"
    // por ejemplo: upper:boolean = false
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || ''}`;
        }
    }
    // basicamente es como si el parametro upper fuera opcional, pero si no se pasa nada, entonces el valor por defecto es false y si se pasa algo, entonces el valor es true y se ejecuta el codigo dentro del if

    const name = fullName('Juan');
    console.log(name);
    const name2 = fullName('Juan', 'Perez');
    console.log(name2);
    const name3 = fullName('Juan', 'Perez', true);
    console.log(name3);
})()