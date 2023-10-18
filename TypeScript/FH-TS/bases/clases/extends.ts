(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName?: string
        ) {
            console.log('Constructor Avenger llamado');
            console.log(`accediendo al metodo protegido que devuelve: ${this.getFullName()} desde la clase avenger`);
        }

        //? protected 
        // solo voy a poder acceder a este metodo desde la clase, o la clase que lo extienda
        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }

    }

    const doctorStrange = new Avenger('Doctor Strange', 'Dr. Stephen Strange');
    console.log(doctorStrange);
    // console.log(doctorStrange.getFullName()); //? si intento acceder desde una instancia al metodo protegido getFullName typeScript me marca un error (aunque JS lo corra), como podemos ver solo se puede acceder desde la clase padre o sus extendidos

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutand: boolean
        ) {
            super(name, realName);
            console.log('Constructor Xmen llamado');
            console.log(`accediendo al metodo protegido que devuelve: ${this.getFullName()} desde la clase extendida de Avenger: Xmen`);
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    // console.log(wolverine.getFullName()); //? si intento acceder desde una instancia al metodo protegido getFullName typeScript me marca un error (aunque JS lo corra), como podemos ver solo se puede acceder desde la clase padre o sus extendidos


})()