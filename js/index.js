let carrito = [];
let total = 0;
let saldoDisponible = 0;

var nombre = prompt("Por favor, ingresa tu nombre:");

if (nombre !== null && nombre !== "") {
    alert("¡Hola, " + nombre + "! Bienvenido a Beer and Burgers.");
} else {
    alert("¡Hola, visitante! Bienvenido a Beer and Burgers.");
}

function actualizarSaldoDisponible() {
    var cantidadDinero = prompt("¿Cuánto dinero tienes,recorda que el minimo valor es de $1200?");
    saldoDisponible = parseFloat(cantidadDinero);

    if (!isNaN(saldoDisponible)) {
        var resultadoDinero = document.getElementById("dinero");
        resultadoDinero.textContent = "Tienes $" + saldoDisponible.toFixed(2);
    } else {
        alert("Por favor, ingresa una cantidad válida.");
    }
}

function agregarAlCarrito(nombre, precio) {
    if (precio <= saldoDisponible) { 
        carrito.push({ nombre, precio });
        saldoDisponible -= precio; 
        actualizarCarrito();
    } else {
        alert("No tienes suficiente dinero para comprar este artículo.");
    }
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    const totalElement = document.getElementById("total");

    carritoElement.innerHTML = "";

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.nombre}: $${item.precio.toFixed(2)} <button onclick="quitarDelCarrito(${index})">X</button>`;
        carritoElement.appendChild(li);
    });

    totalElement.innerText = saldoDisponible.toFixed(2);
}

function quitarDelCarrito(index) {
    saldoDisponible += carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}
var boton = document.getElementById("pagarBoton");
boton.addEventListener("click", function() {

    alert("Disfrute su comida");

});

actualizarSaldoDisponible();
