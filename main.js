
// alert("Bienvenido al simulador de cuotas de nuestros productos. Todos nuestros productos tienen 3 cuotas sin interes y las compras mayores a $100000 tienen hasta 6 cuotas sin interes.");

// const interesPocasCuotas = 20;
// const interesMediasCuotas = 50;
// const interesMuchasCuotas = 80;
// let cantProductos = parseInt(prompt("¿Cuantos productos deseas llevar?"));
// while (isNaN(cantProductos)) {
//     cantProductos = parseInt(prompt ("Ingrese por favor EL NUMERO de productos que desea llevar"))
// }

// let precioTotal = 0
// let precioConInteres = 0
// function precioPorMes(precioTotal, cantCuotas) {
//     alert("El valor de la cuota es de $" + (precioTotal / cantCuotas));
// }
// if (cantProductos > 10) {
//     alert("Las compras mayoristas se hacen por telefono");
// } else {
//     for (let numProducto = 1; numProducto < cantProductos + 1; numProducto + 1) {
//         let precioProducto = parseInt(prompt("Ingrese el valor del producto " + numProducto))
//         console.log(precioProducto)
//         numProducto++
//         precioTotal += precioProducto
//     }
//     alert("El precio final de los productos es $" + precioTotal)

//     let cantCuotas = parseInt(prompt("ingrese el numero de cuotas en el que lo desesas pagar"));
//     switch (true) {
//         case (cantCuotas <= 3):
//             precioPorMes(precioTotal, cantCuotas);
//             break;
//         case (cantCuotas > 3 && cantCuotas <= 6 && precioTotal < 100000):
//             precioTotal = precioTotal + precioTotal * interesPocasCuotas / 100;
//             alert("El interes en esa cantidad de cuotas es del " + interesPocasCuotas + "%");
//             precioPorMes(precioTotal, cantCuotas);
//             break;
//         case (cantCuotas > 3 && cantCuotas <= 6 && precioTotal > 100000):
//             precioPorMes(precioTotal, cantCuotas);
//             break;
//         case (cantCuotas > 6 && cantCuotas <= 9):
//             precioTotal = precioTotal + precioTotal * interesMediasCuotas / 100;
//             alert("El interes en esa cantidad de cuotas es del " + interesMediasCuotas + "%")
//             precioPorMes(precioTotal, cantCuotas);
//             break;
//         case (cantCuotas > 9 && cantCuotas <= 12):
//             precioTotal = precioTotal + precioTotal * interesMuchasCuotas / 100;
//             alert("El interes en esa cantidad de cuotas es del " + interesMuchasCuotas + "%");
//             precioPorMes(precioTotal, cantCuotas);
//             break;
//         default:
//             alert("Tenemos un máximo de 12 cuotas")

//     }
// }

// constructor, buscar producto en el array, filtrar por precio, artefacto o condicion, devolver producto en el console.

function Producto(nombre, precio, estado) {
    this.nombre = nombre
    this.precio = precio
    this.estado = estado
}

let producto1 = new Producto("Lavarropas Samsung", 600000, "Nuevo")
let producto2 = new Producto("Lavavajillas Samsung", 800000, "Nuevo")
let producto3 = new Producto("Lavarropas Drean", 180000, "Usado")
let producto4 = new Producto("Lavarropas Electrolux", 900000, "Nuevo")
let producto5 = new Producto("Lavavajillas Ariston", 420000, "Usado")
let producto6 = new Producto("Lavarropas Ariston", 500000, "Nuevo")
let producto7 = new Producto("Lavavajillas LG", 800000, "Nuevo")
let producto8 = new Producto("Lavarrioas LG", 650000, "Nuevo")

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]



const menorQue = () => {
    let precioCliente = parseFloat(prompt("¿Hasta cuanto esta dispuesto a pagar?"))
    let itemsFiltrados = productos.filter((productos) => precioCliente >= productos.precio);
    console.log(itemsFiltrados);
}
const porArtefacto = () => {
    let filtroArtefacto = prompt("¿Que artefacto desea buscar? ¿Lavarropas o lavavajillas?").toUpperCase();
    let filtro = productos.filter((producto) => producto.nombre.toUpperCase().includes(filtroArtefacto));
    console.log(filtro);
}

const porEstado = () => {
    let filtroEstado = prompt("¿Que clase de artefacto busca? ¿Nuevo o usado?").toUpperCase();
    let filtro = productos.filter((producto) => producto.estado.toUpperCase().includes(filtroEstado));
    console.log(filtro);
}

let queFiltro = prompt("Bienvenido al sistema de venta de electrodomésticos nuevos y usados. Por favor elija si quiere filtrar los productos por artefacto, por estado o por precio.").toUpperCase()

while (queFiltro !== "ARTEFACTO" || queFiltro !== "PRECIO" || queFiltro !== "ESTADO" ){
    let queFiltro = prompt("El sistema solo funciona si elije filtrar los productos por artefacto, por estado o por precio.").toUpperCase()


    if (queFiltro === "ARTEFACTO") {
        porArtefacto()
    } else {
        if (queFiltro === "PRECIO") {
            menorQue()
        } else {
            if (queFiltro === "ESTADO") {
                porEstado()
            } else {
                alert("Ingresaste un valor incorrecto, vamos de vuelta")
            }
        }
    }
}

alert("Gracias por utilizar nuestros servicios, no se olvide de pasar por la tienda para cerrar su pedido.")


