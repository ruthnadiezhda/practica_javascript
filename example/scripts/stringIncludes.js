function stringIncludes(cadena1, cadena2){
    if (cadena2.includes(cadena1)){
        return true;
    }else{
        return false;
    }
}

console.log(stringIncludes("he","Hello"));
console.log(stringIncludes("he","hello world"));