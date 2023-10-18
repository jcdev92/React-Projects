(() => {
    // the enum type sirve para hacer enumaraciones
    enum audioLevel {
        min = 1,
        medium, // este es el valor por defecto, si no se especifica, el valor por defecto es el siguiente al del anterior enum.
        max = 10
    }

    let currentAudio = audioLevel.medium;
    console.log(currentAudio);
    console.log(audioLevel);
})()