(() => {
    //* Clases Abstractas

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    // const wolverine: Mutant = new Mutant('Wolverine', 'Logan'); //! TypeScrpt Error: No se puede crear una instancia de una clase abstarcta

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

    // tambien sirve cuando se espera como parametro algo que sea extendido de la clase
    const printName = (character: Mutant) => {
        console.log(character.realName);
    }
    printName(wolverine);
})()