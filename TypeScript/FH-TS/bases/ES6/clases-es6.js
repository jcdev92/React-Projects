(()=>{
    //* POO en JavaScript 
    // Si bien logra hacer el trabajo tiene muchas deficiencias y se presta a muchos errores a pesar de que ha mejorado en las ultimas versiones de emascript.
    // Las clasaes en js se introdujeron con ES6.
    // Mas adelante veremos clases en TypeScript que si estan pensadas en POO

    class Avenger {
        name;
        power;
        constructor(name = 'Sin nombre', power = 0) {
            this.name = name;
            this.power = power;
        }

    }

    // class flyingAvenger extends Avenger {
    //     flying;
    //     constructor() {   
    //         this.flying = true; //! al crear una instacia asi como esta esto, arrojaria un error gracias a partir de ecmascript 6, el cual te indica que debes llamar a super() antes de llamar a this(constructor), ya que si no, no podras acceder a los atributos de la clase padre.
    //     }
    // }

    class flyingAvenger extends Avenger {
        flying;
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9000);
    console.log(hulk);
    const falcon = new flyingAvenger('Falcon', 50);
    console.log(falcon);

})()