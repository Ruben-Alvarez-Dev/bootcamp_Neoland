/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

let short = [];
let medium = [];
let long = [];

for (const iterator of movies) {
    if (iterator.durationInMinutes > 200) {
        long.push(iterator.name);
    } else if (iterator.durationInMinutes > 100) {
        short.push(iterator.name);
    } else {
        medium.push(iterator.name);
    }
}

console.log("Short:",short);
console.log("Medium:",medium);
console.log("Long:",long);