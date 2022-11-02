// JS REVIEW BASICS
// Rubén Álvarez

/* **Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante. */

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const pos1 = 0
const pos2 = 1

swap(pos1, pos2)

function swap(pos1, pos2) {

    
    
    const value1 = (array.splice(pos1, 1, 0)).toString();
    const value2 = (array.splice(pos2, 1, 0)).toString();
    array.splice(pos1, 1, value2);
    array.splice(pos2, 1, value1);
    console.log(array);
    
}


