/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */

const url = 'https://rickandmortyapi.com/api/character';

const getCharacters = async () => {
    const response = await fetch(url)
    .then(response => response.json())
    .then(characters => console.log(characters));
}

getCharacters();
