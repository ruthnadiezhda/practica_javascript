/*Conteo de caracteres*/
function lengthOf(cadena){
    const longitud = cadena.length;
    if (longitud>0){
        return longitud;
    } else {
        console.log("Invalid input");
    }
    
}

console.log(lengthOf("Hello"));
console.log(lengthOf(""));
console.log(lengthOf("Hola"));
console.log(lengthOf("Arcoiris"));
console.log(lengthOf(26));

