let data;
let hola;

const loadCharacters = async () => {

    try {
        const response = await fetch(`https://swapi.dev/api/people/`);
        data = await response.json();
        hola = data;
        setupCharacters();
    } catch (error) {
        console.log(error);
    }

}

const listaIn = document.querySelector(`#lista`);

const setupCharacters = () => {
    data.results.forEach(element => {
        const entrada = `<li>${element.name}</li>`;
        listaIn.innerHTML += entrada;
    });


}

loadCharacters();