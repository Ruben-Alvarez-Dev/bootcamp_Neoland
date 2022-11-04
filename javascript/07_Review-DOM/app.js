// JS LOOPS
// Rubén Álvarez

/* 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. */

const countries1 = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

// crear elemento, crear ruta, inyectar
const country = "";
const ulTag = document.createElement(`ul`);
document.body.appendChild(ulTag);
const liTag = document.createElement(`li`);
liTag.setAttribute("id", `${country}`);
const ulPath = document.querySelector(`ul`);

for (const country of countries1) {
  ulPath.insertAdjacentHTML("beforeend", `<li id="${country}">${country}</li></li>`
  );
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

toDelete = document.querySelector(`.fn-remove-me`);
toDelete.remove();


/*1.3 Utiliza el array para crear dinamicamente una lista ul >  li de elementos en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; 

const ul13Tag = document.createElement(`ul`);
ul13Tag.setAttribute("id", `ul13`);

const ul13Path = document.querySelector(`[data-function]`);
for (const car of cars) {
    ul13Path.insertAdjacentHTML("beforeend", `<li>${car}</li>`);
}

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. */

const countries2 = [
  { title: "Random title1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const ul14Tag = document.createElement(`ul`);
ul14Tag.setAttribute("id", `ul14`);
document.body.appendChild(ul14Tag);

const ul14Path = document.querySelector(`#ul14`);

for (let i = 0; i < countries2.length; i++) {
    const title = countries2[i].title;
    const imgUrl = countries2[i].imgUrl;    
    ul14Path.insertAdjacentHTML("beforeend", `<div id=div${i}>Title: ${title}, Image: ${imgUrl}</div>`);
    
}


/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista. */

const btnDelete = document.createElement(`button`);
// btnDelete.setAttribute("id", "btnDelete");
btnDelete.id = "btnDelete";
btnDelete.innerHTML = "BOTON DELETE";
document.body.appendChild(btnDelete);

const btnDeletePath = document.querySelector("#btnDelete");
btnDeletePath.addEventListener("click", function() {
    toDelete = document.querySelector(`#div4`);
    toDelete.remove();
});


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html. */

const divList = document.querySelectorAll(`li`);

divList.forEach (iterator2 => {
    const btn3 = document.createElement(`button`);
    btn3.innerHTML = "Boton DELETE INDIVIDUAL";
    btn3.id = "btnInd"
    iterator2.appendChild(btn3);
    btn3.addEventListener("click", (evento) =>{
        btn3.parentNode.remove()        
    })
})