let totalApagar = 0;

const nombre =prompt("¿Qué producto desea llevar?");
const cantidad = Number(prompt("¿Cuántas unidades?"));
const precio = Number(prompt("¿Cuánto sale cada unidad?"));

for (let index = 1; index <= cantidad; index++) {
    const subtotal = precio;
    totalApagar = totalApagar + subtotal;
}
    
const mensaje = "El total a pagar es: " + totalApagar;
console.log(mensaje);
alert(mensaje);


/*Versión Jero*/

let totalApagar2 = 0;
let totalProducto = Number(prompt("¿Cuantos productos diferentes desea llevar?: "))

for (let index = 1; index <= totalProducto; index++) {
    const nombre2 =prompt("¿Qué producto desea llevar?");
    const cantidad2 = Number(prompt("¿Cuántas unidades?"));
    const precio2 = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal2 = cantidad2*precio2;
    totalApagar2 = totalApagar2 + subtotal2;
}
    
const mensaje2 = "El total a pagar es: " + totalApagar2;
console.log(mensaje2);
alert(mensaje2);