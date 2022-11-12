/* Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". */

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const elem = document.querySelector(`div`);
elem.innerHTML = `<ul id="ul"></ul>`;
const ulElement = document.querySelector(`#ul`);

for (const i in places) {
    ulElement.innerHTML += `<li>${places[i]}</li>`
}