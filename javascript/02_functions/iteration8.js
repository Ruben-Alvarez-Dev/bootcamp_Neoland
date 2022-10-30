// JS FUNCTIONS
// Rubén Álvarez

/* **Iteration #8: Contador de repeticiones**
Crea una función que nos devuelva el número de veces que se repite cada una
de las palabras que lo conforma.  Puedes usar este array para probar tu
función:
 */



// DECLARACIONES

const array = ['code','repeat','eat','sleep','code','enjoy','sleep',
  'code','enjoy','upgrade','code'];
const originalArray = [...array];

// PREPARACION DEL ARRAY AUXILIAR, QUE SERÁ INDICE.

const arrayAux = array;
arrayAux.sort();

repasar();
repasar();

function repasar() {
    for (let indexAux = 0; indexAux < array.length; indexAux++) {
      const elementAux = array[indexAux];
      
        if (elementAux == array[indexAux + 1]) {
          const heBorrado = arrayAux.splice(indexAux + 1, 1)
          // console.log("He borrado:", heBorrado, "de iteración:", indexAux + 1);
        }
    }
}

// console.log(arrayAux);


for (let index = 0; index < arrayAux.length; index++) {
  const element = array[index];
  // console.log(array);
  buscarDuplicados (arrayAux[index], originalArray)  
}


function buscarDuplicados (elemento, where) {
  let i = 0;

    for (let index = 0; index < where.length; index++) {
      
      if (elemento == where[index]) {
        i++
      } else {

      }
      // console.log(i);
      
    }

  console.log("ELEMENTO:", elemento, "se repite", i, "veces");


}

// console.log(originalArray);
