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






/* 
const numRegistros = avengers.length;
console.log();
console.log(`Numero de registros: ${numRegistros}`);
console.log();

const registroNumeroMayor = avengers[numRegistros - 1];
console.log(registroNumeroMayor);
const registroNumeroMenor = avengers[numRegistros -2];
console.log(registroNumeroMenor);



if registroNumeroMayor.length > registroNumeroMenor.length {
      valorMayor = registroNumeroMayor
} else if registroNumeroMayor.length 
 */