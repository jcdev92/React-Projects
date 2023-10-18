(() => {
    // Type Array

    // const numbers = [1,2,3,4,5,6,7,8,9,10]; // inference Type -- number[]
    // const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; // inference Type -- (string ||number)[]
    // numbers.push(11); // ok
    // numbers.push('12'); // ok
    // numbers.push(true); // Typescript Error: Type 'true' is not assignable to type 'string ||number'.
    // console.log(numbers);

    // const numbers: (number | string | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    // arreglo de tres tipos de datos

    // numbers.push(true);

    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // por lo general usaras arreglos de un solo tipo de dato
    numbers.push(11);
    console.log(numbers);

    const villians: string[] = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toUpperCase()));

})()