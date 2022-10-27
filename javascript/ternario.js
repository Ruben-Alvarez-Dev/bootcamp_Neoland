const num1 = 1
const num2 = 2

const suma = sumar(num1, num2);
console.log(suma)

/* if (suma > 2) {
    console.log("MAYOR");
} else {
    console.log("MENOR");
} */

let ternario = (suma > 2) ? console.log("MAYOR") : console.log("MENOR");

function sumar(a, b) {
    return (a + b);
}
