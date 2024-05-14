/*DESESTRUCTURACIÓN DE OBJETOS*/
//Definición de hobbies mediante objetos con propiedades individuales
let solo = ["cantar", "bailar", "pintar", "tocar guitarra", "jugar videojuegos", "viajar", "tonear"];
let enPareja = ["pasear", "ir al cine", "viajar", "comer", "ir a la playa"];
let conAmigos = ["ir al cine", "ver peliculas", "ver series", "tomar", "tonear", "viajar", "hacer deporte"];
let conFamilia = ["comer", "parrillada", "karaoke", "jugar juegos de mesa", "salir a pasear"];

//Aplica desestructuración de arrays y guardarlos en variables separadas
const [,,tercerHobbyEnPareja] = enPareja;
const [,,,cuartoHobbyEnFamilia] = conFamilia;

//Template string para crear mensaje
const template = `Uno de mis hobbies favoritos en pareja es ${tercerHobbyEnPareja}, mientras que uno de mis hobbies favoritos en familia es ${cuartoHobbyEnFamilia}`;
console.log(template);

//Manipula el DOM para mostrar el mensaje
function imprimirMensaje (texto){
    const divHtml = document.getElementById("hobbies-seleccionados");
    divHtml.textContent = texto;
}

//Impresión
imprimirMensaje(template);
console.log("Solo:");
console.log(solo);
console.log("En pareja:");
console.log(enPareja);
console.log("Con Amigos:");
console.log(conAmigos);
console.log("Con Familia:");
console.log(conFamilia);



/*CREACIÓN DE UN NUEVO OBJETO CON UN NUEVO ARREGLO*/
const todos = [...solo, ...enPareja,...conAmigos,...conFamilia];
console.log(todos);



/*DEFINICIÓN PERSONALIZADA DE HOBBIES*/
//Segundo hobby en solitario
const segundoHobbySolo1 = solo[1];
//Tercer y cuarto hobbies en pareja
const tercerCuartoHobbyEnPareja = enPareja.slice(2,4);
//Primer hobby con amigos
const primerHobbyConAmigos = conAmigos[0];
//Creación de variable algunos
const algunos = [segundoHobbySolo1,tercerCuartoHobbyEnPareja,primerHobbyConAmigos,...conFamilia];
//Imprimir
console.log("Algunos: ")
console.log(algunos);
