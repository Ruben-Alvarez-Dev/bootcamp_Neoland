// JS DOM
// Rubén Álvarez

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const itemShowme = document.querySelector(".showme");
console.log(itemShowme);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const itemPillado = document.querySelector("#pillado");
console.log(itemPillado);


// 1.3 Usa querySelector para mostrar por consola todos los p

const itemP = document.querySelector("p");
console.log(itemP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const itemPokemon = document.querySelectorAll(".pokemon");
console.log(itemPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const itemTestme = document.querySelectorAll("[data-function = 'testMe']");
console.log(itemTestme);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const itemTestme3 = document.querySelector("body:nth-child(13)");
console.log(itemTestme3);
