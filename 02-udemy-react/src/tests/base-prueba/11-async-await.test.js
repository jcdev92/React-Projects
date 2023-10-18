import {getImagen} from "../../base-pruebas/11-async-await.js";


describe('Pruebas con async-await y Fetch', () => {
    test('Debe de retornar el url de la imagen', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
        console.log(url);
    })
})