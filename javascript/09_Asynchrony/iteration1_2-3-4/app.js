/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.
 */

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ. */

/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

// declaraciones
const baseUrl = "https://api.nationalize.io";
// let input = "francisco";
let input;
let data;


// funcion GET
const getData = async () => {
    try {
        let name = `/?name=${input}`
        let finalUrl = baseUrl + name;

        const response = await fetch(finalUrl);
	    const swap = await response.json();
	    data = swap;
	    printData();
    } catch (error) {
        console.log(error);
    }
}


// funcion PRINT
const printData = () => {
    const el = data.country;
    const ruta = document.querySelector(`#list`);
    const string = `<h2>${input}</h2>`;

    ruta.innerHTML += string;


// defino e inserto las líneas de información

    for (const i in el) {
        const templateString = `
            <li id="el${i}"> Country id: ${el[i].country_id}, probability: ${el[i].probability}, porcentaje: ${((el[i].probability) * 100).toFixed(1)} %  </li>`;
        ruta.innerHTML += templateString;
    }

// defino e inserto botones de borrado
        
     const lineLi = document.querySelectorAll(`li`);
     lineLi.forEach (index => {
         const btn = document.createElement(`button`);
         btn.innerHTML = " X ";
         index.appendChild(btn);
         btn.addEventListener("click", (evento) =>{
            btn.parentNode.remove()        
         })
     })
}


// disparo
const getInput = () => {
    let value = document.querySelector(`#userInput`);
    input = value.value
    getData(input)    
}
