// JS Basic Algorithms
// Rubén Álvarez

// Iteración #2: Variables avanzadas

/* 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};*/

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25
console.log(character)

/* 1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
console.log("Soy " + firstName + " " + lastName + ", tengo " + age+ " años y me gustan los lobos");

/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29}; */

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
let adittionToy1Toy2 = toy1.price + toy2.price;
console.log(toy1.name, toy1.price)
console.log(toy2.name, toy2.price)
console.log(`Precio total:`, adittionToy1Toy2)

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; */

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(`Precios actualizados de los coches:`);
console.log(car1.name, car1.finalPrice);
console.log(car2.name, car2.finalPrice);
