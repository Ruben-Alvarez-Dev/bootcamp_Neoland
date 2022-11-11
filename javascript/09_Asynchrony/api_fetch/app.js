let charachers;

const getDatos = async (url = 'https://rickandmortyapi.com/api/character') => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const datos = await response.json();
    characters = datos;
    datos.forEach(element => {
        alert(element.name);    
    });
};

getDatos();
