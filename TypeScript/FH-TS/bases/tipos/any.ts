(() => {
    // avoid using type any as much as possible
    // TYPE ANY

    let avenger: any = 123;
    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0));
    // casting
    console.log((avenger as string).charAt(0));

    avenger = 123.456;
    // console.log(avenger.toFixed(2));
    // casting way 2
    console.log((<number>avenger).toFixed(2));
})()
