describe('Test on <DemoComponent />',  () => {

    test('msg1 and msg2 must be equal', () => {
        // 1. initialize
        const message1 = 'Hello World';
        // 2. boost
        const message2 = message1.trim()
        // 3. assert
        expect(message1).toBe(message2)
    })

});

