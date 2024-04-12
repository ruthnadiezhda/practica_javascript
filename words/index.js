/*Determinando longitud de una frase*/

const frase = prompt("Ingrese una palabra o frase");

const cantidad = frase.length;

const mensajeCantidad = "La longitud de la frase es " + cantidad;

console.log(mensajeCantidad);
alert(mensajeCantidad);


const frase2 = prompt("Ingrese una palabra o frase");

const longitud_sin_espacios = frase2.split(" ").join("").length;
console.log(longitud_sin_espacios);

const mensaje = "La longitud de la frase ingresada es : " + longitud_sin_espacios;

console.log(mensaje);
alert(mensaje);



/*Cambio de minusculas/mayusculas*/
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

const minMay = fraseMinusculas + " "+ fraseMayusculas;

console.log(minMay);
alert(minMay);