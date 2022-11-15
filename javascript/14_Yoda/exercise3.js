/* De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html. */

const epOrders = `http://localhost:3000/orders`;
const epProducts = `http://localhost:3000/products`;
let data;
let orders;
let products;
let nId;

document.body.innerHTML += `<ul id="list"><h2>Lista de items</h2></ul>`;
const list = document.querySelector(`#list`);

const getData = async (endpoint1, endpoint2) => {
  const resp1 = await fetch(endpoint1);
  const dataj1 = await resp1.json();

  const resp2 = await fetch(endpoint2);
  const dataj2 = await resp2.json();

  orders = dataj1.sort((a, b) => new Date(a.date) - new Date(b.date));
  products = dataj2;

  for (const key1 in orders) {
    list.innerHTML += `
            <div id="div${key1}">
                <h2>Orden: ${key1}</h2>
                <h3>Fecha: ${orders[key1].date}</h3>
            </div>`;

    const prod = orders[key1].products;

    for (const key2 of prod) {
      let nombre = products.find((elem) => elem.id == key2.productId).name;
      const divX = document.querySelector(`#div${key1}`);
      divX.innerHTML += `<h5>Producto: ${nombre}, Cantidad: ${key2.quantity}</h5>`;
    }
  }
};

getData(epOrders, epProducts);
