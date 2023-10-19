"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Villain extends Mutant {
        conquistarAlMundo() {
            return 'Mundo conquistar';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarAlMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
})();
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
        }
        getFullName() {
            return `${this.name} - ${this.realName || 'No Name'}`;
        }
    }
    const doctorStrange = new Avenger('Doctor Strange', 'Dr. Stephen Strange');
    console.log(doctorStrange);
    class Xmen extends Avenger {
        constructor(name, realName, isMutand) {
            super(name, realName);
            this.isMutand = isMutand;
        }
        get getRealName() {
            if (!this.realName) {
                return 'No tiene nombre real';
            }
            return `Heroe (${this.name}) real name is: ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe tener al menos 3 caracteres');
            }
            if (!this.realName) {
                this.realName = name;
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Fernando';
    const deadpool = new Xmen('Deadpool');
    deadpool.fullName = 'Wade Wilson';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis, apocalipsis2, apocalipsis3);
    apocalipsis.changeName('Xavier');
    console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map