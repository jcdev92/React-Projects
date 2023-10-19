(() => {

    // principio de singleton
    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor(public name: string) {

        }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el unico');
            }

            return Apocalipsis.instance;  //? Devuelve el mismo objeto ya que es un singleton
        }

        changeName(newName: string): void {
            this.name = newName;

        }

    }

    // const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico'); //! TypeScript Error: El constructor de la clase 'Apocalipsis' es privado y solo es accesible desde la declaracion de la clase
    
    // atraves del metodo estatico callApocalipsis es que podemos llamarlo, ya que siempre se instacia desde dentro
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis, apocalipsis2, apocalipsis3); // todos son iguales debido a que siempre es la misma instancia privada que se genera internamente

    apocalipsis.changeName('Xavier');
    console.log(apocalipsis, apocalipsis2, apocalipsis3);


})()