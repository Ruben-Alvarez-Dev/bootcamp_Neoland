// JS LOOPS
// Rubén Álvarez

/***Iteración #6: Mixed For...of e includes**
Usa un bucle **for...of** para recorrer todos los juguetes y elimina
los que incluyan la palabra gato. Recuerda que puedes usar la función
***.includes()*** para comprobarlo.Puedes usar este array: */

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];

let i = 0;
hayGatoEncerrado(toys);
hayGatoEncerrado(toys);

function hayGatoEncerrado(param) {
i = 0
   
    for (const iterator of param) {

            if (iterator.name.includes("gato")) {
                param.splice(i, 1)
                esVerdad = true
            } else {
                esVerdad = false
                // console.log("No hay Gato Encerrado");
            }

        i++
    }

     
}

/* for (const iterator of toys) {

    if (iterator.name.includes("gato")) {
        toys.splice(i, 1)
        // esVerdad = true
    } else {
        esVerdad = false
        console.log("No hay Gato Encerrado");
    }

i++
}
 */
console.log(toys);