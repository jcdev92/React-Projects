export const getImagen = async() => {

    try {

        const apiKey = '9whSP2rZD9iRPwEISBx741AEeBxHJmqc';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();



