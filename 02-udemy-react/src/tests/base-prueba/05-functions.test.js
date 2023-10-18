import {getUser, getActiveUser} from "../../base-pruebas/05-funciones.js";


describe('test in 05-functions', function () {

    test('getUser must return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(userTest);

    })

    test('getActiveUser must return an object', () => {

        const name = 'Juan';
        const userTest = {
            uid: 'ABC567',
            username: name
        };

        const user = getActiveUser(name);
        expect(user).toEqual(userTest);

    })

});