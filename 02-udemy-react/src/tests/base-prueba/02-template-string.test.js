import {getGreet} from "../../base-pruebas/02-template-string.js";

describe('test on 02-template-string',  () => {
    test('should return a string', () => {
        const message = getGreet('Carlos');
        expect(typeof message).toBe('string');
    })

   test('should return hello + name', () => {
        const name = 'Carlos';
        const message = getGreet(name);
        expect(message).toBe('Hello ' + name);
    })
});