// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const result = numbers.find(elem => elem == 100);
const posicion = numbers.indexOf(result);
console.log(result, "está en la posición", posicion);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movie = movies.find(elem => elem.date == 2010);
console.log("La película es:", movie.title);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const fAlien = `Cucushumushu`;
const fMutations = `Porompompero`;

aliens.find(alien => alien.name = fAlien);
mutations.find(mutation => mutation.name = fMutations);
const newCollection = {...aliens, mutation: mutations}
console.log(newCollection);



