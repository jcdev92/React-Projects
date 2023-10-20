(() => {

    //* Metodos en la interfaz

    interface Client {
        name: string;
        age?: number;
        address?: Address
        getFullAddress: (id: string) => string;
    }

    //? Interfaz Anidada
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Juan',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            if (id === this.address?.zip) {
                return this.address.city;
            } else {
                return 'No address';
            }
        }
    }

    const client2: Client = {
        name: 'Fernando',
        age: 24,
        address: {
            id: 100,
            zip: 'KY2 USA',
            city: 'Toronto'
        },
        getFullAddress(id: string) {
            // como el metodo getFullAddress es opcional, hacemos una validacion de que adrees y string existan y sean iguales apara asi retornar el string respectivo segun sea el caso
            // si no fuera opcional, con un simple return this.address.city bastaria, debido a que no habria undefined posible en typescript, sin embargo en javascript si pudiera tomar un undefined ya que en js no existen las interfaces
            if (id === this.address?.zip) {
                return this.address.city;
            } else {
                return 'No address';
            }
            // return this.address?.city ?? 'No address'; //? Operador nullish coalescing
            // return this.address?.city || 'No address'; //? Operador ternario
        }
    }

    console.log(client.getFullAddress('KY2 SUD'));
    console.log(client2.getFullAddress('KY2 USA'));
    console.log(client2.getFullAddress('incorrecto'));
})()