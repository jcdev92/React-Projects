(() => {
    //* Clases Abstractas

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    // las clases abstractas no pueden ser instanciadas
    
    // const wolverine: Mutant = new Mutant('Wolverine', 'Logan'); //! TypeScrpt Error: No se puede crear una instancia de una clase abstarcta
    
    // pero si pueden ser extendidas
    // los abstract sirven para que las clases hijas puedan implementar sus metodos abstractos
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo salvado';
        }

    }

    class Villain extends Mutant {
        conquistarAlMundo() {
            return 'Mundo conquistar';
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villain = new Villain('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarAlMundo());

    // tambien sirve para asegurarme que algun argumento cumpla con las caracteristicas de la clase abstracta
    const printName = (character: Mutant) => {
        console.log(character.realName);
    }
    printName(wolverine);
})()