function palindrome(cadena){
    const rebanado = cadena.split("");
    const invertido = rebanado.reverse();
    const unido = invertido.join("");
    if (unido == cadena){
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("hello"));
console.log(palindrome("hannah"));