/*Creación de un producto 1*/
const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
};

producto1.id = "id123";
producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
console.log(producto1.nombre);


/*Creación de un producto 2*/
class Product {
    constructor(id, title, price, stock, images, onsale){
        this.id=id;
        this.title=title;
        this.price=Number(price);
        this.stock=Number(stock);
        this.images=[images];
        this.onsale=Boolean(onsale);
    }
}

const prod1 = new Product ();
const prod2 = new Product(1,"camara",5000);
const prod3 = new Product(2,"laptop",100000,5,"https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=800&hei=800&qlt=70",true)

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod2.title);
console.log(prod3.onsale);


/*Obtención y modificación de propiedades de una instancia*/
class Product2 {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id=id;
        this.title=title;
        this.price=Number(price);
        this.stock=Number(stock);
        this.images=[images];
        this.onsale=Boolean(onsale);
        this._supplier = supplier;
    }
    get supplier() {
        return this._supplier;
    }
    set supplier(newName) {
        this._supplier = newName;
    }
        
}

const Prod4 = new Product2(4, "PS5", 30000,3,[],true,"PlayStation");
console.log(Prod4);

Prod4.supplier="Hiraoka";
console.log(Prod4.supplier);


/*Venta de productos*/
class Product3 {
    constructor(id, title, price, stock, images, onsale){
        this.id=id;
        this.title=title;
        this.price=Number(price);
        this.stock=Number(stock);
        this.images=[images];
        this.onsale=Boolean(onsale);
    }
    sellUnits(units){
        this.stock=this.stock-units;
        if (this.stock>0){
            console.log(this.stock);
        }else{
            console.log("No hay suficientes unidades");
        }
    }
}

const Prod5 = new Product3(5,"SmartTV",50000,12,[],true);
console.log(Prod5);

Prod5.sellUnits(10);
Prod5.sellUnits(5);
