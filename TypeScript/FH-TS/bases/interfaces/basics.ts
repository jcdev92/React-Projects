(() => {
    //* Interfaces
    //*     Puntualmente aprenderemos:

    // ¿Por qué es necesario una interfaz?
    //? Es una forma de definir el comportamiento de un objeto.
    // ¿Cómo creamos una interfaz básica?
    //? Usamos la palabra reservada 'interface'.
    // Crear propiedades opcionales
    // Crear métodos
    // Asignar interfaces a las clases

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
        getName() {
            return this.name;
        }
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 2],
    }

    //? La diferencia entre un 'type' y un 'interface' es que la ultima puede ser extendida, mientras que el tipo siempre va ser lo que se haya definido en un principio
    console.log(flash.getName?.())
})()