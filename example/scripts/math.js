function Palindrome (opcion){
    if (opcion==1){
        const numero =Number(prompt("¿Cual es el numero que desea operar?: "));
        console.log(Math.abs(numero));
    } else if (opcion ==2){
        const numero =Number(prompt("¿Cual es el numero que desea operar?: "));
        console.log(Math.ceil(numero));
    } else if (opcion==3){
        const numero =Number(prompt("¿Cual es el numero que desea operar?: "));
        console.log(Math.floor(numero));
    }else if (opcion ==4){
        const numero =Number(prompt("¿Cual es el numero que desea operar?: "));
        console.log(Math.round(numero));
    }else if (opcion==5){
        const numeros = [];
        const cantidad = Number(prompt("¿Cuantos elementos tiene el array?: "));
        for (let index=0; index <= (cantidad-1); index++) {
            const a = Number(prompt("Escriba numero que desea agregar: "));
            numeros.push(a);
            console.log(numeros[index]);
        };
        console.log(Math.max(numeros));
    }else if (opcion==6){
        const numeros = [];
        const cantidad = Number(prompt("¿Cuantos elementos tiene el array?: "));
        for (let index=0; index <= (cantidad-1); index++) {
            const a = Number(prompt("Escriba numero que desea agregar: "));
            numeros.push(a);
            console.log(numeros[index]);
        };
        console.log(Math.min(numeros));
    }else if(opcion==7){
        console.log(Math.random());
    }else{
        console.log("Opción no valida")
    }
}

const opcion = Number(prompt("Escoga la opción que quiere realizar: 1 valor absoluto, 2 redondear superior, 3 redondear inferior, 4 redondear, 5 ordenar mayor a menor, 6 ordenar menor a mayor, 7 aleatorio entre 0-1"));
Palindrome(opcion);



/*Calculator en grupo*/
class Calculator {
    add(a, b) {
    return a + b;
    }
    
    subtract(a, b) {
    return a - b;
    }
    
    multiply(a, b) {
    return a * b;
    }
    
    divide(a, b) {
    if (b === 0) {
    return 'Error: No se puede dividir por cero';
    }
    return a / b;
    }
    
    squareRoot(a) {
    return Math.sqrt(a);
    }
    
    cubeRoot(a) {
    return Math.cbrt(a);
    }
    
    power(a, b) {
    return Math.pow(a, b);
    }
    }
    
    /*Start calculator en grupo*/
    
    function startCalculator() {
    const calculator = new Calculator();
    const operation = prompt('Elige la operación: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia)').toLowerCase();
    
    if (operation === 'sumar') {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));
    const result = calculator.add(num1, num2);
    alert(`El resultado es: ${result}`);
    } else if (operation === 'restar') {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));
    const result = calculator.subtract(num1, num2);
    alert(`El resultado es: ${result}`);
    } else if (operation === 'multiplicar') {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));
    const result = calculator.multiply(num1, num2);
    alert(`El resultado es: ${result}`);
    } else if (operation === 'dividir') {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));
    const result = calculator.divide(num1, num2);
    alert(`El resultado es: ${result}`);
    } else if (operation === 'raiz cuadrada') {
    const num = parseFloat(prompt('Ingresa el número:'));
    const result = calculator.squareRoot(num);
    alert(`La raíz cuadrada es: ${result}`);
    } else if (operation === 'raiz cubica') {
    const num = parseFloat(prompt('Ingresa el número:'));
    const result = calculator.cubeRoot(num);
    alert(`La raíz cúbica es: ${result}`);
    } else if (operation === 'potencia') {
    const base = parseFloat(prompt('Ingresa la base:'));
    const exponent = parseFloat(prompt('Ingresa el exponente:'));
    const result = calculator.power(base, exponent);
    alert(`El resultado de la potencia es: ${result}`);
    } else {
    alert('Operación inválida. Por favor, elige una operación válida.');
    }
    }
    
    const continua ='';
    
    do{
    
    startCalculator();
    
    continua = prompt('Desea realizar una operación?');
    
    } while(continua === "SI");
    
    // startCalculator();