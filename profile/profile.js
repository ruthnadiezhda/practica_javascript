"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Ruth Araujo";
var edad = 26;
var profesion = "estudiante";
var ubicacion = "Lima";
var hobby = "pintar";
var mayorDeEdad = true;
var datosPersonales = {
    nombre: nombre,
    edad: edad,
    profesion: profesion,
    ubicacion: ubicacion,
    hobby: hobby,
    mayorDeEdad: mayorDeEdad
};
console.log(datosPersonales);
/*ACTIVIDAD: CREANDO UNA INTERFAZ*/
var familiar2 = {
    nombre: "Stefhanie Jaramillo",
    edad: 23,
    profesion: "preventa y estudiante",
    ubicacion: "Lima",
    hobby: "bailar",
    mayorDeEdad: true,
};
var familiar3 = {
    nombre: "Patricia Esparza",
    edad: 26,
    profesion: "ingeniera",
    ubicacion: "Lima",
    hobby: "cantar",
    mayorDeEdad: true,
};
//let family = [datosPersonales, familiar2, familiar3];
var family = [datosPersonales, familiar2, familiar3];
console.log(family);
/*ACTIVIDAD: IMPLEMENTANDO EL OPERADOR TYPEOF*/
console.log("USO DEL TYPEOF:");
//Tipos de datos normales (string, number, boolean)
console.log("Nombre: " + typeof nombre);
console.log("Edad: " + typeof edad);
console.log("Profesion: " + typeof profesion);
console.log("Ubicacion: " + typeof ubicacion);
console.log("Hobby: " + typeof hobby);
console.log("MayorDeEdad: " + typeof mayorDeEdad);
//Saldrá OBJECT porque es un objeto no primitivo
console.log("Familiar 2: " + typeof familiar2);
console.log("Familiar 3: " + typeof familiar3);
console.log("Yo: " + typeof datosPersonales);
console.log("Family: " + typeof family);
/*ACTIVIDAD: IMPLEMENTANDO EL OPERADOR IN*/
console.log("USO DEL IN:");
if ("nombre" in datosPersonales) {
    console.log("La propiedad NOMBRE se encuentra en el objeto");
}
else {
    console.log("La propiedad NOMBRE NO se encuentra en el objeto");
}
if ("edad" in datosPersonales) {
    console.log("La propiedad EDAD se encuentra en el objeto");
}
else {
    console.log("La propiedad EDAD NO se encuentra en el objeto");
}
if ("profesion" in datosPersonales) {
    console.log("La propiedad PROFESION se encuentra en el objeto");
}
else {
    console.log("La propiedad PROFESION NO se encuentra en el objeto");
}
if ("ubicacion" in datosPersonales) {
    console.log("La propiedad UBICACIÓN se encuentra en el objeto");
}
else {
    console.log("La propiedad UBICACIÓN NO se encuentra en el objeto");
}
if ("hobby" in datosPersonales) {
    console.log("La propiedad HOBBY se encuentra en el objeto");
}
else {
    console.log("La propiedad HOBBY NO se encuentra en el objeto");
}
if ("mayorDeEdad" in datosPersonales) {
    console.log("La propiedad MAYOR DE EDAD se encuentra en el objeto");
}
else {
    console.log("La propiedad MAYOR DE EDAD NO se encuentra en el objeto");
}
if ("cumpleaños" in datosPersonales) {
    console.log("La propiedad CUMPLEAÑOS se encuentra en el objeto");
}
else {
    console.log("La propiedad CUMPLEAÑOS NO se encuentra en el objeto");
}
if ("signo" in datosPersonales) {
    console.log("La propiedad SIGNO se encuentra en el objeto");
}
else {
    console.log("La propiedad SIGNO NO se encuentra en el objeto");
}
/*ACTIVIDAD: IMPLEMENTANDO EL OPERADOR IS*/
function esString(valor) {
    return typeof valor === "string";
}
function esNumber(valor) {
    return typeof valor === "number";
}
function esBoolean(valor) {
    return typeof valor === "boolean";
}
function esObjeto(valor) {
    return typeof valor === "object";
}
function compruebaTipoValor(valor) {
    if (esString(valor)) {
        console.log("El valor es un STRING, prueba: ", valor);
    }
    else if (esNumber(valor)) {
        console.log("El valor es un NUMBER, verifique: ", valor);
    }
    else if (esBoolean(valor)) {
        console.log("El valor es BOOLEAN, mirelo: ", valor);
    }
    else if (esObjeto(valor)) {
        console.log("El valor es OBJECT, aprecie: ", valor);
    }
    else {
        console.log("El valor es desconocido");
    }
}
compruebaTipoValor(25);
compruebaTipoValor("Ruthlosa");
compruebaTipoValor(nombre);
compruebaTipoValor(profesion);
compruebaTipoValor(mayorDeEdad);
compruebaTipoValor(edad);
compruebaTipoValor(familiar2);
