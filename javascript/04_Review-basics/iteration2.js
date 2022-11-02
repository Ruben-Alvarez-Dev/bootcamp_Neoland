// JS LOOPS
// Rubén Álvarez

/* **Iteración #2: Mix Fors**
Dado el siguiente javascript usa forof y forin para hacer la media
del volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let total = 0
let score = 0
let mediaTotal = 0

for (const user of users) {
    const {name, favoritesSounds} = user
    total = 0
    for (const key in favoritesSounds) {
        // console.log(key);
        score = favoritesSounds[key].volume;
        total = total + score
    }
    const media = total / 3;
    console.log(name, media);
    mediaTotal = mediaTotal + media;

}

mediaTotal = mediaTotal / 4;
console.log();
console.log("La media total es:", mediaTotal);