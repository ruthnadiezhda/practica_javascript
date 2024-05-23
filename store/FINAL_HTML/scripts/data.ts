/*ACTIVIDAD: PRODUCTOS*/
export interface Product {
        id: string,
        title: string,        
        price: string,
        stock: number,
        image: string,
        images: string[],
        onsale: number,
        supplier: string,
        colors: string[],
        description: string,
};      
