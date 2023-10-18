(() => {
    // Funciones Básicas
    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    console.log(sumar(5, 10))
    
    const contar = (heroes: string[]): number => {
        return heroes.length;
    }

    const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);

    //Parametros por defecto
    const llamarBatman = (llamar: boolean = true): void => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    }

    llamarBatman();

    // Rest?
    const unirheroes = (...personas: string[]): string => {
        return personas.join(" & ");
    }

    console.log(unirheroes("Batman", "Gatubela"))

    // Tipo funcion
    const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => { }

    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    // let noHaceNadaTampoco: Function;
    let noHaceNadaTampoco: (n: number, t: string, b: boolean, a: string[]) => void;
    noHaceNadaTampoco = noHaceNada

})()