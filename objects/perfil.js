/*PROPERTY SHORTHAND*/
//Definición del objeto con property shorthand
const persona = {nombre:"Ruth", edad:26 , correo:"ruthica98@gmail.com", altura:1.52 , peso:60};
const nombre ="Ana";
const edad = 54;
const correo = "anvcg@hotmail.com";
const altura = 1.50;
const peso = 65;
const personaEstructurada = {nombre, edad, correo, altura, peso};
console.log(persona);
console.log(personaEstructurada);

//Obtención de elementos del perfil del usuario en html
const nombreHtml = document.getElementById("nombre");
const edadHtml = document.getElementById("edad");
const correoHtml = document.getElementById("correo");
const alturaHtml = document.getElementById("altura");
const pesoHtml = document.getElementById("peso");

//TextContent para imprimir donde corresponda cada elemento
nombreHtml.textContent = `Nombre: ${personaEstructurada.nombre??"No hay data"}`;
edadHtml.textContent = `Edad: ${personaEstructurada.edad??"No hay data"} años`;
correoHtml.textContent = `Correo: ${personaEstructurada.correo??"No hay data"}`;
alturaHtml.textContent = `Altura: ${personaEstructurada.altura??"No hay data"} m`;
pesoHtml.textContent = `Peso: ${personaEstructurada.peso??"No hay data"} kg`;

//Implementación de condiciones y operadores
if(personaEstructurada.edad<18){
    alturaHtml.classList.add("hidden");
    pesoHtml.classList.add("hidden");
    edadHtml.textContent = `Edad: Menor de edad`;
} else{
    alturaHtml.classList.remove("hidden");
    pesoHtml.classList.remove("hidden");
}

