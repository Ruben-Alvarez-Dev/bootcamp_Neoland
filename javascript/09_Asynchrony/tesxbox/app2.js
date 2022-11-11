
// FUNCION DE SACAR LOS DATOS

let characters;
const readData = async () => {
  try {
    const response = await fetch(url = `https://rickandmortyapi.com/api/character`);
    const readableData = await response.json();
    characters = readableData;
    writeData();
  } catch (error) {
    console.log(error);
  }
};

// FUNCION DE PINTAR LOS DATOS

const dondeLoPego = document.querySelector(`#ul`);

const writeData = () => {
  characters.results.foreach((element) => {
    const elementoLista = `<li>${element.name}HOLA HOLA</li>`;
    console.log(elementoLista);
    dondeLoPego.innerHTML += elementoLista;
  });
};

readData();

dondeLoPego.innerHTML += elementoLista