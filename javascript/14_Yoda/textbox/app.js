
let a = 1;
let b = 2;
let suma;

const sumar = (param1, param2) => {
    suma = param1 + param2;
    return suma
}

const mostrar = (param) => {
    console.log(param);
}

sumar(a, b);
mostrar (suma);