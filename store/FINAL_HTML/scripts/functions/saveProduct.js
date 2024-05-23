const query = location.search;
console.log(location);
const params = new URLSearchParams(query);
console.log(query);
const id = params.get('id');
console.log(id);
import { isUserOnline } from "./isUserOnline.js";

export function saveProduct() {
    const found = products.find((each) => each.id === id);
    console.log(found);
    const product = {
    id: id,
    title: found.title,
    price: found.price,
    image: found.images[0],
    color: document.querySelector("#color").value,
    quantity: document.querySelector("#quantity").value,
    description: found.description,
    };

    if (isUserOnline===false ){
      alert("Debe iniciar sesión para comprar");
    } else {
      let cartItems = localStorage.getItem("cart");
      if (!cartItems){
        localStorage.setItem("cart", JSON.stringify([product]));
        console.log(product);
      } else {
        cartItems = JSON.parse(cartItems);
        if (!Array.isArray(cartItems)){
          cartItems = [cartItems];
        }
        cartItems.push(product);
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
      alert("Se agregó producto al carrito");
    }
}
window.saveProduct = saveProduct;