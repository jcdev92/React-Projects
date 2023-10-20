(() => {
    // Crear interfaces
    interface Auto {
        encender: boolean,
        velocidadMaxima: number,
        acelear(): void
    }

    // Cree una interfaz para validar el auto (el valor enviado por parametro)
    const conducirBatimovil = (auto: Auto): void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    }

    const batimovil: Auto = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    }

    conducirBatimovil(batimovil)

    // Cree una interfaz con que permita utilzar el siguiente objeto
    // utilizando propiedades opcionales

    interface Emociones {
        reir?: boolean,
        comer?: boolean,
        llorar?: boolean
    }

    const guason: Emociones = {
        reir: true,
        comer: true,
        llorar: false
    }

    const reir = (guason: Emociones): void => {
        if (guason.reir) {
            console.log("Joker Says: JAJAJAJA");
        }
    }

    reir(guason);


    // Cree una interfaz para la siguiente funcion

    interface GothamCity {
        (ciudadanos: string[]): number;
    }

    const ciudadGotica: GothamCity = (ciudadanos: string[]): number => {
        return ciudadanos.length;
    }

    console.log(ciudadGotica(["Joker", "Batman", "Superman", "Robin", "Batwoman"]));

    // Cree una interfaz que obligue crear una clase
    // con las siguientes propiedades y metodos

    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */

    interface Citizen {
        nombre: string,
        edad: number,
        sexo: string,
        estadoCivil: string,
        imprimirBio(): void
    }
    class Persona implements Citizen {
        constructor(
            public nombre: string,
            public edad: number,
            public sexo: string,
            public estadoCivil: string
        ) { }
        imprimirBio() {
            console.log(`Nombre: ${this.nombre} \n Edad: ${this.edad} \n Sexo: ${this.sexo} \n Estado Civil: ${this.estadoCivil}`);
        }

    }
    const persona = new Persona("Barbara Gordon", 30, "Femenino", "Soltero");
    persona.imprimirBio();


})()