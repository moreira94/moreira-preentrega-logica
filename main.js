
alert("Bienvenido al simulador de cuotas de nuestros productos. Todos nuestros productos tienen 3 cuotas sin interes y las compras mayores a $100000 tienen hasta 6 cuotas sin interes.");

const interesPocasCuotas = 20;
const interesMediasCuotas = 50;
const interesMuchasCuotas = 80;
let cantProductos = parseInt(prompt("¿Cuantos productos deseas llevar?"));
while (cantProductos== null || /\D/.test(cantProductos) || cantProductos == "") {
    cantProductos = prompt ("Ingrese por favor EL NUMERO de productos que desea llevar")
}
let precioTotal = 0
let precioConInteres = 0
function precioPorMes(precioTotal, cantCuotas) {
    alert("El valor de la cuota es de $" + (precioTotal / cantCuotas));
}
if (cantProductos > 10) {
    alert("Las compras mayoristas se hacen por telefono");
} else {
    for (let numProducto = 1; numProducto < cantProductos + 1; numProducto + 1) {
        let precioProducto = parseInt(prompt("Ingrese el valor del producto " + numProducto))
        console.log(precioProducto)
        numProducto++
        precioTotal += precioProducto
    }
    alert("El precio final de los productos es $" + precioTotal)

    let cantCuotas = parseInt(prompt("ingrese el numero de cuotas en el que lo desesas pagar"));
    switch (true) {
        case (cantCuotas <= 3):
            precioPorMes(precioTotal, cantCuotas);
            break;
        case (cantCuotas > 3 && cantCuotas <= 6 && precioTotal < 100000):
            precioTotal = precioTotal + precioTotal * interesPocasCuotas / 100;
            alert("El interes en esa cantidad de cuotas es del " + interesPocasCuotas + "%");
            precioPorMes(precioTotal, cantCuotas);
            break;
        case (cantCuotas > 3 && cantCuotas <= 6 && precioTotal > 100000):
            precioPorMes(precioTotal, cantCuotas);
            break;
        case (cantCuotas > 6 && cantCuotas <= 9):
            precioTotal = precioTotal + precioTotal * interesMediasCuotas / 100;
            alert("El interes en esa cantidad de cuotas es del " + interesMediasCuotas + "%")
            precioPorMes(precioTotal, cantCuotas);
            break;
        case (cantCuotas > 9 && cantCuotas <= 12):
            precioTotal = precioTotal + precioTotal * interesMuchasCuotas / 100;
            alert("El interes en esa cantidad de cuotas es del " + interesMuchasCuotas + "%");
            precioPorMes(precioTotal, cantCuotas);
            break;
        default:
            alert("Tenemos un máximo de 12 cuotas")
            
    }
}