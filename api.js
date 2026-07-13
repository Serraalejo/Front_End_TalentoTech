const contador = document.getElementById("contador-carrito");
const contenedorProductos = document.getElementById("productos-container");

fetch("productos.json")

.then(respuesta => respuesta.json())

.then(data => {

    const productos = data.products;
    productos.forEach(producto => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        tarjeta.innerHTML = `

        <img src="${producto.thumbnail}"
        alt="${producto.title}"
        class="imagen-producto">

        <h3>${producto.title}</h3>

        <p>$ ${producto.price.toFixed(2)}</p>

        <button class="btn-carrito">
        🛒 Añadir al carrito
        </button>

`;

        const boton = tarjeta.querySelector(".btn-carrito");

        boton.addEventListener("click", function () {

        let carrito = JSON.parse(localStorage.getItem("carrito"));

        if (!Array.isArray(carrito)) {
            carrito = [];
        }

        const existente = carrito.find(p => p.id === producto.id);

        if (existente) {

            existente.cantidad++;

        } else {

            const nuevoProducto = {
                ...producto,
                cantidad: 1
            };

        carrito.push(nuevoProducto);

    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();

    mostrarMensaje("Producto agregado al carrito");

});

        contenedorProductos.appendChild(tarjeta);

    });

    

})

.catch(error => {

    console.error(error);

    alert("Ocurrió un error al cargar los productos.");

});

function actualizarContador() {

    let carrito = JSON.parse(localStorage.getItem("carrito"));

    if (!Array.isArray(carrito)) {
        carrito = [];
    }

    let cantidadTotal = 0;

    carrito.forEach(producto => {
        cantidadTotal += producto.cantidad;
    });

    contador.textContent = "(" + cantidadTotal + ")";

}

actualizarContador();

function mostrarMensaje(texto){

    const mensaje = document.getElementById("mensaje-carrito");

    mensaje.textContent = texto;

    mensaje.style.opacity = "1";

    setTimeout(function(){

        mensaje.style.opacity = "0";

    },2000);

}

document.getElementById("vaciar-carrito").addEventListener("click", function(){

    localStorage.removeItem("carrito");

    actualizarContador();

    mostrarCarrito();

});

document.getElementById("comprar").addEventListener("click", function(){

    alert("¡Gracias por tu compra!");

    localStorage.removeItem("carrito");

    actualizarContador();

    mostrarCarrito();

    panel.classList.add("oculto");

});

const panel = document.getElementById("panel-carrito");

const botonCarrito = document.getElementById("carrito");

const botonCerrar = document.getElementById("cerrar-carrito");

botonCarrito.addEventListener("click", function(){

    panel.classList.remove("oculto");

    mostrarCarrito();

});

botonCerrar.addEventListener("click", function(){

    panel.classList.add("oculto");

});

function mostrarCarrito() {

    const lista = document.getElementById("lista-carrito");

    lista.innerHTML = "";

    let carrito = JSON.parse(localStorage.getItem("carrito"));

    if (!Array.isArray(carrito)) {
        carrito = [];
    }

    let total = 0;

    carrito.forEach((producto) => {

        const subtotal = producto.price * producto.cantidad;

        total += subtotal;

        const item = document.createElement("div");

        item.classList.add("item-carrito");

        item.innerHTML = `

            <strong>${producto.title}</strong>

            <p>Cantidad: ${producto.cantidad}</p>

            <p>Precio: $${producto.price.toLocaleString("es-AR")}</p>

            <p>Subtotal: $${subtotal.toLocaleString("es-AR")}</p>

            <button class="menos">➖</button>

            <button class="mas">➕</button>

            <button class="eliminar">🗑 Eliminar</button>

            <hr>

        `;

        // BOTÓN +

        item.querySelector(".mas").addEventListener("click", function () {

            producto.cantidad++;

            localStorage.setItem("carrito", JSON.stringify(carrito));

            actualizarContador();

            mostrarCarrito();

        });

        // BOTÓN -

        item.querySelector(".menos").addEventListener("click", function () {

            producto.cantidad--;

            if (producto.cantidad <= 0) {

                carrito = carrito.filter(p => p.id !== producto.id);

            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            actualizarContador();

            mostrarCarrito();

        });

        // ELIMINAR

        item.querySelector(".eliminar").addEventListener("click", function () {

            carrito = carrito.filter(p => p.id !== producto.id);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            actualizarContador();

            mostrarCarrito();

        });

        lista.appendChild(item);

    });

    document.getElementById("total-carrito").textContent =
        "Total: $" + total.toLocaleString("es-AR");

}

