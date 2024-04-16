/*Actividad: Sumando números*/

const num1 = Number(prompt("Escribe el primer numero a sumar: "));

const num2 = Number(prompt("Escribe el segundo numero a sumar: "));

const suma = num1 + num2;

const mensajeSuma= "El resultado de la suma es " + suma;

console.log(typeof(suma));
console.log(suma);
console.log(typeof(mensajeSuma));
console.log(mensajeSuma);
alert(mensajeSuma);

/*Realizando operaciones*/

const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

const mensajeFinal = "El promedio es " + promedio + "," + " el triple es " + triple + " y el resultado menos diez es " + resultadoMenosDiez;

console.log(mensajeFinal);
alert(mensajeFinal);



/*Actividad: sumando varios números*/

const cantidad = Number(prompt("¿Cuántos números desea sumar?"));
let sumatoria = 0;

for (let index=1; index<= cantidad; index++){
    const numeroAsumar = Number(prompt("Ingrese un número a sumar: "));
    sumatoria = sumatoria + numeroAsumar;
}

console.log("La sumatoria es: "+ sumatoria);
alert("La sumatoria es: " + sumatoria);