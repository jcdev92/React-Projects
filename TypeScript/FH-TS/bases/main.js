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
//# sourceMappingURL=main.js.map