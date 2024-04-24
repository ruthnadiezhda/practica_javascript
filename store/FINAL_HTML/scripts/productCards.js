const productsSelector = document.getElementById("products");
const inputSearch = document.getElementById("search");

function createCard(product) { return `
    <article class="product-card">
        <a class="product-link" href="details.html">
            <img class="product-img" src="${product.images}" alt="Macbook Pro" />
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="price">S/${product.price}</span>
                    <span class="discount">${product.onsale}% Off</span>
                </div>
                <div class="product-tax-policy">${product.colors}</div>
            </div>
        </a>
    </article>
    `;
}

function printCards(products, idSelector){
    let productsTemplate = "";
    for (let product of products) {
        productsTemplate += createCard(product);
    }

    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(products,"products");
