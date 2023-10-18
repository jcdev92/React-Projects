(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName?: string
        ) {
            // console.log('Constructor Avenger llamado');
            // console.log(`accediendo al metodo protegido que devuelve: ${this.getFullName()} desde la clase avenger`);
        }

        //? protected 
        // solo voy a poder acceder a este metodo desde la clase, o la clase que lo extienda
        protected getFullName(): string {
            return `${this.name} - ${this.realName || 'No Name'}`;
        }

    }

    const doctorStrange = new Avenger('Doctor Strange', 'Dr. Stephen Strange');
    console.log(doctorStrange);
    // console.log(doctorStrange.getFullName()); //? si intento acceder desde una instancia al metodo protegido getFullName typeScript me marca un error (aunque JS lo corra), como podemos ver solo se puede acceder desde la clase padre o sus extendidos

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName?: string,
            public isMutand?: boolean
        ) {
            super(name, realName);
            // console.log('Constructor Xmen llamado');
            // console.log(`accediendo al metodo protegido que devuelve: ${this.getFullName()} desde la clase extendida de Avenger: Xmen`);
        }

        // un getter es un metodo que devuelve un valor
        get getRealName() {
            // se puede aplciar logia de programacion antes de llamar el gette

            if (!this.realName) {
                return 'No tiene nombre real';
            }
            return `Heroe (${this.name}) real name is: ${this.realName}`;
        }

        // un setter es un metodo que modifica un valor, el recibe un parametro pero no retorna nada.
        set fullName(name: string) {
            // se puede aplciar logia de programacion antes de llamar el setter
            if (name.length < 3) {
                throw new Error('El nombre debe tener al menos 3 caracteres');
            }
            if (!this.realName) {
                this.realName = name;
            }
            this.name = name;
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine.getFullName()); //? si intento acceder desde una instancia al metodo protegido getFullName typeScript me marca un error (aunque JS lo corra), como podemos ver solo se puede acceder desde la clase padre o sus extendidos

    wolverine.fullName = 'Fernando' //? cambiando el valor de la prodpiedad name de la instancia wolverine mediante el uso del setter fullName
    // console.log(wolverine.getRealName); //? a diferencia de los metodos los getter no se ejecutan, solo se llanman.

    const deadpool: Xmen = new Xmen('Deadpool');
    // console.log(deadpool.getRealName); //? probando que la condicion del getter cuando no tiene propiedad realName esta funcionando

    deadpool.fullName = 'Wade Wilson'
    // console.log(deadpool.getRealName); //? probando que la condicion del getter cuando si tiene propiedad realName esta funcionando



})()