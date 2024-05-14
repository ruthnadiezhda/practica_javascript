/*CACULO DEL PERIMETRO Y ÁREA DE FIGURAS GEOMÉTRICAS*/
//Tres objetos que son rectangulos
const rectangulo1= {
    ancho:2,
    altura:4
}
const rectangulo2= {
    ancho:5,
    altura:6
}
const rectangulo3= {
    ancho:8,
    altura:3
}

//Funciones perimetro y area
/*
function calcularPerimetro(ancho,altura){
    let perimetro = 2*(ancho+altura);
    return perimetro;
}
function calcularArea(ancho,altura){
    let area = ancho*altura;
    return area;
}
*/
//Imprimir resultados
/*
function mostrarDatosRectangulo(){
    //Traemos los rectangulos a la función
    const rectangulos = [rectangulo1,rectangulo2,rectangulo3];
    console.log(rectangulos);
    //Localizamos el elemento tabla en el html
    const tabla = document.getElementById("tabla");
    //Cantidad de elementos a agregar a la tabla
    const numero = rectangulos.length;
    //Iteración para agregar elementos al html
    for (i=0;i<numero;i++){
        //Crear filas
        const fila = document.createElement("tr");
        //Poner el html en cada fila nueva
        fila.innerHTML= `
            <td>Rectangulo ${i+1}</td>
            <td>${rectangulos[i].ancho}</td>
            <td>${rectangulos[i].altura}</td>
            <td>${calcularPerimetro(rectangulos[i].ancho, rectangulos[i].altura)}</td>
            <td>${calcularArea(rectangulos[i].ancho,rectangulos[i].altura)}</td>
        `;
        //Agregar a la tabla
        tabla.appendChild(fila);
    }

}
*/
//Llamada a la función al cargar la pagina 
/*
document.addEventListener("DOMContentLoaded",mostrarDatosRectangulo);
+/



/*MODULARIZACIÓN DE FUNCIONES*/
//Importar modulos de las funciones con declaración import
import {calcularPerimetro} from "./perimeter.js";
import {calcularArea} from "./area.js";
//Imprimir resultados con funciones importadas
/*
function mostrarDatosRectangulo(){
    //Traemos los rectangulos a la función
    const rectangulos = [rectangulo1,rectangulo2,rectangulo3];
    console.log(rectangulos);
    //Localizamos el elemento tabla en el html
    const tabla = document.getElementById("tabla");
    //Cantidad de elementos a agregar a la tabla
    const numero = rectangulos.length;
    //Iteración para agregar elementos al html
    for (let i=0;i<numero;i++){
        //Crear filas
        const fila = document.createElement("tr");
        //Poner el html en cada fila nueva
        fila.innerHTML= `
            <td>Rectangulo ${i+1}</td>
            <td>${rectangulos[i].ancho}</td>
            <td>${rectangulos[i].altura}</td>
            <td>${calcularPerimetro(rectangulos[i].ancho, rectangulos[i].altura)}</td>
            <td>${calcularArea(rectangulos[i].ancho,rectangulos[i].altura)}</td>
        `;
        //Agregar a la tabla
        tabla.appendChild(fila);
    }
}
//Llamada a la función para cargar pagina
document.addEventListener("DOMContentLoaded",mostrarDatosRectangulo);
*/



/*MODULARIZACIÓN DE LOS DATOS*/
//Importación de array de rectangulos
import { rectangulosArray } from "./rectangleData.js";
//
function mostrarDatosRectangulos(){
    //Localizamos el elemento tabla en el html
    const tabla = document.getElementById("tabla");
    //Poner el html en cada fila nueva usando modulación
    rectangulosArray.forEach((rect,index)=>{
    //Crear filas
    const fila = document.createElement("tr");
    fila.innerHTML= `
        <td>Rectangulo ${index+1}</td>
        <td>${rect.ancho}</td>
        <td>${rect.altura}</td>
        <td>${calcularPerimetro(rect.ancho, rect.altura)}</td>
        <td>${calcularArea(rect.ancho,rect.altura)}</td>
    `;
    //Agregar a la tabla
    tabla.appendChild(fila);
    });
}
//Llamada a la función para cargar pagina
document.addEventListener("DOMContentLoaded",mostrarDatosRectangulos);