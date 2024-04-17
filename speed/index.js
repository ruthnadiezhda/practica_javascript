/*Función de cálculo de velocidad*/
function calcularVelocidad(){
    const distancia = 10;
    const tiempo = 2;
    const velocidad = distancia/tiempo;
    console.log("La velocidad del móvil es "+ velocidad);
}

calcularVelocidad();
calcularVelocidad();
calcularVelocidad();


/*Función de velocidad dinámica*/
function calcularVelocidadDinamica(dist,temp){
    const v = dist/temp;
    console.log("La velocidad del movil es "+ v)
}

calcularVelocidadDinamica(10,2);
calcularVelocidadDinamica(100,2);
calcularVelocidadDinamica(75,3);


/*Retorno de velocidad*/
const calcularVelocidadRetorno = (distancias, tiempos) =>{
    const vel = distancias/tiempos;
    console.log("La velocidad del móvil es " + vel);
    return vel
}

const velocidad1= calcularVelocidadRetorno(10,2);
console.log("La velocidad 1 es "+ velocidad1);
const velocidad2= calcularVelocidadRetorno(100,2);
console.log("La velocidad 2 es "+ velocidad2);
const velocidad3= calcularVelocidadRetorno(75,3);
console.log("La velocidad 3 es "+ velocidad3);