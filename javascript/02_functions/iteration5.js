/* **Iteración #5: Calcular promedio de strings**
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
 y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
 */
/*  const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
 function averageWord(param) {
   // insert code
 }
 */


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

averageWord(mixedElements);

function averageWord(param) {

    let sumatorio = 0

        mixedElements.forEach(element => {
            if (typeof element === "number") {
                sumatorio = sumatorio + element;
            } else if (typeof element === "string") {
                sumatorio = sumatorio + (element.length)
            }
        });
    sum2 = sumatorio
    return sum2
}

console.log(sum2);