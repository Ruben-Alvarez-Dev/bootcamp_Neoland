// JS ES6
// Rubén Álvarez

/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18 */

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const result = ages1.filter((elem) => elem > 18);

resumen("5,1", "# Mayores de 18", result);

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par. */

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const result2 = ages2.filter((elem) => elem % 2 == 0);

resumen("5,2", "# Números pares", result2);

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const swap3 = streamers1.filter(
  (game) => (game.gameMorePlayed = "League of Legends")
);
const result3 = swap3.map((nombre) => nombre.name);

resumen("5,3", "# Filtrado por juego favorito", result3);

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación. */

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

/* 

Estas dos líneas eran lo original, al final lo pasamos a multimétodo.

const swap4 = streamers2.filter(included => included.name.includes(`u`));
const result4 = swap4.map(nombre => nombre.name);

*/

const result4 = streamers2
  .filter((included) => included.name.includes(`u`))
  .map((nombre) => nombre.name);

resumen("5,4", `# Filter que incluya "u" en el nombre`, result4);

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */

const swap5 = streamers2.filter((word) =>
  word.gameMorePlayed.includes(`Legend`)
);
swap5.forEach((e) => (e.age > 35 ? (e.name = e.name.toUpperCase()) : 0));
const result5 = swap5.map((nombre) => nombre.name);

resumen("5,5", "# Filtro por string, por edad y cambio a mayus", result5);

/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */
// EN CARPETA SEPARADA


/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar 
por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */

const streamers4 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function resumen(exercise, keyWord, result) {
  console.log();
  console.log(`Ejercicio ${exercise}`, keyWord);
  console.log(`Resultado:`, result);
  console.log("____________________________________________________");
  console.log();
}
