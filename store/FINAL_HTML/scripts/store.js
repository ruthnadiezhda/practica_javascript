/**let instanceStore = null;

class Store {
    constructor (){
        if (! instanceStore){
            instanceStore = this;
        }
        this.store=[];

        return instanceStore;
    }

    addProduct(product){
        this.store.push(product);
    }

    deleteProductById(id){
        this.store = this.store.filter(product => product.id !== id)
    }
    
}

export const initialStore = new Store();
*/