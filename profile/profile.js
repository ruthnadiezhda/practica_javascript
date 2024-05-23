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
console.log(datosPersonales);ts
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
var family = [datosPersonales, familiar2, familiar3];
console.log(family);
