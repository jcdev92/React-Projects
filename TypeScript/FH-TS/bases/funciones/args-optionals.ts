(() => {
    // funciones con argumentos opcionales en typescript
    // para indicar que un argumento es opcional se agrega un signo de interrogacion al final del nombre del argumento
    // por ejemplo:
    const fullName = (firstName: string, lastName?: string): string => { 
        return `${firstName} ${lastName || 'no lastname'}`;
    }

    const name = fullName('Tony');
    console.log({ name });

    // recordar que en javascript todos los argumentos son opcionales y salvo que apliques alguna logica no hay forma de obligarlos... por eso typescript en tiempo de compilacion te va a dar indicadores o errores para que le des tipo, pero solo en tiempo de compilacion no ejecucion, basicamente mientras vas desarrollando o escribiendo codigo, ya despues se compila a javascript y puede pasar lo que sea.
})()