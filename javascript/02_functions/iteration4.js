// JS FUNCTIONS
// Rubén Álvarez

/* **Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
let totalSum2 = 0;
let averageResult = 0;

average(numbers2);

function average(parameter) {
    
    averageResult = 0;

        numbers2.forEach(element => {
            totalSum2 = totalSum2 + element
        })
    
    averageResult = totalSum2 / numbers2.length;
    return averageResult;
}

console.log("Resultado:", averageResult)