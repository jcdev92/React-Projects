(() => {
    // Type Function
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hola ${name}`;
    const saveTheWorld = (): string => `El mundo está salvado!`;

    let myFunction: Function; // type function, its working on any asignation
    
    //? let myFunction: (x: number, y: number) => number; //-- its only validate the type on addNumbers function asignation
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    
    //? let myFunction: (x: string) => string; //-- its only validate the type on greet function asignation 
    myFunction = greet;
    console.log(myFunction('Juan'));
    
    //? let myFunction: () => string; //-- its only validate the type on saveTheWorld function asignation
    myFunction = saveTheWorld;
    console.log(myFunction());
})()