/*Evento changeQuantity(event) para cambiar la cantidad de productos en el carrito*/
import {printCart} from "./printCart.js";
import {printTotal} from "./printTotal.js";

let cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

//Definir función changeQuantity
export function changeQuantity(event){
    //Traer el ID del producto
    const id=event.target.id.split("_");
    //Traer el valor de la cantidad
    const quantity = event.target.value;
    //Iterar sobre los productos del carrito
    console.log(cartproducts);
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
window.changeQuantity = changeQuantity;