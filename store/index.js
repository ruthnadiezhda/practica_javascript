/*
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


Versión Jero

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


Versión funciones
function comprar (){
    const repeticion = Number(prompt("¿Cuantos productos distintos desea llevar?: "));
    let totalApagar3 = 0;
    for (let index1 = 1; index1 <=repeticion; index1++){
        const nombre3 =prompt("¿Qué producto desea llevar?");
        const cantidad3 = Number(prompt("¿Cuántas unidades?"));
        const precio3 = Number(prompt("¿Cuánto sale cada unidad?"));
        const subtotal3 = cantidad3 * precio3;
        totalApagar3 = totalApagar3 + subtotal3;
    }
    console.log(totalApagar3);
    return totalApagar3;
}

const total1= comprar();
const total2= comprar();
const total3= comprar();
const totalfinal = total1 + total2 + total3;
console.log("La suma total de las compras es: " + totalfinal);
alert("La suma total de las compras es: " + totalfinal);
*/
