// Principle Interface Segregation // principio de segregacion de interfaces

//? Implementing Principle IS
interface Bird {
    eat(): void;
    walk(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}


class Tucan implements Bird, FlyingBird {
    public fly() { };
    public walk() { };
    public eat() { };
};

class Humminbird implements Bird, FlyingBird {
    public fly() { };
    public walk() { };
    public eat() { };
};

class Ostrich implements Bird, RunningBird {
    public walk() { };
    public run() { };
    public eat() { };
};

class Penguin implements Bird, SwimmerBird {
    public walk() { };
    public eat() { };
    public swim() { };
};


//? Not Implementign the IS principle
// interface Bird {
//     fly(): void;
//     walk(): void;
//     run(): void;
//     eat(): void;
//     swim(): void;
// }


// class Tucan implements Bird {
//     public fly() {};
//     public walk() {};
//     public run() {};
//     public eat() {};
//     public swim() {};
// };

// class Humminbird implements Bird {
//     public fly() {};
//     public walk() {};
//     public run() {};
//     public eat() {};
//     public swim() {};
// };

// class Ostrich implements Bird {
//     public fly() {};
//     public walk() {};
//     public run() {};
//     public eat() {};
//     public swim() {};
// };

// class Penguin implements Bird {
//     public fly() {};
//     public walk() {};
//     public run() {};
//     public eat() {};
//     public swim() {};
// };