(() => {
    // this is considered an array
    // const hero = ['Dr Strange', 10];
    
    // this is considered an array for javascript but a tuple for typescript
    const hero: [string, number] = ['Dr Strange', 10];

    // hero[1] = 'Ironman'; // El tipo "string" no puede ser asignado al tipo "number"
    // hero[0] = 50; // El tipo "number" no puede ser asignado al tipo "string"

    hero[0] = 'Ironman'; // Ok
    hero[1] = 50; // Ok

    console.log(hero);
})()