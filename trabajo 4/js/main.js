const productosTienda = ["Zapatillas", "Remera", "Buzo", "Pantalón", "Campera"];

productosTienda.push("Gorra");

productosTienda.unshift("Medias");

let elementoEliminado = productosTienda.pop();
alert("Se ha eliminado el elemento: " + elementoEliminado);
console.log("Se ha eliminado el elemento: " + elementoEliminado);

let productoBuscado = prompt("Ingresá el nombre de un producto para buscar en el catálogo:");

if (productosTienda.includes(productoBuscado)) {
    const posicion = productosTienda.indexOf(productoBuscado);
    alert("El producto '" + productoBuscado + "' está en el catálogo en la posición (índice): " + posicion);
} else {
    alert("El producto '" + productoBuscado + "' no se encuentra en el catálogo.");
}

let indiceAReemplazar = 1;
let nuevoProducto = "Bermuda";

productosTienda.splice(indiceAReemplazar, 1, nuevoProducto);
alert("Se actualizó el producto en la posición " + indiceAReemplazar + " por: " + nuevoProducto);

function mostrarCatalogo(listaProductos) {
    console.log("--- Catálogo de Productos ---");
    for (const producto of listaProductos) {
        console.log("Producto: " + producto);
    }
}

mostrarCatalogo(productosTienda);
