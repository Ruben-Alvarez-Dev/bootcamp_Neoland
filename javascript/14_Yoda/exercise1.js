/* En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'. */

// declaro variables y rutas

document.body.innerHTML += `<ul id="list"><h3>Lista de personajes de Breaking Bad</h3></ul>`;
const list = document.querySelector(`#list`);
const endpoint = `https://breakingbadapi.com/api/characters`;
let data;

// declaro funciones

const getData = async () => {
  const response = await fetch(endpoint);
  const dataJson = await response.json();
  data = dataJson;
  printData();
};

const printData = () => {
  data.forEach((element) => {
    list.innerHTML += `<li>${element.name}</li>`;
    list.innerHTML += `<img src="${element.img}">`;
  });
};

// invocación y ejecución

getData();
