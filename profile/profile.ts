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

console.log( datosPersonales);

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

//let family = [datosPersonales, familiar2, familiar3];
let family: Array<Persona> = [datosPersonales, familiar2, familiar3];
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
if ("nombre" in datosPersonales){
    console.log("La propiedad NOMBRE se encuentra en el objeto");
}else{
    console.log("La propiedad NOMBRE NO se encuentra en el objeto");
}
if ("edad" in datosPersonales){
    console.log("La propiedad EDAD se encuentra en el objeto");
}else{
    console.log("La propiedad EDAD NO se encuentra en el objeto");
}
if ("profesion" in datosPersonales){
    console.log("La propiedad PROFESION se encuentra en el objeto");
}else{
    console.log("La propiedad PROFESION NO se encuentra en el objeto");
}
if ("ubicacion" in datosPersonales){
    console.log("La propiedad UBICACIÓN se encuentra en el objeto");
}else{
    console.log("La propiedad UBICACIÓN NO se encuentra en el objeto");
}
if ("hobby" in datosPersonales){
    console.log("La propiedad HOBBY se encuentra en el objeto");
}else{
    console.log("La propiedad HOBBY NO se encuentra en el objeto");
}
if ("mayorDeEdad" in datosPersonales){
    console.log("La propiedad MAYOR DE EDAD se encuentra en el objeto");
}else{
    console.log("La propiedad MAYOR DE EDAD NO se encuentra en el objeto");
}
if ("cumpleaños" in datosPersonales){
    console.log("La propiedad CUMPLEAÑOS se encuentra en el objeto");
}else{
    console.log("La propiedad CUMPLEAÑOS NO se encuentra en el objeto");
}
if ("signo" in datosPersonales){
    console.log("La propiedad SIGNO se encuentra en el objeto");
}else{
    console.log("La propiedad SIGNO NO se encuentra en el objeto");
}



/*ACTIVIDAD: IMPLEMENTANDO EL OPERADOR IS*/
console.log("USO DEL IS:");
function esString(valor:any): valor is string{
    return typeof valor === "string";
}
function esNumber(valor:any): valor is number{
    return typeof valor === "number";
}
function esBoolean(valor:any): valor is boolean{
    return typeof valor === "boolean";
}
function esObjeto(valor:any): valor is object{
    return typeof valor === "object";
}

function compruebaTipoValor(valor:any){
    if(esString(valor)){
        console.log("El valor es un STRING, prueba: ", valor);
    } else if (esNumber(valor)){
        console.log("El valor es un NUMBER, verifique: ",valor)
    } else if (esBoolean(valor)){
        console.log("El valor es BOOLEAN, mirelo: ", valor);
    } else if (esObjeto(valor)){
        console.log("El valor es OBJECT, aprecie: ", valor);
    } else {
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



/*ACTIVIDAD: IMPLEMENTANDO EL USO DE GENERICS I*/
//Array de personas
let personas: Array<Persona> = [datosPersonales, familiar2, familiar3];
console.log(personas);
//Array de nombres
let nombres:string[] = ["Ruth","Heberth","Gilmer","Kennedy","Lucero","Percy"];
//Función obtener primer elemento del array
function obtenerPrimerElemento<T>(array: T[]){
    return array[0];
}
//Obtener primeros elementos
const primeraPersona = obtenerPrimerElemento(personas);
const primerNombre = obtenerPrimerElemento(nombres);
console.log("Primer elemento de personas: " + primeraPersona);
console.log("Primer elemento de nombres: "+ primerNombre);



/*ACTIVIDAD: IMPLEMENTANDO EL USO DE GENERICS II*/
//Clase generica Portfolio que almacene elementos de cualquier tipo
//y tenga métodos para operar numeros y cadenas de texto
class Portfolio<T>{
    private items: T[] = [];

    //Metodo para agregar un elemento al portfolio void
    add(item: T): void{
        this.items.push(item);
    }

    //Metodo para obtner el primer elemento del portfolio
    getFirst():T{
        return this.items[0];
    }

    //Metodo para sumar elementos numericos
    suma():number {
    return (this.items as number[]).reduce((acc,item)=> acc+item,0);
    }

    //Metodo concatenar cadenas de texto
    concatenar():string{
        return (this.items as string[]).join('');
    }

    //Metodo para obtener copia de elementos
    getItems(): T[]{
        return [...this.items];
    }
}

const portfolioNumerico = new Portfolio<number>(); 
portfolioNumerico.add(10); 
portfolioNumerico.add(20); 
portfolioNumerico.add(30); 
portfolioNumerico.add(40); 
portfolioNumerico.add(50); 

console.log("PORTAFOLIO NUMERICO:")
console.log(portfolioNumerico.getItems());
console.log(portfolioNumerico.getFirst()); 
console.log(portfolioNumerico.suma());   


console.log("PORTAFOLIO TEXTUAL:")
const portfolioTextual = new Portfolio<string>();
portfolioTextual.add("Hola");
portfolioTextual.add(" ");
portfolioTextual.add("_");
portfolioTextual.add("Mundo"); 

// console.log(portfolioNumerico.items);
console.log(portfolioTextual.getItems());
console.log(portfolioTextual.getFirst());     
console.log(portfolioTextual.concatenar()); 