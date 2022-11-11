/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.
 */

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ. */

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
    const string = `<li><h2>${input}</h2></li>`;

    ruta.innerHTML += string;

    for (const i in el) {
        
        const string2 = `<li id="li${i}">Country id: ${el[i].country_id}, probability: ${el[i].probability}, porcentaje: ${((el[i].probability) * 100).toFixed(1)} %</li>`;
        
        ruta.innerHTML += string2;
    }
}


// disparo
const getInput = () => {
    let value = document.querySelector(`#userInput`);
    input = value.value
    getData(input)    
}
