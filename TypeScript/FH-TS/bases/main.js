"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        getAge() {
            return 20;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captain');
    antman.realName = 'Scott Lang';
    console.log(antman);
    console.log(Avenger.getAvgAge());
    console.log(antman.bio());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
            console.log(`accediendo al metodo protegido que devuelve: ${this.getFullName()} desde la clase avenger`);
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    const doctorStrange = new Avenger('Doctor Strange', 'Dr. Stephen Strange');
    console.log(doctorStrange);
    class Xmen extends Avenger {
        constructor(name, realName, isMutand) {
            super(name, realName);
            this.isMutand = isMutand;
            console.log('Constructor Xmen llamado');
            console.log(`accediendo al metodo protegido que devuelve: ${this.getFullName()} desde la clase extendida de Avenger: Xmen`);
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
})();
//# sourceMappingURL=main.js.map