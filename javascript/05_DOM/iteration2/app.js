// JS DOM
// Rubén Álvarez

// 2.1 Inserta dinamicamente en un html un div vacio con //javascript.

let tag21 = document.createElement(`div`);
tag21.innerHTML = "(2.1 OK";
document.body.appendChild(tag21);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let tag22 = document.createElement(`div`);
tag22.innerHTML = "p (2.2 OK";
document.body.appendChild(tag22);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let tag23 = document.createElement(`div`);
tag23.setAttribute("id", "tag23");
document.body.appendChild(tag23);

const tag23Path = document.getElementById(`tag23`);
for (let i = 0; i < 6; i++) {
  tag23Path.innerHTML += `<p id="p${i}">p número ${i + 1}</p>`;
}
const tag23P5Path = document.querySelector(`#p5`);
tag23P5Path.innerHTML += " (2.3 OK";

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const tag24 = `<p>Soy dinámico! (2.4 OK</p>`;
document.body.insertAdjacentHTML("beforeend", tag24);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const tag25 = "Wubba Lubba dub dub";
const tag25Path = document.querySelector("h2.fn-insert-here");
tag25Path.innerHTML = tag25;

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const tag26Ul = document.createElement(`ul`); // elemento
tag26Ul.setAttribute("id", "tag26"); // atributos
document.body.appendChild(tag26Ul); // meto <ul></ul>
const tag26PUlPath = document.querySelector(`#tag26`);

const tag26Li = document.createElement(`li`);
let j = 0;
for (const app of apps) {
  j++;
  tag26PUlPath.insertAdjacentHTML("beforeend", `<li id="li${j}">${app}</li>`);
}
const li5Path = document.querySelector(`#li5`);
li5Path.innerHTML += " (2.6 OK";

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const nodesToRemove = document.querySelectorAll(`.fn-remove-me`);
for (const node of nodesToRemove) {
  node.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const tag28 = document.querySelector(`div`);
const tag28P = document.createElement(`p`);
tag28P.innerHTML = "Voy en medio! (2.8 OK";
tag28.insertAdjacentElement("afterend", tag28P);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const tag29 = document.querySelectorAll(`div.fn-insert-here`);
let l = 0;
for (const k of tag29) {
  k.innerHTML = `<p id="p${l}">Voy dentro!!</p>`;
  l++;
}
const l1Path = document.querySelector(`#p1`);
l1Path.innerHTML += " (2.9 OK";
