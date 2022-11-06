// JS ES6
// Rubén Álvarez

/* 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map(). */

console.log();
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const listaUsers = users1.map(valor => valor.name);
console.log(listaUsers);
console.log();

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'. */

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

for (const key in users2) {
    
    ([...users2[key].name].includes(`A`)) ?
	users2[key].name = `Anacleto`:
	0 ;
}

console.log(users2.map(elemento => elemento.name));
console.log();

/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true. */

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

for (const key in cities) {
	(cities[key].isVisited == true) ? cities[key].name += " (Visited)" : 0 ;
}

console.log("Ciudades:", cities.map(city => city.name));
console.log();
