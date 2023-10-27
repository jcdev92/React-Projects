import { Pokeclass } from "./decorators/poke-class";

const charmander = new Pokeclass('Charmander');


// intentando expandir el prototipo de la clase
// (Pokeclass.prototype as any).customName = 'Pikacha' //? no deberia dejarnos ya que con el decorador de bloqueo estamos evitando que esto se pueda hacer

// console.log(charmander); // efectivamente: //!TypeError: Cannot add property customName, object is not extensible

// charmander.savePokemonToDB(125)

charmander.pubApi = 'https://pokeapi.co/api/v2/pokemon/4' //! index.ts:9  Uncaught TypeError: Cannot assign to read only property 'pubApi' of object '#<Pokeclass>' 
//? el decorador esta funcionando y bloquea la modificacion de la propiedad privada en tiempo de ejecucion, ya no solamente es typescript adviritendo en tiempo de transpilacion de ts a js.
console.log(charmander);