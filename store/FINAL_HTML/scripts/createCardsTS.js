"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prod1 = { id: "aaa", title: 'Macbook 15', price: "500", stock: 2, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg', './assets/mock2.jpg'], onsale: 5, supplier: "Apple", colors: ['Space Gray', 'Baby pink'], description: 'Incluye impuestos' };
var prod2 = { id: "bbb", title: 'Laptop HP 8', price: "200", stock: 3, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg', './assets/mock2.jpg'], onsale: 10, supplier: "HP", colors: ['Space Gray', 'Rock pink'], description: 'Incluye impuestos' };
var prod3 = { id: "ccc", title: 'Ipad 4', price: "10000", stock: 5, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg', './assets/mock2.jpg'], onsale: 20, supplier: "Apple", colors: ['Space Gray', 'Orange'], description: 'Incluye impuestos' };
var prod4 = { id: "ddd", title: 'GoPro 4', price: "800000", stock: 1, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg', './assets/mock2.jpg'], onsale: 5, supplier: "GoPro", colors: ['Space Gray', 'Pure black'], description: 'Incluye impuestos' };
var prod5 = { id: "eee", title: 'Televisor Samsung 6', price: "20000", stock: 9, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg', './assets/mock2.jpg'], onsale: 50, supplier: "Samsung", colors: ['Green landscape', 'Baby pink'], description: 'Incluye impuestos' };
var prod6 = { id: "fff", title: 'Camara 1', price: "100", stock: 3, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg', './assets/mock2.jpg'], onsale: 99, supplier: "Samsung", colors: ['Space Gray', 'Ocean blue'], description: 'Incluye impuestos' };
var productList = [prod1, prod2, prod3, prod4, prod5, prod6];
function createCard(product) {
    console.log('-----------------------------------------');
    console.log("ID: ".concat(product.id));
    console.log("Title: ".concat(product.title));
    console.log("Price: S/".concat(product.price));
    console.log("Stock: ".concat(product.stock));
    console.log("Image: ".concat(product.image));
    console.log("Images: ".concat(product.images.join(', ')));
    console.log("On Sale: ".concat(product.onsale, "% Off"));
    console.log("Supplier: ".concat(product.supplier));
    console.log("Colors: ".concat(product.colors.join(', ')));
    console.log("Description: ".concat(product.description));
    console.log('-----------------------------------------');
}
productList.forEach(function (product) {
    createCard(product);
});
