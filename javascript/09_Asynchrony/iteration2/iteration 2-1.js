/* 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await. */

/* const ponTemporizador = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut(); */

const ponTemporizador = async () => {
    await new Promise ((resolve) => {
        setTimeout(() => resolve(), 2000);})
    console.log("Time out!");
}
ponTemporizador();