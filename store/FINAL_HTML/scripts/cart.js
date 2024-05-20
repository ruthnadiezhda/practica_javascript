let cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

/*Renderizar dinámicamente los productos del carrito*/

//Definir función printCard
function printCart(){
    const container = document.querySelector(".container");

    //Limpiar el contenedor
    container.innerHTML = "";

    if (cartproducts === null || cartproducts.length ===0){
        //Si está producto, crea un article y en él señala que no hay productos en el carrito
        container.innerHTML = ` 
        <article class="card-products" id="card-products">
            <div class="title-product">No hay productos en el carrito</div>
        </article>
        `;
    } else {
        //Si hay productos en el carrito

        cartproducts.forEach(product => {
            //Crear un article que contengan la información del producto
            const productArticle = document.createElement("article");
            //Agregar la clase al product al article
            productArticle.classList.add("product-cart");
            //Agregar el contenido html al article 
            productArticle.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.title}"/>
            
            <div class="product-details">
                <div class="product-title">${product.title}</div>
                <div class="product-color">- ${product.color}</div>
                <div class="product-description">${product.description}</div>
            <!-- Mostrar la cantidad a comprar -->
                <input class="product-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)">
            </div>

            <div class="product-price">
            P.U. $ ${product.price}.00 <br>
            --------------- <br>
            Subtotal $ ${product.price * product.quantity}.00
            </div>
            `;
        
        //Agregar el article al contenedor
        container.appendChild(productArticle);
        })
    }
}
//import { printCart } from "./functions/printCart.js";
//import { changeQuantity } from "./functions/changeQuantity.js";

/*Renderizar el total a pagar*/
function printTotal(){
    //Variable que almacenará el precio total
    let totalPrice = 0;

    if (cartproducts !== null){
        //Iterar sobre productos del carrito
        /*
        cartproducts.forEach(product =>{
            totalPrice = totalPrice + (product.price*product.quantity);
        });
        */
       //Metodo reduce para calcular el total a pagar de los productos agregados al carrito
       totalPrice = cartproducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    }

    //Traer el selector del contenedor del total
    const totalContainer = document.querySelector("#total");
    //Limpiar el contenedor
    totalContainer.innerHTML = "";
    //Agregar el html
    totalContainer.innerHTML = `
        <h1 class="cart-title">Resumen del pedido</h1>
        <p class="cart-total">Total USD $${(totalPrice !== null || totalPrice !=0) ? totalPrice : 0 }</p>
        <p class="cart-tax">Incluye impuesto PAIS y percepción AFIP</p>
        <button class="cart-btn" id="buy" type="button">COMPRAR</button>
    `;
    //Traer el selector del contenedor de comprar
    const buySelector = document.getElementById("buy");

    buySelector.addEventListener("click",()=>{
        //Borrar los productos del carrito
        localStorage.removeItem('cart');
        //Redirigir a la pagina de inicio
        window.location.href = "./index.html";
    });
}
//import { printTotal } from "./functions/printTotal.js";

/*Evento changeQuantity(event) para cambiar la cantidad de productos en el carrito*/
//Definir función changeQuantity
function changeQuantity(event){
    //Traer el ID del producto
    const id=event.target.id.split("_");
    //Traer el valor de la cantidad
    const quantity = event.target.value;
    //Iterar sobre los productos del carrito
    cartproducts.forEach(product => {
        //Verificar si el id del producto es igual al id del producto seleccionado
        if (product.id == id[0] && product.color == id[1]){
            //Cambiar la cantidad del producto
            product.quantity = quantity;
        }
    });
    //Guardar el carrito en el localStorage
    localStorage.setItem('cart', JSON.stringify(cartproducts));
    printCart();
    printTotal();
}

//import {changeQuantity} from "./functions/changeQuantity.js";

printCart();
printTotal();

/*
MIS INTENTOS PENOSOS :,V
function createCart(cartproducts) {
    return `
        <div class="product-info">
            <img class="product-img" src="${cartproducts.image}" alt="${cartproducts.title}"/>
            <span class="product-title">${cartproducts.title}</span>
            <span class="product-color">${cartproducts.color}</span>
            <span class="product-color">${cartproducts.description}</span>
            <div class="product-price-block">
                <span class="price">S/ ${cartproducts.price}</span>
            </div>
        </div>
    `;
}
console.log(createCart(cartproducts));

function printCards(arrayOfProducts, idSelector) {     
    let productsTemplate = "";     
    for (const element of arrayOfProducts) {         
        productsTemplate = productsTemplate + createCart(element)}     
        const productsSelector = document.getElementById(idSelector);  
        productsSelector.innerHTML = productsTemplate;
} 

printCards(cartproducts,"card-products")


function createCartCard(product) {
    return `
    
    <input type="number" name="quantity" min="1" id="${product.id}" onchange="changeQuantity(event)">
    
    `;
}
*/
    