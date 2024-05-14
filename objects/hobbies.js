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
