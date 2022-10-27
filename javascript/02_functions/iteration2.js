// JS FUNCTIONS
// Rubén Álvarez

/* **Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo,
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function encuentraPalabraMasLarga(arrayQueEnvio) {

    let valorMasGrandeHastaElMomento = "";
    avengers.forEach((registro) => {
        if (valorMasGrandeHastaElMomento.length < registro.length) {
            valorMasGrandeHastaElMomento = registro;
        }
    });
    return valorMasGrandeHastaElMomento;
};

console.log(encuentraPalabraMasLarga(avengers));
