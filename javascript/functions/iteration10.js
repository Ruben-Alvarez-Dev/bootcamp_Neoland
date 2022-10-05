



/* **Iteración #6: Valores únicos**
Crea una función que reciba por parámetro un array y compruebe si existen elementos 
duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
Puedes usar este array para probar tu función: */

/* const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  let newArray = duplicates;
  
removeDuplicates(duplicates);
console.log("Este es el nuevo array:", newArray);

  
function removeDuplicates(param) {
    let valor1 = valor2 = 0;
        for (valor1; valor1 < duplicates.length; valor1++) {
            for (valor2 = 0; valor2 < duplicates.length; valor2++) {
                if (duplicates[valor1] == duplicates[valor2]) {
                    if (valor1 !== valor2) {
                        console.log("ENCONTRADO UNO");
                        newArray.splice(valor2, 1);
                        console.log("He modificado la posición: ", valor2);
                    }
                }   
            }
        }
    return (newArray);
} */

