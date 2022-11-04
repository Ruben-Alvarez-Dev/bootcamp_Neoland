// MANERA TRADICIONAL PARA METER UN ELEMENTO
// CONTENEDOR y CONTENIDO
// const newDiv = document.querySelector("#app")
// const contentDiv = document.createTextNode("Barra de títulos H2");
// newDiv.appendChild(contentDiv);



// MANERA RAPIDA PARA ETIQUETA QUE YA EXISTA
const itemDiv = document.getElementById("container")
// Insertar texto directo
// newDiv.innerHTML = "Hola"
// Insertar texto con plantilla
const nombre = "Ruben";
const edad = 40;
itemDiv.innerHTML = `
<ul>
<li>Plantillas de String</li>
<li>---------------------</li>
<li>Nombre: ${nombre}</li>
<li></li>
<li>Edad:   ${edad}</li>
</ul>`