let cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

for (i=0;i<localStorage.length;i++) {
    console.log(cartproducts[i].title)
}

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
    