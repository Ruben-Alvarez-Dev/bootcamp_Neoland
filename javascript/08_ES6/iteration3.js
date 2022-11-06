// JS ES6
// Rubén Álvarez

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList1 = [32, 54, 21, 64, 75, 43]
const copy = [...pointsList1]


// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copy2 = {...toy1};


// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54,87,99,65,32];
const pointMerge = [...pointsList2, ...pointsLis3]

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate2 = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyMerge = {...toy2, ...toyUpdate2};
console.log(toyMerge);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colores = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colores2 = [...colores];
colores2.splice(2, 1)
console.log(colores2)

