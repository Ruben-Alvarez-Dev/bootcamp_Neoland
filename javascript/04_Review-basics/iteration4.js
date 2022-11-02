// JS LOOPS
// Rubén Álvarez

/* **Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */

const names = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const text = "Mosquito"

const answer = findArrayIndex(text, names);
console.log(answer);

function findArrayIndex(word, array) {
    
    let answer = ""    
    
    if (array.includes(word)) {

        let position = 0
        position = array.indexOf(word);
        answer = `La palabra ${word} está en la posición ${position}`;

    } else {

        answer = "No lo he encontrado"

    }

    return answer

};
