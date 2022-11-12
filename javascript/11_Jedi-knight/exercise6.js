/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap (array, index1, index2) {

    el1 = array[index1];
    el2 = array[index2];

    array.splice(index1, 1, el2);
    array.splice(index2, 1, el1);

  return array
  }

  console.log(swap (fantasticFour, 0, 3))
