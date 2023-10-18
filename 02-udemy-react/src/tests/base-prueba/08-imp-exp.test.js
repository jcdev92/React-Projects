import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp.js";
import heroes from "../../data/heroes.js";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {

        const id = 100;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toBeFalsy();

    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
        expect( heroes.length ).toBe( 3 );
        console.log(heroes);
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
        expect( heroes.length ).toBe( 2 );
        console.log(heroes);
    })

});