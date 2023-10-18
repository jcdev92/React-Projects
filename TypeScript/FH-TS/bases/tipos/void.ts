(() => {
    // void significa vacio
    // cuando una funcion en javascript no tiene un return de forma explicita, y/o no regresa nada, devolvera un void
    // se recomienda colocarlo en dicha funcion

    // por ejemplo:
    function sayHi(name: string): void {
        console.log(`Hi ${name}`);
    }

    sayHi('Juan');

    // arrow function void
    const callSuperman = (): void => {
        return; // retorna un void
    }

    //ayuda mucho a la documentacion y lectura de tus funciones
})()