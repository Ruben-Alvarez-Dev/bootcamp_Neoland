// JS LOOPS
// Rubén Álvarez

/* **Iteración #1: Usa includes**
Haz un bucle y muestra por consola todos aquellos valores del array
que incluyan la palabra "Camiseta". Usa la función .***includes***
de javascript. */

const products = [
    'Camiseta de Pokemon',
    'Pantalón coquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinrurón de Orión',
    'AC/DC Camiseta'
];

const word = "Camiseta"

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.includes(word)) {
        console.log(products[index], "contiene", word);
    }
}
