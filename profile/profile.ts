/*ACTIVIDAD: DECLARANDO EL TIPO DE DATO DE LA VARIABLE*/
import {Persona} from "./data";

let nombre:string = "Ruth Araujo";
let edad:number = 26;
let profesion:string = "estudiante";
let ubicacion:string = "Lima";
let hobby:string = "pintar";
let mayorDeEdad:boolean = true;

let datosPersonales = {
    nombre,
    edad,
    profesion,
    ubicacion,
    hobby,
    mayorDeEdad
};

console.log(datosPersonales);

/*ACTIVIDAD: CREANDO UNA INTERFAZ*/
let familiar2:Persona = {
    nombre: "Stefhanie Jaramillo",
    edad: 23,
    profesion: "preventa y estudiante",
    ubicacion: "Lima",
    hobby: "bailar",
    mayorDeEdad: true,

};

let familiar3:Persona = {
    nombre: "Patricia Esparza",
    edad: 26,
    profesion: "ingeniera",
    ubicacion: "Lima",
    hobby: "cantar",
    mayorDeEdad: true,

};

let family = [datosPersonales, familiar2, familiar3];
console.log(family);