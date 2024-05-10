//Actividad: Definiendo una planilla
const nombre = "Ruth";
const edad = 26;
const profesion = "Desempleada";
const ubicacion = "Lima";
const hobby = "Cantar";

console.log(`¡Hola, mi nombre es ${nombre}!, tengo ${edad} años y vivo en ${ubicacion}. Mi hobby es ${hobby} pero trabajo como ${profesion}`);


//Actividad: Implementando la asignación con AND lógico
let isOnline = false;
let entrada = prompt("¿El usuario está conectado?: SI/NO");
let respuesta = entrada ?? "No hay valor válido";

if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO"){
    if (respuesta.toUpperCase() == "SI" && isOnline === false){
        isOnline = true;
        console.log(isOnline);
        console.log("El usuario está conectado");
        console.log(`¡Hola, mi nombre es ${nombre}!, tengo ${edad} años y vivo en ${ubicacion}. Mi hobby es ${hobby} pero trabajo como ${profesion}`); 
    } else {
        console.log(isOnline);
        console.log("El usuario no está conectado");
    }
} else {
    console.log(`${respuesta}`);
}