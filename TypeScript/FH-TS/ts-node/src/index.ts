import { Pokeclass } from "./decorators/poke-class";

const charmander = new Pokeclass('Charmander');


// intentando expandir el prototipo de la clase
// (Pokeclass.prototype as any).customName = 'Pikacha' //? no deberia dejarnos ya que con el decorador de bloqueo estamos evitando que esto se pueda hacer

// console.log(charmander); // efectivamente: //!TypeError: Cannot add property customName, object is not extensible

charmander.savePokemonToDB(125)