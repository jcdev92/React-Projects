(() => {
    //* Clases en TypeScript

    // class Avenger {
    //     private name: string;
    //     public team: string;
    //     public realName?: string;
    //     static avgAge: number = 35;

    //     constructor(name: string, team: string, realName?: string) {
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;
    //     }
    // }

    // Formas de crear clases en el dia a dia, como en angular por ejemplo.
    class Avenger {
        // propiedad estatica de la clase
        static avgAge: number = 35
        //metodo estatico de la clase
        static getAvgAge(): string {
            return this.name;
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) { }

        // metodos publicos y privados

        // metodo publico
        public bio(): string {
            return `${this.name} (${this.team})`
        }
        // metodo privado
        private getAge(): number {
            return 20
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Captain');
    // accediendo a la propiedad publica realName y anadiendole un valor
    antman.realName = 'Scott Lang';
    console.log(antman); // { name: 'Antman', team: 'Captain', realName: 'Scott Lang' }
    // accediendo a la propiedad privada avgAge, no se puede acceder desde fuera de la clase
    // console.log(Avenger.avgAge); // solo se puede acceder a esta propiedad estatica desde dentro de la clase y no desde una instancia
    console.log(Avenger.getAvgAge()); // Antman // solo se puede acceder a este metodo estatico desde dentro de la clase y no desde una instancia
    // accediendo al metodo publico bio
    console.log(antman.bio()); // Antman (Captain)
    // intentando acceder al metodo privado getAge
    // console.log(antman.getAge()); // TypeScriptError: la propiedad 'getAge' es privada y solo se puede acceder a ella en la clase 'Avenger' 
    // De igual forma como javascript aun no tiene metodos privados, cuando se compile TS a JS.. JS lo correra igual, mostrando en consola el valor retornado por el metodo.

})()