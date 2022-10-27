// JS FUNCTIONS
// Rubén Álvarez

/*  Iteración #3: Calcular la suma

Calcular una suma puede ser tan simple com iterar sobre un array y sumar cada uno de los elementos.
Implementa la función denominada sumNumbers que toma un array de números como
argumento y devuelve la suma de todos los números de la matriz.

Puedes usar este array para probar la función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
} */


const numbers = [1, 2, 3, 5, 45, 37, 58]
let totalSum = 0

sumNumbers(numbers);
   
function sumNumbers(myArray) {
   
      numbers.forEach(element => {
         console.log("Valor de element:", element);
         totalSum = totalSum + element;
         console.log(totalSum);
         }
      );

   return totalSum;
}

