/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.
 */

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
        const string2 = `<li>Country id: ${el[i].country_id}, probability: ${el[i].probability}</li>`;
        ruta.innerHTML += string2;
    }
}


// disparo

const getInput = () => {
    let value = document.querySelector(`#userInput`);
    input = value.value
    getData(input)    
}
