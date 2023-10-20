"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    conducirBatimovil(batimovil);
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("Joker Says: JAJAJAJA");
        }
    };
    reir(guason);
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    console.log(ciudadGotica(["Joker", "Batman", "Superman", "Robin", "Batwoman"]));
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`Nombre: ${this.nombre} \n Edad: ${this.edad} \n Sexo: ${this.sexo} \n Estado Civil: ${this.estadoCivil}`);
        }
    }
    const persona = new Persona("Barbara Gordon", 30, "Femenino", "Soltero");
    persona.imprimirBio();
})();
//# sourceMappingURL=main.js.map