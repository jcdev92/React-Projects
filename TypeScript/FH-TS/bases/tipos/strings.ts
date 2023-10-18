(() => {
    // type string
    const batman: string = 'Batman';
    // const superman: string = 'Superman';
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'No esta presente');

})()