(() => {
    // never es un tipo de dato que nunca se va a retornar, indica que por ejemplo una funcion tipo never, nunca va tener un punto alcanzable, no va a tener exito por ejemplo. Se suele usar en errores
    // por ejemplo:
    const error = (mensaje: string): never => {
        throw new Error(mensaje);
    }
    error('Auxilio');
    // tambien si usamos una condicion podemos indicar que si falla es never y si no returne algo
    // por ejemplo:
    const errorOrNumber = (mensaje: string): never | number => {
        if (false) {
            throw new Error(mensaje);
        }
        return 1;
    }
})()