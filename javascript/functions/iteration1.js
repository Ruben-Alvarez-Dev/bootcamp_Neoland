// JS FUNCTIONS
// Rubén Álvarez

/* Iteración #1: Buscar el máximo
Completa la función que tomando dos números como argumento devuelva el más alto. */



const number1 = 3;
const number2 = 4;
let majorNumber;
WhatNumberIsMajor (number1, number2);

function WhatNumberIsMajor (number1, number2) {
      
      if (number1 > number2) {
            majorNumber = number1;
      } else if (number1 < number2) {
            majorNumber = number2;
      } else if (number1 == number2) {
            majorNumber = "Son iguales";
      } else {
            majorNumber = "Los números no son válidos";
      }
      return majorNumber
};
console.log(majorNumber);