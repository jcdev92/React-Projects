//* Decoradores
// Los decoradores son funciones que se utilizan para ampliar funcionalidades de clases metodos propiedades etc y simplifica mucho el codigo.
// Los decoradores se ejecutan antes de la creacion de la clase.

function printToConsole(constructor: Function): void {
    console.log(constructor);
}


//* factory decorators
// factory decorators son funciones que devuelven otras funciones
const printToConsoleConditional = (print: boolean = false):Function => {
    if (print) {
        return printToConsole;
    } else {
        return ():void => console.log("greetings");
    }
}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod(id);
            }
        }
    }
}


const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// decoradores anidados
@blockPrototype
@printToConsoleConditional(true)
export class Pokeclass {
    public pubApi: string = `https://pokeapi.co`
    constructor(
        public name: string,
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon ${id} guardado en la base de datos `);
    }
}

