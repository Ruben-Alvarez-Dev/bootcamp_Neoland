// JS LOOPS
// Rubén Álvarez

/* **Iteración #1: Mix for e includes**
Dado el siguiente javascript usa forof para recorrer el array de películas,
genera un nuevo array con las categorías de las películas e imprime por
consola el array de categorías. Ten en cuenta que las categorías no deberían
 repetirse. Para filtrar las categorías puedes ayudarte de la función
 **.includes()** */

 const movies = [
    {
    title: 'Madaraspar',
    duration: 192,
    categories: ['comedia',
    'aventura']
    },
    {
    title: 'Spiderpan',
    duration: 122,
    categories: ['aventura',
    'acción']
    },
    {
    title: 'Solo en Whatsapp',
    duration: 223,
    categories: ['comedia',
    'thriller']
    },
    {
    title: 'El gato con guantes',
    duration: 111,
    categories: ['comedia',
    'aventura',
    'animación']
    },
];

const categories = new Array;

    for (const iterator of movies) {
        const element1 = (iterator.categories);
        categories.push(element1);
    };

let flated = categories.flat();
flated.sort();
// console.log(flated);

limpiaDuplicados (flated);
limpiaDuplicados (flated);


function limpiaDuplicados (array) {
    for (let index = 0; index < flated.length; index++) {
        const element2 = flated[index];
        (element2 == flated[index + 1])
            ? flated.splice(index + 1, 1)
            : 0 ;
    }
    return flated
}

console.log(flated);


