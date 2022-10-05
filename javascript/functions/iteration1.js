// JS FUNCTIONS
// Rubén Álvarez

/* Iteración #1: Buscar el máximo
Completa la función que tomando dos números como argumento devuelva el más alto. */



/* let number1 = 3;
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
console.log(majorNumber); */





/* **Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */





/* const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

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
 */





/*  Iteración #3: Calcular la suma

Calcular una suma puede ser tan simple com iterar sobre un array y sumar cada uno de los elementos.
Implementa la función denominada sumNumbers que toma un array de números como
argumento y devuelve la suma de todos los números de la matriz.

Puedes usar este array para probar la función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
} */


/* const numbers = [1, 2, 3, 5, 45, 37, 58]
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
} */


/* **Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

/* const numbers2 = [12, 21, 38, 5, 45, 37, 6];
let totalSum2 = 0;
let averageResult = 0;

average(numbers2);

function average(parameter) {
    
    averageResult = 0;

        numbers2.forEach(element => {
            totalSum2 = totalSum2 + element
        })
    
    averageResult = totalSum2 / numbers2.length;
    return averageResult;
}

console.log("Resultado:", averageResult) */




/* **Iteración #5: Calcular promedio de strings**
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
 y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
 */
/*  const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
 function averageWord(param) {
   // insert code
 }
 */


/* const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

averageWord(mixedElements);

function averageWord(param) {

    let sumatorio = 0

        mixedElements.forEach(element => {
            if (typeof element === "number") {
                sumatorio = sumatorio + element;
            } else if (typeof element === "string") {
                sumatorio = sumatorio + (element.length)
            }
        });
    sum2 = sumatorio
    return sum2
}

console.log(sum2); */



/* **Iteración #6: Valores únicos**
Crea una función que reciba por parámetro un array y compruebe si existen elementos 
duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Puedes usar este array para probar tu función: */

/* const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  let newArray = duplicates;
  
removeDuplicates(duplicates);
console.log("Este es el nuevo array:", newArray);

  
function removeDuplicates(param) {
    let valor1 = valor2 = 0;
        for (valor1; valor1 < duplicates.length; valor1++) {
            for (valor2 = 0; valor2 < duplicates.length; valor2++) {
                if (duplicates[valor1] == duplicates[valor2]) {
                    if (valor1 !== valor2) {
                        console.log("ENCONTRADO UNO");
                        newArray.splice(valor2, 1);
                        console.log("He modificado la posición: ", valor2);
                    }
                }   
            }
        }
    return (newArray);
} */

