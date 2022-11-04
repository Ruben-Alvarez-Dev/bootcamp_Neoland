// JS DOM
// Rubén Álvarez

/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click
 */

const boton = document.createElement(`button`); //creo
boton.innerHTML = "BOTON"; //texto
boton.setAttribute("id", "btn"); //atributo id
document.body.appendChild(boton); //inserto

const btn = document.querySelector(`#btn`); //selecciono btn

// aquí añado listener, y contraigo la función en una flecha
btn.addEventListener("click", (ev) => console.log(ev)); 



/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

// selecciono valor del input y lo meto en variable
const inputFocus = document.querySelector(`.focus`).value;
console.log(inputFocus);

// creo el eventListener y le doy función
const focoTag = document.querySelector(`.focus`);
focoTag.addEventListener("focus", (inputfocus) => console.log(inputFocus));

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const inputTag = document.querySelector(`.value`);
const inputValue = document.querySelector(`.value`).value;
inputTag.addEventListener("input", (inputValue) => console.log(inputValue));
