/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let k = 0;
for (let i = 0; i < foodSchedule.length; i++) {
    const element = foodSchedule[i];
    if (element.isVegan == false) {
        k++;
        element.name = fruits[k];
        element.isVegan = true;
    }
}

console.log(foodSchedule);