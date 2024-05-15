/*IMPLEMENTACIÓN DE UNA DIVISIÓN*/
//Solicitar dos numeros
function solicitarNumeros(){
    const num1 = prompt("Escriba el dividendo: ");
    const num2 = prompt("Escriba el divisor: ");
    dividirNumeros(num1,num2,manejarAlert);
}


//Función dividir
function dividirNumeros(num1,num2,callback){
//Si no son parametros numericos, mostrar alerta de error
    if (isNaN(num1) || isNaN(num2)){
        callback("Los valores no son numéricos");
        return;
    }
    num1=parseFloat(num1);
    num2=parseFloat(num2);

//Si el segundo numero es 0, mostrar mensaje de error
    if (num2===0){
        callback("No se puede dividir entre 0");
        return;
    }

//División
    const dividir = num1/num2;
    callback("El resultado de la división es: "+ dividir);
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = `El resultado de la división es ${dividir}`;
}

//Función callback para manejar errores
function manejarAlert(mensaje){
    alert(mensaje);
}

//Iniciar la solicitud de numeros al cargar la pagina
document.addEventListener("DOMContentLoaded",solicitarNumeros);