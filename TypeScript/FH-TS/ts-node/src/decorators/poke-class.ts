//* Decoradores
// Los decoradores son funciones que se utilizan para ampliar funcionalidades de clases metodos propiedades etc y simplifica mucho el codigo.
// Los decoradores se ejecutan antes de la creacion de la clase.

function printToConsole(constructor: Function): void {
    console.log(constructor)
}


//* factory decorators
const printToConsoleConditional = (print: boolean = false):Function => {
    if (print) {
        return printToConsole;
    } else {
        return ():void => console.log("greetings")
    }
}

@printToConsoleConditional(true)
export class Pokeclass {
    public pubApi: string = `https://pokeapi.co`
    constructor(
        public name: string,
    ) {}
}

