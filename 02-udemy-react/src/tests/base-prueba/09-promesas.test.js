import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas.js";
import heroes from "../../data/heroes.js";


describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('getHeroeByIdAsync debe retornar un error si el heroe por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el id ${ id }`);
                console.log(error);
                done();
            });
    });
})