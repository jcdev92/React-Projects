import {retornaArreglo} from "../../base-pruebas/07-deses-arr.js";

describe('Pruebas en desestructuracion', () => {
    test('debe de retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]

        expect(letras).toEqual(expect.any(String));
        expect(numeros).toEqual(expect.any(Number));
    });
});