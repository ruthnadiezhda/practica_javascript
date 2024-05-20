const query = location.search;
console.log(location);
const params = new URLSearchParams(query);
console.log(query);
const id = params.get('id');
console.log(id);

export function changeSubtotal(event){
    const product = products.find((each)=> each.id == id);
    console.log(event.target);
    const selectedValue = parseInt(event.target.value);
    const priceSelector = document.querySelector(".checkout-total-price");
    const total= parseInt(product.price)*selectedValue;
    priceSelector.innerHTML = ("$" + total.toString());
}

window.changeSubtotal = changeSubtotal;