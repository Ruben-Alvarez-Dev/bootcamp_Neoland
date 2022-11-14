/* Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando `npm i -g json-server` y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.

Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Bilbo. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...

Cuando lo tengas crea un div para cada nota del diario e introduce un `<h3>`, un `<h5>` y un `<p>` para su .title, .date y .description respectivamente.

Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Bilbo no le apetece recordar mucho...å */



document.body.innerHTML += `<ul id="list"><h3>Lista de items</h3></ul>`;
document.body.innerHTML += `<button id="btn">Borrar entradas</button>`;
const btn = document.querySelector(`#btn`);
const list = document.querySelector(`#list`);
const endpoint = `http://localhost:3000/diary`;
let data;
let i = 0;

const getData = async () => {
  const response = await fetch(endpoint);
  const dataJson = await response.json();
  data = dataJson;
  printData();
};

const printData = () => {
  
  // data.sort((a,b) => a.date - b.date); // "You shall not pass, bitches...!!"
  data.sort((a,b) => a.id - b.id);
  
  data.forEach((element) => {
    i++;
    const template = `<div id="div${i}">
        <li>Nota número : ${element.id}</li>
        <p>Título      : ${element.title}<br>
        Fecha       : ${element.date}<br>
        Descripción : ${element.description}<br></p></div>`
    list.innerHTML += template;
});
};

getData();

btn.addEventListener("click", (ev) => {
    const btnId = document.querySelector(`#div${i}`);
    btnId.remove();
    i--;
})