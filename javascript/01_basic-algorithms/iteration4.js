// JS Basic Algorithms
// Rubén Álvarez

// Iteración #4: Arrays

/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let searched = "HULK";
let sizeSearched = searched.length
let possition = avengers.indexOf(searched)
console.log(`Posición:`, possition);
console.log(`Tamaño:  `, sizeSearched, `caracteres`);
console.log(avengers[possition]);


/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */

const avengersModified = avengers
let replaceTo = "IRONMAN";
avengersModified[possition] = replaceTo;
console.log(avengersModified);

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */

let sizeArray = avengers.length
console.log(sizeArray)

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]; */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
let adding1 = "Morty";
let adding2 = "Summer";
rickAndMortyCharacters.push(adding1, adding2);
console.log(rickAndMortyCharacters);

/* TODAVIA NO
1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

rickAndMortyCharacters.pop();
let newArraySize = rickAndMortyCharacters.length;
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[newArraySize - 1]);


/* TODAVIA NO
1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log(rickAndMortyCharacters2);
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);