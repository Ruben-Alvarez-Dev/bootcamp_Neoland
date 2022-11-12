/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. */

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  document.body.innerHTML = `<ul id="ul">Lista de innerHTML</ul>`;
    const ul = document.querySelector(`#ul`);
    
  for (const i in albums) {
    ul.innerHTML += `<li>${albums[i]}</li>`
  }
