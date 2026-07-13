
/*
// Pedimos los datos al usuario
let nombre = prompt("Ingresá tu nombre:");
let edadTexto = prompt("Ingresá tu edad:");

// Convertimos la edad a número
let edad = Number(edadTexto);

// Verificamos si realmente ingresó un número
if (isNaN(edad)) {

    console.log("La edad ingresada no es válida.");

} else {

    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);

    let mensaje = "Hola " + nombre + ", tenés " + edad + " años.";

    console.log(mensaje);

    if (edad >= 18) {
        console.log("Sos mayor de edad.");
    } else {
        console.log("Sos menor de edad.");
    }

}

*/

// Creamos un objeto

let producto1 = {

    nombre: "Teclado Redragon",
    precio: 75000,
    stock: 18

};

// Mostramos propiedades

console.log(producto1.nombre);
console.log(producto1.precio);

// Creamos un array con varios productos

let catalogo = [

    {
        nombre: "Teclado Redragon",
        precio: 75000,
        stock: 18
    },

    {
        nombre: "Mouse Logitech G502",
        precio: 68000,
        stock: 10
    },

    {
        nombre: "Auriculares HyperX",
        precio: 120000,
        stock: 7
    }

];

// Mostrar el catálogo completo

console.log(catalogo);

// Mostrar el nombre del segundo producto

console.log(catalogo[1].nombre);

// Variables de prueba
let nombreFormulario = "Alejo";
let correoFormulario = "alejo@gmail.com";
let mensajeFormulario = "Quiero consultar por una PC Gamer.";

// Función para validar
function validarFormulario() {

    if (nombreFormulario && correoFormulario && mensajeFormulario) {
        console.log("Formulario completo. Listo para enviar.");
    } else {
        console.log("Faltan completar campos obligatorios.");
    }

}

// Llamamos a la función
validarFormulario();

/*

const productos = [
    "Teclado Redragon",
    "Mouse Logitech G502",
    "Auriculares HyperX",
    "Monitor Samsung 24 pulgadas",
    "Silla Gamer"
];

// Recorremos el array
for (let i = 0; i < productos.length; i++) {
    alert(productos[i]);
}

console.log("Lista de productos mostrada correctamente.");

*/
/*

function generarProductos() {

    const productos = [

        {
            id: 1,
            name: "Teclado Redragon",
            description: "Teclado mecánico RGB",
            amount: 75000
        },

        {
            id: 2,
            name: "Mouse Logitech G502",
            description: "Mouse gamer con sensor HERO",
            amount: 68000
        },

        {
            id: 3,
            name: "Auriculares HyperX",
            description: "Auriculares con sonido envolvente",
            amount: 120000
        },

        {
            id: 4,
            name: "Monitor Samsung 24 pulgadas",
            description: "Monitor Full HD 24 pulgadas",
            amount: 210000
        },

        {
            id: 5,
            name: "Silla Gamer",
            description: "Silla ergonómica reclinable",
            amount: 320000
        }

    ];

    return productos;

}

// Guardamos el resultado de la función

const catalogoCompleto = generarProductos();

// Recorremos el catálogo

for (let i = 0; i < catalogoCompleto.length; i++) {

    console.log("Producto " + (i + 1));
    console.log("ID: " + catalogoCompleto[i].id);
    console.log("Nombre: " + catalogoCompleto[i].name);
    console.log("Descripción: " + catalogoCompleto[i].description);
    console.log("Precio: $" + catalogoCompleto[i].amount);
    console.log("------------------------------");

}



// Buscamos el contenedor del HTML

const contenedor = document.getElementById("contenedor-productos");

// Recorremos el catálogo

catalogoCompleto.forEach(producto => {

    // Creamos la tarjeta

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    // Nombre

    const nombre = document.createElement("h3");
    nombre.textContent = producto.name;

    // Precio

    const precio = document.createElement("p");
    precio.textContent = "$" + producto.amount;

    // Botón

    const boton = document.createElement("button");
    boton.textContent = "Ver descripción";

    const botonCarrito = document.createElement("button");

    botonCarrito.textContent = "🛒 Agregar al carrito";

    // Evento

    boton.addEventListener("click", function () {

    let descripcion = tarjeta.querySelector(".descripcion");

    if (descripcion) {

        descripcion.remove();
        boton.textContent = "Ver descripción";

    } else {

        descripcion = document.createElement("p");

        descripcion.textContent = producto.description;

        descripcion.classList.add("descripcion");

        tarjeta.appendChild(descripcion);

        boton.textContent = "Ocultar descripción";

    }

});

botonCarrito.addEventListener("click", function () {

    cantidadCarrito++;

    contadorCarrito.textContent = cantidadCarrito;

    localStorage.setItem("carrito", cantidadCarrito);

});

    // Agregamos elementos a la tarjeta

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    tarjeta.appendChild(botonCarrito);

    // Agregamos la tarjeta al HTML

    contenedor.appendChild(tarjeta);

});



// Obtenemos el contador

const contadorCarrito = document.getElementById("contador-carrito");

// Recuperamos el valor guardado

let cantidadCarrito = localStorage.getItem("carrito");

// Si nunca hubo un carrito

if (cantidadCarrito === null) {

    cantidadCarrito = 0;

} else {

    cantidadCarrito = Number(cantidadCarrito);

}

// Mostramos el valor

contadorCarrito.textContent = cantidadCarrito;

*/