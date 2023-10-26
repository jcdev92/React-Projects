//* Import y Export en TypeScript\


// import { Hero } from "./classes/Hero"; 

// const ironman = new Hero('Ironman', 3, 45);
// console.log(ironman);


//* Alias a una importacion:

//! ya tenemos una vairble hero
const hero = 134

//? entonces nombramos el objeto importado Hero con un alias
// import { Hero as SuperHero } from "./classes/Hero";
// const ironman = new SuperHero('Ironman', 3, 45);

// or 

import * as HeroClasses from "./classes/Hero";
const ironman = new HeroClasses.Hero('Ironman', 3, 45);
const ironPower = new HeroClasses.Power(5, 'Flying');

console.log(`hero name: ${ironman.name} and power: ${ironPower.name}`);

// defaul import
import powers from "./data/powers";

console.log(powers)


// home work
console.log(ironman.power)






