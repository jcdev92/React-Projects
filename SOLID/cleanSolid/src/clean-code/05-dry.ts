// Principio Dry, evitar repetir.
type Size = '' | 'S' | 'M' | 'XL';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    isProductReady(): boolean {
        //? DRY
        // aplicando el principio DRY
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`Sorry, ${typeof key} is not supported`)
            };
        };
        return true
    };


    toString() {
        // No Dry (Validaciones sin seguir el principio DRY (Do not Repeat Yourself))
        // if (this.name.length <= 0) throw new Error('Name is empty');
        // if (this.price <= 0) throw new Error('Price is zero');
        // if (this.size.length <= 0) throw new Error('Size is empty');

        //? DRY
        // aplicando el principio DRY
        if (!this.isProductReady()) return;

        return `${this.name} (${this.price}), ${this.size}`;
    };
};


(() => {
    const bluePants = new Product('Blue Large Pant', 10, 'M');
    console.log(bluePants.toString())

})();