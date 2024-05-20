let cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

/*Renderizar el total a pagar*/
export function printTotal(){
    //Variable que almacenará el precio total
    let totalPrice = 0;

    if (cartproducts !== null){
        //Iterar sobre productos del carrito
        cartproducts.forEach(product =>{
            totalPrice = totalPrice + (product.price*product.quantity);
        });
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

window.printTotal = printTotal;