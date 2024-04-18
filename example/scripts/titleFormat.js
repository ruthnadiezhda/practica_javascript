function titleFormat(cadena){
    
    const primeraletra = cadena.charAt(0);
    console.log(primeraletra);
    const mayuscula = primeraletra.toUpperCase();
    console.log(mayuscula);

    const restotitulo = cadena.slice(1,cadena.length);
    console.log(restotitulo);
    const minuscula = restotitulo.toLowerCase();
    console.log(minuscula);

    const mensaje = mayuscula+minuscula;
    console.log(mensaje);
    return mensaje.length;
}

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));