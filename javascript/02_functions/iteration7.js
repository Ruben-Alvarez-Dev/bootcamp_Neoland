// JS FUNCTIONS
// Rubén Álvarez

/* **Iteración #7: Buscador de nombres**
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe
dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve
un true y la posición de dicho elemento y por la contra un false. Puedes usar este array
para probar tu función: */

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
  
const nameToFind = "Clint";
// whereIsTheName (nameToFind);
existName (nameToFind);

function existName (param) {
   // "const verify =" puede omitirse antes
    names.includes(nameToFind) ? console.log("Está en la posición:", names.indexOf(nameToFind)) : console.log("NO EXISTE");
}