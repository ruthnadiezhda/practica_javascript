class Product {
    constructor(id, title, price, stock, image,images, onsale, supplier, colors, description) {
        this.id=id;
        this.title=title;
        this.price=price;
        this.stock=Number(stock);
        this.image=image;
        this.images=images;
        this.onsale=onsale;
        this.supplier = supplier;
        this.colors= colors;
        this.description = description;
    }      
}

const prod1 = new Product("aaa",'Macbook 15', "500", 2,"./assets/mock1.jpg", ['./assets/mock1.jpg','./assets/mock2.jpg'], 5, "Apple", ['Space Gray','Baby pink'], 'Incluye impuestos');
const prod2 = new Product("bbb",'Laptop HP 8', "200", 3,"./assets/mock1.jpg", ['./assets/mock1.jpg','./assets/mock2.jpg'], 10, "Apple", ['Space Gray','Rock pink'], 'Incluye impuestos');
const prod3 = new Product("ccc",'Tablet 4', "10000", 5,"./assets/mock1.jpg", ['./assets/mock1.jpg','./assets/mock2.jpg'], 20, "Apple", ['Space Gray','Orange'], 'Incluye impuestos');
const prod4 = new Product("ddd",'GoPro 4', "800000", 1,"./assets/mock1.jpg", ['./assets/mock1.jpg','./assets/mock2.jpg'], 5, "Apple", ['Space Gray','Pure black'], 'Incluye impuestos');
const prod5 = new Product("eee",'Televisor Samsung 6', "20000", 9,"./assets/mock1.jpg",['./assets/mock1.jpg','./assets/mock2.jpg'], 50, "Apple", ['Green landscape','Baby pink'], 'Incluye impuestos');
const prod6 = new Product("fff",'Camara 1', "100", 3, "./assets/mock1.jpg",['./assets/mock1.jpg','./assets/mock2.jpg'], 99, "Apple", ['Space Gray','Ocean blue'], 'Incluye impuestos');

const products = [prod1, prod2, prod3, prod4,prod5,prod6];
console.log(products);