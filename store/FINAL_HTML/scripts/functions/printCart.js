let cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

//Definir función printCard
export function printCart(){
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

import { changeQuantity } from "./changeQuantity.js";
window.printCart = printCart;
