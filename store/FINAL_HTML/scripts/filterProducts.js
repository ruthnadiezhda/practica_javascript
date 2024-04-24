/*Asignar evento de teclado en línea
let filterProducts = [];

function captureText(event){
    console.log("capturado :D");
    console.log(event);
    console.log(event.srcElement);
    console.log(event.srcElement.placeholder);
    console.log(event.key);

    let valorCapturado = event.srcElement.value;
    filterProducts = products.filter(product =>{
        let resultado = product.title.includes(valorCapturado);
        console.log(resultado);
        return resultado;
    });
    console.log("Filtrados: ");
    console.log(filterProducts);

    if (filterProducts.length == 0){
        printCards(products, "products");
        } else {
        printCards(filterProducts, "products");
        }
}

Asignación de evento de teclado con event listener
const searchSelector = document.getElementById("search");
searchSelector.addEventListener("keyup", captureText);

Investigación del evento de teclado
searchSelector.addEventListener("keyup", event=>captureText(event));
*/


/*Filtrar productos*/
let filteredProducts = [];


function captureText(event){
// console.log(event);
// console.log(event.srcElement);
// console.log(event.srcElement.placeholder);
console.log(event.srcElement.value);

// console.log(event.key);

let valorCapturado = event.srcElement.value.toLowerCase();

filteredProducts = products.filter( product => {
let resultado = product.title.toLowerCase().includes(valorCapturado);
console.log(resultado);
return resultado;
}
);

console.log("Filtered:");
console.log(filteredProducts);

if (filteredProducts.length == 0){
printCards(products, "products");
}else{
printCards(filteredProducts, "products");
}

}

const searchSelector = document.getElementById("search");

searchSelector.addEventListener("keyup", event => captureText (event));