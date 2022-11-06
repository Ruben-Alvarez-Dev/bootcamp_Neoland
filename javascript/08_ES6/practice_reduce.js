// array de pilotos (id, nombre y años de experiencia)

var pilots = [
  { id: 10, name: "Poe Dameron", years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: "Tallissan Lintra", years: 16 },
  { id: 99, name: "Ello Asty", years: 22 },
];

// quiero el total de años de experiencia de todos.
// de normal, haría un forof, e iría sumando en un acumulador

let acumulador = 0;
for (const key in pilots) {
  acumulador = acumulador + pilots[key].years;
}
console.log();
console.log("Aquí no es necesario un nuevo array");
resumen("FOR IN", acumulador);

// ahora voy a hacerlo con método foreach()

const nuevoArray2 = [];
pilots.forEach(campoNuevo => {nuevoArray2.push(campoNuevo.years)});
let acumulador2 = 0;
for (const sumando2 of nuevoArray2) {
    acumulador2 = acumulador2 + sumando2
}
console.log("Elementos de nuevoArray2:", nuevoArray2);
resumen (".FOREACH:", acumulador2);

// probamos con método map()

const nuevoArray3 = pilots.map(nuevoElemento => nuevoElemento.years);
let acumulador3 = 0
for (const sumando3 of nuevoArray3) {
    acumulador3 = acumulador3 + sumando3
}

console.log("Elementos de nuevoArray3:", nuevoArray3);
resumen (".MAP:", acumulador3);

// veamos qué podemos hacer con método filter()
// aquí sólo podemos acotar a resultados mayores que cero
// no es lógico usar esto, ya que tenemos que hacer 2 pasadas más.


const nuevoArray4 = pilots.filter(nuevoElemento4 => nuevoElemento4.years > 0)

// con método find sería igual, incluso peor porque nos devuelve sólo la primera coincidencia de valor, dejaándose el resto atrás, como un queryselector.


// Ahora analizamoe el método reduce()

const acumulador4 = pilots.reduce((sumando4, nuevoElemento4) => sumando4 + nuevoElemento4.years, 0);

console.log("Aquí el array se declara y se procesa en la misma línea");
resumen (".REDUCE:", acumulador4)








function resumen(param, param2) {
  console.log(`Versión ${param}`, param2);
  console.log("_____________________________________________");
  console.log();

}
