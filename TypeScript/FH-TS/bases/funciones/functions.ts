(() => {
    // aunque typescript pueda inferir el tipo de returno de la funcion, deberiamos indicar el tipo de dato que returna la funcion

    const name: string = 'Fernando';

    // funciton without return
    const hello = (name: string): void => {
        console.log('Hola ' + name);
    };

    hello(name);

    // returning functions
    const activateBatiSignal = (): string => {
        return 'Batiseñal activada';
    }

    console.log(activateBatiSignal());
})()