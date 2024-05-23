/*ACTIVIDAD: PRODUCTOS*/
import { Product } from "./data";

export const productList: Product[] = [
    {id:"aaa", title: 'Macbook 15', price: "500", stock: 2, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg','./assets/mock2.jpg'], onsale: 5, supplier: "Apple", colors: ['Space Gray','Baby pink'], description: 'Incluye impuestos'},
    {id: "bbb", title: 'Laptop HP 8', price: "200", stock: 3, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg','./assets/mock2.jpg'], onsale: 10, supplier: "HP", colors: ['Space Gray','Rock pink'], description: 'Incluye impuestos'},
    {id: "ccc", title: 'Ipad 4', price: "10000", stock: 5, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg','./assets/mock2.jpg'], onsale: 20, supplier: "Apple", colors: ['Space Gray','Orange'], description: 'Incluye impuestos'},
    {id: "ddd", title: 'GoPro 4', price: "800000", stock: 1, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg','./assets/mock2.jpg'], onsale: 5, supplier: "GoPro", colors: ['Space Gray','Pure black'], description: 'Incluye impuestos'},
    {id: "eee", title: 'Televisor Samsung 6', price: "20000", stock: 9, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg','./assets/mock2.jpg'], onsale: 50, supplier: "Samsung", colors: ['Green landscape','Baby pink'], description: 'Incluye impuestos'},
    {id: "fff", title: 'Camara 1', price: "100", stock: 3, image: "./assets/mock1.jpg", images: ['./assets/mock1.jpg','./assets/mock2.jpg'], onsale: 99, supplier: "Samsung", colors: ['Space Gray','Ocean blue'], description: 'Incluye impuestos'}
];