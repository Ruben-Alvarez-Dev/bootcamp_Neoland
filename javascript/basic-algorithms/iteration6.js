// JS Basic Algorithms
// Rubén Álvarez

// Iteración #6: Bucles


/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */

for (let index = 0; index < 10; index++) {
      console.log(index)
}
      

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

for (let index = 0; index < 10; index++) {
      if (index % 2 === 0) {
            console.log(index, " entre 2 = ", index % 2);

      } else {

      }
      
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */

for (let index = 0; index < 10; index++) {
      if (index < 9) {
            console.log(`Vuelta número ${index + 1}. Intentando dormir 🐑`)
      } else if (index = 9) {
            console.log(`Vuelta número ${index + 1}. Dormido!`)
      } else {
            
      }
}