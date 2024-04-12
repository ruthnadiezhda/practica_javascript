/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

/*Formulario al abrir pagina que te pide llenar algo*/
prompt("Preguntar algo");
/*Imprime en consola*/
console.log("Imprimir algo");

/*Formulario al abrir pagina que te pide llenar algo, se guarda en variable*/
const entrada = prompt("¿Qué producto desea comprar?");
/*Imprime en consola*/
console.log(entrada);
/*Imprime como alerta*/
alert(entrada);

/*Actividad: dando la bienvenida*/
const nombre =prompt("¿Cual es tu nombre?");
const mensaje = "Bienvenid@ " + nombre;
console.log(mensaje);
alert(mensaje);

