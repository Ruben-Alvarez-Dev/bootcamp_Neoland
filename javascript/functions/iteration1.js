// JS FUNCTIONS
// Rubén Álvarez

/* Iteración #1: Buscar el máximo
Completa la función que tomando dos números como argumento devuelva el más alto. */

let number1 = 3;
let number2 = 4;
let majorNumber;
WhatNumberIsMajor (number1, number2);

function WhatNumberIsMajor (number1, number2) {
      
      if (number1 > number2) {
            majorNumber = number1
//            console.log(number1);
      } else if (number1 < number2) {
            majorNumber = number2
//            console.log(number2);
      } else if (number1 == number2) {
            majorNumber = "Son iguales"
//            console.log("Son iguales");
      } else {
            majorNumber = "Los números no son válidos"
//            console.log("Los números no son válidos");
      }
      return majorNumber
};
console.log(majorNumber);


/* **Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function encuentraPalabraMasLarga(arrayQueEnvio) {

      let valorMasGrandeHastaElMomento = "";


      avengers.forEach((registro) => {
            if (valorMasGrandeHastaElMomento.length < registro.length) {
                  valorMasGrandeHastaElMomento = registro;
      
            }
      });
      return valorMasGrandeHastaElMomento;
};

console.log(encuentraPalabraMasLarga(avengers));


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