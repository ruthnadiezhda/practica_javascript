class Product {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id=id;
        this.title=title;
        this.price=Number(price);
        this.stock=Number(stock);
        this.images=images;
        this.onsale=onsale;
        this.supplier = supplier;
        this.colors= colors;
        this.description = description;
    }      
}

const prod1 = new Product(1,'Macbook 15', 500, 2, './assets/mock1.jpg', 5, "Apple", 'Space Gray', 'Incluye impuestos');
const prod2 = new Product(2,'Laptop HP 8', 500, 3, './assets/mock1.jpg', 10, "Apple", 'Space Gray', 'Incluye impuestos');
const prod3 = new Product(3,'Tablet 4', 500, 5, './assets/mock1.jpg', 20, "Apple", 'Space Gray', 'Incluye impuestos');
const prod4 = new Product(4,'GoPro 4', 500, 1, './assets/mock1.jpg', 5, "Apple", 'Space Gray', 'Incluye impuestos');
const prod5 = new Product(5,'Televisor Samsung 6', 500, 9, './assets/mock1.jpg', 50, "Apple", 'Space Gray', 'Incluye impuestos');
const prod6 = new Product(6,'Camara 1', 500, 3, './assets/mock1.jpg', 99, "Apple", 'Space Gray', 'Incluye impuestos');

const products = [prod1, prod2, prod3, prod4,prod5,prod6];
console.log(products);