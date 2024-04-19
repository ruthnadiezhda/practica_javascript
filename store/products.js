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
    constructor(id, title, price, stock, images, onsale,colors,description){
        this.id=id;
        this.title=title;
        this.price=Number(price);
        this.stock=Number(stock);
        this.images=[images];
        this.onsale=Boolean(onsale);
        this.colors= colors;
        this.description=description;
    }
}

const prod1 = new Product ();
const prod2 = new Product(1,"camara",5000);
const prod3 = new Product(2,"laptop",100000,5,["https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=800&hei=800&qlt=70"],true)

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod2.title);
console.log(prod3.onsale);


/*Obtención y modificación de propiedades de una instancia*/
class Product2 {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id=id;
        this.title=title;
        this.price=Number(price);
        this.stock=Number(stock);
        this.images=[images];
        this.onsale=Boolean(onsale);
        this._supplier = supplier;
        this.colors= colors;
        this.description = description;
    }
    get supplier() {
        return this._supplier;
    }
    set supplier(newName) {
        this._supplier = newName;
    }
        
}

const Prod4 = new Product2(4, "PS5", 30000,3,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXL81Lo6imKe1uzZ2aL8oCWwh6rCqXE4eDt4sM9jXCpQ&s","https://promart.vteximg.com.br/arquivos/ids/6249273/image-113c8b5dca6e4384944450fb0dd040de.jpg?v=637952250634230000"],true,"PlayStation");
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

const Prod5 = new Product3(5,"SmartTV",50000,12,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFywsgKDj0DMlq5R2nSs6esr4Ba73ZbtodaaYJtBBVA&s","https://coolboxpe.vtexassets.com/arquivos/ids/196814/65PUD7406_1.jpg?v=637758704997930000","https://hiraoka.com.pe/media/wysiwyg/cat-tv-01.png"],true);
console.log(Prod5);

Prod5.sellUnits(10);
Prod5.sellUnits(5);


/*Listado de productos en tienda*/

const products = [prod1, prod2, prod3, Prod4,Prod5];
console.log(products);
console.log(products[1]);
console.log(products[products.length-1].title);


/*Ampliando la lista de productos*/

const prod6 = new Product2(6,"tijera",3,5,[],true,"Faber Castell","naranja","para zurdos");
const prod7 = new Product2(7,"cuaderno",10,20,[],true,"Minerva","amarillo","cuaderno cuadriculado");

products.unshift(prod6);
products.push(prod7);

console.log(products);
console.log(products[0]);
console.log(products[products.length-1]);



/*Eliminaxión de productos de una lista*/
products.shift();
console.log(products);
console.log(products[0]);

products.pop();
console.log(products);
console.log(products[products.length-1]);


/*Enriquecimiento de información de productos*/
console.log(products)
console.log(prod6);
console.log(prod7);