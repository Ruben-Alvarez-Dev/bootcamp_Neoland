// Rubén Álvarez
// DAW - Programación A


/* El programa consiste en trabajar con una variable que contiene
la información: “ilerna online programacion a 1º semestre 2023”

Se pide:

Imprimir por consola la variable en mayúsculas sin espacios
Imprimir por consola el total de consonantes de la variable
Imprimir por consola el total de números que tiene la variable
Imprimir por consola solo las consonantes y en el orden que las
va encontrando.

variable = "ilerna online programacion a 1º semestre 2023"
String consonantes = "bcdfghjklmnñpqrstvwxyz";
String numeros = "0123456789"; */

// declaro variavles
const mainSentence = `ilerna online programacion a 1º semestre 2023`;
const consonants = `bcdfghjklmnñpqrstvwxyz`;
const numbers = `0123456789`;
const vowels = `aeiou`;
console.log(); // separador
console.log(`// Rubén Álvarez`);
console.log(`// DAW - Programación A`);
console.log(`// UF1 - actividad 1`);
console.log(); // separador

// saco los espacios y llevo a mayúsculas
const justCharacters = mainSentence
    .split(` `)
    .join(``)
    .toUpperCase()
;
console.log(`Punto 1:`, justCharacters, `(sin espacios)`);
console.log(); // separador

// itero la cadena incidiendo en las consonantes, con contador
let i = 0;
for (const key of mainSentence) {
    consonants.includes(key) ?
        i++ :
        0;
    }
console.log(`Punto 2:`, i, `consonantes`);
console.log(); // separador

// itero la cadena incidiendo en los números, con contador
let j = 0;
for (const key of mainSentence) {
    numbers.includes(key) ?
        j++ :
        0;
    }
console.log(`Punto 3:`, j, `números`);
console.log(); // separador

//
let stringToShow = "";
for (const key of mainSentence) {
    consonants.includes(key) ?
        stringToShow += key :
        0;
    }
console.log(`Punto 4:`, stringToShow, `(sólo consonantes)`);
console.log(); // separador